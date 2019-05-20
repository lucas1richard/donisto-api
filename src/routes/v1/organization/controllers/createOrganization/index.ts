import { RequestHandler } from 'express';
import { Organizations, Contacts, OrganizationsContacts } from 'models';
import { OrganizationKeys, ContactKeys } from 'models/keys';

const createOrganizationController: RequestHandler = async (req, res, next) => {
  try {
    const organization = await Organizations.create({
      [OrganizationKeys.NAME]: req.body.name,
      [OrganizationKeys.CITY]: req.body.city,
      [OrganizationKeys.STATE]: req.body.state,
      [OrganizationKeys.ZIP]: req.body.zip,
      [OrganizationKeys.MISSION]: req.body.mission,
    });

    const contact = await Contacts.findOne({
      where: {
        [ContactKeys.UUID]: res.locals.uuid
      }
    });

    organization.addContact(contact, { through: OrganizationsContacts });

    res.json({
      organization
    });
  } catch (err) {
    next(err);
  }
};

export default createOrganizationController;
