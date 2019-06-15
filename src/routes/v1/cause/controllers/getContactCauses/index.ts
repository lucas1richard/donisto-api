import { RequestHandler } from 'express';
import { Causes, Contacts, Organizations } from 'models';
import foreignKeys from 'database/foreignKeys';

const getContactCausesController: RequestHandler = async (req, res, next) => {
  try {
    const causes = await Causes.findAll({
      include: [{
        model: Organizations,
        attributes: ['uuid'],
        required: true,
        include: [{
          model: Contacts,
          attributes: ['uuid'],
          required: true,
          where: {
            uuid: req.user,
          },
        }]
      }]
    });
    res.json(causes);
  } catch (err) {
    next(err);
  }
};

export default getContactCausesController;