import redis, { RedisClient } from 'redis';
import { promisify } from 'util';

function safeFunction(func: any) {
  if (process.env.NODE_ENV !== 'test') {
    return func;
  }
  return func;
}

interface Client extends RedisClient {
  getAsync(): Promise<any>;
  hgetAsync(): Promise<any>;
  hsetAsync(): Promise<any>;
  hmsetAsync(): Promise<any>;
  hgetAllAsync(): Promise<any>;
}

export const redisClient = redis.createClient(process.env.REDIS_URL) as Client;
export const getAsync = promisify(safeFunction(redisClient.get)).bind(redisClient);
export const hgetAsync = promisify(safeFunction(redisClient.hget)).bind(redisClient);
export const hsetAsync = promisify(safeFunction(redisClient.hset)).bind(redisClient);
export const hmsetAsync = promisify(safeFunction(redisClient.hmset)).bind(redisClient);
export const hgetAllAsync = promisify(safeFunction(redisClient.hgetall)).bind(redisClient);

redisClient.on('error', (err) => {
});

redisClient.getAsync = getAsync;
redisClient.hgetAsync = hgetAsync;
redisClient.hsetAsync = hsetAsync;
redisClient.hmsetAsync = hmsetAsync;
redisClient.hgetAllAsync = hgetAllAsync;

module.exports = redisClient;


export default redisClient;
