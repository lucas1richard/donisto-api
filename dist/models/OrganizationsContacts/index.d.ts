import Sequelize from 'sequelize';
import OrganizationsContactsAttributes from './types/Attributes';
import { OrganizationsContactsInstance } from './types/OrganizationsContactsInstance';
interface IOrganizationsContactsMethods {
}
interface IOrganizationsContacts extends Sequelize.Model<OrganizationsContactsInstance, OrganizationsContactsAttributes>, IOrganizationsContactsMethods {
}
declare const OrganizationsContacts: IOrganizationsContacts;
export default OrganizationsContacts;
