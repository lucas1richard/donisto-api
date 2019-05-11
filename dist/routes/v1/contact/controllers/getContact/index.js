"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Contact = _interopRequireDefault(require("../../../../../models/Contact"));

var _Organization = _interopRequireDefault(require("../../../../../models/Organization"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getContactController = async (req, res, next) => {
  try {
    const contact = await _Contact.default.findOne({
      where: {
        uuid: res.locals.uuid
      },
      include: [{
        model: _Organization.default
      }]
    });
    res.json(contact);
  } catch (err) {
    next(err);
  }
};

var _default = getContactController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY29udGFjdC9jb250cm9sbGVycy9nZXRDb250YWN0L2luZGV4LnRzIl0sIm5hbWVzIjpbImdldENvbnRhY3RDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImNvbnRhY3QiLCJDb250YWN0IiwiZmluZE9uZSIsIndoZXJlIiwidXVpZCIsImxvY2FscyIsImluY2x1ZGUiLCJtb2RlbCIsIk9yZ2FuaXphdGlvbnMiLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxvQkFBb0IsR0FBRyxPQUFPQyxHQUFQLEVBQXFCQyxHQUFyQixFQUFvQ0MsSUFBcEMsS0FBMkQ7QUFDdEYsTUFBSTtBQUNGLFVBQU1DLE9BQU8sR0FBRyxNQUFNQyxpQkFBUUMsT0FBUixDQUFnQjtBQUNwQ0MsTUFBQUEsS0FBSyxFQUFFO0FBQ0xDLFFBQUFBLElBQUksRUFBRU4sR0FBRyxDQUFDTyxNQUFKLENBQVdEO0FBRFosT0FENkI7QUFJcENFLE1BQUFBLE9BQU8sRUFBRSxDQUFDO0FBQ1JDLFFBQUFBLEtBQUssRUFBRUM7QUFEQyxPQUFEO0FBSjJCLEtBQWhCLENBQXRCO0FBUUFWLElBQUFBLEdBQUcsQ0FBQ1csSUFBSixDQUFTVCxPQUFUO0FBQ0QsR0FWRCxDQVVFLE9BQU9VLEdBQVAsRUFBWTtBQUNaWCxJQUFBQSxJQUFJLENBQUNXLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0FkRDs7ZUFnQmVkLG9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnbW9kZWxzL0NvbnRhY3QnO1xuaW1wb3J0IE9yZ2FuaXphdGlvbnMgZnJvbSAnbW9kZWxzL09yZ2FuaXphdGlvbic7XG5cbmNvbnN0IGdldENvbnRhY3RDb250cm9sbGVyID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29udGFjdCA9IGF3YWl0IENvbnRhY3QuZmluZE9uZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICB1dWlkOiByZXMubG9jYWxzLnV1aWRcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiBbe1xuICAgICAgICBtb2RlbDogT3JnYW5pemF0aW9uc1xuICAgICAgfV1cbiAgICB9KTtcbiAgICByZXMuanNvbihjb250YWN0KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDb250YWN0Q29udHJvbGxlcjtcbiJdfQ==