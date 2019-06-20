import { RequestHandler } from 'express';
import { NewsFeed, Organizations, Contacts } from 'models';
import { Op } from 'sequelize';
import sequelize from 'database/conn';
import ModelAliases from 'models/aliases';
import foreignKeys from 'database/foreignKeys';
import { ContactOrgFollowsKeys, OrganizationKeys } from 'models/keys';
import { contactOrgFollows } from 'models/ContactOrgFollows';
import { organizationsContacts } from 'models/OrganizationsContacts';

const getNewsFeed = async (userUuid: string, limit = 10) => {
  const newsFeedItems = await NewsFeed.findAll({
    order: [
      ['id', 'DESC']
    ],
    include: [{
      model: Organizations,
      where: {
        [Op.or]: [{
          [OrganizationKeys.UUID]: {
            [Op.in]: sequelize.literal(`(
              select
                "${foreignKeys.ORGANIZATION}"
              from "${contactOrgFollows}"
              where "${foreignKeys.CONTACT}" = '${userUuid}'
                and "${ContactOrgFollowsKeys.REJECTED}" = false
            )`)
          }
        }, {
          [OrganizationKeys.UUID]: {
            [Op.in]: sequelize.literal(`(
              select
                "${foreignKeys.ORGANIZATION}"
              from "${organizationsContacts}"
              where "${foreignKeys.CONTACT}" = '${userUuid}'
            )`)
          }
        }]
      }
    }],
    // include: [{
    //   model: Organizations,
    //   required: true,
    //   include: [{
    //     model: Contacts,
    //     as: ModelAliases.FollowContacts,
    //     required: true,
    //     attributes: [],
    //     through: {
    //       where: {
    //         [foreignKeys.CONTACT]: userUuid,
    //         [ContactOrgFollowsKeys.REJECTED]: false,
    //       },
    //     },
    //   }, {
    //     model: Contacts,
    //     // required: true,
    //     attributes: [],
    //     through: {
    //       where: {
    //         [foreignKeys.CONTACT]: userUuid,
    //       },
    //     },
    //   }]
    // }],
    limit,
  });
  return newsFeedItems;
};

const getNewsFeedController: RequestHandler = async (req, res, next) => {
  try {
    const newsFeedItems = await getNewsFeed(req.user.uuid);
    res.json(newsFeedItems);
  } catch (err) {
    next(err);
  }
};

export default getNewsFeedController;

// select name, rejected, email from contactorgfollows join organizations on (contactorgfollows.organization_uuid = organizations.uuid) join contacts on (contactorgfollows.contact_uuid = contacts.uuid);

