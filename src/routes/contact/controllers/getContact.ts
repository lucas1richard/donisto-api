import { Request, Response } from 'express';
import Contact from 'models/Contact';

const getContactController = async (req: Request, res: Response) => {
  const contacts = await Contact.findAll();
  res.json(contacts);
};

export default getContactController;
