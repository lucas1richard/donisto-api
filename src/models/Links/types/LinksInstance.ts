import * as Sequelize from 'sequelize';
import LinksAttributes from './Attributes';

interface LinksInstanceMethods {
}

export interface LinksPrototype {
  prototype: LinksInstanceMethods;
}

export interface LinksInstance extends Sequelize.Model<LinksAttributes>, LinksInstanceMethods, LinksAttributes {
}