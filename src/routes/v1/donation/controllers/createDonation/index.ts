import { Request, Response, NextFunction } from 'express';
import Donation from 'models/Donation';
import Contacts from 'models/Contact';
import ContactKeys from 'models/Contact/types/ContactKeys';
import Cause from 'models/Cause';
import CauseKeys from 'models/Cause/types/CauseKeys';
import seqInstance from 'config/database/conn';
import DonationKeys from 'models/Donation/types/DonationKeys';
// import { bodySchema } from './validate';

const createDonationController = async (req: Request, res: Response, next: NextFunction) => {
  let transaction;
  try {
    // await bodySchema.validate(req.body);
    transaction = await seqInstance.transaction();
    const donation = await Donation.create({
      [DonationKeys.AMOUNT]: req.body.amount,
      [DonationKeys.IS_ANONYMOUS]: req.body.is_anonymous,
      [DonationKeys.MESSAGE]: req.body.message,
    }, { transaction });
    const contact = await Contacts.findOne({
      where: {
        [ContactKeys.UUID]: res.locals.uuid
      }
    });
    const cause = await Cause.findOne({
      where: {
        [CauseKeys.UUID]: req.body.cause_uuid
      }
    });
    await donation.setContact(contact, { transaction });
    await donation.setCause(cause, { transaction });
    await transaction.commit();
    res.send('Create Donation');
  } catch (err) {
    if (transaction) {
      await transaction.rollback();
    }
    next(err);
  }
};

export default createDonationController;
