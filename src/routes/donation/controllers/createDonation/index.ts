import { Request, Response, NextFunction } from 'express';
// import { bodySchema } from './validate';

const createDonationController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // await bodySchema.validate(req.body);
    res.send('Create Donation');
  } catch (err) {
    next(err);
  }
};

export default createDonationController;
