import * as Sequelize from 'sequelize';
import OrganizationsContactsAttributes from './Attributes';

interface OrganizationsContactsInstanceMethods {
}

export interface OrganizationsContactsPrototype {
  prototype: OrganizationsContactsInstanceMethods;
}

export interface OrganizationsContactsInstance extends Sequelize.Model<OrganizationsContactsAttributes>, OrganizationsContactsInstanceMethods, OrganizationsContactsAttributes {
}