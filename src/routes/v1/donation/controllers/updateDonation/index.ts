import { Request, Response, NextFunction } from 'express';
// import { bodySchema } from './validate';

const updateDonationController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // await bodySchema.validate(req.body);
    res.send('Update Donation');
  } catch (err) {
    next(err);
  }
};

export default updateDonationController;
