require('dotenv').config();
import logger, { ILogger } from './logger';

export interface IndDbConfig {
  url: string;
  logging?: ILogger | false;
}

export interface DBConfig {
  development: IndDbConfig;
  test: IndDbConfig;
  production: IndDbConfig;
  [x: string]: IndDbConfig;
}

const config: DBConfig = {
  development: {
    url: process.env.DATABASE_URL,
    // logging: false,
    logging: logger,
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    logging: false,
  },
  production: {
    url: process.env.DATABASE_URL,
    logging: false,
  }
};

module.exports = config;
export default config;
