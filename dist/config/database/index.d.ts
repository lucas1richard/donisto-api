import { ILogger } from './logger';
export interface IndDbConfig {
    url: string;
    logging?: ILogger | false;
    operatorsAliases: boolean;
}
export interface DBConfig {
    development: IndDbConfig;
    test: IndDbConfig;
    production: IndDbConfig;
    [x: string]: IndDbConfig;
}
declare const config: DBConfig;
export default config;
