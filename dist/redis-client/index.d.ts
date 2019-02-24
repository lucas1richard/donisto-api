import { RedisClient } from 'redis';
interface Client extends RedisClient {
    getAsync(): Promise<any>;
    hgetAsync(): Promise<any>;
    hsetAsync(): Promise<any>;
    hmsetAsync(): Promise<any>;
    hgetAllAsync(): Promise<any>;
}
export declare const redisClient: Client;
export declare const getAsync: any;
export declare const hgetAsync: any;
export declare const hsetAsync: any;
export declare const hmsetAsync: any;
export declare const hgetAllAsync: any;
export default redisClient;
