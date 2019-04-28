import { Request, Response } from 'express';
import { NextFunction } from 'connect';
declare const createCauseController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default createCauseController;
