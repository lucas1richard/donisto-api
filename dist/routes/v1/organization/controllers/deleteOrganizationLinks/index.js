"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Organization = _interopRequireDefault(require("../../../../../models/Organization"));

var _Links = _interopRequireDefault(require("../../../../../models/Links"));

var _types = require("../../../../../models/Organization/types");

var _conn = _interopRequireDefault(require("../../../../../config/database/conn"));

var _LinksKeys = _interopRequireDefault(require("../../../../../models/Links/types/LinksKeys"));

var _foreignKeys = _interopRequireDefault(require("../../../../../database/foreignKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Op
} = _conn.default;

const deleteOrganizationLinksController = async (req, res, next) => {
  try {
    const {
      link_uuids,
      organization_uuid
    } = req.body;
    await _Links.default.destroy({
      where: {
        [_LinksKeys.default.UUID]: {
          [Op.in]: link_uuids
        },
        [_foreignKeys.default.ORGANIZATION]: organization_uuid
      }
    });
    const orgWithLinks = await _Organization.default.findOne({
      where: {
        [_types.OrganizationKeys.UUID]: organization_uuid
      },
      include: [_Links.default]
    });
    res.json(orgWithLinks);
  } catch (err) {
    next(err);
  }
};

var _default = deleteOrganizationLinksController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvb3JnYW5pemF0aW9uL2NvbnRyb2xsZXJzL2RlbGV0ZU9yZ2FuaXphdGlvbkxpbmtzL2luZGV4LnRzIl0sIm5hbWVzIjpbIk9wIiwic2VxSW5zdGFuY2UiLCJkZWxldGVPcmdhbml6YXRpb25MaW5rc0NvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwibGlua191dWlkcyIsIm9yZ2FuaXphdGlvbl91dWlkIiwiYm9keSIsIkxpbmtzIiwiZGVzdHJveSIsIndoZXJlIiwiTGlua3NLZXlzIiwiVVVJRCIsImluIiwiZm9yZWlnbktleXMiLCJPUkdBTklaQVRJT04iLCJvcmdXaXRoTGlua3MiLCJPcmdhbml6YXRpb25zIiwiZmluZE9uZSIsIk9yZ2FuaXphdGlvbktleXMiLCJpbmNsdWRlIiwianNvbiIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTTtBQUFFQSxFQUFBQTtBQUFGLElBQVNDLGFBQWY7O0FBRUEsTUFBTUMsaUNBQWlELEdBQUksT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixLQUEwQjtBQUNuRixNQUFJO0FBQ0YsVUFBTTtBQUNKQyxNQUFBQSxVQURJO0FBRUpDLE1BQUFBO0FBRkksUUFHRkosR0FBRyxDQUFDSyxJQUhSO0FBS0EsVUFBTUMsZUFBTUMsT0FBTixDQUFjO0FBQ2xCQyxNQUFBQSxLQUFLLEVBQUU7QUFDTCxTQUFDQyxtQkFBVUMsSUFBWCxHQUFrQjtBQUNoQixXQUFDYixFQUFFLENBQUNjLEVBQUosR0FBU1I7QUFETyxTQURiO0FBSUwsU0FBQ1MscUJBQVlDLFlBQWIsR0FBNEJUO0FBSnZCO0FBRFcsS0FBZCxDQUFOO0FBUUEsVUFBTVUsWUFBWSxHQUFHLE1BQU1DLHNCQUFjQyxPQUFkLENBQXNCO0FBQy9DUixNQUFBQSxLQUFLLEVBQUU7QUFDTCxTQUFDUyx3QkFBaUJQLElBQWxCLEdBQXlCTjtBQURwQixPQUR3QztBQUkvQ2MsTUFBQUEsT0FBTyxFQUFFLENBQ1BaLGNBRE87QUFKc0MsS0FBdEIsQ0FBM0I7QUFRQUwsSUFBQUEsR0FBRyxDQUFDa0IsSUFBSixDQUFTTCxZQUFUO0FBQ0QsR0F2QkQsQ0F1QkUsT0FBT00sR0FBUCxFQUFZO0FBQ1psQixJQUFBQSxJQUFJLENBQUNrQixHQUFELENBQUo7QUFDRDtBQUNGLENBM0JEOztlQTZCZXJCLGlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBPcmdhbml6YXRpb25zIGZyb20gJ21vZGVscy9Pcmdhbml6YXRpb24nO1xuaW1wb3J0IExpbmtzIGZyb20gJ21vZGVscy9MaW5rcyc7XG5pbXBvcnQgeyBPcmdhbml6YXRpb25LZXlzIH0gZnJvbSAnbW9kZWxzL09yZ2FuaXphdGlvbi90eXBlcyc7XG5pbXBvcnQgc2VxSW5zdGFuY2UgZnJvbSAnY29uZmlnL2RhdGFiYXNlL2Nvbm4nO1xuaW1wb3J0IExpbmtzS2V5cyBmcm9tICdtb2RlbHMvTGlua3MvdHlwZXMvTGlua3NLZXlzJztcbmltcG9ydCBmb3JlaWduS2V5cyBmcm9tICdkYXRhYmFzZS9mb3JlaWduS2V5cyc7XG5cbmNvbnN0IHsgT3AgfSA9IHNlcUluc3RhbmNlO1xuXG5jb25zdCBkZWxldGVPcmdhbml6YXRpb25MaW5rc0NvbnRyb2xsZXI6IFJlcXVlc3RIYW5kbGVyID0gIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxpbmtfdXVpZHMsXG4gICAgICBvcmdhbml6YXRpb25fdXVpZFxuICAgIH0gPSByZXEuYm9keTtcblxuICAgIGF3YWl0IExpbmtzLmRlc3Ryb3koe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgW0xpbmtzS2V5cy5VVUlEXToge1xuICAgICAgICAgIFtPcC5pbl06IGxpbmtfdXVpZHNcbiAgICAgICAgfSxcbiAgICAgICAgW2ZvcmVpZ25LZXlzLk9SR0FOSVpBVElPTl06IG9yZ2FuaXphdGlvbl91dWlkXG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3Qgb3JnV2l0aExpbmtzID0gYXdhaXQgT3JnYW5pemF0aW9ucy5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIFtPcmdhbml6YXRpb25LZXlzLlVVSURdOiBvcmdhbml6YXRpb25fdXVpZFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgTGlua3NcbiAgICAgIF1cbiAgICB9KTtcbiAgICByZXMuanNvbihvcmdXaXRoTGlua3MpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZU9yZ2FuaXphdGlvbkxpbmtzQ29udHJvbGxlcjtcbiJdfQ==