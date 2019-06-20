import { RequestHandler } from 'express';
import { Organizations, Contacts } from 'models';
import { OrganizationKeys, ContactKeys, ContactOrgFollowsKeys } from 'models/keys';

const unfollowOrganizationController: RequestHandler = async (req, res, next) => {
  try {
    const organization = await Organizations.findOne({
      where: {
        [OrganizationKeys.UUID]: req.body.org_uuid,
      }
    });

    const contact = await Contacts.findOne({
      where: {
        [ContactKeys.UUID]: req.user.uuid,
      }
    });

    await organization.addFollowContact(contact, {
      through: {
        [ContactOrgFollowsKeys.REJECTED]: true,
      }
    });

    res.json(organization);
  } catch (err) {
    next(err);
  }
};

export default unfollowOrganizationController;
