import { Request, Response } from 'express';
import Cause from 'models/Cause';
import CauseKeys from 'models/Cause/types/CauseKeys';
import Organizations from 'models/Organization';
import { OrganizationKeys } from 'models/Organization/types';
import { NextFunction } from 'connect';
import seqInstance from 'config/database/conn';
import { bodySchema } from './validate';

const createCauseController = async (req: Request, res: Response, next: NextFunction) => {
  let transaction;
  try {
    await bodySchema.validate(req.body);

    transaction = await seqInstance.transaction();

    const cause = await Cause.create({
      [CauseKeys.NAME]: req.body.name
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
