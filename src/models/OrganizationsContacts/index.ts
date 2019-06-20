import Sequelize from 'sequelize';
import sequelize from 'config/database/conn';
import attributes from './attributes';
import OrganizationsContactsAttributes from './types/Attributes';
import { OrganizationsContactsInstance } from './types/OrganizationsContactsInstance';

interface IOrganizationsContactsMethods {
}

interface IOrganizationsContacts extends Sequelize.Model<OrganizationsContactsInstance, OrganizationsContactsAttributes>, IOrganizationsContactsMethods {}

export type IOrganizationsContactsModel = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): OrganizationsContactsInstance;
};

export const organizationsContacts = 'organizationscontacts';

const OrganizationsContacts = <IOrganizationsContactsModel>sequelize.define(organizationsContacts, attributes, {
});

export default OrganizationsContacts;
