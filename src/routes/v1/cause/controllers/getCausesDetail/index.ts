import { RequestHandler } from 'express';
import { Causes, Donations, Contacts } from 'models';
import { CauseKeys, ContactKeys } from 'models/keys';
import conn from 'database/conn';

const { Op } = conn;

const getCausesDetailController: RequestHandler = async (req, res, next) => {
  try {
    const { cause_uuids } = req.body;
    const causes = await Causes.findAll({
      where: {
        [CauseKeys.UUID]: {
          [Op.in]: cause_uuids
        }
      },
      include: [{
        model: Donations,
        include: [{
          model: Contacts,
          attributes: [
            ContactKeys.UUID,
            ContactKeys.FIRST_NAME,
            ContactKeys.LAST_NAME,
            ContactKeys.EMAIL,
          ]
        }]
      }]
    });

    res.json(causes);
  } catch (err) {
    next(err);
  }
};

export default getCausesDetailController;