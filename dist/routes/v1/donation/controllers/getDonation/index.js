"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../../../../models");

var _foreignKeys = _interopRequireDefault(require("../../../../../config/database/foreignKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getDonationController = async (req, res, next) => {
  try {
    const donations = await _models.Donations.findAll({
      where: {
        [_foreignKeys.default.CONTACT]: req.user
      }
    });
    res.json(donations);
  } catch (err) {
    next(err);
  }
};

var _default = getDonationController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvZG9uYXRpb24vY29udHJvbGxlcnMvZ2V0RG9uYXRpb24vaW5kZXgudHMiXSwibmFtZXMiOlsiZ2V0RG9uYXRpb25Db250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImRvbmF0aW9ucyIsIkRvbmF0aW9ucyIsImZpbmRBbGwiLCJ3aGVyZSIsImZvcmVpZ25LZXlzIiwiQ09OVEFDVCIsInVzZXIiLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxxQkFBcUMsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQ3RFLE1BQUk7QUFDRixVQUFNQyxTQUFTLEdBQUcsTUFBTUMsa0JBQVVDLE9BQVYsQ0FBa0I7QUFDeENDLE1BQUFBLEtBQUssRUFBRTtBQUNMLFNBQUNDLHFCQUFZQyxPQUFiLEdBQXVCUixHQUFHLENBQUNTO0FBRHRCO0FBRGlDLEtBQWxCLENBQXhCO0FBS0FSLElBQUFBLEdBQUcsQ0FBQ1MsSUFBSixDQUFTUCxTQUFUO0FBQ0QsR0FQRCxDQU9FLE9BQU9RLEdBQVAsRUFBWTtBQUNaVCxJQUFBQSxJQUFJLENBQUNTLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0FYRDs7ZUFhZVoscUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgRG9uYXRpb25zIH0gZnJvbSAnbW9kZWxzJztcbmltcG9ydCBmb3JlaWduS2V5cyBmcm9tICdjb25maWcvZGF0YWJhc2UvZm9yZWlnbktleXMnO1xuXG5jb25zdCBnZXREb25hdGlvbkNvbnRyb2xsZXI6IFJlcXVlc3RIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZG9uYXRpb25zID0gYXdhaXQgRG9uYXRpb25zLmZpbmRBbGwoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgW2ZvcmVpZ25LZXlzLkNPTlRBQ1RdOiByZXEudXNlcixcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXMuanNvbihkb25hdGlvbnMpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERvbmF0aW9uQ29udHJvbGxlcjtcbiJdfQ==