import { Request, Response, NextFunction } from 'express';
import Contact from 'models/Contact';
import Organizations from 'models/Organization';

const getContactController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const contact = await Contact.findOne({
      where: {
        uuid: res.locals.uuid
      },
      include: [{
        model: Organizations
      }]
    });
    res.json(contact);
  } catch (err) {
    next(err);
  }
};

export default getContactController;
