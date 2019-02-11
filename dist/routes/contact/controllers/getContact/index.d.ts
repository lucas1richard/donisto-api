import { Request, Response, NextFunction } from 'express';
declare const getContactController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default getContactController;
