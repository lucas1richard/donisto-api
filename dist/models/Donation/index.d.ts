import Sequelize from 'sequelize';
import DonationAttributes from './types/Attributes';
import { DonationInstance } from './types/DonationInstance';
interface IDonationMethods {
}
interface IDonation extends Sequelize.Model<DonationInstance, DonationAttributes>, IDonationMethods {
}
declare const Donation: IDonation;
export default Donation;
