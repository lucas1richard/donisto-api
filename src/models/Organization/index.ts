import Sequelize from 'sequelize';
import sequelize from 'config/database/conn';
import attributes from './attributes';
import OrganizationAttributes from './types/Attributes';

const Organizations = sequelize.define('Organizations', attributes) as Sequelize.Model<any, OrganizationAttributes>;

Organizations.associate = (models) => {
  Organizations.hasMany(models.Contacts);
};

export default Organizations;
