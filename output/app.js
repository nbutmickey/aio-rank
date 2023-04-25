"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fastify_1 = __importDefault(require("fastify"));
const nextjs_1 = __importDefault(require("@fastify/nextjs"));
const static_1 = __importDefault(require("@fastify/static"));
const logger_1 = __importDefault(require("./utils/logger"));
const port = parseInt(process.env.MAIN_PORT, 10) || 8000;
const dev = process.env.NODE_ENV !== 'production';
const start = async () => {
    try {
        const logger = (0, logger_1.default)({ name: 'aio' });
        const fastify = (0, fastify_1.default)({
            disableRequestLogging: true,
            pluginTimeout: dev ? 120_000 : undefined,
        });
        fastify.register(static_1.default, {
            root: path_1.default.join(__dirname, '../public/icons'),
            prefix: '/icons',
        });
        fastify.register(nextjs_1.default, { dev }).after(() => {
            fastify.next('/wise/*');
            fastify.next('/pc/*');
            fastify.get('/aio', async (req, reply) => {
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
            if (error instanceof fastify_1.default.errorCodes.FST_ERR_BAD_STATUS_CODE) {
                reply.status(500).send(error);
            }
            else {
                reply.status(500).send({
                    status: 500,
                    data: 'render server error!',
                });
                logger?.error(error);
            }
        });
        await fastify.listen({ port, host: '0.0.0.0' });
        const info = `server start at port: ${port}`;
        logger?.info(info);
        console.info(info);
    }
    catch (error) {
        process.exit(0);
    }
};
start();
