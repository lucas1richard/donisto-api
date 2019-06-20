import { RequestHandler } from 'express';
import Contact from 'models/Contact';

const updateContactController: RequestHandler = async (req, res, next) => {
  try {
    const contact = await Contact.findOne({
      where: {
        uuid: req.user.uuid,
      }
    });
    await contact.update(req.body);
    const updatedContact = await Contact.findOne({
      where: {
        uuid: req.user.uuid,
      }
    });
    res.json(updatedContact);
  } catch (err) {
    next(err);
  }
};

export default updateContactController;
