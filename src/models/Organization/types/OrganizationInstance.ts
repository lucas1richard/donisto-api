import * as Sequelize from 'sequelize';
import OrganizationAttributes from './Attributes';
import { ContactInstance } from 'models/Contact/types/ContactInstance';
import { LinksInstance } from 'models/Links/types/LinksInstance';

interface OrganizationInstanceMethods {
  addContact: Sequelize.BelongsToManyAddAssociationMixin<ContactInstance, string>;
  addContacts: Sequelize.BelongsToManyAddAssociationsMixin<ContactInstance, string>;
  addFollowContact: Sequelize.BelongsToManyAddAssociationMixin<ContactInstance, string>;
  removeFollowContact: Sequelize.BelongsToManyRemoveAssociationMixin<ContactInstance, string>;
  addLink: Sequelize.HasManyAddAssociationMixin<LinksInstance, string>;
  addLinks: Sequelize.HasManyAddAssociationsMixin<LinksInstance, string>;
}

export interface OrganizationPrototype {
  prototype: OrganizationInstanceMethods;
}

export interface OrganizationInstance extends Sequelize.Model, OrganizationInstanceMethods, OrganizationAttributes {
}