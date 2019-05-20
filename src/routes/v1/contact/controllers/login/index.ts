import { RequestHandler } from 'express';
import { Contacts } from 'models';
import { bodySchema } from './validate';
import handleToken from 'utils/handleToken';

const loginController: RequestHandler = async (req, res, next) => {
  try {
    await bodySchema.validate(req.body);

    const contact = await Contacts.findByPassword({
      email: req.body.email,
      password: req.body.password
    });

    if (contact) {
      const token = await handleToken(`${contact.id}`, contact.uuid);

      res
        .status(200)
        .set('token', token)
        .json(contact);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    next(err);
  }
};

export default loginController;
