import ContactKeys from '../types/ContactKeys';
import { ContactInstance } from '../types/ContactInstance';
interface ICredentials {
    [ContactKeys.EMAIL]: string;
    [ContactKeys.PASSWORD]: string;
}
export interface IFindByPassword {
    (credentials: ICredentials): Promise<ContactInstance>;
}
/**
 * Get the user from the password
 */
declare const findByPassword: IFindByPassword;
export default findByPassword;
