/**
 * @file logger
 * @author mickey.nbut@gmail.com
 */
import fs from 'fs';
import path from 'path';
import pino, {Level} from 'pino';
import * as fileStreamRotator from 'file-stream-rotator';
import {defaultLevels, pinoLevel2ServerLookUp} from '../dicts/logger';

interface LoggerOptions {
    name: string;
    rootPath?: string;
}
type Stream = ReturnType<typeof fileStreamRotator.getStream>;
export interface StreamItem {
    level: Level;
    stream: Stream;
}

export default function createLogger(options: LoggerOptions) {
    const {
        name,
        rootPath = path.join(__dirname, `../../logs/${name}`),
    } = options;

    const streams: StreamItem[] = [];

    if (name) {
        fs.mkdirSync(rootPath, {recursive: true});
        const files = [
            `${name}.log`,
            `${name}.log`,
            `${name}.log.wf`,
            `${name}.log.wf`,
            `${name}.log.wf`,
        ];
        const levels: Level[] = ['trace', 'info', 'warn', 'error', 'fatal'];
        for (let i = 0; i < files.length; i++) {
            const fullPath = path.join(rootPath, files[i]);
            streams.push({
                level: levels[i],
                stream: fileStreamRotator.getStream({
                    filename: `${fullPath}.%DATE%`,
                    frequency: '1h',
                    size: '100M',
                    /* eslint-disable camelcase */
                    max_logs: '10',
                    verbose: process.env.NODE_ENV === 'development',
                    /* eslint-disable camelcase */
                    date_format: 'YYYYMMDDHH',
                }),
            });
        }

        const logger = pino(
            {
                level: process.env.NODE_ENV === 'development' ? 'trace' : 'info',
                customLevels: {
                    notice: 35,
                },
                serializers: {
                    req(request) {
                        const santizeReq = {
                            method: request.method,
                            url: request.url,
                            params: request.raw.params,
                            query: request.raw.query,
                            body: request.raw.body,
                        };
                        return santizeReq;
                    },
                    res(response) {
                        const santizeRes = {
                            status: response.statusCode,
                        };
                        return santizeRes;
                    },
                    err(error) {
                        return {
                            message: error.message,
                            stack: error.stack,
                            raw: error?.raw,
                        };
                    },
                },
                formatters: {
                    level: (label: string, number: number) => ({
                        label: pinoLevel2ServerLookUp[label as Level] || pinoLevel2ServerLookUp.info,
                        level: number,
                    }),
                },
            },
            pino.multistream(streams, {levels: defaultLevels, dedupe: true})
        );
        return logger;
    }
}

export * as pino from 'pino';
