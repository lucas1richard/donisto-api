"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _NewsFeed = _interopRequireDefault(require("../../../../../models/NewsFeed"));

var _NewsFeedKeys = _interopRequireDefault(require("../../../../../models/NewsFeed/types/NewsFeedKeys"));

var _Organization = _interopRequireDefault(require("../../../../../models/Organization"));

var _types = require("../../../../../models/Organization/types");

var _conn = _interopRequireDefault(require("../../../../../config/database/conn"));

var _validate = require("./validate");

var _Cause = _interopRequireDefault(require("../../../../../models/Cause"));

var _CauseKeys = _interopRequireDefault(require("../../../../../models/Cause/types/CauseKeys"));

var _NewsFeedCauses = _interopRequireDefault(require("../../../../../models/NewsFeedCauses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createNewsFeedController = async (req, res, next) => {
  let transaction;

  try {
    await _validate.bodySchema.validate(req.body);
    transaction = await _conn.default.transaction();
    const newsFeed = await _NewsFeed.default.create({
      [_NewsFeedKeys.default.TITLE]: req.body.title,
      [_NewsFeedKeys.default.TEXT]: req.body.story
    }, {
      transaction
    });
    const organization = await _Organization.default.findOne({
      where: {
        [_types.OrganizationKeys.UUID]: req.body.organizationUuid
      }
    });
    const causes = await _Cause.default.findAll({
      where: {
        [_CauseKeys.default.UUID]: {
          [_sequelize.Op.in]: req.body.causesUuid
        }
      }
    });

    for (let ix = 0; ix < causes.length; ix += 1) {
      await newsFeed.addCause(causes[ix], {
        through: _NewsFeedCauses.default
      });
    }

    await newsFeed.setOrganization(organization, {
      transaction
    });
    await transaction.commit();
    res.status(201).json(newsFeed);
  } catch (err) {
    if (transaction) {
      transaction.rollback();
    }

    next(err);
  }
};

var _default = createNewsFeedController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvbmV3c2ZlZWQvY29udHJvbGxlcnMvY3JlYXRlTmV3c0ZlZWQvaW5kZXgudHMiXSwibmFtZXMiOlsiY3JlYXRlTmV3c0ZlZWRDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsInRyYW5zYWN0aW9uIiwiYm9keVNjaGVtYSIsInZhbGlkYXRlIiwiYm9keSIsInNlcUluc3RhbmNlIiwibmV3c0ZlZWQiLCJOZXdzRmVlZCIsImNyZWF0ZSIsIk5ld3NGZWVkS2V5cyIsIlRJVExFIiwidGl0bGUiLCJURVhUIiwic3RvcnkiLCJvcmdhbml6YXRpb24iLCJPcmdhbml6YXRpb25zIiwiZmluZE9uZSIsIndoZXJlIiwiT3JnYW5pemF0aW9uS2V5cyIsIlVVSUQiLCJvcmdhbml6YXRpb25VdWlkIiwiY2F1c2VzIiwiQ2F1c2UiLCJmaW5kQWxsIiwiQ2F1c2VLZXlzIiwiT3AiLCJpbiIsImNhdXNlc1V1aWQiLCJpeCIsImxlbmd0aCIsImFkZENhdXNlIiwidGhyb3VnaCIsIk5ld3NGZWVkQ2F1c2VzIiwic2V0T3JnYW5pemF0aW9uIiwiY29tbWl0Iiwic3RhdHVzIiwianNvbiIsImVyciIsInJvbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSx3QkFBd0IsR0FBRyxPQUFPQyxHQUFQLEVBQXFCQyxHQUFyQixFQUFvQ0MsSUFBcEMsS0FBMkQ7QUFDMUYsTUFBSUMsV0FBSjs7QUFDQSxNQUFJO0FBQ0YsVUFBTUMscUJBQVdDLFFBQVgsQ0FBb0JMLEdBQUcsQ0FBQ00sSUFBeEIsQ0FBTjtBQUVBSCxJQUFBQSxXQUFXLEdBQUcsTUFBTUksY0FBWUosV0FBWixFQUFwQjtBQUVBLFVBQU1LLFFBQVEsR0FBRyxNQUFNQyxrQkFBU0MsTUFBVCxDQUFnQjtBQUNyQyxPQUFDQyxzQkFBYUMsS0FBZCxHQUFzQlosR0FBRyxDQUFDTSxJQUFKLENBQVNPLEtBRE07QUFFckMsT0FBQ0Ysc0JBQWFHLElBQWQsR0FBcUJkLEdBQUcsQ0FBQ00sSUFBSixDQUFTUztBQUZPLEtBQWhCLEVBR3BCO0FBQUVaLE1BQUFBO0FBQUYsS0FIb0IsQ0FBdkI7QUFLQSxVQUFNYSxZQUFZLEdBQUcsTUFBTUMsc0JBQWNDLE9BQWQsQ0FBc0I7QUFDL0NDLE1BQUFBLEtBQUssRUFBRTtBQUNMLFNBQUNDLHdCQUFpQkMsSUFBbEIsR0FBeUJyQixHQUFHLENBQUNNLElBQUosQ0FBU2dCO0FBRDdCO0FBRHdDLEtBQXRCLENBQTNCO0FBTUEsVUFBTUMsTUFBTSxHQUFHLE1BQU1DLGVBQU1DLE9BQU4sQ0FBYztBQUNqQ04sTUFBQUEsS0FBSyxFQUFFO0FBQ0wsU0FBQ08sbUJBQVVMLElBQVgsR0FBa0I7QUFDaEIsV0FBQ00sY0FBR0MsRUFBSixHQUFTNUIsR0FBRyxDQUFDTSxJQUFKLENBQVN1QjtBQURGO0FBRGI7QUFEMEIsS0FBZCxDQUFyQjs7QUFRQSxTQUFLLElBQUlDLEVBQUUsR0FBRyxDQUFkLEVBQWlCQSxFQUFFLEdBQUdQLE1BQU0sQ0FBQ1EsTUFBN0IsRUFBcUNELEVBQUUsSUFBSSxDQUEzQyxFQUE4QztBQUM1QyxZQUFNdEIsUUFBUSxDQUFDd0IsUUFBVCxDQUFrQlQsTUFBTSxDQUFDTyxFQUFELENBQXhCLEVBQThCO0FBQUVHLFFBQUFBLE9BQU8sRUFBRUM7QUFBWCxPQUE5QixDQUFOO0FBQ0Q7O0FBRUQsVUFBTTFCLFFBQVEsQ0FBQzJCLGVBQVQsQ0FBeUJuQixZQUF6QixFQUF1QztBQUFFYixNQUFBQTtBQUFGLEtBQXZDLENBQU47QUFFQSxVQUFNQSxXQUFXLENBQUNpQyxNQUFaLEVBQU47QUFFQW5DLElBQUFBLEdBQUcsQ0FBQ29DLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjlCLFFBQXJCO0FBQ0QsR0FqQ0QsQ0FpQ0UsT0FBTytCLEdBQVAsRUFBWTtBQUNaLFFBQUlwQyxXQUFKLEVBQWlCO0FBQ2ZBLE1BQUFBLFdBQVcsQ0FBQ3FDLFFBQVo7QUFDRDs7QUFDRHRDLElBQUFBLElBQUksQ0FBQ3FDLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0F6Q0Q7O2VBMkNleEMsd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgT3AgfSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IE5ld3NGZWVkIGZyb20gJ21vZGVscy9OZXdzRmVlZCc7XG5pbXBvcnQgTmV3c0ZlZWRLZXlzIGZyb20gJ21vZGVscy9OZXdzRmVlZC90eXBlcy9OZXdzRmVlZEtleXMnO1xuaW1wb3J0IE9yZ2FuaXphdGlvbnMgZnJvbSAnbW9kZWxzL09yZ2FuaXphdGlvbic7XG5pbXBvcnQgeyBPcmdhbml6YXRpb25LZXlzIH0gZnJvbSAnbW9kZWxzL09yZ2FuaXphdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBOZXh0RnVuY3Rpb24gfSBmcm9tICdjb25uZWN0JztcbmltcG9ydCBzZXFJbnN0YW5jZSBmcm9tICdjb25maWcvZGF0YWJhc2UvY29ubic7XG5pbXBvcnQgeyBib2R5U2NoZW1hIH0gZnJvbSAnLi92YWxpZGF0ZSc7XG5pbXBvcnQgQ2F1c2UgZnJvbSAnbW9kZWxzL0NhdXNlJztcbmltcG9ydCBDYXVzZUtleXMgZnJvbSAnbW9kZWxzL0NhdXNlL3R5cGVzL0NhdXNlS2V5cyc7XG5pbXBvcnQgTmV3c0ZlZWRDYXVzZXMgZnJvbSAnbW9kZWxzL05ld3NGZWVkQ2F1c2VzJztcblxuY29uc3QgY3JlYXRlTmV3c0ZlZWRDb250cm9sbGVyID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIGxldCB0cmFuc2FjdGlvbjtcbiAgdHJ5IHtcbiAgICBhd2FpdCBib2R5U2NoZW1hLnZhbGlkYXRlKHJlcS5ib2R5KTtcblxuICAgIHRyYW5zYWN0aW9uID0gYXdhaXQgc2VxSW5zdGFuY2UudHJhbnNhY3Rpb24oKTtcblxuICAgIGNvbnN0IG5ld3NGZWVkID0gYXdhaXQgTmV3c0ZlZWQuY3JlYXRlKHtcbiAgICAgIFtOZXdzRmVlZEtleXMuVElUTEVdOiByZXEuYm9keS50aXRsZSxcbiAgICAgIFtOZXdzRmVlZEtleXMuVEVYVF06IHJlcS5ib2R5LnN0b3J5XG4gICAgfSwgeyB0cmFuc2FjdGlvbiB9KTtcblxuICAgIGNvbnN0IG9yZ2FuaXphdGlvbiA9IGF3YWl0IE9yZ2FuaXphdGlvbnMuZmluZE9uZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbT3JnYW5pemF0aW9uS2V5cy5VVUlEXTogcmVxLmJvZHkub3JnYW5pemF0aW9uVXVpZFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgY2F1c2VzID0gYXdhaXQgQ2F1c2UuZmluZEFsbCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbQ2F1c2VLZXlzLlVVSURdOiB7XG4gICAgICAgICAgW09wLmluXTogcmVxLmJvZHkuY2F1c2VzVXVpZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmb3IgKGxldCBpeCA9IDA7IGl4IDwgY2F1c2VzLmxlbmd0aDsgaXggKz0gMSkge1xuICAgICAgYXdhaXQgbmV3c0ZlZWQuYWRkQ2F1c2UoY2F1c2VzW2l4XSwgeyB0aHJvdWdoOiBOZXdzRmVlZENhdXNlcyB9KTtcbiAgICB9XG5cbiAgICBhd2FpdCBuZXdzRmVlZC5zZXRPcmdhbml6YXRpb24ob3JnYW5pemF0aW9uLCB7IHRyYW5zYWN0aW9uIH0pO1xuXG4gICAgYXdhaXQgdHJhbnNhY3Rpb24uY29tbWl0KCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbihuZXdzRmVlZCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmICh0cmFuc2FjdGlvbikge1xuICAgICAgdHJhbnNhY3Rpb24ucm9sbGJhY2soKTtcbiAgICB9XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOZXdzRmVlZENvbnRyb2xsZXI7XG4iXX0=