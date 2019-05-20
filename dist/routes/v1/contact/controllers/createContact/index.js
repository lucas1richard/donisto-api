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
    const token = await (0, _handleToken.default)(`${contact.id}`, contact.uuid);
    res.set('token', token).json(contact);
  } catch (err) {
    next(err);
  }
};

var _default = createContactController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY29udGFjdC9jb250cm9sbGVycy9jcmVhdGVDb250YWN0L2luZGV4LnRzIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRhY3RDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImJvZHlTY2hlbWEiLCJ2YWxpZGF0ZSIsImJvZHkiLCJjb250YWN0IiwiQ29udGFjdCIsImNyZWF0ZSIsInRva2VuIiwiaWQiLCJ1dWlkIiwic2V0IiwianNvbiIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsdUJBQXVDLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixLQUEwQjtBQUN4RSxNQUFJO0FBQ0YsVUFBTUMscUJBQVdDLFFBQVgsQ0FBb0JKLEdBQUcsQ0FBQ0ssSUFBeEIsQ0FBTjtBQUVBLFVBQU1DLE9BQU8sR0FBRyxNQUFNQyxpQkFBUUMsTUFBUixDQUFlUixHQUFHLENBQUNLLElBQW5CLENBQXRCO0FBRUEsVUFBTUksS0FBSyxHQUFHLE1BQU0sMEJBQWEsR0FBRUgsT0FBTyxDQUFDSSxFQUFHLEVBQTFCLEVBQTZCSixPQUFPLENBQUNLLElBQXJDLENBQXBCO0FBRUFWLElBQUFBLEdBQUcsQ0FDQVcsR0FESCxDQUNPLE9BRFAsRUFDZ0JILEtBRGhCLEVBRUdJLElBRkgsQ0FFUVAsT0FGUjtBQUdELEdBVkQsQ0FVRSxPQUFPUSxHQUFQLEVBQVk7QUFDWlosSUFBQUEsSUFBSSxDQUFDWSxHQUFELENBQUo7QUFDRDtBQUNGLENBZEQ7O2VBZ0JlZix1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICdtb2RlbHMvQ29udGFjdCc7XG5pbXBvcnQgeyBib2R5U2NoZW1hIH0gZnJvbSAnLi92YWxpZGF0ZSc7XG5pbXBvcnQgaGFuZGxlVG9rZW4gZnJvbSAndXRpbHMvaGFuZGxlVG9rZW4nO1xuXG5jb25zdCBjcmVhdGVDb250YWN0Q29udHJvbGxlcjogUmVxdWVzdEhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBib2R5U2NoZW1hLnZhbGlkYXRlKHJlcS5ib2R5KTtcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBhd2FpdCBDb250YWN0LmNyZWF0ZShyZXEuYm9keSk7XG5cbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGhhbmRsZVRva2VuKGAke2NvbnRhY3QuaWR9YCwgY29udGFjdC51dWlkKTtcblxuICAgIHJlc1xuICAgICAgLnNldCgndG9rZW4nLCB0b2tlbilcbiAgICAgIC5qc29uKGNvbnRhY3QpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3RDb250cm9sbGVyO1xuIl19