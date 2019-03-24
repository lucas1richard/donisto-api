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

    if (contact) {
      res.json(contact);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    next(err);
  }
};

export default getContactController;
