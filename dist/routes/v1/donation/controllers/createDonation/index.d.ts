import { Request, Response, NextFunction } from 'express';
declare const createDonationController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default createDonationController;
