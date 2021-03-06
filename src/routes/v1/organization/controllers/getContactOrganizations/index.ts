import { RequestHandler } from 'express';
import { Op } from 'sequelize';
import foreignKeys from 'database/foreignKeys';
import { OrganizationsContacts, Organizations } from 'models';
import { OrganizationKeys } from 'models/keys';
import OrganizationsContactsAttributes from 'models/OrganizationsContacts/types/Attributes';

const noOrgPlaceholder: any[] = [];

const getContactOrganizationsController: RequestHandler = async (req, res, next) => {
  try {
    const organizationUuids = await OrganizationsContacts.findAll({
      where: {
        [foreignKeys.CONTACT]: req.user.uuid,
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

    res.json(organizations || noOrgPlaceholder);
  } catch (err) {
    next(err);
  }
};

export default getContactOrganizationsController;
