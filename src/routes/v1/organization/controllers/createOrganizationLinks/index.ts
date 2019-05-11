import { RequestHandler } from 'express';
import Organizations from 'models/Organization';
import * as Sequelize from 'sequelize';
import Links from 'models/Links';
import { OrganizationKeys } from 'models/Organization/types';
import seqInstance from 'config/database/conn';

const createOrganizationLinksController: RequestHandler =  async (req, res, next) => {
  let transaction: Sequelize.Transaction;
  try {
    transaction = await seqInstance.transaction();
    const { links, organization_uuid } = req.body;
    const organization = await Organizations.findByPrimary(organization_uuid);
    const linksInstances = await Links.bulkCreate(links, { transaction });
    await Promise.all(
      linksInstances.map((linkInstance) => organization.addLink(linkInstance, { transaction }))
    );
    await transaction.commit();
    const orgWithLinks = await Organizations.findOne({
      where: {
        [OrganizationKeys.UUID]: organization_uuid
      },
      include: [
        Links
      ]
    });
    res.json(orgWithLinks);
  } catch (err) {
    if (transaction) {
      await transaction.rollback();
    }
    next(err);
  }
};

export default createOrganizationLinksController;
