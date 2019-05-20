import { RequestHandler } from 'express';
import { Organizations, OrganizationsContacts, Donations, Contacts, Causes, Links } from 'models';
import { OrganizationKeys, ContactKeys, DonationKeys } from 'models/keys';
import foreignKeys from 'database/foreignKeys';
import sequelize from 'database/conn';

const getOrganizationDetailController: RequestHandler = async (req, res, next) => {
  try {
    const { uuid } = res.locals;
    const { organization_uuid } = req.body;
    const organization = await Organizations.findOne({
      where: {
        [OrganizationKeys.UUID]: organization_uuid
      },
      include: [
        Links,
        {
          model: Causes,
          // attributes: [
          //   sequelize.fn('sum', sequelize.col('causes->donations.uuid')),
          //   'totalDonationAmount'
          // ],
          include: [{
            model: Donations,
            // attributes: [
            //   [sequelize.fn('sum', sequelize.col(DonationKeys.AMOUNT)), 'totalAmount']
            // ],
            // include: [{
            //   model: Contacts,
            //   attributes: [
            //     ContactKeys.UUID,
            //     ContactKeys.FIRST_NAME,
            //     ContactKeys.LAST_NAME,
            //     ContactKeys.EMAIL,
            //   ]
            // }]
          }]
        }
      ],
      // group: [
      //   'organizations.uuid',
      //   'links.uuid',
      //   'causes.uuid',
      //   'causes->donations.uuid',
      //   // 'causes->donations->contact.uuid'
      // ],
    });

    const contactIsMember = await OrganizationsContacts.findOne({
      where: {
        [foreignKeys.ORGANIZATION]: organization_uuid,
        [foreignKeys.CONTACT]: uuid
      }
    });

    res.json({
      ...organization.get(),
      contactIsMember: !!contactIsMember,
    });
  } catch (err) {
    next(err);
  }
};

export default getOrganizationDetailController;
