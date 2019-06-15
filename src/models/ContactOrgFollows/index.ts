import Sequelize from 'sequelize';
import sequelize from 'config/database/conn';
import attributes from './attributes';
import ContactOrgFollowsAttributes from './types/Attributes';
import { ContactOrgFollowsInstance } from './types/ContactOrgFollowsInstance';

interface IContactOrgFollowsMethods {
}

interface IContactOrgFollows extends Sequelize.Model<ContactOrgFollowsInstance, ContactOrgFollowsAttributes>, IContactOrgFollowsMethods {}

const ContactOrgFollows = sequelize.define('contactorgfollows', attributes, {
}) as IContactOrgFollows;

export default ContactOrgFollows;
