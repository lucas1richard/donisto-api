import { RequestHandler } from 'express';
import { Organizations, Contacts } from 'models';
import { OrganizationKeys, ContactKeys } from 'models/keys';

export const followOrganization = async (org_uuid: string, user: string) => {
  const organization = await Organizations.findOne({
    where: {
      [OrganizationKeys.UUID]: org_uuid,
    }
  });

  const contact = await Contacts.findOne({
    where: {
      [ContactKeys.UUID]: user,
    },
  });

  await organization.addFollowContact(contact);

  return organization;
};

const followOrganizationController: RequestHandler = async (req, res, next) => {
  try {
    const organization = await followOrganization(req.body.org_uuid, req.user.uuid);

    res.json(organization);
  } catch (err) {
    next(err);
  }
};

export default followOrganizationController;
