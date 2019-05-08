import Sequelize from 'sequelize';
import { OrganizationKeys } from '../types';

const attributes = {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true
  },
  [OrganizationKeys.UUID]: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  [OrganizationKeys.NAME]: {
    type: Sequelize.STRING,
    allowNull: false
  },
  [OrganizationKeys.CITY]: {
    type: Sequelize.STRING,
    allowNull: false
  },
  [OrganizationKeys.STATE]: {
    type: Sequelize.STRING,
    allowNull: false
  },
  [OrganizationKeys.MISSION]: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  [OrganizationKeys.ZIP]: {
    type: Sequelize.STRING,
    allowNull: false
  },
};

export default attributes;
