import Sequelize from 'sequelize';
import ContactKeys from '../types/ContactKeys';

const attributes = {
  id: {
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
    allowNull: true
  },
  [ContactKeys.LAST_NAME]: {
    type: Sequelize.STRING,
    allowNull: true
  },
  [ContactKeys.EMAIL]: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    },
    unique: true,
    allowNull: false
  },
  [ContactKeys.CITY]: {
    type: Sequelize.STRING
  },
  [ContactKeys.STATE]: {
    type: Sequelize.STRING
  },
  [ContactKeys.ZIP]: {
    type: Sequelize.STRING
  },
  [ContactKeys.PASSWORD]: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  [ContactKeys.SALT]: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  [ContactKeys.FACEBOOK_ID]: {
    type: Sequelize.TEXT,
    allowNull: true
  }
};

export default attributes;
