import { RequestHandler } from 'express';
import { Organizations, Contacts, ContactOrgFollows } from 'models';
import { OrganizationKeys, ContactKeys, ContactOrgFollowsKeys } from 'models/keys';

const followOrganizationController: RequestHandler = async (req, res, next) => {
  try {
    const organization = await Organizations.findOne({
      where: {
        [OrganizationKeys.UUID]: req.body.org_uuid,
      }
    });

    const contact = await Contacts.findOne({
      where: {
        [ContactKeys.UUID]: req.user
      }
    });

    await organization.addContact(contact, {
      through: {
        model: ContactOrgFollows,
        [ContactOrgFollowsKeys.REJECTED]: true,
      }
  });

    res.json(organization);
  } catch (err) {
    next(err);
  }
};

export default followOrganizationController;
