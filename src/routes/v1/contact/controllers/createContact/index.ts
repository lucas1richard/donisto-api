import { Request, Response, NextFunction } from 'express';
import Contact from 'models/Contact';
import jwt from 'jwt-simple';
import { bodySchema } from './validate';

const createContactController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await bodySchema.validate(req.body);

    const contact = await Contact.create(req.body);

    const token = jwt.encode({
      id: contact.id,
      uuid: contact.uuid
    }, process.env.JWT_SECRET);

    res
      .set('token', token)
      .json(contact);
  } catch (err) {
    next(err);
  }
};

export default createContactController;
