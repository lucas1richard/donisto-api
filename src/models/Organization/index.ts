import Sequelize from 'sequelize';
import sequelize from 'config/database/conn';
import attributes from './attributes';
import OrganizationAttributes from './types/Attributes';
import { OrganizationInstance } from './types/OrganizationInstance';

export type OrganizationModel = Sequelize.Model<OrganizationInstance, OrganizationAttributes>;

export type OrganizationModelStatic = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): OrganizationInstance;
};

const Organizations = <OrganizationModelStatic>sequelize.define('organizations', attributes);

export default Organizations;
