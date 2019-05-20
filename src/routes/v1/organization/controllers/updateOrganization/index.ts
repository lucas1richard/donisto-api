import { RequestHandler } from 'express';
import { Organizations } from 'models';
import { OrganizationKeys } from 'models/keys';

const updateOrganizationController: RequestHandler = async (req, res, next) => {
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
    const organization = await Organizations.findOne({
      where: {
        [OrganizationKeys.UUID]: uuid
      }
    });

    await organization.update(updateObj);

    const updatedOrganization = await Organizations.findOne({
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
