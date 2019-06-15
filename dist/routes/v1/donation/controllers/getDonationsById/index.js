"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _conn = _interopRequireDefault(require("../../../../../database/conn"));

var _models = require("../../../../../models");

var _keys = require("../../../../../models/keys");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Op
} = _conn.default;

const getDonationsByIdController = async (req, res, next) => {
  try {
    const donations = await _models.Donations.findAll({
      where: {
        [_keys.DonationKeys.UUID]: {
          [Op.in]: req.body.ids
        }
      }
    });
    res.json(donations);
  } catch (err) {
    next(err);
  }
};

var _default = getDonationsByIdController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvZG9uYXRpb24vY29udHJvbGxlcnMvZ2V0RG9uYXRpb25zQnlJZC9pbmRleC50cyJdLCJuYW1lcyI6WyJPcCIsInNlcXVlbGl6ZSIsImdldERvbmF0aW9uc0J5SWRDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImRvbmF0aW9ucyIsIkRvbmF0aW9ucyIsImZpbmRBbGwiLCJ3aGVyZSIsIkRvbmF0aW9uS2V5cyIsIlVVSUQiLCJpbiIsImJvZHkiLCJpZHMiLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNO0FBQUVBLEVBQUFBO0FBQUYsSUFBU0MsYUFBZjs7QUFFQSxNQUFNQywwQkFBMEMsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQzNFLE1BQUk7QUFDRixVQUFNQyxTQUFTLEdBQUcsTUFBTUMsa0JBQVVDLE9BQVYsQ0FBa0I7QUFDeENDLE1BQUFBLEtBQUssRUFBRTtBQUNMLFNBQUNDLG1CQUFhQyxJQUFkLEdBQXFCO0FBQ25CLFdBQUNYLEVBQUUsQ0FBQ1ksRUFBSixHQUFTVCxHQUFHLENBQUNVLElBQUosQ0FBU0M7QUFEQztBQURoQjtBQURpQyxLQUFsQixDQUF4QjtBQU9BVixJQUFBQSxHQUFHLENBQUNXLElBQUosQ0FBU1QsU0FBVDtBQUNELEdBVEQsQ0FTRSxPQUFPVSxHQUFQLEVBQVk7QUFDWlgsSUFBQUEsSUFBSSxDQUFDVyxHQUFELENBQUo7QUFDRDtBQUNGLENBYkQ7O2VBZWVkLDBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBzZXF1ZWxpemUgZnJvbSAnZGF0YWJhc2UvY29ubic7XG5pbXBvcnQgeyBEb25hdGlvbnMgfSBmcm9tICdtb2RlbHMnO1xuaW1wb3J0IHsgRG9uYXRpb25LZXlzIH0gZnJvbSAnbW9kZWxzL2tleXMnO1xuXG5jb25zdCB7IE9wIH0gPSBzZXF1ZWxpemU7XG5cbmNvbnN0IGdldERvbmF0aW9uc0J5SWRDb250cm9sbGVyOiBSZXF1ZXN0SGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRvbmF0aW9ucyA9IGF3YWl0IERvbmF0aW9ucy5maW5kQWxsKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIFtEb25hdGlvbktleXMuVVVJRF06IHtcbiAgICAgICAgICBbT3AuaW5dOiByZXEuYm9keS5pZHMsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVzLmpzb24oZG9uYXRpb25zKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXREb25hdGlvbnNCeUlkQ29udHJvbGxlcjtcbiJdfQ==