import { Request, Response } from 'express';
import { NextFunction } from 'connect';
declare const createOrganizationController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default createOrganizationController;
