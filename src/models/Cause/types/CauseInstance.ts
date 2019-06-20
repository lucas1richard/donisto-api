import * as Sequelize from 'sequelize';
import CauseAttributes from './Attributes';
import { OrganizationInstance } from 'models/Organization/types/OrganizationInstance';

interface CauseInstanceMethods {
  setOrganization(organization: OrganizationInstance, options: Sequelize.QueryOptions): any;
}

export interface CausePrototype {
  prototype: CauseInstanceMethods;
}

export interface CauseInstance extends Sequelize.Model<CauseAttributes>, CauseInstanceMethods, CauseAttributes {
}