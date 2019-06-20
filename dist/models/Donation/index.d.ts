import Sequelize from 'sequelize';
import { DonationInstance } from './types/DonationInstance';
export declare type IDonationModel = typeof Sequelize.Model & {
    new (values?: object, options?: Sequelize.BuildOptions): DonationInstance;
};
declare const Donation: IDonationModel;
export default Donation;
