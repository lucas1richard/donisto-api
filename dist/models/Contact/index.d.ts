import Sequelize from 'sequelize';
import { IFindByPassword } from './classMethods/findByPassword';
import { ContactInstance } from './types/ContactInstance';
export declare type IContactsModelStatic = typeof Sequelize.Model & {
    new (values?: object, options?: Sequelize.BuildOptions): ContactInstance;
    findByPassword: IFindByPassword;
};
declare const Contacts: IContactsModelStatic;
export default Contacts;
