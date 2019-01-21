import Sequelize from 'sequelize';
import { ContactKeys } from '../types';

const attributes = {
  [ContactKeys.ID]: {
    type: Sequelize.BIGINT,
    autoIncrement: true
  },
  [ContactKeys.UUID]: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  [ContactKeys.FIRST_NAME]: {
    type: Sequelize.STRING,
    allowNull: false
  },
  [ContactKeys.LAST_NAME]: {
    type: Sequelize.STRING,
    allowNull: false
  }
};

export default attributes;
