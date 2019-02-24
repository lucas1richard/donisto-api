"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Organization = _interopRequireDefault(require("../../../../../models/Organization"));

var _OrganizationKeys = _interopRequireDefault(require("../../../../../models/Organization/types/OrganizationKeys"));

var _Contact = _interopRequireDefault(require("../../../../../models/Contact"));

var _ContactKeys = _interopRequireDefault(require("../../../../../models/Contact/types/ContactKeys"));

var _OrganizationsContacts = _interopRequireDefault(require("../../../../../models/OrganizationsContacts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createOrganizationController = async (req, res, next) => {
  try {
    const organization = await _Organization.default.create({
      [_OrganizationKeys.default.NAME]: req.body.name
    });
    const contact = await _Contact.default.findOne({
      where: {
        [_ContactKeys.default.UUID]: res.locals.uuid
      }
    });
    organization.addContact(contact, {
      through: _OrganizationsContacts.default
    });
    res.json({
      organization
    });
  } catch (err) {
    next(err);
  }
};

var _default = createOrganizationController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvb3JnYW5pemF0aW9uL2NvbnRyb2xsZXJzL2NyZWF0ZU9yZ2FuaXphdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6WyJjcmVhdGVPcmdhbml6YXRpb25Db250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsIm9yZ2FuaXphdGlvbiIsIk9yZ2FuaXphdGlvbiIsImNyZWF0ZSIsIk9yZ2FuaXphdGlvbktleXMiLCJOQU1FIiwiYm9keSIsIm5hbWUiLCJjb250YWN0IiwiQ29udGFjdHMiLCJmaW5kT25lIiwid2hlcmUiLCJDb250YWN0S2V5cyIsIlVVSUQiLCJsb2NhbHMiLCJ1dWlkIiwiYWRkQ29udGFjdCIsInRocm91Z2giLCJPcmdhbml6YXRpb25zQ29udGFjdHMiLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxNQUFNQSw0QkFBNEIsR0FBRyxPQUFPQyxHQUFQLEVBQXFCQyxHQUFyQixFQUFvQ0MsSUFBcEMsS0FBMkQ7QUFDOUYsTUFBSTtBQUNGLFVBQU1DLFlBQVksR0FBRyxNQUFNQyxzQkFBYUMsTUFBYixDQUFvQjtBQUM3QyxPQUFDQywwQkFBaUJDLElBQWxCLEdBQXlCUCxHQUFHLENBQUNRLElBQUosQ0FBU0M7QUFEVyxLQUFwQixDQUEzQjtBQUlBLFVBQU1DLE9BQU8sR0FBRyxNQUFNQyxpQkFBU0MsT0FBVCxDQUFpQjtBQUNyQ0MsTUFBQUEsS0FBSyxFQUFFO0FBQ0wsU0FBQ0MscUJBQVlDLElBQWIsR0FBb0JkLEdBQUcsQ0FBQ2UsTUFBSixDQUFXQztBQUQxQjtBQUQ4QixLQUFqQixDQUF0QjtBQU1BZCxJQUFBQSxZQUFZLENBQUNlLFVBQWIsQ0FBd0JSLE9BQXhCLEVBQWlDO0FBQUVTLE1BQUFBLE9BQU8sRUFBRUM7QUFBWCxLQUFqQztBQUVBbkIsSUFBQUEsR0FBRyxDQUFDb0IsSUFBSixDQUFTO0FBQ1BsQixNQUFBQTtBQURPLEtBQVQ7QUFHRCxHQWhCRCxDQWdCRSxPQUFPbUIsR0FBUCxFQUFZO0FBQ1pwQixJQUFBQSxJQUFJLENBQUNvQixHQUFELENBQUo7QUFDRDtBQUNGLENBcEJEOztlQXNCZXZCLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgUmVxdWVzdCxcbiAgUmVzcG9uc2Vcbn0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgT3JnYW5pemF0aW9uIGZyb20gJ21vZGVscy9Pcmdhbml6YXRpb24nO1xuaW1wb3J0IE9yZ2FuaXphdGlvbktleXMgZnJvbSAnbW9kZWxzL09yZ2FuaXphdGlvbi90eXBlcy9Pcmdhbml6YXRpb25LZXlzJztcbmltcG9ydCBDb250YWN0cyBmcm9tICdtb2RlbHMvQ29udGFjdCc7XG5pbXBvcnQgQ29udGFjdEtleXMgZnJvbSAnbW9kZWxzL0NvbnRhY3QvdHlwZXMvQ29udGFjdEtleXMnO1xuaW1wb3J0IHsgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnY29ubmVjdCc7XG5pbXBvcnQgT3JnYW5pemF0aW9uc0NvbnRhY3RzIGZyb20gJ21vZGVscy9Pcmdhbml6YXRpb25zQ29udGFjdHMnO1xuXG5jb25zdCBjcmVhdGVPcmdhbml6YXRpb25Db250cm9sbGVyID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3Qgb3JnYW5pemF0aW9uID0gYXdhaXQgT3JnYW5pemF0aW9uLmNyZWF0ZSh7XG4gICAgICBbT3JnYW5pemF0aW9uS2V5cy5OQU1FXTogcmVxLmJvZHkubmFtZVxuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGFjdCA9IGF3YWl0IENvbnRhY3RzLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgW0NvbnRhY3RLZXlzLlVVSURdOiByZXMubG9jYWxzLnV1aWRcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG9yZ2FuaXphdGlvbi5hZGRDb250YWN0KGNvbnRhY3QsIHsgdGhyb3VnaDogT3JnYW5pemF0aW9uc0NvbnRhY3RzIH0pO1xuXG4gICAgcmVzLmpzb24oe1xuICAgICAgb3JnYW5pemF0aW9uXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlT3JnYW5pemF0aW9uQ29udHJvbGxlcjtcbiJdfQ==