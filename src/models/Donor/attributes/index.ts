import Sequelize from 'sequelize';
import { DonorKeys } from '../types';

const attributes = {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true
  },
  [DonorKeys.UUID]: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  [DonorKeys.FIRST_NAME]: {
    type: Sequelize.STRING,
    allowNull: false
  },
  [DonorKeys.LAST_NAME]: {
    type: Sequelize.STRING,
    allowNull: false
  }
};

export default attributes;
