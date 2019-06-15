import * as Sequelize from 'sequelize';
import ContactOrgFollowsAttributes from './Attributes';

interface ContactOrgFollowsInstanceMethods {
}

export interface ContactOrgFollowsPrototype {
  prototype: ContactOrgFollowsInstanceMethods;
}

export interface ContactOrgFollowsInstance extends Sequelize.Instance<ContactOrgFollowsAttributes>, ContactOrgFollowsInstanceMethods, ContactOrgFollowsAttributes {
}