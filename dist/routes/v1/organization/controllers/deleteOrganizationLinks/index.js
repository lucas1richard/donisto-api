"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../../../../models");

var _keys = require("../../../../../models/keys");

var _conn = _interopRequireDefault(require("../../../../../config/database/conn"));

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
    await _models.Links.destroy({
      where: {
        [_keys.LinksKeys.UUID]: {
          [Op.in]: link_uuids
        },
        [_foreignKeys.default.ORGANIZATION]: organization_uuid
      }
    });
    const orgWithLinks = await _models.Organizations.findOne({
      where: {
        [_keys.OrganizationKeys.UUID]: organization_uuid
      },
      include: [_models.Links]
    });
    res.json(orgWithLinks);
  } catch (err) {
    next(err);
  }
};

var _default = deleteOrganizationLinksController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvb3JnYW5pemF0aW9uL2NvbnRyb2xsZXJzL2RlbGV0ZU9yZ2FuaXphdGlvbkxpbmtzL2luZGV4LnRzIl0sIm5hbWVzIjpbIk9wIiwic2VxSW5zdGFuY2UiLCJkZWxldGVPcmdhbml6YXRpb25MaW5rc0NvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwibGlua191dWlkcyIsIm9yZ2FuaXphdGlvbl91dWlkIiwiYm9keSIsIkxpbmtzIiwiZGVzdHJveSIsIndoZXJlIiwiTGlua3NLZXlzIiwiVVVJRCIsImluIiwiZm9yZWlnbktleXMiLCJPUkdBTklaQVRJT04iLCJvcmdXaXRoTGlua3MiLCJPcmdhbml6YXRpb25zIiwiZmluZE9uZSIsIk9yZ2FuaXphdGlvbktleXMiLCJpbmNsdWRlIiwianNvbiIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTTtBQUFFQSxFQUFBQTtBQUFGLElBQVNDLGFBQWY7O0FBRUEsTUFBTUMsaUNBQWlELEdBQUksT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixLQUEwQjtBQUNuRixNQUFJO0FBQ0YsVUFBTTtBQUNKQyxNQUFBQSxVQURJO0FBRUpDLE1BQUFBO0FBRkksUUFHRkosR0FBRyxDQUFDSyxJQUhSO0FBS0EsVUFBTUMsY0FBTUMsT0FBTixDQUFjO0FBQ2xCQyxNQUFBQSxLQUFLLEVBQUU7QUFDTCxTQUFDQyxnQkFBVUMsSUFBWCxHQUFrQjtBQUNoQixXQUFDYixFQUFFLENBQUNjLEVBQUosR0FBU1I7QUFETyxTQURiO0FBSUwsU0FBQ1MscUJBQVlDLFlBQWIsR0FBNEJUO0FBSnZCO0FBRFcsS0FBZCxDQUFOO0FBUUEsVUFBTVUsWUFBWSxHQUFHLE1BQU1DLHNCQUFjQyxPQUFkLENBQXNCO0FBQy9DUixNQUFBQSxLQUFLLEVBQUU7QUFDTCxTQUFDUyx1QkFBaUJQLElBQWxCLEdBQXlCTjtBQURwQixPQUR3QztBQUkvQ2MsTUFBQUEsT0FBTyxFQUFFLENBQ1BaLGFBRE87QUFKc0MsS0FBdEIsQ0FBM0I7QUFRQUwsSUFBQUEsR0FBRyxDQUFDa0IsSUFBSixDQUFTTCxZQUFUO0FBQ0QsR0F2QkQsQ0F1QkUsT0FBT00sR0FBUCxFQUFZO0FBQ1psQixJQUFBQSxJQUFJLENBQUNrQixHQUFELENBQUo7QUFDRDtBQUNGLENBM0JEOztlQTZCZXJCLGlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IE9yZ2FuaXphdGlvbnMsIExpbmtzIH0gZnJvbSAnbW9kZWxzJztcbmltcG9ydCB7IE9yZ2FuaXphdGlvbktleXMsIExpbmtzS2V5cyB9IGZyb20gJ21vZGVscy9rZXlzJztcbmltcG9ydCBzZXFJbnN0YW5jZSBmcm9tICdjb25maWcvZGF0YWJhc2UvY29ubic7XG5pbXBvcnQgZm9yZWlnbktleXMgZnJvbSAnZGF0YWJhc2UvZm9yZWlnbktleXMnO1xuXG5jb25zdCB7IE9wIH0gPSBzZXFJbnN0YW5jZTtcblxuY29uc3QgZGVsZXRlT3JnYW5pemF0aW9uTGlua3NDb250cm9sbGVyOiBSZXF1ZXN0SGFuZGxlciA9ICBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7XG4gICAgICBsaW5rX3V1aWRzLFxuICAgICAgb3JnYW5pemF0aW9uX3V1aWRcbiAgICB9ID0gcmVxLmJvZHk7XG5cbiAgICBhd2FpdCBMaW5rcy5kZXN0cm95KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIFtMaW5rc0tleXMuVVVJRF06IHtcbiAgICAgICAgICBbT3AuaW5dOiBsaW5rX3V1aWRzXG4gICAgICAgIH0sXG4gICAgICAgIFtmb3JlaWduS2V5cy5PUkdBTklaQVRJT05dOiBvcmdhbml6YXRpb25fdXVpZFxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IG9yZ1dpdGhMaW5rcyA9IGF3YWl0IE9yZ2FuaXphdGlvbnMuZmluZE9uZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbT3JnYW5pemF0aW9uS2V5cy5VVUlEXTogb3JnYW5pemF0aW9uX3V1aWRcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiBbXG4gICAgICAgIExpbmtzXG4gICAgICBdXG4gICAgfSk7XG4gICAgcmVzLmpzb24ob3JnV2l0aExpbmtzKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVPcmdhbml6YXRpb25MaW5rc0NvbnRyb2xsZXI7XG4iXX0=