import Sequelize from 'sequelize';
import NewsFeedKeys from '../types/NewsFeedKeys';

const attributes = {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true
  },
  [NewsFeedKeys.UUID]: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  [NewsFeedKeys.TITLE]: {
    type: Sequelize.STRING,
  },
  [NewsFeedKeys.TEXT]: {
    type: Sequelize.TEXT,
  }
};

export default attributes;
