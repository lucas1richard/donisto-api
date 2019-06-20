import Sequelize from 'sequelize';
import sequelize from 'config/database/conn';
import attributes from './attributes';
import ContactOrgFollowsAttributes from './types/Attributes';
import { ContactOrgFollowsInstance } from './types/ContactOrgFollowsInstance';

interface IContactOrgFollowsMethods {
}

interface IContactOrgFollows extends Sequelize.Model<ContactOrgFollowsInstance, ContactOrgFollowsAttributes>, IContactOrgFollowsMethods {}

export type IContactOrgFollowsModel = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): ContactOrgFollowsInstance;
};

export const contactOrgFollows = 'contactorgfollows';

const ContactOrgFollows = <IContactOrgFollowsModel>sequelize.define(contactOrgFollows, attributes, {
});

export default ContactOrgFollows;
