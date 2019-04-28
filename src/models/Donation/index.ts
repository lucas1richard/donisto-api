import Sequelize from 'sequelize';
import sequelize from 'config/database/conn';
import attributes from './attributes';
import DonationAttributes from './types/Attributes';
import { DonationInstance } from './types/DonationInstance';

interface IDonationMethods {
}

interface IDonation extends Sequelize.Model<DonationInstance, DonationAttributes>, IDonationMethods {}

const Donation = sequelize.define('donation', attributes, {
}) as IDonation;

export default Donation;
