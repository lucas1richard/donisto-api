import ContactKeys from './ContactKeys';
import SeqModel from 'config/database/types/ModelInterface';

interface ContactAttributes extends SeqModel {
  [ContactKeys.UUID]?: string;
  [ContactKeys.FIRST_NAME]: string;
  [ContactKeys.LAST_NAME]: string;
}

export default ContactAttributes;
