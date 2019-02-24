import * as Sequelize from 'sequelize';
import OrganizationAttributes from './Attributes';
import { ContactInstance } from 'models/Contact/types/ContactInstance';

interface OrganizationInstanceMethods {
  addContact(instance: ContactInstance, options: Sequelize.AssociationOptionsBelongsToMany): any;
}

export interface OrganizationPrototype {
  prototype: OrganizationInstanceMethods;
}

export interface OrganizationInstance extends Sequelize.Instance<OrganizationAttributes>, OrganizationInstanceMethods, OrganizationAttributes {
}