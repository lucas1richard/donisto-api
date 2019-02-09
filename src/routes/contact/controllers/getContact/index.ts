import { Request, Response, NextFunction } from 'express';
import Contact from 'models/Contact';
import { bodySchema } from './validate';

const getContactController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await bodySchema.validate(req.body);
    const contact = await Contact.findByPassword({
      email: req.body.email,
      password: req.body.password
    });
    setTimeout(() => {
      res.json(contact);
    }, 1000);
  } catch (err) {
    next(err);
  }
};

export default getContactController;
