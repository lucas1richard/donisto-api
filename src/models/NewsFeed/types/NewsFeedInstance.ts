import * as Sequelize from 'sequelize';
import NewsFeedAttributes from './Attributes';
import { OrganizationInstance } from 'models/Organization/types/OrganizationInstance';
import { CauseInstance } from 'models/Cause/types/CauseInstance';

interface NewsFeedInstanceMethods {
  setOrganization(organization: OrganizationInstance, options: Sequelize.QueryOptions): any;
  addCause(
    cause: CauseInstance,
    options: Sequelize.AssociationOptionsBelongsToMany,
    opts: { transaction: Sequelize.Transaction }
  ): any;
}

export interface NewsFeedPrototype {
  prototype: NewsFeedInstanceMethods;
}

export interface NewsFeedInstance extends Sequelize.Instance<NewsFeedAttributes>, NewsFeedInstanceMethods, NewsFeedAttributes {
}