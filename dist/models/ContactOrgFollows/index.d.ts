import Sequelize from 'sequelize';
import { ContactOrgFollowsInstance } from './types/ContactOrgFollowsInstance';
export declare type IContactOrgFollowsModel = typeof Sequelize.Model & {
    new (values?: object, options?: Sequelize.BuildOptions): ContactOrgFollowsInstance;
};
declare const ContactOrgFollows: IContactOrgFollowsModel;
export default ContactOrgFollows;
