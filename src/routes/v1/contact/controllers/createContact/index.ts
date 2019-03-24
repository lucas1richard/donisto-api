import { Request, Response, NextFunction } from 'express';
import Contact from 'models/Contact';
import { bodySchema } from './validate';
import handleToken from 'utils/handleToken';

const createContactController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await bodySchema.validate(req.body);

    const contact = await Contact.create(req.body);

    const token = await handleToken(contact.id, contact.uuid);

    res
      .set('token', token)
      .json(contact);
  } catch (err) {
    next(err);
  }
};

export default createContactController;
