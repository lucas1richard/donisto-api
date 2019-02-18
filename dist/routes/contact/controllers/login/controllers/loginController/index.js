"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jwtSimple = _interopRequireDefault(require("jwt-simple"));

var _Contact = _interopRequireDefault(require("../../../../../../models/Contact"));

var _validate = require("./validate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const loginController = async (req, res, next) => {
  try {
    await _validate.bodySchema.validate(req.body);
    const contact = await _Contact.default.findByPassword({
      email: req.body.email,
      password: req.body.password
    });

    const token = _jwtSimple.default.encode({
      id: contact.id,
      uuid: contact.uuid
    }, res.locals.jwtSecret);

    res.status(200).set('token', token).json(contact);
  } catch (err) {
    next(err);
  }
};

var _default = loginController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvY29udGFjdC9jb250cm9sbGVycy9sb2dpbi9jb250cm9sbGVycy9sb2dpbkNvbnRyb2xsZXIvaW5kZXgudHMiXSwibmFtZXMiOlsibG9naW5Db250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImJvZHlTY2hlbWEiLCJ2YWxpZGF0ZSIsImJvZHkiLCJjb250YWN0IiwiQ29udGFjdCIsImZpbmRCeVBhc3N3b3JkIiwiZW1haWwiLCJwYXNzd29yZCIsInRva2VuIiwiand0IiwiZW5jb2RlIiwiaWQiLCJ1dWlkIiwibG9jYWxzIiwiand0U2VjcmV0Iiwic3RhdHVzIiwic2V0IiwianNvbiIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOzs7O0FBRUEsTUFBTUEsZUFBZSxHQUFHLE9BQU9DLEdBQVAsRUFBcUJDLEdBQXJCLEVBQW9DQyxJQUFwQyxLQUEyRDtBQUNqRixNQUFJO0FBQ0YsVUFBTUMscUJBQVdDLFFBQVgsQ0FBb0JKLEdBQUcsQ0FBQ0ssSUFBeEIsQ0FBTjtBQUNBLFVBQU1DLE9BQU8sR0FBRyxNQUFNQyxpQkFBUUMsY0FBUixDQUF1QjtBQUMzQ0MsTUFBQUEsS0FBSyxFQUFFVCxHQUFHLENBQUNLLElBQUosQ0FBU0ksS0FEMkI7QUFFM0NDLE1BQUFBLFFBQVEsRUFBRVYsR0FBRyxDQUFDSyxJQUFKLENBQVNLO0FBRndCLEtBQXZCLENBQXRCOztBQUlBLFVBQU1DLEtBQUssR0FBR0MsbUJBQUlDLE1BQUosQ0FBVztBQUN2QkMsTUFBQUEsRUFBRSxFQUFFUixPQUFPLENBQUNRLEVBRFc7QUFFdkJDLE1BQUFBLElBQUksRUFBRVQsT0FBTyxDQUFDUztBQUZTLEtBQVgsRUFHWGQsR0FBRyxDQUFDZSxNQUFKLENBQVdDLFNBSEEsQ0FBZDs7QUFLQWhCLElBQUFBLEdBQUcsQ0FDQWlCLE1BREgsQ0FDVSxHQURWLEVBRUdDLEdBRkgsQ0FFTyxPQUZQLEVBRWdCUixLQUZoQixFQUdHUyxJQUhILENBR1FkLE9BSFI7QUFJRCxHQWZELENBZUUsT0FBT2UsR0FBUCxFQUFZO0FBQ1puQixJQUFBQSxJQUFJLENBQUNtQixHQUFELENBQUo7QUFDRDtBQUNGLENBbkJEOztlQXFCZXRCLGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2p3dC1zaW1wbGUnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnbW9kZWxzL0NvbnRhY3QnO1xuaW1wb3J0IHsgYm9keVNjaGVtYSB9IGZyb20gJy4vdmFsaWRhdGUnO1xuXG5jb25zdCBsb2dpbkNvbnRyb2xsZXIgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBib2R5U2NoZW1hLnZhbGlkYXRlKHJlcS5ib2R5KTtcbiAgICBjb25zdCBjb250YWN0ID0gYXdhaXQgQ29udGFjdC5maW5kQnlQYXNzd29yZCh7XG4gICAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXG4gICAgICBwYXNzd29yZDogcmVxLmJvZHkucGFzc3dvcmRcbiAgICB9KTtcbiAgICBjb25zdCB0b2tlbiA9IGp3dC5lbmNvZGUoe1xuICAgICAgaWQ6IGNvbnRhY3QuaWQsXG4gICAgICB1dWlkOiBjb250YWN0LnV1aWRcbiAgICB9LCByZXMubG9jYWxzLmp3dFNlY3JldCk7XG5cbiAgICByZXNcbiAgICAgIC5zdGF0dXMoMjAwKVxuICAgICAgLnNldCgndG9rZW4nLCB0b2tlbilcbiAgICAgIC5qc29uKGNvbnRhY3QpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2luQ29udHJvbGxlcjtcbiJdfQ==