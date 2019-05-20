import { RequestHandler } from 'express';
import { Contacts, Organizations } from 'models';

const getContactController: RequestHandler = async (req, res, next) => {
  try {
    const contact = await Contacts.findOne({
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
