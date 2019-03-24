import ContactKeys from './ContactKeys';
import SeqModel from 'config/database/types/ModelInterface';
interface ContactAttributes extends SeqModel {
    [ContactKeys.UUID]?: string;
    [ContactKeys.FIRST_NAME]: string;
    [ContactKeys.LAST_NAME]: string;
    [ContactKeys.EMAIL]: string;
    [ContactKeys.PASSWORD]: string;
    [ContactKeys.SALT]?: string;
    [ContactKeys.CITY]?: string;
    [ContactKeys.STATE]?: string;
    [ContactKeys.ZIP]?: string;
    [ContactKeys.FACEBOOK_ID]?: string;
}
export default ContactAttributes;
