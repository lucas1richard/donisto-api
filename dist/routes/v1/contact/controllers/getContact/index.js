"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../../../../models");

var _keys = require("../../../../../models/keys");

const getContactController = async (req, res, next) => {
  try {
    const contact = await _models.Contacts.findOne({
      where: {
        uuid: req.user
      },
      attributes: {
        exclude: [_keys.ContactKeys.PASSWORD, _keys.ContactKeys.SALT]
      },
      include: [{
        model: _models.Organizations
      }]
    });
    res.json(contact);
  } catch (err) {
    next(err);
  }
};

var _default = getContactController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY29udGFjdC9jb250cm9sbGVycy9nZXRDb250YWN0L2luZGV4LnRzIl0sIm5hbWVzIjpbImdldENvbnRhY3RDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImNvbnRhY3QiLCJDb250YWN0cyIsImZpbmRPbmUiLCJ3aGVyZSIsInV1aWQiLCJ1c2VyIiwiYXR0cmlidXRlcyIsImV4Y2x1ZGUiLCJDb250YWN0S2V5cyIsIlBBU1NXT1JEIiwiU0FMVCIsImluY2x1ZGUiLCJtb2RlbCIsIk9yZ2FuaXphdGlvbnMiLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBRUEsTUFBTUEsb0JBQW9DLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixLQUEwQjtBQUNyRSxNQUFJO0FBQ0YsVUFBTUMsT0FBTyxHQUFHLE1BQU1DLGlCQUFTQyxPQUFULENBQWlCO0FBQ3JDQyxNQUFBQSxLQUFLLEVBQUU7QUFDTEMsUUFBQUEsSUFBSSxFQUFFUCxHQUFHLENBQUNRO0FBREwsT0FEOEI7QUFJckNDLE1BQUFBLFVBQVUsRUFBRTtBQUNWQyxRQUFBQSxPQUFPLEVBQUUsQ0FDUEMsa0JBQVlDLFFBREwsRUFFUEQsa0JBQVlFLElBRkw7QUFEQyxPQUp5QjtBQVVyQ0MsTUFBQUEsT0FBTyxFQUFFLENBQUM7QUFDUkMsUUFBQUEsS0FBSyxFQUFFQztBQURDLE9BQUQ7QUFWNEIsS0FBakIsQ0FBdEI7QUFjQWYsSUFBQUEsR0FBRyxDQUFDZ0IsSUFBSixDQUFTZCxPQUFUO0FBQ0QsR0FoQkQsQ0FnQkUsT0FBT2UsR0FBUCxFQUFZO0FBQ1poQixJQUFBQSxJQUFJLENBQUNnQixHQUFELENBQUo7QUFDRDtBQUNGLENBcEJEOztlQXNCZW5CLG9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IENvbnRhY3RzLCBPcmdhbml6YXRpb25zIH0gZnJvbSAnbW9kZWxzJztcbmltcG9ydCB7IENvbnRhY3RLZXlzIH0gZnJvbSAnbW9kZWxzL2tleXMnO1xuXG5jb25zdCBnZXRDb250YWN0Q29udHJvbGxlcjogUmVxdWVzdEhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb250YWN0ID0gYXdhaXQgQ29udGFjdHMuZmluZE9uZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICB1dWlkOiByZXEudXNlcixcbiAgICAgIH0sXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGV4Y2x1ZGU6IFtcbiAgICAgICAgICBDb250YWN0S2V5cy5QQVNTV09SRCxcbiAgICAgICAgICBDb250YWN0S2V5cy5TQUxULFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IFt7XG4gICAgICAgIG1vZGVsOiBPcmdhbml6YXRpb25zLFxuICAgICAgfV0sXG4gICAgfSk7XG4gICAgcmVzLmpzb24oY29udGFjdCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q29udGFjdENvbnRyb2xsZXI7XG4iXX0=