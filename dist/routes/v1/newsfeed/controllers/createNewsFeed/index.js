"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _models = require("../../../../../models");

var _keys = require("../../../../../models/keys");

var _conn = _interopRequireDefault(require("../../../../../config/database/conn"));

var _validate = require("./validate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createNewsFeedController = async (req, res, next) => {
  let transaction;

  try {
    await _validate.bodySchema.validate(req.body);
    transaction = await _conn.default.transaction();
    const newsFeed = await _models.NewsFeed.create({
      [_keys.NewsFeedKeys.TITLE]: req.body.title,
      [_keys.NewsFeedKeys.TEXT]: req.body.story
    }, {
      transaction
    });
    const organization = await _models.Organizations.findOne({
      where: {
        [_keys.OrganizationKeys.UUID]: req.body.organizationUuid
      }
    });
    const causes = await _models.Causes.findAll({
      where: {
        [_keys.CauseKeys.UUID]: {
          [_sequelize.Op.in]: req.body.causesUuid
        }
      }
    });

    for (let ix = 0; ix < causes.length; ix += 1) {
      await newsFeed.addCause(causes[ix], {
        through: _models.NewsFeedCauses,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvbmV3c2ZlZWQvY29udHJvbGxlcnMvY3JlYXRlTmV3c0ZlZWQvaW5kZXgudHMiXSwibmFtZXMiOlsiY3JlYXRlTmV3c0ZlZWRDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsInRyYW5zYWN0aW9uIiwiYm9keVNjaGVtYSIsInZhbGlkYXRlIiwiYm9keSIsInNlcUluc3RhbmNlIiwibmV3c0ZlZWQiLCJOZXdzRmVlZCIsImNyZWF0ZSIsIk5ld3NGZWVkS2V5cyIsIlRJVExFIiwidGl0bGUiLCJURVhUIiwic3RvcnkiLCJvcmdhbml6YXRpb24iLCJPcmdhbml6YXRpb25zIiwiZmluZE9uZSIsIndoZXJlIiwiT3JnYW5pemF0aW9uS2V5cyIsIlVVSUQiLCJvcmdhbml6YXRpb25VdWlkIiwiY2F1c2VzIiwiQ2F1c2VzIiwiZmluZEFsbCIsIkNhdXNlS2V5cyIsIk9wIiwiaW4iLCJjYXVzZXNVdWlkIiwiaXgiLCJsZW5ndGgiLCJhZGRDYXVzZSIsInRocm91Z2giLCJOZXdzRmVlZENhdXNlcyIsInNldE9yZ2FuaXphdGlvbiIsImNvbW1pdCIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJyb2xsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsd0JBQXdDLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixLQUEwQjtBQUN6RSxNQUFJQyxXQUFKOztBQUNBLE1BQUk7QUFDRixVQUFNQyxxQkFBV0MsUUFBWCxDQUFvQkwsR0FBRyxDQUFDTSxJQUF4QixDQUFOO0FBRUFILElBQUFBLFdBQVcsR0FBRyxNQUFNSSxjQUFZSixXQUFaLEVBQXBCO0FBRUEsVUFBTUssUUFBUSxHQUFHLE1BQU1DLGlCQUFTQyxNQUFULENBQWdCO0FBQ3JDLE9BQUNDLG1CQUFhQyxLQUFkLEdBQXNCWixHQUFHLENBQUNNLElBQUosQ0FBU08sS0FETTtBQUVyQyxPQUFDRixtQkFBYUcsSUFBZCxHQUFxQmQsR0FBRyxDQUFDTSxJQUFKLENBQVNTO0FBRk8sS0FBaEIsRUFHcEI7QUFBRVosTUFBQUE7QUFBRixLQUhvQixDQUF2QjtBQUtBLFVBQU1hLFlBQVksR0FBRyxNQUFNQyxzQkFBY0MsT0FBZCxDQUFzQjtBQUMvQ0MsTUFBQUEsS0FBSyxFQUFFO0FBQ0wsU0FBQ0MsdUJBQWlCQyxJQUFsQixHQUF5QnJCLEdBQUcsQ0FBQ00sSUFBSixDQUFTZ0I7QUFEN0I7QUFEd0MsS0FBdEIsQ0FBM0I7QUFNQSxVQUFNQyxNQUFNLEdBQUcsTUFBTUMsZUFBT0MsT0FBUCxDQUFlO0FBQ2xDTixNQUFBQSxLQUFLLEVBQUU7QUFDTCxTQUFDTyxnQkFBVUwsSUFBWCxHQUFrQjtBQUNoQixXQUFDTSxjQUFHQyxFQUFKLEdBQVM1QixHQUFHLENBQUNNLElBQUosQ0FBU3VCO0FBREY7QUFEYjtBQUQyQixLQUFmLENBQXJCOztBQVFBLFNBQUssSUFBSUMsRUFBRSxHQUFHLENBQWQsRUFBaUJBLEVBQUUsR0FBR1AsTUFBTSxDQUFDUSxNQUE3QixFQUFxQ0QsRUFBRSxJQUFJLENBQTNDLEVBQThDO0FBQzVDLFlBQU10QixRQUFRLENBQUN3QixRQUFULENBQWtCVCxNQUFNLENBQUNPLEVBQUQsQ0FBeEIsRUFBOEI7QUFBRUcsUUFBQUEsT0FBTyxFQUFFQyxzQkFBWDtBQUEyQi9CLFFBQUFBO0FBQTNCLE9BQTlCLENBQU47QUFDRDs7QUFFRCxVQUFNSyxRQUFRLENBQUMyQixlQUFULENBQXlCbkIsWUFBekIsRUFBdUM7QUFBRWIsTUFBQUE7QUFBRixLQUF2QyxDQUFOO0FBRUEsVUFBTUEsV0FBVyxDQUFDaUMsTUFBWixFQUFOO0FBRUFuQyxJQUFBQSxHQUFHLENBQUNvQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI5QixRQUFyQjtBQUNELEdBakNELENBaUNFLE9BQU8rQixHQUFQLEVBQVk7QUFDWixRQUFJcEMsV0FBSixFQUFpQjtBQUNmQSxNQUFBQSxXQUFXLENBQUNxQyxRQUFaO0FBQ0Q7O0FBQ0R0QyxJQUFBQSxJQUFJLENBQUNxQyxHQUFELENBQUo7QUFDRDtBQUNGLENBekNEOztlQTJDZXhDLHdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IE9wIH0gZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCB7IE5ld3NGZWVkLCBPcmdhbml6YXRpb25zLCBOZXdzRmVlZENhdXNlcywgQ2F1c2VzIH0gZnJvbSAnbW9kZWxzJztcbmltcG9ydCB7IE5ld3NGZWVkS2V5cywgQ2F1c2VLZXlzLCBPcmdhbml6YXRpb25LZXlzIH0gZnJvbSAnbW9kZWxzL2tleXMnO1xuaW1wb3J0IHNlcUluc3RhbmNlIGZyb20gJ2NvbmZpZy9kYXRhYmFzZS9jb25uJztcbmltcG9ydCB7IGJvZHlTY2hlbWEgfSBmcm9tICcuL3ZhbGlkYXRlJztcblxuY29uc3QgY3JlYXRlTmV3c0ZlZWRDb250cm9sbGVyOiBSZXF1ZXN0SGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBsZXQgdHJhbnNhY3Rpb247XG4gIHRyeSB7XG4gICAgYXdhaXQgYm9keVNjaGVtYS52YWxpZGF0ZShyZXEuYm9keSk7XG5cbiAgICB0cmFuc2FjdGlvbiA9IGF3YWl0IHNlcUluc3RhbmNlLnRyYW5zYWN0aW9uKCk7XG5cbiAgICBjb25zdCBuZXdzRmVlZCA9IGF3YWl0IE5ld3NGZWVkLmNyZWF0ZSh7XG4gICAgICBbTmV3c0ZlZWRLZXlzLlRJVExFXTogcmVxLmJvZHkudGl0bGUsXG4gICAgICBbTmV3c0ZlZWRLZXlzLlRFWFRdOiByZXEuYm9keS5zdG9yeVxuICAgIH0sIHsgdHJhbnNhY3Rpb24gfSk7XG5cbiAgICBjb25zdCBvcmdhbml6YXRpb24gPSBhd2FpdCBPcmdhbml6YXRpb25zLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgW09yZ2FuaXphdGlvbktleXMuVVVJRF06IHJlcS5ib2R5Lm9yZ2FuaXphdGlvblV1aWRcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGNhdXNlcyA9IGF3YWl0IENhdXNlcy5maW5kQWxsKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIFtDYXVzZUtleXMuVVVJRF06IHtcbiAgICAgICAgICBbT3AuaW5dOiByZXEuYm9keS5jYXVzZXNVdWlkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZvciAobGV0IGl4ID0gMDsgaXggPCBjYXVzZXMubGVuZ3RoOyBpeCArPSAxKSB7XG4gICAgICBhd2FpdCBuZXdzRmVlZC5hZGRDYXVzZShjYXVzZXNbaXhdLCB7IHRocm91Z2g6IE5ld3NGZWVkQ2F1c2VzLCB0cmFuc2FjdGlvbiB9KTtcbiAgICB9XG5cbiAgICBhd2FpdCBuZXdzRmVlZC5zZXRPcmdhbml6YXRpb24ob3JnYW5pemF0aW9uLCB7IHRyYW5zYWN0aW9uIH0pO1xuXG4gICAgYXdhaXQgdHJhbnNhY3Rpb24uY29tbWl0KCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbihuZXdzRmVlZCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmICh0cmFuc2FjdGlvbikge1xuICAgICAgdHJhbnNhY3Rpb24ucm9sbGJhY2soKTtcbiAgICB9XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOZXdzRmVlZENvbnRyb2xsZXI7XG4iXX0=