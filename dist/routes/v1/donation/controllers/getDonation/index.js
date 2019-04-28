"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Donation = _interopRequireDefault(require("../../../../../models/Donation"));

var _foreignKeys = _interopRequireDefault(require("../../../../../config/database/foreignKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getDonationController = async (req, res, next) => {
  try {
    const donations = await _Donation.default.findAll({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvZG9uYXRpb24vY29udHJvbGxlcnMvZ2V0RG9uYXRpb24vaW5kZXgudHMiXSwibmFtZXMiOlsiZ2V0RG9uYXRpb25Db250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImRvbmF0aW9ucyIsIkRvbmF0aW9uIiwiZmluZEFsbCIsIndoZXJlIiwiZm9yZWlnbktleXMiLCJDT05UQUNUIiwibG9jYWxzIiwidXVpZCIsImpzb24iLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1BLHFCQUFxQixHQUFHLE9BQU9DLEdBQVAsRUFBcUJDLEdBQXJCLEVBQW9DQyxJQUFwQyxLQUEyRDtBQUN2RixNQUFJO0FBQ0YsVUFBTUMsU0FBUyxHQUFHLE1BQU1DLGtCQUFTQyxPQUFULENBQWlCO0FBQ3ZDQyxNQUFBQSxLQUFLLEVBQUU7QUFDTCxTQUFDQyxxQkFBWUMsT0FBYixHQUF1QlAsR0FBRyxDQUFDUSxNQUFKLENBQVdDO0FBRDdCO0FBRGdDLEtBQWpCLENBQXhCO0FBS0FULElBQUFBLEdBQUcsQ0FBQ1UsSUFBSixDQUFTUixTQUFUO0FBQ0QsR0FQRCxDQU9FLE9BQU9TLEdBQVAsRUFBWTtBQUNaVixJQUFBQSxJQUFJLENBQUNVLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0FYRDs7ZUFhZWIscUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgRG9uYXRpb24gZnJvbSAnbW9kZWxzL0RvbmF0aW9uJztcbmltcG9ydCBmb3JlaWduS2V5cyBmcm9tICdjb25maWcvZGF0YWJhc2UvZm9yZWlnbktleXMnO1xuXG5jb25zdCBnZXREb25hdGlvbkNvbnRyb2xsZXIgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkb25hdGlvbnMgPSBhd2FpdCBEb25hdGlvbi5maW5kQWxsKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIFtmb3JlaWduS2V5cy5DT05UQUNUXTogcmVzLmxvY2Fscy51dWlkXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVzLmpzb24oZG9uYXRpb25zKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXREb25hdGlvbkNvbnRyb2xsZXI7XG4iXX0=