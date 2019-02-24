import * as Sequelize from 'sequelize';
import NewsFeedAttributes from './Attributes';
import { OrganizationInstance } from 'models/Organization/types/OrganizationInstance';

interface NewsFeedInstanceMethods {
  setOrganization(organization: OrganizationInstance, options: Sequelize.QueryOptions): any;
}

export interface NewsFeedPrototype {
  prototype: NewsFeedInstanceMethods;
}

export interface NewsFeedInstance extends Sequelize.Instance<NewsFeedAttributes>, NewsFeedInstanceMethods, NewsFeedAttributes {
}