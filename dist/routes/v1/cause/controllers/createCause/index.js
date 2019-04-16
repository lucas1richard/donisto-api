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
      [_CauseKeys.default.NAME]: req.body.name
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY2F1c2UvY29udHJvbGxlcnMvY3JlYXRlQ2F1c2UvaW5kZXgudHMiXSwibmFtZXMiOlsiY3JlYXRlQ2F1c2VDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsInRyYW5zYWN0aW9uIiwiYm9keVNjaGVtYSIsInZhbGlkYXRlIiwiYm9keSIsInNlcUluc3RhbmNlIiwiY2F1c2UiLCJDYXVzZSIsImNyZWF0ZSIsIkNhdXNlS2V5cyIsIk5BTUUiLCJuYW1lIiwib3JnYW5pemF0aW9uIiwiT3JnYW5pemF0aW9ucyIsImZpbmRPbmUiLCJ3aGVyZSIsIk9yZ2FuaXphdGlvbktleXMiLCJVVUlEIiwib3JnYW5pemF0aW9uVXVpZCIsInNldE9yZ2FuaXphdGlvbiIsImNvbW1pdCIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJyb2xsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBRUEsTUFBTUEscUJBQXFCLEdBQUcsT0FBT0MsR0FBUCxFQUFxQkMsR0FBckIsRUFBb0NDLElBQXBDLEtBQTJEO0FBQ3ZGLE1BQUlDLFdBQUo7O0FBQ0EsTUFBSTtBQUNGLFVBQU1DLHFCQUFXQyxRQUFYLENBQW9CTCxHQUFHLENBQUNNLElBQXhCLENBQU47QUFFQUgsSUFBQUEsV0FBVyxHQUFHLE1BQU1JLGNBQVlKLFdBQVosRUFBcEI7QUFFQSxVQUFNSyxLQUFLLEdBQUcsTUFBTUMsZUFBTUMsTUFBTixDQUFhO0FBQy9CLE9BQUNDLG1CQUFVQyxJQUFYLEdBQWtCWixHQUFHLENBQUNNLElBQUosQ0FBU087QUFESSxLQUFiLEVBRWpCO0FBQUVWLE1BQUFBO0FBQUYsS0FGaUIsQ0FBcEI7QUFJQSxVQUFNVyxZQUFZLEdBQUcsTUFBTUMsc0JBQWNDLE9BQWQsQ0FBc0I7QUFDL0NDLE1BQUFBLEtBQUssRUFBRTtBQUNMLFNBQUNDLHdCQUFpQkMsSUFBbEIsR0FBeUJuQixHQUFHLENBQUNNLElBQUosQ0FBU2M7QUFEN0I7QUFEd0MsS0FBdEIsQ0FBM0I7QUFNQSxVQUFNWixLQUFLLENBQUNhLGVBQU4sQ0FBc0JQLFlBQXRCLEVBQW9DO0FBQUVYLE1BQUFBO0FBQUYsS0FBcEMsQ0FBTjtBQUVBLFVBQU1BLFdBQVcsQ0FBQ21CLE1BQVosRUFBTjtBQUVBckIsSUFBQUEsR0FBRyxDQUFDc0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCaEIsS0FBckI7QUFDRCxHQXBCRCxDQW9CRSxPQUFPaUIsR0FBUCxFQUFZO0FBQ1osUUFBSXRCLFdBQUosRUFBaUI7QUFDZkEsTUFBQUEsV0FBVyxDQUFDdUIsUUFBWjtBQUNEOztBQUNEeEIsSUFBQUEsSUFBSSxDQUFDdUIsR0FBRCxDQUFKO0FBQ0Q7QUFDRixDQTVCRDs7ZUE4QmUxQixxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgQ2F1c2UgZnJvbSAnbW9kZWxzL0NhdXNlJztcbmltcG9ydCBDYXVzZUtleXMgZnJvbSAnbW9kZWxzL0NhdXNlL3R5cGVzL0NhdXNlS2V5cyc7XG5pbXBvcnQgT3JnYW5pemF0aW9ucyBmcm9tICdtb2RlbHMvT3JnYW5pemF0aW9uJztcbmltcG9ydCB7IE9yZ2FuaXphdGlvbktleXMgfSBmcm9tICdtb2RlbHMvT3JnYW5pemF0aW9uL3R5cGVzJztcbmltcG9ydCB7IE5leHRGdW5jdGlvbiB9IGZyb20gJ2Nvbm5lY3QnO1xuaW1wb3J0IHNlcUluc3RhbmNlIGZyb20gJ2NvbmZpZy9kYXRhYmFzZS9jb25uJztcbmltcG9ydCB7IGJvZHlTY2hlbWEgfSBmcm9tICcuL3ZhbGlkYXRlJztcblxuY29uc3QgY3JlYXRlQ2F1c2VDb250cm9sbGVyID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIGxldCB0cmFuc2FjdGlvbjtcbiAgdHJ5IHtcbiAgICBhd2FpdCBib2R5U2NoZW1hLnZhbGlkYXRlKHJlcS5ib2R5KTtcblxuICAgIHRyYW5zYWN0aW9uID0gYXdhaXQgc2VxSW5zdGFuY2UudHJhbnNhY3Rpb24oKTtcblxuICAgIGNvbnN0IGNhdXNlID0gYXdhaXQgQ2F1c2UuY3JlYXRlKHtcbiAgICAgIFtDYXVzZUtleXMuTkFNRV06IHJlcS5ib2R5Lm5hbWVcbiAgICB9LCB7IHRyYW5zYWN0aW9uIH0pO1xuXG4gICAgY29uc3Qgb3JnYW5pemF0aW9uID0gYXdhaXQgT3JnYW5pemF0aW9ucy5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIFtPcmdhbml6YXRpb25LZXlzLlVVSURdOiByZXEuYm9keS5vcmdhbml6YXRpb25VdWlkXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBhd2FpdCBjYXVzZS5zZXRPcmdhbml6YXRpb24ob3JnYW5pemF0aW9uLCB7IHRyYW5zYWN0aW9uIH0pO1xuXG4gICAgYXdhaXQgdHJhbnNhY3Rpb24uY29tbWl0KCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbihjYXVzZSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmICh0cmFuc2FjdGlvbikge1xuICAgICAgdHJhbnNhY3Rpb24ucm9sbGJhY2soKTtcbiAgICB9XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYXVzZUNvbnRyb2xsZXI7XG4iXX0=