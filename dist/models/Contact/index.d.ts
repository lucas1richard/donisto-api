import Sequelize from 'sequelize';
import ContactAttributes from './types/Attributes';
import { IFindByPassword } from './classMethods/findByPassword';
import { ContactInstance } from './types/ContactInstance';
interface IContactsClassMethods {
    findByPassword: IFindByPassword;
}
interface IContactsModel extends Sequelize.Model<ContactInstance, ContactAttributes>, IContactsClassMethods {
}
declare const Contacts: IContactsModel;
export default Contacts;
