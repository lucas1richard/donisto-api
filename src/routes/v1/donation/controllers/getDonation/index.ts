import { Request, Response, NextFunction } from 'express';
import Donation from 'models/Donation';
import foreignKeys from 'config/database/foreignKeys';

const getDonationController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const donations = await Donation.findAll({
      where: {
        [foreignKeys.CONTACT]: res.locals.uuid
      }
    });
    res.json(donations);
  } catch (err) {
    next(err);
  }
};

export default getDonationController;
