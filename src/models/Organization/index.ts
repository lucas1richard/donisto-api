import Sequelize from 'sequelize';
import sequelize from 'config/database/conn';
import attributes from './attributes';
import OrganizationAttributes from './types/Attributes';
import { OrganizationInstance } from './types/OrganizationInstance';

export type OrganizationModel = Sequelize.Model<OrganizationInstance, OrganizationAttributes>;

const Organizations = sequelize.define('organizations', attributes) as OrganizationModel;

export default Organizations;
