import * as Sequelize from 'sequelize';
import OrganizationAttributes from './Attributes';
import { ContactInstance } from 'models/Contact/types/ContactInstance';
import { LinksInstance } from 'models/Links/types/LinksInstance';

interface OrganizationInstanceMethods {
  addContact(instance: ContactInstance, options: Sequelize.AssociationOptionsBelongsToMany): any;
  addLink(instance: LinksInstance, options: { transaction: Sequelize.Transaction }): any;
}

export interface OrganizationPrototype {
  prototype: OrganizationInstanceMethods;
}

export interface OrganizationInstance extends Sequelize.Instance<OrganizationAttributes>, OrganizationInstanceMethods, OrganizationAttributes {
}