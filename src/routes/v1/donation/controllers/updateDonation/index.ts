import { RequestHandler } from 'express';
// import { bodySchema } from './validate';

const updateDonationController: RequestHandler = async (req, res, next) => {
  try {
    // await bodySchema.validate(req.body);
    res.send('Update Donation');
  } catch (err) {
    next(err);
  }
};

export default updateDonationController;
