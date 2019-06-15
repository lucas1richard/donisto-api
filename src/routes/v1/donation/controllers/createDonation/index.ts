import { RequestHandler } from 'express';
import { Donations, Contacts, Causes } from 'models';
import { ContactKeys, CauseKeys } from 'models/keys';
import seqInstance from 'config/database/conn';
import DonationKeys from 'models/Donation/types/DonationKeys';
// import { bodySchema } from './validate';

const createDonationController: RequestHandler = async (req, res, next) => {
  let transaction;
  try {
    // await bodySchema.validate(req.body);
    transaction = await seqInstance.transaction();
    const donation = await Donations.create({
      [DonationKeys.AMOUNT]: req.body.amount,
      [DonationKeys.IS_ANONYMOUS]: req.body.is_anonymous,
      [DonationKeys.MESSAGE]: req.body.message,
    }, { transaction });
    const contact = await Contacts.findOne({
      where: {
        [ContactKeys.UUID]: req.user,
      }
    });
    const cause = await Causes.findOne({
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
