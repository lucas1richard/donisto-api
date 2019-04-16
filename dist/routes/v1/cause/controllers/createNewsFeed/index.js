"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _NewsFeed = _interopRequireDefault(require("../../../../../models/NewsFeed"));

var _NewsFeedKeys = _interopRequireDefault(require("../../../../../models/NewsFeed/types/NewsFeedKeys"));

var _Organization = _interopRequireDefault(require("../../../../../models/Organization"));

var _types = require("../../../../../models/Organization/types");

var _conn = _interopRequireDefault(require("../../../../../config/database/conn"));

var _validate = require("./validate");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY2F1c2UvY29udHJvbGxlcnMvY3JlYXRlTmV3c0ZlZWQvaW5kZXgudHMiXSwibmFtZXMiOlsiY3JlYXRlTmV3c0ZlZWRDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsInRyYW5zYWN0aW9uIiwiYm9keVNjaGVtYSIsInZhbGlkYXRlIiwiYm9keSIsInNlcUluc3RhbmNlIiwibmV3c0ZlZWQiLCJOZXdzRmVlZCIsImNyZWF0ZSIsIk5ld3NGZWVkS2V5cyIsIlRJVExFIiwidGl0bGUiLCJURVhUIiwic3RvcnkiLCJvcmdhbml6YXRpb24iLCJPcmdhbml6YXRpb25zIiwiZmluZE9uZSIsIndoZXJlIiwiT3JnYW5pemF0aW9uS2V5cyIsIlVVSUQiLCJvcmdhbml6YXRpb25VdWlkIiwic2V0T3JnYW5pemF0aW9uIiwiY29tbWl0Iiwic3RhdHVzIiwianNvbiIsImVyciIsInJvbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFFQSxNQUFNQSx3QkFBd0IsR0FBRyxPQUFPQyxHQUFQLEVBQXFCQyxHQUFyQixFQUFvQ0MsSUFBcEMsS0FBMkQ7QUFDMUYsTUFBSUMsV0FBSjs7QUFDQSxNQUFJO0FBQ0YsVUFBTUMscUJBQVdDLFFBQVgsQ0FBb0JMLEdBQUcsQ0FBQ00sSUFBeEIsQ0FBTjtBQUVBSCxJQUFBQSxXQUFXLEdBQUcsTUFBTUksY0FBWUosV0FBWixFQUFwQjtBQUVBLFVBQU1LLFFBQVEsR0FBRyxNQUFNQyxrQkFBU0MsTUFBVCxDQUFnQjtBQUNyQyxPQUFDQyxzQkFBYUMsS0FBZCxHQUFzQlosR0FBRyxDQUFDTSxJQUFKLENBQVNPLEtBRE07QUFFckMsT0FBQ0Ysc0JBQWFHLElBQWQsR0FBcUJkLEdBQUcsQ0FBQ00sSUFBSixDQUFTUztBQUZPLEtBQWhCLEVBR3BCO0FBQUVaLE1BQUFBO0FBQUYsS0FIb0IsQ0FBdkI7QUFLQSxVQUFNYSxZQUFZLEdBQUcsTUFBTUMsc0JBQWNDLE9BQWQsQ0FBc0I7QUFDL0NDLE1BQUFBLEtBQUssRUFBRTtBQUNMLFNBQUNDLHdCQUFpQkMsSUFBbEIsR0FBeUJyQixHQUFHLENBQUNNLElBQUosQ0FBU2dCO0FBRDdCO0FBRHdDLEtBQXRCLENBQTNCO0FBTUEsVUFBTWQsUUFBUSxDQUFDZSxlQUFULENBQXlCUCxZQUF6QixFQUF1QztBQUFFYixNQUFBQTtBQUFGLEtBQXZDLENBQU47QUFFQSxVQUFNQSxXQUFXLENBQUNxQixNQUFaLEVBQU47QUFFQXZCLElBQUFBLEdBQUcsQ0FBQ3dCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQmxCLFFBQXJCO0FBQ0QsR0FyQkQsQ0FxQkUsT0FBT21CLEdBQVAsRUFBWTtBQUNaLFFBQUl4QixXQUFKLEVBQWlCO0FBQ2ZBLE1BQUFBLFdBQVcsQ0FBQ3lCLFFBQVo7QUFDRDs7QUFDRDFCLElBQUFBLElBQUksQ0FBQ3lCLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0E3QkQ7O2VBK0JlNUIsd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IE5ld3NGZWVkIGZyb20gJ21vZGVscy9OZXdzRmVlZCc7XG5pbXBvcnQgTmV3c0ZlZWRLZXlzIGZyb20gJ21vZGVscy9OZXdzRmVlZC90eXBlcy9OZXdzRmVlZEtleXMnO1xuaW1wb3J0IE9yZ2FuaXphdGlvbnMgZnJvbSAnbW9kZWxzL09yZ2FuaXphdGlvbic7XG5pbXBvcnQgeyBPcmdhbml6YXRpb25LZXlzIH0gZnJvbSAnbW9kZWxzL09yZ2FuaXphdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBOZXh0RnVuY3Rpb24gfSBmcm9tICdjb25uZWN0JztcbmltcG9ydCBzZXFJbnN0YW5jZSBmcm9tICdjb25maWcvZGF0YWJhc2UvY29ubic7XG5pbXBvcnQgeyBib2R5U2NoZW1hIH0gZnJvbSAnLi92YWxpZGF0ZSc7XG5cbmNvbnN0IGNyZWF0ZU5ld3NGZWVkQ29udHJvbGxlciA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICBsZXQgdHJhbnNhY3Rpb247XG4gIHRyeSB7XG4gICAgYXdhaXQgYm9keVNjaGVtYS52YWxpZGF0ZShyZXEuYm9keSk7XG5cbiAgICB0cmFuc2FjdGlvbiA9IGF3YWl0IHNlcUluc3RhbmNlLnRyYW5zYWN0aW9uKCk7XG5cbiAgICBjb25zdCBuZXdzRmVlZCA9IGF3YWl0IE5ld3NGZWVkLmNyZWF0ZSh7XG4gICAgICBbTmV3c0ZlZWRLZXlzLlRJVExFXTogcmVxLmJvZHkudGl0bGUsXG4gICAgICBbTmV3c0ZlZWRLZXlzLlRFWFRdOiByZXEuYm9keS5zdG9yeVxuICAgIH0sIHsgdHJhbnNhY3Rpb24gfSk7XG5cbiAgICBjb25zdCBvcmdhbml6YXRpb24gPSBhd2FpdCBPcmdhbml6YXRpb25zLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgW09yZ2FuaXphdGlvbktleXMuVVVJRF06IHJlcS5ib2R5Lm9yZ2FuaXphdGlvblV1aWRcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGF3YWl0IG5ld3NGZWVkLnNldE9yZ2FuaXphdGlvbihvcmdhbml6YXRpb24sIHsgdHJhbnNhY3Rpb24gfSk7XG5cbiAgICBhd2FpdCB0cmFuc2FjdGlvbi5jb21taXQoKTtcblxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKG5ld3NGZWVkKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKHRyYW5zYWN0aW9uKSB7XG4gICAgICB0cmFuc2FjdGlvbi5yb2xsYmFjaygpO1xuICAgIH1cbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5ld3NGZWVkQ29udHJvbGxlcjtcbiJdfQ==