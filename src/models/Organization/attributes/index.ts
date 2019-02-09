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
  }
};

export default attributes;
