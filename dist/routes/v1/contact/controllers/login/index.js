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
      const token = await (0, _handleToken.default)(contact.id, contact.uuid);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY29udGFjdC9jb250cm9sbGVycy9sb2dpbi9pbmRleC50cyJdLCJuYW1lcyI6WyJsb2dpbkNvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwiYm9keVNjaGVtYSIsInZhbGlkYXRlIiwiYm9keSIsImNvbnRhY3QiLCJDb250YWN0IiwiZmluZEJ5UGFzc3dvcmQiLCJlbWFpbCIsInBhc3N3b3JkIiwidG9rZW4iLCJpZCIsInV1aWQiLCJzdGF0dXMiLCJzZXQiLCJqc29uIiwic2VuZFN0YXR1cyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsZUFBZSxHQUFHLE9BQU9DLEdBQVAsRUFBcUJDLEdBQXJCLEVBQW9DQyxJQUFwQyxLQUEyRDtBQUNqRixNQUFJO0FBQ0YsVUFBTUMscUJBQVdDLFFBQVgsQ0FBb0JKLEdBQUcsQ0FBQ0ssSUFBeEIsQ0FBTjtBQUVBLFVBQU1DLE9BQU8sR0FBRyxNQUFNQyxpQkFBUUMsY0FBUixDQUF1QjtBQUMzQ0MsTUFBQUEsS0FBSyxFQUFFVCxHQUFHLENBQUNLLElBQUosQ0FBU0ksS0FEMkI7QUFFM0NDLE1BQUFBLFFBQVEsRUFBRVYsR0FBRyxDQUFDSyxJQUFKLENBQVNLO0FBRndCLEtBQXZCLENBQXRCOztBQUtBLFFBQUlKLE9BQUosRUFBYTtBQUNYLFlBQU1LLEtBQUssR0FBRyxNQUFNLDBCQUFZTCxPQUFPLENBQUNNLEVBQXBCLEVBQXdCTixPQUFPLENBQUNPLElBQWhDLENBQXBCO0FBRUFaLE1BQUFBLEdBQUcsQ0FDQWEsTUFESCxDQUNVLEdBRFYsRUFFR0MsR0FGSCxDQUVPLE9BRlAsRUFFZ0JKLEtBRmhCLEVBR0dLLElBSEgsQ0FHUVYsT0FIUjtBQUlELEtBUEQsTUFPTztBQUNMTCxNQUFBQSxHQUFHLENBQUNnQixVQUFKLENBQWUsR0FBZjtBQUNEO0FBQ0YsR0FsQkQsQ0FrQkUsT0FBT0MsR0FBUCxFQUFZO0FBQ1poQixJQUFBQSxJQUFJLENBQUNnQixHQUFELENBQUo7QUFDRDtBQUNGLENBdEJEOztlQXdCZW5CLGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICdtb2RlbHMvQ29udGFjdCc7XG5pbXBvcnQgeyBib2R5U2NoZW1hIH0gZnJvbSAnLi92YWxpZGF0ZSc7XG5pbXBvcnQgaGFuZGxlVG9rZW4gZnJvbSAndXRpbHMvaGFuZGxlVG9rZW4nO1xuXG5jb25zdCBsb2dpbkNvbnRyb2xsZXIgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBib2R5U2NoZW1hLnZhbGlkYXRlKHJlcS5ib2R5KTtcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBhd2FpdCBDb250YWN0LmZpbmRCeVBhc3N3b3JkKHtcbiAgICAgIGVtYWlsOiByZXEuYm9keS5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiByZXEuYm9keS5wYXNzd29yZFxuICAgIH0pO1xuXG4gICAgaWYgKGNvbnRhY3QpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgaGFuZGxlVG9rZW4oY29udGFjdC5pZCwgY29udGFjdC51dWlkKTtcblxuICAgICAgcmVzXG4gICAgICAgIC5zdGF0dXMoMjAwKVxuICAgICAgICAuc2V0KCd0b2tlbicsIHRva2VuKVxuICAgICAgICAuanNvbihjb250YWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnNlbmRTdGF0dXMoNDAxKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9naW5Db250cm9sbGVyO1xuIl19