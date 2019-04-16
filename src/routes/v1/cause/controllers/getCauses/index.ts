import { Request, Response, NextFunction } from 'express';
import Cause from 'models/Cause';

async function getCausesController(req: Request, res: Response, next: NextFunction) {
  try {
    const causes = await Cause.findAll();
    res.json(causes);
  } catch (err) {
    next(err);
  }
}

export default getCausesController;