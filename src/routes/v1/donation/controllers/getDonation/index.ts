import { RequestHandler } from 'express';
import { Donations } from 'models';
import foreignKeys from 'config/database/foreignKeys';

const getDonationController: RequestHandler = async (req, res, next) => {
  try {
    const donations = await Donations.findAll({
      where: {
        [foreignKeys.CONTACT]: req.user,
      }
    });
    res.json(donations);
  } catch (err) {
    next(err);
  }
};

export default getDonationController;
