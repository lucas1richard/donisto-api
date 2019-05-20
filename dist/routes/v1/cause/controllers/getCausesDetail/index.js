"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../../../../models");

var _keys = require("../../../../../models/keys");

var _conn = _interopRequireDefault(require("../../../../../database/conn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Op
} = _conn.default;

const getCausesDetailController = async (req, res, next) => {
  try {
    const {
      cause_uuids
    } = req.body;
    const causes = await _models.Causes.findAll({
      where: {
        [_keys.CauseKeys.UUID]: {
          [Op.in]: cause_uuids
        }
      },
      include: [{
        model: _models.Donations,
        include: [{
          model: _models.Contacts,
          attributes: [_keys.ContactKeys.UUID, _keys.ContactKeys.FIRST_NAME, _keys.ContactKeys.LAST_NAME, _keys.ContactKeys.EMAIL]
        }]
      }]
    });
    res.json(causes);
  } catch (err) {
    next(err);
  }
};

var _default = getCausesDetailController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY2F1c2UvY29udHJvbGxlcnMvZ2V0Q2F1c2VzRGV0YWlsL2luZGV4LnRzIl0sIm5hbWVzIjpbIk9wIiwiY29ubiIsImdldENhdXNlc0RldGFpbENvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwiY2F1c2VfdXVpZHMiLCJib2R5IiwiY2F1c2VzIiwiQ2F1c2VzIiwiZmluZEFsbCIsIndoZXJlIiwiQ2F1c2VLZXlzIiwiVVVJRCIsImluIiwiaW5jbHVkZSIsIm1vZGVsIiwiRG9uYXRpb25zIiwiQ29udGFjdHMiLCJhdHRyaWJ1dGVzIiwiQ29udGFjdEtleXMiLCJGSVJTVF9OQU1FIiwiTEFTVF9OQU1FIiwiRU1BSUwiLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNO0FBQUVBLEVBQUFBO0FBQUYsSUFBU0MsYUFBZjs7QUFFQSxNQUFNQyx5QkFBeUMsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQzFFLE1BQUk7QUFDRixVQUFNO0FBQUVDLE1BQUFBO0FBQUYsUUFBa0JILEdBQUcsQ0FBQ0ksSUFBNUI7QUFDQSxVQUFNQyxNQUFNLEdBQUcsTUFBTUMsZUFBT0MsT0FBUCxDQUFlO0FBQ2xDQyxNQUFBQSxLQUFLLEVBQUU7QUFDTCxTQUFDQyxnQkFBVUMsSUFBWCxHQUFrQjtBQUNoQixXQUFDYixFQUFFLENBQUNjLEVBQUosR0FBU1I7QUFETztBQURiLE9BRDJCO0FBTWxDUyxNQUFBQSxPQUFPLEVBQUUsQ0FBQztBQUNSQyxRQUFBQSxLQUFLLEVBQUVDLGlCQURDO0FBRVJGLFFBQUFBLE9BQU8sRUFBRSxDQUFDO0FBQ1JDLFVBQUFBLEtBQUssRUFBRUUsZ0JBREM7QUFFUkMsVUFBQUEsVUFBVSxFQUFFLENBQ1ZDLGtCQUFZUCxJQURGLEVBRVZPLGtCQUFZQyxVQUZGLEVBR1ZELGtCQUFZRSxTQUhGLEVBSVZGLGtCQUFZRyxLQUpGO0FBRkosU0FBRDtBQUZELE9BQUQ7QUFOeUIsS0FBZixDQUFyQjtBQW9CQW5CLElBQUFBLEdBQUcsQ0FBQ29CLElBQUosQ0FBU2hCLE1BQVQ7QUFDRCxHQXZCRCxDQXVCRSxPQUFPaUIsR0FBUCxFQUFZO0FBQ1pwQixJQUFBQSxJQUFJLENBQUNvQixHQUFELENBQUo7QUFDRDtBQUNGLENBM0JEOztlQTZCZXZCLHlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IENhdXNlcywgRG9uYXRpb25zLCBDb250YWN0cyB9IGZyb20gJ21vZGVscyc7XG5pbXBvcnQgeyBDYXVzZUtleXMsIENvbnRhY3RLZXlzIH0gZnJvbSAnbW9kZWxzL2tleXMnO1xuaW1wb3J0IGNvbm4gZnJvbSAnZGF0YWJhc2UvY29ubic7XG5cbmNvbnN0IHsgT3AgfSA9IGNvbm47XG5cbmNvbnN0IGdldENhdXNlc0RldGFpbENvbnRyb2xsZXI6IFJlcXVlc3RIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBjYXVzZV91dWlkcyB9ID0gcmVxLmJvZHk7XG4gICAgY29uc3QgY2F1c2VzID0gYXdhaXQgQ2F1c2VzLmZpbmRBbGwoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgW0NhdXNlS2V5cy5VVUlEXToge1xuICAgICAgICAgIFtPcC5pbl06IGNhdXNlX3V1aWRzXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiBbe1xuICAgICAgICBtb2RlbDogRG9uYXRpb25zLFxuICAgICAgICBpbmNsdWRlOiBbe1xuICAgICAgICAgIG1vZGVsOiBDb250YWN0cyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgICBDb250YWN0S2V5cy5VVUlELFxuICAgICAgICAgICAgQ29udGFjdEtleXMuRklSU1RfTkFNRSxcbiAgICAgICAgICAgIENvbnRhY3RLZXlzLkxBU1RfTkFNRSxcbiAgICAgICAgICAgIENvbnRhY3RLZXlzLkVNQUlMLFxuICAgICAgICAgIF1cbiAgICAgICAgfV1cbiAgICAgIH1dXG4gICAgfSk7XG5cbiAgICByZXMuanNvbihjYXVzZXMpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENhdXNlc0RldGFpbENvbnRyb2xsZXI7Il19