import Sequelize from 'sequelize';
import sequelize from 'config/database/conn';
import attributes from './attributes';
import ContactAttributes from './types/Attributes';
import beforeCreate from './hooks/beforeCreate';
import findByPassword, { IFindByPassword } from './classMethods/findByPassword';
import { ContactInstance } from './types/ContactInstance';

interface IContactsClassMethods {
  findByPassword: IFindByPassword;
}

interface IContactsModel extends Sequelize.Model<ContactInstance, ContactAttributes>, IContactsClassMethods {}

const Contacts = sequelize.define('contacts', attributes, {
  hooks: {
    beforeCreate
  }
}) as IContactsModel;

Contacts.findByPassword = findByPassword;

export default Contacts;
