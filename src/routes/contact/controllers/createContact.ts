import { Request, Response } from 'express';
import Contact from 'models/Contact';
import ContactKeys from 'models/Contact/types/ContactKeys';

const createContactController = async (req: Request, res: Response) => {
  const contacts = await Contact.create({
    [ContactKeys.FIRST_NAME]: 'FirstName',
    [ContactKeys.LAST_NAME]: 'LastName'
  });

  res.json(contacts);
};

export default createContactController;
