import Sequelize from 'sequelize';
import OrganizationsContactsKeys from '../types/NewsFeedCausesKeys';

const attributes = {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true
  },
  [OrganizationsContactsKeys.UUID]: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  }
};

export default attributes;
