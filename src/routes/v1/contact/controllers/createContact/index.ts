import { Request, Response, NextFunction } from 'express';
import Contact from 'models/Contact';
import ContactKeys from 'models/Contact/types/ContactKeys';
import { bodySchema } from './validate';

const createContactController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await bodySchema.validate(req.body);

    const contact = await Contact.create(req.body);

    res.json(contact);
  } catch (err) {
    next(err);
  }
};

export default createContactController;
