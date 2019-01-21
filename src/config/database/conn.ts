require('dotenv').config();
import Sequelize from 'sequelize';
const chalk = require('chalk');
import availableConfigs from './index';

/* istanbul ignore next */
const env = process.env.NODE_ENV || 'development';

const config = availableConfigs[env];

// eslint-disable-next-line
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

