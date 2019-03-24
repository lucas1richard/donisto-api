"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Contact = _interopRequireDefault(require("../../../../../models/Contact"));

var _validate = require("./validate");

var _handleToken = _interopRequireDefault(require("../../../../../utils/handleToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createContactController = async (req, res, next) => {
  try {
    await _validate.bodySchema.validate(req.body);
    const contact = await _Contact.default.create(req.body);
    const token = await (0, _handleToken.default)(contact.id, contact.uuid);
    res.set('token', token).json(contact);
  } catch (err) {
    next(err);
  }
};

var _default = createContactController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY29udGFjdC9jb250cm9sbGVycy9jcmVhdGVDb250YWN0L2luZGV4LnRzIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRhY3RDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImJvZHlTY2hlbWEiLCJ2YWxpZGF0ZSIsImJvZHkiLCJjb250YWN0IiwiQ29udGFjdCIsImNyZWF0ZSIsInRva2VuIiwiaWQiLCJ1dWlkIiwic2V0IiwianNvbiIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsdUJBQXVCLEdBQUcsT0FBT0MsR0FBUCxFQUFxQkMsR0FBckIsRUFBb0NDLElBQXBDLEtBQTJEO0FBQ3pGLE1BQUk7QUFDRixVQUFNQyxxQkFBV0MsUUFBWCxDQUFvQkosR0FBRyxDQUFDSyxJQUF4QixDQUFOO0FBRUEsVUFBTUMsT0FBTyxHQUFHLE1BQU1DLGlCQUFRQyxNQUFSLENBQWVSLEdBQUcsQ0FBQ0ssSUFBbkIsQ0FBdEI7QUFFQSxVQUFNSSxLQUFLLEdBQUcsTUFBTSwwQkFBWUgsT0FBTyxDQUFDSSxFQUFwQixFQUF3QkosT0FBTyxDQUFDSyxJQUFoQyxDQUFwQjtBQUVBVixJQUFBQSxHQUFHLENBQ0FXLEdBREgsQ0FDTyxPQURQLEVBQ2dCSCxLQURoQixFQUVHSSxJQUZILENBRVFQLE9BRlI7QUFHRCxHQVZELENBVUUsT0FBT1EsR0FBUCxFQUFZO0FBQ1paLElBQUFBLElBQUksQ0FBQ1ksR0FBRCxDQUFKO0FBQ0Q7QUFDRixDQWREOztlQWdCZWYsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICdtb2RlbHMvQ29udGFjdCc7XG5pbXBvcnQgeyBib2R5U2NoZW1hIH0gZnJvbSAnLi92YWxpZGF0ZSc7XG5pbXBvcnQgaGFuZGxlVG9rZW4gZnJvbSAndXRpbHMvaGFuZGxlVG9rZW4nO1xuXG5jb25zdCBjcmVhdGVDb250YWN0Q29udHJvbGxlciA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IGJvZHlTY2hlbWEudmFsaWRhdGUocmVxLmJvZHkpO1xuXG4gICAgY29uc3QgY29udGFjdCA9IGF3YWl0IENvbnRhY3QuY3JlYXRlKHJlcS5ib2R5KTtcblxuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgaGFuZGxlVG9rZW4oY29udGFjdC5pZCwgY29udGFjdC51dWlkKTtcblxuICAgIHJlc1xuICAgICAgLnNldCgndG9rZW4nLCB0b2tlbilcbiAgICAgIC5qc29uKGNvbnRhY3QpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3RDb250cm9sbGVyO1xuIl19