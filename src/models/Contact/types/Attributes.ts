import ContactKeys from './ContactKeys';

interface ContactAttributes {
  [ContactKeys.ID]?: number;
  [ContactKeys.UUID]?: string;
  [ContactKeys.FIRST_NAME]: string;
  [ContactKeys.LAST_NAME]: string;
}

export default ContactAttributes;
