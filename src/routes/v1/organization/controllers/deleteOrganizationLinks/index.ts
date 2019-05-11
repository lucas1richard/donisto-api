import { RequestHandler } from 'express';
import Organizations from 'models/Organization';
import Links from 'models/Links';
import { OrganizationKeys } from 'models/Organization/types';
import seqInstance from 'config/database/conn';
import LinksKeys from 'models/Links/types/LinksKeys';
import foreignKeys from 'database/foreignKeys';

const { Op } = seqInstance;

const deleteOrganizationLinksController: RequestHandler =  async (req, res, next) => {
  try {
    const {
      link_uuids,
      organization_uuid
    } = req.body;

    await Links.destroy({
      where: {
        [LinksKeys.UUID]: {
          [Op.in]: link_uuids
        },
        [foreignKeys.ORGANIZATION]: organization_uuid
      }
    });
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
    next(err);
  }
};

export default deleteOrganizationLinksController;
