import { RequestHandler } from 'express';
import Organization from 'models/Organization';
import { OrganizationKeys } from 'models/Organization/types';
import OrganizationsContacts from 'models/OrganizationsContacts';
import foreignKeys from 'database/foreignKeys';
import Links from 'models/Links';

const getOrganizationDetailController: RequestHandler = async (req, res, next) => {
  try {
    const { uuid } = res.locals;
    const { organization_uuid } = req.body;
    const organization = await Organization.findOne({
      where: {
        [OrganizationKeys.UUID]: organization_uuid
      },
      include: [Links]
    });

    const contactIsMember = await OrganizationsContacts.findOne({
      where: {
        [foreignKeys.ORGANIZATION]: organization_uuid,
        [foreignKeys.CONTACT]: uuid
      }
    });
    res.json({
      ...organization.get(),
      contactIsMember: !!contactIsMember
    });
  } catch (err) {
    next(err);
  }
};

export default getOrganizationDetailController;
