import { RequestHandler } from 'express';
import { Organizations, Contacts } from 'models';
import Sequelize from 'sequelize';
import sequelize from 'database/conn';
import ModelAliases from 'models/aliases';
import foreignKeys from 'config/database/foreignKeys';
import { OrganizationKeys } from 'models/keys';
import { contactOrgFollows } from 'models/ContactOrgFollows';
import { organizationsContacts } from 'models/OrganizationsContacts';

const { Op } = Sequelize;

export const getDiscoverOrganizations = async (userUuid: string, limit: number = 10) => {
  // Filter out orgs that the user has already followed or rejected
  const alreadyFollowedOrRejectedFilter: Sequelize.Includeable = {
    model: Contacts,
    attributes: [],
    required: false,
    as: ModelAliases.FollowContacts,
    through: {
      where: {
        [foreignKeys.CONTACT]: {
          [Op.not]: userUuid,
        }
      }
    },
  };

  // Filter out orgs that the user is a part-of
  const alreadyMemberFilter: Sequelize.Includeable = {
    model: Contacts,
    attributes: [],
    required: true,
    through: {
      where: {
        [foreignKeys.CONTACT]: {
          [Op.not]: userUuid,
        }
      }
    },
  };

  const organizations = await Organizations.findAll({
    // include: [
    //   // alreadyFollowedOrRejectedFilter,
    //   alreadyMemberFilter
    // ],
    where: {
      [Op.and]: [{
        [OrganizationKeys.UUID]: {
          [Op.notIn]: sequelize.literal(`(
            select
              "${foreignKeys.ORGANIZATION}"
            from "${contactOrgFollows}"
            where "${foreignKeys.CONTACT}" = '${userUuid}'
          )`)
        }
        }, {
        [OrganizationKeys.UUID]: {
          [Op.notIn]: sequelize.literal(`(
            select
              "${foreignKeys.ORGANIZATION}"
            from "${organizationsContacts}"
            where "${foreignKeys.CONTACT}" = '${userUuid}'
          )`)
        },
      }],
    },
    limit,
  });

  return organizations;
};

const getDiscoverOrganizationsController: RequestHandler = async (req, res, next) => {
  try {
    const organizations = await getDiscoverOrganizations(req.user.uuid, 10);

    res.json(organizations);
  } catch (err) {
    next(err);
  }
};

export default getDiscoverOrganizationsController;