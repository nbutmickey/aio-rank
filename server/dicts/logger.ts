import type {Level} from 'pino';
export const pinoLevel2ServerLookUp: Record<Level, string> = {
    trace: 'TRACE',
    debug: 'DEBUG',
    info: 'INFO',
    warn: 'WARNING',
    error: 'ERROR',
    fatal: 'FATAL',
};

export const defaultLevels = {
    fatal: 60,
    error: 50,
    warn: 40,
    notice: 35,
    info: 30,
    debug: 20,
    trace: 10,
};
