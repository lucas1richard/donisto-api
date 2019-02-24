import { Request, Response, NextFunction } from 'express';
declare const getNewsFeedController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default getNewsFeedController;
