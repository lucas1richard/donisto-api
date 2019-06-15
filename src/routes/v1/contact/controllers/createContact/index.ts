import { RequestHandler } from 'express';
import Contact from 'models/Contact';
import { bodySchema } from './validate';
import handleToken from 'utils/handleToken';

const createContactController: RequestHandler = async (req, res, next) => {
  try {
    await bodySchema.validate(req.body);

    const contact = await Contact.create(req.body);

    const token = await handleToken(`${contact.id}`, contact.uuid);

    res
      .set('token', token)
      .json({
        ...contact.get(),
        organizations: []
      });
  } catch (err) {
    next(err);
  }
};

export default createContactController;
