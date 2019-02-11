import { Request, Response, NextFunction } from 'express';
declare const getDonationController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default getDonationController;
