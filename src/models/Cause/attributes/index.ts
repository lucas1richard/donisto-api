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
  },
  [CauseKeys.SUGGESTED_DONATION]: {
    type: Sequelize.DECIMAL,
    allowNull: true,
    get() {
      const val = this.getDataValue(CauseKeys.SUGGESTED_DONATION);
      return parseFloat(val);
    }
  },
  [CauseKeys.GOAL_AMOUNT]: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    get() {
      const val = this.getDataValue(CauseKeys.GOAL_AMOUNT);
      return parseFloat(val);
    }
  }
};

export default attributes;
