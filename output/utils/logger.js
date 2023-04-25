"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pino = void 0;
/**
 * @file logger
 * @author mickey.nbut@gmail.com
 */
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const pino_1 = __importDefault(require("pino"));
const fileStreamRotator = __importStar(require("file-stream-rotator"));
const logger_1 = require("../dicts/logger");
function createLogger(options) {
    const { name, rootPath = path_1.default.join(__dirname, `../../logs/${name}`), } = options;
    const streams = [];
    if (name) {
        fs_1.default.mkdirSync(rootPath, { recursive: true });
        const files = [
            `${name}.log`,
            `${name}.log`,
            `${name}.log.wf`,
            `${name}.log.wf`,
            `${name}.log.wf`,
        ];
        const levels = ['trace', 'info', 'warn', 'error', 'fatal'];
        for (let i = 0; i < files.length; i++) {
            const fullPath = path_1.default.join(rootPath, files[i]);
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
        const logger = (0, pino_1.default)({
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
                level: (label, number) => ({
                    label: logger_1.pinoLevel2ServerLookUp[label] || logger_1.pinoLevel2ServerLookUp.info,
                    level: number,
                }),
            },
        }, pino_1.default.multistream(streams, { levels: logger_1.defaultLevels, dedupe: true }));
        return logger;
    }
}
exports.default = createLogger;
exports.pino = __importStar(require("pino"));
