import Sequelize from 'sequelize';
import ContactOrgFollowsKeys from '../types/ContactOrgFollowsKeys';

const attributes = {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
  },
  [ContactOrgFollowsKeys.UUID]: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  [ContactOrgFollowsKeys.REJECTED]: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  }
};

export default attributes;
