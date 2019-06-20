import * as Sequelize from 'sequelize';
import NewsFeedAttributes from './Attributes';
import CauseKeys from 'models/Cause/types/CauseKeys';
import { OrganizationKeys } from 'models/Organization/types';
import { OrganizationInstance } from 'models/Organization/types/OrganizationInstance';
import { CauseInstance } from 'models/Cause/types/CauseInstance';

interface NewsFeedInstanceMethods {
  setOrganization: Sequelize.BelongsToManySetAssociationsMixin<OrganizationInstance, OrganizationKeys.UUID>;
  // setOrganization(organization: OrganizationInstance, options: Sequelize.QueryOptions): any;
  addCause: Sequelize.BelongsToManyAddAssociationMixin<CauseInstance, CauseKeys.UUID>;
}

export interface NewsFeedPrototype {
  prototype: NewsFeedInstanceMethods;
}

export interface NewsFeedInstance extends Sequelize.Model<NewsFeedAttributes>, NewsFeedInstanceMethods, NewsFeedAttributes {
}