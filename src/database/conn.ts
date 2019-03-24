require('dotenv').config();
import Sequelize from 'sequelize';
import chalk from 'chalk';
import availableConfigs from './index';

const env = process.env.NODE_ENV || 'development';

const config = availableConfigs[env];

console.log(
  chalk.magenta('connecting to db'),
  chalk.bold.magenta(config.url)
);

const seqInstance = new Sequelize(
  config.url,
  config
);

module.exports = seqInstance;
export default seqInstance;

