import * as Sequelize from 'sequelize';
import ContactAttributes from './Attributes';

interface ContactInstanceMethods {
}

export interface ContactPrototype {
  prototype: ContactInstanceMethods;
}

export interface ContactInstance extends Sequelize.Model<ContactAttributes>, ContactInstanceMethods, ContactAttributes {
}