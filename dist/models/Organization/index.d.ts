import Sequelize from 'sequelize';
import OrganizationAttributes from './types/Attributes';
import { OrganizationInstance } from './types/OrganizationInstance';
export declare type OrganizationModel = Sequelize.Model<OrganizationInstance, OrganizationAttributes>;
export declare type OrganizationModelStatic = typeof Sequelize.Model & {
    new (values?: object, options?: Sequelize.BuildOptions): OrganizationInstance;
};
declare const Organizations: OrganizationModelStatic;
export default Organizations;
