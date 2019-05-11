import Sequelize from 'sequelize';
import LinksKeys from '../types/LinksKeys';

const attributes = {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
  },
  [LinksKeys.UUID]: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  [LinksKeys.HREF]: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  [LinksKeys.DESCRIPTION]: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  [LinksKeys.LABEL]: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  [LinksKeys.IMAGE]: {
    type: Sequelize.STRING,
    allowNull: true,
  }
};

export default attributes;
