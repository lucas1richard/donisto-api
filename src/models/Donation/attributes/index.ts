import Sequelize from 'sequelize';
import DonationKeys from '../types/DonationKeys';

const attributes = {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true
  },
  [DonationKeys.UUID]: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  [DonationKeys.AMOUNT]: {
    type: Sequelize.DECIMAL,
    get() {
      const val = this.getDataValue(DonationKeys.AMOUNT);
      return parseFloat(val);
    }
  }
};

export default attributes;
