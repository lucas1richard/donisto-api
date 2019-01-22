import { Request, Response } from 'express';
import moment from 'moment';
import Contact from 'models/Contact';
import ContactKeys from 'models/Contact/types/ContactKeys';

const createContactController = async (req: Request, res: Response) => {
  const contact = await Contact.create({
    [ContactKeys.FIRST_NAME]: 'FirstName',
    [ContactKeys.LAST_NAME]: 'LastName',
    createdAt: moment()
  });

  res.json({
    contact,
    typeof: typeof contact.createdAt,
    instanceofDate: contact.createdAt instanceof Date
  });
};

export default createContactController;
