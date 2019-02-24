import { Request, Response } from 'express';
import NewsFeed from 'models/NewsFeed';
import NewsFeedKeys from 'models/NewsFeed/types/NewsFeedKeys';
import Organizations from 'models/Organization';
import { OrganizationKeys } from 'models/Organization/types';
import { NextFunction } from 'connect';
import seqInstance from 'config/database/conn';
import { bodySchema } from './validate';

const createNewsFeedController = async (req: Request, res: Response, next: NextFunction) => {
  let transaction;
  try {
    await bodySchema.validate(req.body);

    transaction = await seqInstance.transaction();

    const newsFeed = await NewsFeed.create({
      [NewsFeedKeys.TITLE]: req.body.title,
      [NewsFeedKeys.TEXT]: req.body.story
    }, { transaction });

    const organization = await Organizations.findOne({
      where: {
        [OrganizationKeys.UUID]: req.body.organizationUuid
      }
    });

    await newsFeed.setOrganization(organization, { transaction });

    await transaction.commit();

    res.status(201).json(newsFeed);
  } catch (err) {
    if (transaction) {
      transaction.rollback();
    }
    next(err);
  }
};

export default createNewsFeedController;
