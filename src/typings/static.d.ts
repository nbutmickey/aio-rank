/*
 * @file: static type
 * @author: shizhongwei02
 */
declare module '*.less' {
    const content: {
        [className: string]: string;
        (...names: Array<string | null | undefined | {[key: string | boolean | undefined]}>): string;
    };
    export default content;
}