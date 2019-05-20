import { RequestHandler } from 'express';

const deleteDonationController: RequestHandler = async (req, res, next) => {
  try {
    res.send('Delete Donation');
  } catch (err) {
    next(err);
  }
};

export default deleteDonationController;
