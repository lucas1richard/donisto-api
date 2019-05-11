"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Contact = _interopRequireDefault(require("../../../../../models/Contact"));

var _validate = require("./validate");

var _handleToken = _interopRequireDefault(require("../../../../../utils/handleToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const loginController = async (req, res, next) => {
  try {
    await _validate.bodySchema.validate(req.body);
    const contact = await _Contact.default.findByPassword({
      email: req.body.email,
      password: req.body.password
    });

    if (contact) {
      const token = await (0, _handleToken.default)(`${contact.id}`, contact.uuid);
      res.status(200).set('token', token).json(contact);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    next(err);
  }
};

var _default = loginController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY29udGFjdC9jb250cm9sbGVycy9sb2dpbi9pbmRleC50cyJdLCJuYW1lcyI6WyJsb2dpbkNvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwiYm9keVNjaGVtYSIsInZhbGlkYXRlIiwiYm9keSIsImNvbnRhY3QiLCJDb250YWN0IiwiZmluZEJ5UGFzc3dvcmQiLCJlbWFpbCIsInBhc3N3b3JkIiwidG9rZW4iLCJpZCIsInV1aWQiLCJzdGF0dXMiLCJzZXQiLCJqc29uIiwic2VuZFN0YXR1cyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsZUFBZSxHQUFHLE9BQU9DLEdBQVAsRUFBcUJDLEdBQXJCLEVBQW9DQyxJQUFwQyxLQUEyRDtBQUNqRixNQUFJO0FBQ0YsVUFBTUMscUJBQVdDLFFBQVgsQ0FBb0JKLEdBQUcsQ0FBQ0ssSUFBeEIsQ0FBTjtBQUVBLFVBQU1DLE9BQU8sR0FBRyxNQUFNQyxpQkFBUUMsY0FBUixDQUF1QjtBQUMzQ0MsTUFBQUEsS0FBSyxFQUFFVCxHQUFHLENBQUNLLElBQUosQ0FBU0ksS0FEMkI7QUFFM0NDLE1BQUFBLFFBQVEsRUFBRVYsR0FBRyxDQUFDSyxJQUFKLENBQVNLO0FBRndCLEtBQXZCLENBQXRCOztBQUtBLFFBQUlKLE9BQUosRUFBYTtBQUNYLFlBQU1LLEtBQUssR0FBRyxNQUFNLDBCQUFhLEdBQUVMLE9BQU8sQ0FBQ00sRUFBRyxFQUExQixFQUE2Qk4sT0FBTyxDQUFDTyxJQUFyQyxDQUFwQjtBQUVBWixNQUFBQSxHQUFHLENBQ0FhLE1BREgsQ0FDVSxHQURWLEVBRUdDLEdBRkgsQ0FFTyxPQUZQLEVBRWdCSixLQUZoQixFQUdHSyxJQUhILENBR1FWLE9BSFI7QUFJRCxLQVBELE1BT087QUFDTEwsTUFBQUEsR0FBRyxDQUFDZ0IsVUFBSixDQUFlLEdBQWY7QUFDRDtBQUNGLEdBbEJELENBa0JFLE9BQU9DLEdBQVAsRUFBWTtBQUNaaEIsSUFBQUEsSUFBSSxDQUFDZ0IsR0FBRCxDQUFKO0FBQ0Q7QUFDRixDQXRCRDs7ZUF3QmVuQixlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnbW9kZWxzL0NvbnRhY3QnO1xuaW1wb3J0IHsgYm9keVNjaGVtYSB9IGZyb20gJy4vdmFsaWRhdGUnO1xuaW1wb3J0IGhhbmRsZVRva2VuIGZyb20gJ3V0aWxzL2hhbmRsZVRva2VuJztcblxuY29uc3QgbG9naW5Db250cm9sbGVyID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYm9keVNjaGVtYS52YWxpZGF0ZShyZXEuYm9keSk7XG5cbiAgICBjb25zdCBjb250YWN0ID0gYXdhaXQgQ29udGFjdC5maW5kQnlQYXNzd29yZCh7XG4gICAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXG4gICAgICBwYXNzd29yZDogcmVxLmJvZHkucGFzc3dvcmRcbiAgICB9KTtcblxuICAgIGlmIChjb250YWN0KSB7XG4gICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGhhbmRsZVRva2VuKGAke2NvbnRhY3QuaWR9YCwgY29udGFjdC51dWlkKTtcblxuICAgICAgcmVzXG4gICAgICAgIC5zdGF0dXMoMjAwKVxuICAgICAgICAuc2V0KCd0b2tlbicsIHRva2VuKVxuICAgICAgICAuanNvbihjb250YWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnNlbmRTdGF0dXMoNDAxKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9naW5Db250cm9sbGVyO1xuIl19