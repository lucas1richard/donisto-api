import * as Sequelize from 'sequelize';
import OrganizationAttributes from './Attributes';
import { ContactInstance } from 'models/Contact/types/ContactInstance';
import { LinksInstance } from 'models/Links/types/LinksInstance';
import { ContactKeys } from 'models/keys';
import OrganizationsContactsAttributes from 'models/OrganizationsContacts/types/Attributes';

interface OrganizationInstanceMethods {
  addContact: Sequelize.BelongsToManyAddAssociationsMixin<ContactInstance, ContactKeys.UUID, OrganizationsContactsAttributes>;
  // addContact(instance: ContactInstance, options: Sequelize.BelongsToManyAddAssociationsMixinOptions): any;
  addLink(instance: LinksInstance, options: { transaction: Sequelize.Transaction }): any;
}

export interface OrganizationPrototype {
  prototype: OrganizationInstanceMethods;
}

export interface OrganizationInstance extends Sequelize.Instance<OrganizationAttributes>, OrganizationInstanceMethods, OrganizationAttributes {
}