import { RequestHandler } from 'express';
import { Causes, Organizations } from 'models';
import { CauseKeys, OrganizationKeys } from 'models/keys';
import seqInstance from 'config/database/conn';
import { bodySchema } from './validate';

const createCauseController: RequestHandler = async (req, res, next) => {
  let transaction;
  try {
    await bodySchema.validate(req.body);

    transaction = await seqInstance.transaction();

    const cause = await Causes.create({
      [CauseKeys.NAME]: req.body.name,
      [CauseKeys.SUGGESTED_DONATION]: req.body.suggested_amount,
      [CauseKeys.GOAL_AMOUNT]: req.body.goal_amount
    }, { transaction });

    const organization = await Organizations.findOne({
      where: {
        [OrganizationKeys.UUID]: req.body.organizationUuid
      }
    });

    await cause.setOrganization(organization, { transaction });

    await transaction.commit();

    res.status(201).json(cause);
  } catch (err) {
    if (transaction) {
      transaction.rollback();
    }
    next(err);
  }
};

export default createCauseController;
