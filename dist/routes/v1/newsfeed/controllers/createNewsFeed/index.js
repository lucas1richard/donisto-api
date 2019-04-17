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
      }, {
        transaction
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvbmV3c2ZlZWQvY29udHJvbGxlcnMvY3JlYXRlTmV3c0ZlZWQvaW5kZXgudHMiXSwibmFtZXMiOlsiY3JlYXRlTmV3c0ZlZWRDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsInRyYW5zYWN0aW9uIiwiYm9keVNjaGVtYSIsInZhbGlkYXRlIiwiYm9keSIsInNlcUluc3RhbmNlIiwibmV3c0ZlZWQiLCJOZXdzRmVlZCIsImNyZWF0ZSIsIk5ld3NGZWVkS2V5cyIsIlRJVExFIiwidGl0bGUiLCJURVhUIiwic3RvcnkiLCJvcmdhbml6YXRpb24iLCJPcmdhbml6YXRpb25zIiwiZmluZE9uZSIsIndoZXJlIiwiT3JnYW5pemF0aW9uS2V5cyIsIlVVSUQiLCJvcmdhbml6YXRpb25VdWlkIiwiY2F1c2VzIiwiQ2F1c2UiLCJmaW5kQWxsIiwiQ2F1c2VLZXlzIiwiT3AiLCJpbiIsImNhdXNlc1V1aWQiLCJpeCIsImxlbmd0aCIsImFkZENhdXNlIiwidGhyb3VnaCIsIk5ld3NGZWVkQ2F1c2VzIiwic2V0T3JnYW5pemF0aW9uIiwiY29tbWl0Iiwic3RhdHVzIiwianNvbiIsImVyciIsInJvbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSx3QkFBd0IsR0FBRyxPQUFPQyxHQUFQLEVBQXFCQyxHQUFyQixFQUFvQ0MsSUFBcEMsS0FBMkQ7QUFDMUYsTUFBSUMsV0FBSjs7QUFDQSxNQUFJO0FBQ0YsVUFBTUMscUJBQVdDLFFBQVgsQ0FBb0JMLEdBQUcsQ0FBQ00sSUFBeEIsQ0FBTjtBQUVBSCxJQUFBQSxXQUFXLEdBQUcsTUFBTUksY0FBWUosV0FBWixFQUFwQjtBQUVBLFVBQU1LLFFBQVEsR0FBRyxNQUFNQyxrQkFBU0MsTUFBVCxDQUFnQjtBQUNyQyxPQUFDQyxzQkFBYUMsS0FBZCxHQUFzQlosR0FBRyxDQUFDTSxJQUFKLENBQVNPLEtBRE07QUFFckMsT0FBQ0Ysc0JBQWFHLElBQWQsR0FBcUJkLEdBQUcsQ0FBQ00sSUFBSixDQUFTUztBQUZPLEtBQWhCLEVBR3BCO0FBQUVaLE1BQUFBO0FBQUYsS0FIb0IsQ0FBdkI7QUFLQSxVQUFNYSxZQUFZLEdBQUcsTUFBTUMsc0JBQWNDLE9BQWQsQ0FBc0I7QUFDL0NDLE1BQUFBLEtBQUssRUFBRTtBQUNMLFNBQUNDLHdCQUFpQkMsSUFBbEIsR0FBeUJyQixHQUFHLENBQUNNLElBQUosQ0FBU2dCO0FBRDdCO0FBRHdDLEtBQXRCLENBQTNCO0FBTUEsVUFBTUMsTUFBTSxHQUFHLE1BQU1DLGVBQU1DLE9BQU4sQ0FBYztBQUNqQ04sTUFBQUEsS0FBSyxFQUFFO0FBQ0wsU0FBQ08sbUJBQVVMLElBQVgsR0FBa0I7QUFDaEIsV0FBQ00sY0FBR0MsRUFBSixHQUFTNUIsR0FBRyxDQUFDTSxJQUFKLENBQVN1QjtBQURGO0FBRGI7QUFEMEIsS0FBZCxDQUFyQjs7QUFRQSxTQUFLLElBQUlDLEVBQUUsR0FBRyxDQUFkLEVBQWlCQSxFQUFFLEdBQUdQLE1BQU0sQ0FBQ1EsTUFBN0IsRUFBcUNELEVBQUUsSUFBSSxDQUEzQyxFQUE4QztBQUM1QyxZQUFNdEIsUUFBUSxDQUFDd0IsUUFBVCxDQUFrQlQsTUFBTSxDQUFDTyxFQUFELENBQXhCLEVBQThCO0FBQUVHLFFBQUFBLE9BQU8sRUFBRUM7QUFBWCxPQUE5QixFQUEyRDtBQUFFL0IsUUFBQUE7QUFBRixPQUEzRCxDQUFOO0FBQ0Q7O0FBRUQsVUFBTUssUUFBUSxDQUFDMkIsZUFBVCxDQUF5Qm5CLFlBQXpCLEVBQXVDO0FBQUViLE1BQUFBO0FBQUYsS0FBdkMsQ0FBTjtBQUVBLFVBQU1BLFdBQVcsQ0FBQ2lDLE1BQVosRUFBTjtBQUVBbkMsSUFBQUEsR0FBRyxDQUFDb0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCOUIsUUFBckI7QUFDRCxHQWpDRCxDQWlDRSxPQUFPK0IsR0FBUCxFQUFZO0FBQ1osUUFBSXBDLFdBQUosRUFBaUI7QUFDZkEsTUFBQUEsV0FBVyxDQUFDcUMsUUFBWjtBQUNEOztBQUNEdEMsSUFBQUEsSUFBSSxDQUFDcUMsR0FBRCxDQUFKO0FBQ0Q7QUFDRixDQXpDRDs7ZUEyQ2V4Qyx3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBPcCB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgTmV3c0ZlZWQgZnJvbSAnbW9kZWxzL05ld3NGZWVkJztcbmltcG9ydCBOZXdzRmVlZEtleXMgZnJvbSAnbW9kZWxzL05ld3NGZWVkL3R5cGVzL05ld3NGZWVkS2V5cyc7XG5pbXBvcnQgT3JnYW5pemF0aW9ucyBmcm9tICdtb2RlbHMvT3JnYW5pemF0aW9uJztcbmltcG9ydCB7IE9yZ2FuaXphdGlvbktleXMgfSBmcm9tICdtb2RlbHMvT3JnYW5pemF0aW9uL3R5cGVzJztcbmltcG9ydCB7IE5leHRGdW5jdGlvbiB9IGZyb20gJ2Nvbm5lY3QnO1xuaW1wb3J0IHNlcUluc3RhbmNlIGZyb20gJ2NvbmZpZy9kYXRhYmFzZS9jb25uJztcbmltcG9ydCB7IGJvZHlTY2hlbWEgfSBmcm9tICcuL3ZhbGlkYXRlJztcbmltcG9ydCBDYXVzZSBmcm9tICdtb2RlbHMvQ2F1c2UnO1xuaW1wb3J0IENhdXNlS2V5cyBmcm9tICdtb2RlbHMvQ2F1c2UvdHlwZXMvQ2F1c2VLZXlzJztcbmltcG9ydCBOZXdzRmVlZENhdXNlcyBmcm9tICdtb2RlbHMvTmV3c0ZlZWRDYXVzZXMnO1xuXG5jb25zdCBjcmVhdGVOZXdzRmVlZENvbnRyb2xsZXIgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgbGV0IHRyYW5zYWN0aW9uO1xuICB0cnkge1xuICAgIGF3YWl0IGJvZHlTY2hlbWEudmFsaWRhdGUocmVxLmJvZHkpO1xuXG4gICAgdHJhbnNhY3Rpb24gPSBhd2FpdCBzZXFJbnN0YW5jZS50cmFuc2FjdGlvbigpO1xuXG4gICAgY29uc3QgbmV3c0ZlZWQgPSBhd2FpdCBOZXdzRmVlZC5jcmVhdGUoe1xuICAgICAgW05ld3NGZWVkS2V5cy5USVRMRV06IHJlcS5ib2R5LnRpdGxlLFxuICAgICAgW05ld3NGZWVkS2V5cy5URVhUXTogcmVxLmJvZHkuc3RvcnlcbiAgICB9LCB7IHRyYW5zYWN0aW9uIH0pO1xuXG4gICAgY29uc3Qgb3JnYW5pemF0aW9uID0gYXdhaXQgT3JnYW5pemF0aW9ucy5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIFtPcmdhbml6YXRpb25LZXlzLlVVSURdOiByZXEuYm9keS5vcmdhbml6YXRpb25VdWlkXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBjYXVzZXMgPSBhd2FpdCBDYXVzZS5maW5kQWxsKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIFtDYXVzZUtleXMuVVVJRF06IHtcbiAgICAgICAgICBbT3AuaW5dOiByZXEuYm9keS5jYXVzZXNVdWlkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZvciAobGV0IGl4ID0gMDsgaXggPCBjYXVzZXMubGVuZ3RoOyBpeCArPSAxKSB7XG4gICAgICBhd2FpdCBuZXdzRmVlZC5hZGRDYXVzZShjYXVzZXNbaXhdLCB7IHRocm91Z2g6IE5ld3NGZWVkQ2F1c2VzIH0sIHsgdHJhbnNhY3Rpb24gfSk7XG4gICAgfVxuXG4gICAgYXdhaXQgbmV3c0ZlZWQuc2V0T3JnYW5pemF0aW9uKG9yZ2FuaXphdGlvbiwgeyB0cmFuc2FjdGlvbiB9KTtcblxuICAgIGF3YWl0IHRyYW5zYWN0aW9uLmNvbW1pdCgpO1xuXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24obmV3c0ZlZWQpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAodHJhbnNhY3Rpb24pIHtcbiAgICAgIHRyYW5zYWN0aW9uLnJvbGxiYWNrKCk7XG4gICAgfVxuICAgIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmV3c0ZlZWRDb250cm9sbGVyO1xuIl19