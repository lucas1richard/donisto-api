import { RequestHandler } from 'express';
import { Contacts, Organizations } from 'models';
import { ContactKeys } from 'models/keys';

const getContactController: RequestHandler = async (req, res, next) => {
  try {
    const contact = await Contacts.findOne({
      where: {
        uuid: req.user,
      },
      attributes: {
        exclude: [
          ContactKeys.PASSWORD,
          ContactKeys.SALT,
        ],
      },
      include: [{
        model: Organizations,
      }],
    });
    res.json(contact);
  } catch (err) {
    next(err);
  }
};

export default getContactController;
