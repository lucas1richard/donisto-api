"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Contact = _interopRequireDefault(require("../../../../models/Contact"));

var _validate = require("./validate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createContactController = async (req, res, next) => {
  try {
    await _validate.bodySchema.validate(req.body);
    const contact = await _Contact.default.create(req.body);
    res.json(contact);
  } catch (err) {
    next(err);
  }
};

var _default = createContactController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvY29udGFjdC9jb250cm9sbGVycy9jcmVhdGVDb250YWN0L2luZGV4LnRzIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRhY3RDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImJvZHlTY2hlbWEiLCJ2YWxpZGF0ZSIsImJvZHkiLCJjb250YWN0IiwiQ29udGFjdCIsImNyZWF0ZSIsImpzb24iLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFFQTs7OztBQUVBLE1BQU1BLHVCQUF1QixHQUFHLE9BQU9DLEdBQVAsRUFBcUJDLEdBQXJCLEVBQW9DQyxJQUFwQyxLQUEyRDtBQUN6RixNQUFJO0FBQ0YsVUFBTUMscUJBQVdDLFFBQVgsQ0FBb0JKLEdBQUcsQ0FBQ0ssSUFBeEIsQ0FBTjtBQUVBLFVBQU1DLE9BQU8sR0FBRyxNQUFNQyxpQkFBUUMsTUFBUixDQUFlUixHQUFHLENBQUNLLElBQW5CLENBQXRCO0FBRUFKLElBQUFBLEdBQUcsQ0FBQ1EsSUFBSixDQUFTSCxPQUFUO0FBQ0QsR0FORCxDQU1FLE9BQU9JLEdBQVAsRUFBWTtBQUNaUixJQUFBQSxJQUFJLENBQUNRLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0FWRDs7ZUFZZVgsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICdtb2RlbHMvQ29udGFjdCc7XG5pbXBvcnQgQ29udGFjdEtleXMgZnJvbSAnbW9kZWxzL0NvbnRhY3QvdHlwZXMvQ29udGFjdEtleXMnO1xuaW1wb3J0IHsgYm9keVNjaGVtYSB9IGZyb20gJy4vdmFsaWRhdGUnO1xuXG5jb25zdCBjcmVhdGVDb250YWN0Q29udHJvbGxlciA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IGJvZHlTY2hlbWEudmFsaWRhdGUocmVxLmJvZHkpO1xuXG4gICAgY29uc3QgY29udGFjdCA9IGF3YWl0IENvbnRhY3QuY3JlYXRlKHJlcS5ib2R5KTtcblxuICAgIHJlcy5qc29uKGNvbnRhY3QpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3RDb250cm9sbGVyO1xuIl19