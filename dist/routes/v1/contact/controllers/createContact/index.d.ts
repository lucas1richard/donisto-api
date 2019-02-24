import { Request, Response, NextFunction } from 'express';
declare const createContactController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default createContactController;
