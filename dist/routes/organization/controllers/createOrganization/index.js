"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Organization = _interopRequireDefault(require("../../../../models/Organization"));

var _OrganizationKeys = _interopRequireDefault(require("../../../../models/Organization/types/OrganizationKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createOrganizationController = async (req, res) => {
  const organization = await _Organization.default.create({
    [_OrganizationKeys.default.NAME]: 'OrganizationName'
  });
  res.json({
    organization
  });
};

var _default = createOrganizationController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvb3JnYW5pemF0aW9uL2NvbnRyb2xsZXJzL2NyZWF0ZU9yZ2FuaXphdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6WyJjcmVhdGVPcmdhbml6YXRpb25Db250cm9sbGVyIiwicmVxIiwicmVzIiwib3JnYW5pemF0aW9uIiwiT3JnYW5pemF0aW9uIiwiY3JlYXRlIiwiT3JnYW5pemF0aW9uS2V5cyIsIk5BTUUiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSw0QkFBNEIsR0FBRyxPQUFPQyxHQUFQLEVBQXFCQyxHQUFyQixLQUF1QztBQUMxRSxRQUFNQyxZQUFZLEdBQUcsTUFBTUMsc0JBQWFDLE1BQWIsQ0FBb0I7QUFDN0MsS0FBQ0MsMEJBQWlCQyxJQUFsQixHQUF5QjtBQURvQixHQUFwQixDQUEzQjtBQUlBTCxFQUFBQSxHQUFHLENBQUNNLElBQUosQ0FBUztBQUNQTCxJQUFBQTtBQURPLEdBQVQ7QUFHRCxDQVJEOztlQVVlSCw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgT3JnYW5pemF0aW9uIGZyb20gJ21vZGVscy9Pcmdhbml6YXRpb24nO1xuaW1wb3J0IE9yZ2FuaXphdGlvbktleXMgZnJvbSAnbW9kZWxzL09yZ2FuaXphdGlvbi90eXBlcy9Pcmdhbml6YXRpb25LZXlzJztcblxuY29uc3QgY3JlYXRlT3JnYW5pemF0aW9uQ29udHJvbGxlciA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgY29uc3Qgb3JnYW5pemF0aW9uID0gYXdhaXQgT3JnYW5pemF0aW9uLmNyZWF0ZSh7XG4gICAgW09yZ2FuaXphdGlvbktleXMuTkFNRV06ICdPcmdhbml6YXRpb25OYW1lJyxcbiAgfSk7XG5cbiAgcmVzLmpzb24oe1xuICAgIG9yZ2FuaXphdGlvblxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU9yZ2FuaXphdGlvbkNvbnRyb2xsZXI7XG4iXX0=