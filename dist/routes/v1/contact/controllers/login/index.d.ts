import { Request, Response, NextFunction } from 'express';
declare const loginController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default loginController;
