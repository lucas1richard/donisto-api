import * as Sequelize from 'sequelize';
import DonationAttributes from './Attributes';
import { ContactInstance } from 'models/Contact/types/ContactInstance';
import { CauseInstance } from 'models/Cause/types/CauseInstance';

interface DonationInstanceMethods {
  setContact(contact: ContactInstance, options: Sequelize.QueryOptions): any;
  setCause(cause: CauseInstance, options: Sequelize.QueryOptions): any;
}

export interface DonationPrototype {
  prototype: DonationInstanceMethods;
}

export interface DonationInstance extends Sequelize.Instance<DonationAttributes>, DonationInstanceMethods, DonationAttributes {
}