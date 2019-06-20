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

export type IContactsModelStatic = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): ContactInstance;
  findByPassword: IFindByPassword;
};

const Contacts = <IContactsModelStatic>sequelize.define('contacts', attributes, {
  hooks: {
    beforeCreate
  }
});

Contacts.findByPassword = findByPassword;

export default Contacts;
