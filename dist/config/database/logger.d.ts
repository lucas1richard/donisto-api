export interface ILogger {
    (query: string): void;
}
declare const logger: ILogger;
export default logger;
