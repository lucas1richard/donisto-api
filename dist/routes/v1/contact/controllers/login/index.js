"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../../../../models");

var _validate = require("./validate");

var _handleToken = _interopRequireDefault(require("../../../../../utils/handleToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const loginController = async (req, res, next) => {
  try {
    await _validate.bodySchema.validate(req.body);
    const contact = await _models.Contacts.findByPassword({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY29udGFjdC9jb250cm9sbGVycy9sb2dpbi9pbmRleC50cyJdLCJuYW1lcyI6WyJsb2dpbkNvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwiYm9keVNjaGVtYSIsInZhbGlkYXRlIiwiYm9keSIsImNvbnRhY3QiLCJDb250YWN0cyIsImZpbmRCeVBhc3N3b3JkIiwiZW1haWwiLCJwYXNzd29yZCIsInRva2VuIiwiaWQiLCJ1dWlkIiwic3RhdHVzIiwic2V0IiwianNvbiIsInNlbmRTdGF0dXMiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1BLGVBQStCLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixLQUEwQjtBQUNoRSxNQUFJO0FBQ0YsVUFBTUMscUJBQVdDLFFBQVgsQ0FBb0JKLEdBQUcsQ0FBQ0ssSUFBeEIsQ0FBTjtBQUVBLFVBQU1DLE9BQU8sR0FBRyxNQUFNQyxpQkFBU0MsY0FBVCxDQUF3QjtBQUM1Q0MsTUFBQUEsS0FBSyxFQUFFVCxHQUFHLENBQUNLLElBQUosQ0FBU0ksS0FENEI7QUFFNUNDLE1BQUFBLFFBQVEsRUFBRVYsR0FBRyxDQUFDSyxJQUFKLENBQVNLO0FBRnlCLEtBQXhCLENBQXRCOztBQUtBLFFBQUlKLE9BQUosRUFBYTtBQUNYLFlBQU1LLEtBQUssR0FBRyxNQUFNLDBCQUFhLEdBQUVMLE9BQU8sQ0FBQ00sRUFBRyxFQUExQixFQUE2Qk4sT0FBTyxDQUFDTyxJQUFyQyxDQUFwQjtBQUVBWixNQUFBQSxHQUFHLENBQ0FhLE1BREgsQ0FDVSxHQURWLEVBRUdDLEdBRkgsQ0FFTyxPQUZQLEVBRWdCSixLQUZoQixFQUdHSyxJQUhILENBR1FWLE9BSFI7QUFJRCxLQVBELE1BT087QUFDTEwsTUFBQUEsR0FBRyxDQUFDZ0IsVUFBSixDQUFlLEdBQWY7QUFDRDtBQUNGLEdBbEJELENBa0JFLE9BQU9DLEdBQVAsRUFBWTtBQUNaaEIsSUFBQUEsSUFBSSxDQUFDZ0IsR0FBRCxDQUFKO0FBQ0Q7QUFDRixDQXRCRDs7ZUF3QmVuQixlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IENvbnRhY3RzIH0gZnJvbSAnbW9kZWxzJztcbmltcG9ydCB7IGJvZHlTY2hlbWEgfSBmcm9tICcuL3ZhbGlkYXRlJztcbmltcG9ydCBoYW5kbGVUb2tlbiBmcm9tICd1dGlscy9oYW5kbGVUb2tlbic7XG5cbmNvbnN0IGxvZ2luQ29udHJvbGxlcjogUmVxdWVzdEhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBib2R5U2NoZW1hLnZhbGlkYXRlKHJlcS5ib2R5KTtcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBhd2FpdCBDb250YWN0cy5maW5kQnlQYXNzd29yZCh7XG4gICAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXG4gICAgICBwYXNzd29yZDogcmVxLmJvZHkucGFzc3dvcmRcbiAgICB9KTtcblxuICAgIGlmIChjb250YWN0KSB7XG4gICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGhhbmRsZVRva2VuKGAke2NvbnRhY3QuaWR9YCwgY29udGFjdC51dWlkKTtcblxuICAgICAgcmVzXG4gICAgICAgIC5zdGF0dXMoMjAwKVxuICAgICAgICAuc2V0KCd0b2tlbicsIHRva2VuKVxuICAgICAgICAuanNvbihjb250YWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnNlbmRTdGF0dXMoNDAxKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9naW5Db250cm9sbGVyO1xuIl19