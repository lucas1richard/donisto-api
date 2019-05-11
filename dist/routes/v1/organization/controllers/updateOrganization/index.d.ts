import { Request, Response } from 'express';
import { NextFunction } from 'connect';
declare const updateOrganizationController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default updateOrganizationController;
