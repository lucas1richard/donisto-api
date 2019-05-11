import { RequestHandler } from 'express';
import OrganizationsContacts from 'models/OrganizationsContacts';
import foreignKeys from 'database/foreignKeys';
import Organizations from 'models/Organization';
import { OrganizationKeys } from 'models/Organization/types';
import { Op } from 'sequelize';
import OrganizationsContactsAttributes from 'models/OrganizationsContacts/types/Attributes';

const getContactOrganizationsController: RequestHandler = async (req, res, next) => {
  try {
    const organizationUuids = await OrganizationsContacts.findAll({
      where: {
        [foreignKeys.CONTACT]: res.locals.uuid
      }
    });

    const organizations = await Organizations.findAll({
      where: {
        [OrganizationKeys.UUID]: {
          [Op.in]: organizationUuids.map((orguuid: OrganizationsContactsAttributes) => {
            return orguuid[foreignKeys.ORGANIZATION];
          })
        }
      }
    });

    res.json(organizations);
  } catch (err) {
    next(err);
  }
};

export default getContactOrganizationsController;
