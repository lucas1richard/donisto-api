import { RequestHandler } from 'express';
import sequelize from 'database/conn';
import { Donations } from 'models';
import { DonationKeys } from 'models/keys';

const { Op } = sequelize;

const getDonationsByIdController: RequestHandler = async (req, res, next) => {
  try {
    const donations = await Donations.findAll({
      where: {
        [DonationKeys.UUID]: {
          [Op.in]: req.body.ids,
        },
      }
    });
    res.json(donations);
  } catch (err) {
    next(err);
  }
};

export default getDonationsByIdController;
