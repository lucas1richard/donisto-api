"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../../../../models");

var _keys = require("../../../../../models/keys");

var _conn = _interopRequireDefault(require("../../../../../config/database/conn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createOrganizationLinksController = async (req, res, next) => {
  let transaction;

  try {
    transaction = await _conn.default.transaction();
    const {
      links,
      organization_uuid
    } = req.body;
    const organization = await _models.Organizations.findByPk(organization_uuid);
    const linksInstances = await _models.Links.bulkCreate(links, {
      transaction
    });
    await organization.addLinks(linksInstances, {
      transaction
    });
    await transaction.commit();
    const orgWithLinks = await _models.Organizations.findOne({
      where: {
        [_keys.OrganizationKeys.UUID]: organization_uuid
      },
      include: [_models.Links]
    });
    res.json(orgWithLinks);
  } catch (err) {
    if (transaction) {
      await transaction.rollback();
    }

    next(err);
  }
};

var _default = createOrganizationLinksController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvb3JnYW5pemF0aW9uL2NvbnRyb2xsZXJzL2NyZWF0ZU9yZ2FuaXphdGlvbkxpbmtzL2luZGV4LnRzIl0sIm5hbWVzIjpbImNyZWF0ZU9yZ2FuaXphdGlvbkxpbmtzQ29udHJvbGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJ0cmFuc2FjdGlvbiIsInNlcUluc3RhbmNlIiwibGlua3MiLCJvcmdhbml6YXRpb25fdXVpZCIsImJvZHkiLCJvcmdhbml6YXRpb24iLCJPcmdhbml6YXRpb25zIiwiZmluZEJ5UGsiLCJsaW5rc0luc3RhbmNlcyIsIkxpbmtzIiwiYnVsa0NyZWF0ZSIsImFkZExpbmtzIiwiY29tbWl0Iiwib3JnV2l0aExpbmtzIiwiZmluZE9uZSIsIndoZXJlIiwiT3JnYW5pemF0aW9uS2V5cyIsIlVVSUQiLCJpbmNsdWRlIiwianNvbiIsImVyciIsInJvbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxNQUFNQSxpQ0FBaUQsR0FBSSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQ25GLE1BQUlDLFdBQUo7O0FBQ0EsTUFBSTtBQUNGQSxJQUFBQSxXQUFXLEdBQUcsTUFBTUMsY0FBWUQsV0FBWixFQUFwQjtBQUNBLFVBQU07QUFBRUUsTUFBQUEsS0FBRjtBQUFTQyxNQUFBQTtBQUFULFFBQStCTixHQUFHLENBQUNPLElBQXpDO0FBQ0EsVUFBTUMsWUFBWSxHQUFHLE1BQU1DLHNCQUFjQyxRQUFkLENBQXVCSixpQkFBdkIsQ0FBM0I7QUFDQSxVQUFNSyxjQUFjLEdBQUcsTUFBTUMsY0FBTUMsVUFBTixDQUFpQlIsS0FBakIsRUFBd0I7QUFBRUYsTUFBQUE7QUFBRixLQUF4QixDQUE3QjtBQUNBLFVBQU1LLFlBQVksQ0FBQ00sUUFBYixDQUFzQkgsY0FBdEIsRUFBc0M7QUFBRVIsTUFBQUE7QUFBRixLQUF0QyxDQUFOO0FBRUEsVUFBTUEsV0FBVyxDQUFDWSxNQUFaLEVBQU47QUFFQSxVQUFNQyxZQUFZLEdBQUcsTUFBTVAsc0JBQWNRLE9BQWQsQ0FBc0I7QUFDL0NDLE1BQUFBLEtBQUssRUFBRTtBQUNMLFNBQUNDLHVCQUFpQkMsSUFBbEIsR0FBeUJkO0FBRHBCLE9BRHdDO0FBSS9DZSxNQUFBQSxPQUFPLEVBQUUsQ0FDUFQsYUFETztBQUpzQyxLQUF0QixDQUEzQjtBQVFBWCxJQUFBQSxHQUFHLENBQUNxQixJQUFKLENBQVNOLFlBQVQ7QUFDRCxHQWxCRCxDQWtCRSxPQUFPTyxHQUFQLEVBQVk7QUFDWixRQUFJcEIsV0FBSixFQUFpQjtBQUNmLFlBQU1BLFdBQVcsQ0FBQ3FCLFFBQVosRUFBTjtBQUNEOztBQUNEdEIsSUFBQUEsSUFBSSxDQUFDcUIsR0FBRCxDQUFKO0FBQ0Q7QUFDRixDQTFCRDs7ZUE0QmV4QixpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBPcmdhbml6YXRpb25zLCBMaW5rcyB9IGZyb20gJ21vZGVscyc7XG5pbXBvcnQgeyBPcmdhbml6YXRpb25LZXlzIH0gZnJvbSAnbW9kZWxzL2tleXMnO1xuaW1wb3J0ICogYXMgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgc2VxSW5zdGFuY2UgZnJvbSAnY29uZmlnL2RhdGFiYXNlL2Nvbm4nO1xuXG5jb25zdCBjcmVhdGVPcmdhbml6YXRpb25MaW5rc0NvbnRyb2xsZXI6IFJlcXVlc3RIYW5kbGVyID0gIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBsZXQgdHJhbnNhY3Rpb246IFNlcXVlbGl6ZS5UcmFuc2FjdGlvbjtcbiAgdHJ5IHtcbiAgICB0cmFuc2FjdGlvbiA9IGF3YWl0IHNlcUluc3RhbmNlLnRyYW5zYWN0aW9uKCk7XG4gICAgY29uc3QgeyBsaW5rcywgb3JnYW5pemF0aW9uX3V1aWQgfSA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IG9yZ2FuaXphdGlvbiA9IGF3YWl0IE9yZ2FuaXphdGlvbnMuZmluZEJ5UGsob3JnYW5pemF0aW9uX3V1aWQpO1xuICAgIGNvbnN0IGxpbmtzSW5zdGFuY2VzID0gYXdhaXQgTGlua3MuYnVsa0NyZWF0ZShsaW5rcywgeyB0cmFuc2FjdGlvbiB9KTtcbiAgICBhd2FpdCBvcmdhbml6YXRpb24uYWRkTGlua3MobGlua3NJbnN0YW5jZXMsIHsgdHJhbnNhY3Rpb24gfSk7XG5cbiAgICBhd2FpdCB0cmFuc2FjdGlvbi5jb21taXQoKTtcblxuICAgIGNvbnN0IG9yZ1dpdGhMaW5rcyA9IGF3YWl0IE9yZ2FuaXphdGlvbnMuZmluZE9uZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbT3JnYW5pemF0aW9uS2V5cy5VVUlEXTogb3JnYW5pemF0aW9uX3V1aWRcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiBbXG4gICAgICAgIExpbmtzXG4gICAgICBdXG4gICAgfSk7XG4gICAgcmVzLmpzb24ob3JnV2l0aExpbmtzKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKHRyYW5zYWN0aW9uKSB7XG4gICAgICBhd2FpdCB0cmFuc2FjdGlvbi5yb2xsYmFjaygpO1xuICAgIH1cbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU9yZ2FuaXphdGlvbkxpbmtzQ29udHJvbGxlcjtcbiJdfQ==