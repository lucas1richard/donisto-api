require('dotenv').config();
import logger, { ILogger } from './logger';

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

const config: DBConfig = {
  development: {
    url: process.env.DATABASE_URL,
    // logging: false,
    logging: logger,
    operatorsAliases: false
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    logging: false,
    operatorsAliases: false
  },
  production: {
    url: process.env.DATABASE_URL,
    logging: console.log,
    operatorsAliases: false
  }
};

module.exports = config;
export default config;
