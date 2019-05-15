"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Cause = _interopRequireDefault(require("../../../../../models/Cause"));

var _CauseKeys = _interopRequireDefault(require("../../../../../models/Cause/types/CauseKeys"));

var _Organization = _interopRequireDefault(require("../../../../../models/Organization"));

var _types = require("../../../../../models/Organization/types");

var _conn = _interopRequireDefault(require("../../../../../config/database/conn"));

var _validate = require("./validate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createCauseController = async (req, res, next) => {
  let transaction;

  try {
    await _validate.bodySchema.validate(req.body);
    transaction = await _conn.default.transaction();
    const cause = await _Cause.default.create({
      [_CauseKeys.default.NAME]: req.body.name,
      [_CauseKeys.default.SUGGESTED_DONATION]: req.body.suggested_amount
    }, {
      transaction
    });
    const organization = await _Organization.default.findOne({
      where: {
        [_types.OrganizationKeys.UUID]: req.body.organizationUuid
      }
    });
    await cause.setOrganization(organization, {
      transaction
    });
    await transaction.commit();
    res.status(201).json(cause);
  } catch (err) {
    if (transaction) {
      transaction.rollback();
    }

    next(err);
  }
};

var _default = createCauseController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY2F1c2UvY29udHJvbGxlcnMvY3JlYXRlQ2F1c2UvaW5kZXgudHMiXSwibmFtZXMiOlsiY3JlYXRlQ2F1c2VDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsInRyYW5zYWN0aW9uIiwiYm9keVNjaGVtYSIsInZhbGlkYXRlIiwiYm9keSIsInNlcUluc3RhbmNlIiwiY2F1c2UiLCJDYXVzZSIsImNyZWF0ZSIsIkNhdXNlS2V5cyIsIk5BTUUiLCJuYW1lIiwiU1VHR0VTVEVEX0RPTkFUSU9OIiwic3VnZ2VzdGVkX2Ftb3VudCIsIm9yZ2FuaXphdGlvbiIsIk9yZ2FuaXphdGlvbnMiLCJmaW5kT25lIiwid2hlcmUiLCJPcmdhbml6YXRpb25LZXlzIiwiVVVJRCIsIm9yZ2FuaXphdGlvblV1aWQiLCJzZXRPcmdhbml6YXRpb24iLCJjb21taXQiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwicm9sbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQUVBLE1BQU1BLHFCQUFxQixHQUFHLE9BQU9DLEdBQVAsRUFBcUJDLEdBQXJCLEVBQW9DQyxJQUFwQyxLQUEyRDtBQUN2RixNQUFJQyxXQUFKOztBQUNBLE1BQUk7QUFDRixVQUFNQyxxQkFBV0MsUUFBWCxDQUFvQkwsR0FBRyxDQUFDTSxJQUF4QixDQUFOO0FBRUFILElBQUFBLFdBQVcsR0FBRyxNQUFNSSxjQUFZSixXQUFaLEVBQXBCO0FBRUEsVUFBTUssS0FBSyxHQUFHLE1BQU1DLGVBQU1DLE1BQU4sQ0FBYTtBQUMvQixPQUFDQyxtQkFBVUMsSUFBWCxHQUFrQlosR0FBRyxDQUFDTSxJQUFKLENBQVNPLElBREk7QUFFL0IsT0FBQ0YsbUJBQVVHLGtCQUFYLEdBQWdDZCxHQUFHLENBQUNNLElBQUosQ0FBU1M7QUFGVixLQUFiLEVBR2pCO0FBQUVaLE1BQUFBO0FBQUYsS0FIaUIsQ0FBcEI7QUFLQSxVQUFNYSxZQUFZLEdBQUcsTUFBTUMsc0JBQWNDLE9BQWQsQ0FBc0I7QUFDL0NDLE1BQUFBLEtBQUssRUFBRTtBQUNMLFNBQUNDLHdCQUFpQkMsSUFBbEIsR0FBeUJyQixHQUFHLENBQUNNLElBQUosQ0FBU2dCO0FBRDdCO0FBRHdDLEtBQXRCLENBQTNCO0FBTUEsVUFBTWQsS0FBSyxDQUFDZSxlQUFOLENBQXNCUCxZQUF0QixFQUFvQztBQUFFYixNQUFBQTtBQUFGLEtBQXBDLENBQU47QUFFQSxVQUFNQSxXQUFXLENBQUNxQixNQUFaLEVBQU47QUFFQXZCLElBQUFBLEdBQUcsQ0FBQ3dCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQmxCLEtBQXJCO0FBQ0QsR0FyQkQsQ0FxQkUsT0FBT21CLEdBQVAsRUFBWTtBQUNaLFFBQUl4QixXQUFKLEVBQWlCO0FBQ2ZBLE1BQUFBLFdBQVcsQ0FBQ3lCLFFBQVo7QUFDRDs7QUFDRDFCLElBQUFBLElBQUksQ0FBQ3lCLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0E3QkQ7O2VBK0JlNUIscUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IENhdXNlIGZyb20gJ21vZGVscy9DYXVzZSc7XG5pbXBvcnQgQ2F1c2VLZXlzIGZyb20gJ21vZGVscy9DYXVzZS90eXBlcy9DYXVzZUtleXMnO1xuaW1wb3J0IE9yZ2FuaXphdGlvbnMgZnJvbSAnbW9kZWxzL09yZ2FuaXphdGlvbic7XG5pbXBvcnQgeyBPcmdhbml6YXRpb25LZXlzIH0gZnJvbSAnbW9kZWxzL09yZ2FuaXphdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBOZXh0RnVuY3Rpb24gfSBmcm9tICdjb25uZWN0JztcbmltcG9ydCBzZXFJbnN0YW5jZSBmcm9tICdjb25maWcvZGF0YWJhc2UvY29ubic7XG5pbXBvcnQgeyBib2R5U2NoZW1hIH0gZnJvbSAnLi92YWxpZGF0ZSc7XG5cbmNvbnN0IGNyZWF0ZUNhdXNlQ29udHJvbGxlciA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICBsZXQgdHJhbnNhY3Rpb247XG4gIHRyeSB7XG4gICAgYXdhaXQgYm9keVNjaGVtYS52YWxpZGF0ZShyZXEuYm9keSk7XG5cbiAgICB0cmFuc2FjdGlvbiA9IGF3YWl0IHNlcUluc3RhbmNlLnRyYW5zYWN0aW9uKCk7XG5cbiAgICBjb25zdCBjYXVzZSA9IGF3YWl0IENhdXNlLmNyZWF0ZSh7XG4gICAgICBbQ2F1c2VLZXlzLk5BTUVdOiByZXEuYm9keS5uYW1lLFxuICAgICAgW0NhdXNlS2V5cy5TVUdHRVNURURfRE9OQVRJT05dOiByZXEuYm9keS5zdWdnZXN0ZWRfYW1vdW50XG4gICAgfSwgeyB0cmFuc2FjdGlvbiB9KTtcblxuICAgIGNvbnN0IG9yZ2FuaXphdGlvbiA9IGF3YWl0IE9yZ2FuaXphdGlvbnMuZmluZE9uZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbT3JnYW5pemF0aW9uS2V5cy5VVUlEXTogcmVxLmJvZHkub3JnYW5pemF0aW9uVXVpZFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYXdhaXQgY2F1c2Uuc2V0T3JnYW5pemF0aW9uKG9yZ2FuaXphdGlvbiwgeyB0cmFuc2FjdGlvbiB9KTtcblxuICAgIGF3YWl0IHRyYW5zYWN0aW9uLmNvbW1pdCgpO1xuXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oY2F1c2UpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAodHJhbnNhY3Rpb24pIHtcbiAgICAgIHRyYW5zYWN0aW9uLnJvbGxiYWNrKCk7XG4gICAgfVxuICAgIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2F1c2VDb250cm9sbGVyO1xuIl19