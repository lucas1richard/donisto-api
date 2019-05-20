import { RequestHandler } from 'express';
import Contact from 'models/Contact';

const updateContactController: RequestHandler = async (req, res, next) => {
  try {
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
