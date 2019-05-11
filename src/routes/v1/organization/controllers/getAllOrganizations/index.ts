import { RequestHandler } from 'express';
import Organization from 'models/Organization';
import Links from 'models/Links';

const getAllOrganizationsController: RequestHandler = async (req, res, next) => {
  try {
    const organizations = await Organization.findAll({
      include: [Links]
    });
    res.json(organizations);
  } catch (err) {
    next(err);
  }
};

export default getAllOrganizationsController;
