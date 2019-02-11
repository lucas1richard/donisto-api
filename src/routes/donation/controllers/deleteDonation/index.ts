import { Request, Response, NextFunction } from 'express';

const deleteDonationController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send('Delete Donation');
  } catch (err) {
    next(err);
  }
};

export default deleteDonationController;
