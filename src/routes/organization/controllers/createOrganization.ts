import { Request, Response } from 'express';
import Organization from 'models/Organization';
import OrganizationKeys from 'models/Organization/types/OrganizationKeys';

const createOrganizationController = async (req: Request, res: Response) => {
  const organization = await Organization.create({
    [OrganizationKeys.NAME]: 'OrganizationName',
  });

  res.json({
    organization
  });
};

export default createOrganizationController;
