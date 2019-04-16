import Sequelize from 'sequelize';
import CauseKeys from '../types/CauseKeys';

const attributes = {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true
  },
  [CauseKeys.UUID]: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  [CauseKeys.NAME]: {
    type: Sequelize.STRING,
    allowNull: false
  }
};

export default attributes;
