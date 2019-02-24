import {
  Request,
  Response
} from 'express';
import Organization from 'models/Organization';
import OrganizationKeys from 'models/Organization/types/OrganizationKeys';
import Contacts from 'models/Contact';
import ContactKeys from 'models/Contact/types/ContactKeys';
import { NextFunction } from 'connect';
import OrganizationsContacts from 'models/OrganizationsContacts';

const createOrganizationController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const organization = await Organization.create({
      [OrganizationKeys.NAME]: req.body.name
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
