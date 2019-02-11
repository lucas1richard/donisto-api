"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Contact = _interopRequireDefault(require("../../../../models/Contact"));

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
      setTimeout(() => {
        res.json(contact);
      }, 1000);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    next(err);
  }
};

var _default = getContactController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvY29udGFjdC9jb250cm9sbGVycy9nZXRDb250YWN0L2luZGV4LnRzIl0sIm5hbWVzIjpbImdldENvbnRhY3RDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImJvZHlTY2hlbWEiLCJ2YWxpZGF0ZSIsImJvZHkiLCJjb250YWN0IiwiQ29udGFjdCIsImZpbmRCeVBhc3N3b3JkIiwiZW1haWwiLCJwYXNzd29yZCIsInNldFRpbWVvdXQiLCJqc29uIiwic2VuZFN0YXR1cyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsb0JBQW9CLEdBQUcsT0FBT0MsR0FBUCxFQUFxQkMsR0FBckIsRUFBb0NDLElBQXBDLEtBQTJEO0FBQ3RGLE1BQUk7QUFDRixVQUFNQyxxQkFBV0MsUUFBWCxDQUFvQkosR0FBRyxDQUFDSyxJQUF4QixDQUFOO0FBQ0EsVUFBTUMsT0FBTyxHQUFHLE1BQU1DLGlCQUFRQyxjQUFSLENBQXVCO0FBQzNDQyxNQUFBQSxLQUFLLEVBQUVULEdBQUcsQ0FBQ0ssSUFBSixDQUFTSSxLQUQyQjtBQUUzQ0MsTUFBQUEsUUFBUSxFQUFFVixHQUFHLENBQUNLLElBQUosQ0FBU0s7QUFGd0IsS0FBdkIsQ0FBdEI7O0FBSUEsUUFBSUosT0FBSixFQUFhO0FBQ1hLLE1BQUFBLFVBQVUsQ0FBQyxNQUFNO0FBQ2ZWLFFBQUFBLEdBQUcsQ0FBQ1csSUFBSixDQUFTTixPQUFUO0FBQ0QsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELEtBSkQsTUFJTztBQUNMTCxNQUFBQSxHQUFHLENBQUNZLFVBQUosQ0FBZSxHQUFmO0FBQ0Q7QUFDRixHQWJELENBYUUsT0FBT0MsR0FBUCxFQUFZO0FBQ1paLElBQUFBLElBQUksQ0FBQ1ksR0FBRCxDQUFKO0FBQ0Q7QUFDRixDQWpCRDs7ZUFtQmVmLG9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnbW9kZWxzL0NvbnRhY3QnO1xuaW1wb3J0IHsgYm9keVNjaGVtYSB9IGZyb20gJy4vdmFsaWRhdGUnO1xuXG5jb25zdCBnZXRDb250YWN0Q29udHJvbGxlciA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IGJvZHlTY2hlbWEudmFsaWRhdGUocmVxLmJvZHkpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBhd2FpdCBDb250YWN0LmZpbmRCeVBhc3N3b3JkKHtcbiAgICAgIGVtYWlsOiByZXEuYm9keS5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiByZXEuYm9keS5wYXNzd29yZFxuICAgIH0pO1xuICAgIGlmIChjb250YWN0KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzLmpzb24oY29udGFjdCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnNlbmRTdGF0dXMoNDAxKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q29udGFjdENvbnRyb2xsZXI7XG4iXX0=