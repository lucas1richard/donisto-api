import { RequestHandler } from 'express';
import { Causes } from 'models';

const getCausesController: RequestHandler = async (req, res, next) => {
  try {
    const causes = await Causes.findAll();
    res.json(causes);
  } catch (err) {
    next(err);
  }
};

export default getCausesController;