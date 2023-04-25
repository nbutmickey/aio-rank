import path from 'path';
import fastifyFactory, {FastifyRequest, FastifyReply} from 'fastify';
import FastifyNextJS from '@fastify/nextjs';
import FastifyStatic from '@fastify/static';
import createLogger from './utils/logger';

const port = parseInt(process.env.MAIN_PORT as string, 10) || 8000;
const dev = process.env.NODE_ENV !== 'production';

const start = async () => {
    try {
        const logger = createLogger({name: 'aio'});

        const fastify = fastifyFactory({
            disableRequestLogging: true,
            pluginTimeout: dev ? 120_000 : undefined,
        });

        fastify.register(FastifyStatic, {
            root: path.join(__dirname, '../public/icons'),
            prefix: '/icons',
        });

        fastify.register(FastifyNextJS, {dev}).after(() => {
            fastify.next('/wise/*');
            fastify.next('/pc/*');
            fastify.get('/aio', async (req: FastifyRequest, reply: FastifyReply) => {
                reply.send('ok');
            });
        });

        fastify.addHook('onRequest', (req, reply, done) => {
            logger?.trace({
                type: 'request',
                method: req?.method,
                url: req?.url,
            });
            done();
        });

        fastify.addHook('onResponse', (req, reply, done) => {
            logger?.trace({
                type: 'response',
                method: req?.method,
                url: req?.url,
            });
            done();
        });

        fastify.setErrorHandler((error, request, reply) => {
            if (error instanceof fastifyFactory.errorCodes.FST_ERR_BAD_STATUS_CODE) {
                reply.status(500).send(error);
            } else {
                reply.status(500).send({
                    status: 500,
                    data: 'render server error!',
                });
                logger?.error(error);
            }
        });

        await fastify.listen({port, host: '0.0.0.0'});
        const info = `server start at port: ${port}`;
        logger?.info(info);
        console.info(info);
    } catch (error) {
        process.exit(0);
    }
};
start();
