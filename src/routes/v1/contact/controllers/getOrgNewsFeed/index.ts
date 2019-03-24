import foreignKeys from 'database/foreignKeys';
import OrganizationsContacts from 'models/OrganizationsContacts';
import { Op } from 'sequelize';
import OrganizationsContactsAttributes from 'models/OrganizationsContacts/types/Attributes';
import { NextFunction, Response, Request } from 'express';
import NewsFeed from 'models/NewsFeed';

async function getOrgNewsFeedController(req: Request, res: Response, next: NextFunction) {
  try {
    // get organizations associated to the contact
    const organizationUuids = await OrganizationsContacts.findAll({
      where: {
        [foreignKeys.CONTACT]: res.locals.uuid
      }
    });

    // get news feeds associated to all organizations
    const newsFeeds = await NewsFeed.findAll({
      where: {
        [foreignKeys.ORGANIZATION]: {
          [Op.in]: organizationUuids.map((orguuid: OrganizationsContactsAttributes) => {
            return orguuid[foreignKeys.ORGANIZATION];
          })
        }
      }
    });

    res.json(newsFeeds);
  } catch (err) {
    next(err);
  }
}

export default getOrgNewsFeedController;
