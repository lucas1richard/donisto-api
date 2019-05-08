import {
  Request,
  Response
} from 'express';
import Organization from 'models/Organization';
import OrganizationKeys from 'models/Organization/types/OrganizationKeys';
import { NextFunction } from 'connect';

const updateOrganizationController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { city, state, zip, mission, uuid } = req.body;
    const updateObj: { [x: string]: string } = {};
    if (city) {
      updateObj[OrganizationKeys.CITY] = city;
    }
    if (state) {
      updateObj[OrganizationKeys.STATE] = state;
    }
    if (zip) {
      updateObj[OrganizationKeys.ZIP] = zip;
    }
    if (mission) {
      updateObj[OrganizationKeys.MISSION] = mission;
    }
    const organization = await Organization.findOne({
      where: {
        [OrganizationKeys.UUID]: uuid
      }
    });

    await organization.update(updateObj);

    const updatedOrganization = await Organization.findOne({
      where: {
        [OrganizationKeys.UUID]: uuid
      }
    });

    res.json(updatedOrganization);
  } catch (err) {
    next(err);
  }
};

export default updateOrganizationController;
