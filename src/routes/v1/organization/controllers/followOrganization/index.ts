import { RequestHandler } from 'express';
import { Organizations, Contacts, OrganizationsContacts } from 'models';
import { OrganizationKeys, ContactKeys } from 'models/keys';
import ContactOrgFollows from 'models/ContactOrgFollows';

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

    await organization.addContact(contact, { through: ContactOrgFollows });

    res.json(organization);
  } catch (err) {
    next(err);
  }
};

export default followOrganizationController;
