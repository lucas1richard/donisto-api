import { RequestHandler } from 'express';
import { Organizations, Links } from 'models';

const noOrgPlaceholder: any[] = [];

const getAllOrganizationsController: RequestHandler = async (req, res, next) => {
  try {
    const organizations = await Organizations.findAll({
      include: [Links]
    });
    res.json(organizations || noOrgPlaceholder);
  } catch (err) {
    next(err);
  }
};

export default getAllOrganizationsController;
