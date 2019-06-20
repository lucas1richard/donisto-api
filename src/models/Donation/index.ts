import Sequelize from 'sequelize';
import sequelize from 'config/database/conn';
import attributes from './attributes';
import DonationAttributes from './types/Attributes';
import { DonationInstance } from './types/DonationInstance';

interface IDonationMethods {
}

interface IDonation extends Sequelize.Model<DonationInstance, DonationAttributes>, IDonationMethods {}

export type IDonationModel = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): DonationInstance;
};

const Donation = <IDonationModel>sequelize.define('donation', attributes, {
});

export default Donation;
