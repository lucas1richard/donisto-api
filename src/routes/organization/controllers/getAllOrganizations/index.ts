import { Request, Response } from 'express';
import Organization from 'models/Organization';

const getAllOrganizationsController = async (req: Request, res: Response) => {
  const organizations = await Organization.findAll();
  res.json(organizations);
};

export default getAllOrganizationsController;
