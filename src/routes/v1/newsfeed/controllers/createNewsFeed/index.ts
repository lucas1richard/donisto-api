import { RequestHandler } from 'express';
import { Op } from 'sequelize';
import { NewsFeed, Organizations, NewsFeedCauses, Causes } from 'models';
import { NewsFeedKeys, CauseKeys, OrganizationKeys } from 'models/keys';
import seqInstance from 'config/database/conn';
import { bodySchema } from './validate';

const createNewsFeedController: RequestHandler = async (req, res, next) => {
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

    const causes = await Causes.findAll({
      where: {
        [CauseKeys.UUID]: {
          [Op.in]: req.body.causesUuid
        }
      }
    });

    for (let ix = 0; ix < causes.length; ix += 1) {
      await newsFeed.addCause(causes[ix], { through: NewsFeedCauses, transaction });
    }

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
