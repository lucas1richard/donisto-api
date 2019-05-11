import { RequestHandler } from 'express';
import Organization from 'models/Organization';
import { OrganizationKeys } from 'models/Organization/types';
import Contacts from 'models/Contact';
import ContactKeys from 'models/Contact/types/ContactKeys';
import OrganizationsContacts from 'models/OrganizationsContacts';

const createOrganizationController: RequestHandler = async (req, res, next) => {
  try {
    const organization = await Organization.create({
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
