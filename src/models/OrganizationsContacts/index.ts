import Sequelize from 'sequelize';
import sequelize from 'config/database/conn';
import attributes from './attributes';
import OrganizationsContactsAttributes from './types/Attributes';
import { OrganizationsContactsInstance } from './types/OrganizationsContactsInstance';

interface IOrganizationsContactsMethods {
}

interface IOrganizationsContacts extends Sequelize.Model<OrganizationsContactsInstance, OrganizationsContactsAttributes>, IOrganizationsContactsMethods {}

const OrganizationsContacts = sequelize.define('organizationscontacts', attributes, {
}) as IOrganizationsContacts;

export default OrganizationsContacts;
