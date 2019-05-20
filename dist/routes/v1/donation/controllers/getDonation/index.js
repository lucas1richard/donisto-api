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
        [_foreignKeys.default.CONTACT]: res.locals.uuid
      }
    });
    res.json(donations);
  } catch (err) {
    next(err);
  }
};

var _default = getDonationController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvZG9uYXRpb24vY29udHJvbGxlcnMvZ2V0RG9uYXRpb24vaW5kZXgudHMiXSwibmFtZXMiOlsiZ2V0RG9uYXRpb25Db250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImRvbmF0aW9ucyIsIkRvbmF0aW9ucyIsImZpbmRBbGwiLCJ3aGVyZSIsImZvcmVpZ25LZXlzIiwiQ09OVEFDVCIsImxvY2FscyIsInV1aWQiLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxxQkFBcUMsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQ3RFLE1BQUk7QUFDRixVQUFNQyxTQUFTLEdBQUcsTUFBTUMsa0JBQVVDLE9BQVYsQ0FBa0I7QUFDeENDLE1BQUFBLEtBQUssRUFBRTtBQUNMLFNBQUNDLHFCQUFZQyxPQUFiLEdBQXVCUCxHQUFHLENBQUNRLE1BQUosQ0FBV0M7QUFEN0I7QUFEaUMsS0FBbEIsQ0FBeEI7QUFLQVQsSUFBQUEsR0FBRyxDQUFDVSxJQUFKLENBQVNSLFNBQVQ7QUFDRCxHQVBELENBT0UsT0FBT1MsR0FBUCxFQUFZO0FBQ1pWLElBQUFBLElBQUksQ0FBQ1UsR0FBRCxDQUFKO0FBQ0Q7QUFDRixDQVhEOztlQWFlYixxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBEb25hdGlvbnMgfSBmcm9tICdtb2RlbHMnO1xuaW1wb3J0IGZvcmVpZ25LZXlzIGZyb20gJ2NvbmZpZy9kYXRhYmFzZS9mb3JlaWduS2V5cyc7XG5cbmNvbnN0IGdldERvbmF0aW9uQ29udHJvbGxlcjogUmVxdWVzdEhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkb25hdGlvbnMgPSBhd2FpdCBEb25hdGlvbnMuZmluZEFsbCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbZm9yZWlnbktleXMuQ09OVEFDVF06IHJlcy5sb2NhbHMudXVpZFxuICAgICAgfVxuICAgIH0pO1xuICAgIHJlcy5qc29uKGRvbmF0aW9ucyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0RG9uYXRpb25Db250cm9sbGVyO1xuIl19