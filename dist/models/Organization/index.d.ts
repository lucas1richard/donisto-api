import Sequelize from 'sequelize';
import OrganizationAttributes from './types/Attributes';
import { OrganizationInstance } from './types/OrganizationInstance';
export declare type OrganizationModel = Sequelize.Model<OrganizationInstance, OrganizationAttributes>;
declare const Organizations: Sequelize.Model<OrganizationInstance, OrganizationAttributes>;
export default Organizations;
