import { Request, Response, NextFunction } from 'express';
import Contact from 'models/Contact';
// import { bodySchema } from './validate';

const updateContactController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // await bodySchema.validate(req.body);
    const contact = await Contact.findOne({
      where: {
        uuid: res.locals.uuid
      }
    });
    await contact.update(req.body);
    const updatedContact = await Contact.findOne({
      where: {
        uuid: res.locals.uuid
      }
    });
    res.json(updatedContact);
  } catch (err) {
    next(err);
  }
};

export default updateContactController;
