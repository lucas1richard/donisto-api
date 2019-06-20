import Sequelize from 'sequelize';
import { OrganizationsContactsInstance } from './types/OrganizationsContactsInstance';
export declare type IOrganizationsContactsModel = typeof Sequelize.Model & {
    new (values?: object, options?: Sequelize.BuildOptions): OrganizationsContactsInstance;
};
declare const OrganizationsContacts: IOrganizationsContactsModel;
export default OrganizationsContacts;
