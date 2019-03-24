"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Contact = _interopRequireDefault(require("../../../../../models/Contact"));

var _validate = require("./validate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getContactController = async (req, res, next) => {
  try {
    await _validate.bodySchema.validate(req.body);
    const contact = await _Contact.default.findByPassword({
      email: req.body.email,
      password: req.body.password
    });

    if (contact) {
      res.json(contact);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    next(err);
  }
};

var _default = getContactController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY29udGFjdC9jb250cm9sbGVycy9nZXRDb250YWN0L2luZGV4LnRzIl0sIm5hbWVzIjpbImdldENvbnRhY3RDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImJvZHlTY2hlbWEiLCJ2YWxpZGF0ZSIsImJvZHkiLCJjb250YWN0IiwiQ29udGFjdCIsImZpbmRCeVBhc3N3b3JkIiwiZW1haWwiLCJwYXNzd29yZCIsImpzb24iLCJzZW5kU3RhdHVzIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxvQkFBb0IsR0FBRyxPQUFPQyxHQUFQLEVBQXFCQyxHQUFyQixFQUFvQ0MsSUFBcEMsS0FBMkQ7QUFDdEYsTUFBSTtBQUNGLFVBQU1DLHFCQUFXQyxRQUFYLENBQW9CSixHQUFHLENBQUNLLElBQXhCLENBQU47QUFFQSxVQUFNQyxPQUFPLEdBQUcsTUFBTUMsaUJBQVFDLGNBQVIsQ0FBdUI7QUFDM0NDLE1BQUFBLEtBQUssRUFBRVQsR0FBRyxDQUFDSyxJQUFKLENBQVNJLEtBRDJCO0FBRTNDQyxNQUFBQSxRQUFRLEVBQUVWLEdBQUcsQ0FBQ0ssSUFBSixDQUFTSztBQUZ3QixLQUF2QixDQUF0Qjs7QUFLQSxRQUFJSixPQUFKLEVBQWE7QUFDWEwsTUFBQUEsR0FBRyxDQUFDVSxJQUFKLENBQVNMLE9BQVQ7QUFDRCxLQUZELE1BRU87QUFDTEwsTUFBQUEsR0FBRyxDQUFDVyxVQUFKLENBQWUsR0FBZjtBQUNEO0FBQ0YsR0FiRCxDQWFFLE9BQU9DLEdBQVAsRUFBWTtBQUNaWCxJQUFBQSxJQUFJLENBQUNXLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0FqQkQ7O2VBbUJlZCxvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBDb250YWN0IGZyb20gJ21vZGVscy9Db250YWN0JztcbmltcG9ydCB7IGJvZHlTY2hlbWEgfSBmcm9tICcuL3ZhbGlkYXRlJztcblxuY29uc3QgZ2V0Q29udGFjdENvbnRyb2xsZXIgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBib2R5U2NoZW1hLnZhbGlkYXRlKHJlcS5ib2R5KTtcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBhd2FpdCBDb250YWN0LmZpbmRCeVBhc3N3b3JkKHtcbiAgICAgIGVtYWlsOiByZXEuYm9keS5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiByZXEuYm9keS5wYXNzd29yZFxuICAgIH0pO1xuXG4gICAgaWYgKGNvbnRhY3QpIHtcbiAgICAgIHJlcy5qc29uKGNvbnRhY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMuc2VuZFN0YXR1cyg0MDEpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDb250YWN0Q29udHJvbGxlcjtcbiJdfQ==