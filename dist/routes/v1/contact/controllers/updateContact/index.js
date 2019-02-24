"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Contact = _interopRequireDefault(require("../../../../../models/Contact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { bodySchema } from './validate';
const updateContactController = async (req, res, next) => {
  try {
    // await bodySchema.validate(req.body);
    const contact = await _Contact.default.findOne({
      where: {
        uuid: res.locals.uuid
      }
    });
    await contact.update(req.body);
    const updatedContact = await _Contact.default.findOne({
      where: {
        uuid: res.locals.uuid
      }
    });
    res.json(updatedContact);
  } catch (err) {
    next(err);
  }
};

var _default = updateContactController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY29udGFjdC9jb250cm9sbGVycy91cGRhdGVDb250YWN0L2luZGV4LnRzIl0sIm5hbWVzIjpbInVwZGF0ZUNvbnRhY3RDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImNvbnRhY3QiLCJDb250YWN0IiwiZmluZE9uZSIsIndoZXJlIiwidXVpZCIsImxvY2FscyIsInVwZGF0ZSIsImJvZHkiLCJ1cGRhdGVkQ29udGFjdCIsImpzb24iLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBO0FBRUEsTUFBTUEsdUJBQXVCLEdBQUcsT0FBT0MsR0FBUCxFQUFxQkMsR0FBckIsRUFBb0NDLElBQXBDLEtBQTJEO0FBQ3pGLE1BQUk7QUFDRjtBQUNBLFVBQU1DLE9BQU8sR0FBRyxNQUFNQyxpQkFBUUMsT0FBUixDQUFnQjtBQUNwQ0MsTUFBQUEsS0FBSyxFQUFFO0FBQ0xDLFFBQUFBLElBQUksRUFBRU4sR0FBRyxDQUFDTyxNQUFKLENBQVdEO0FBRFo7QUFENkIsS0FBaEIsQ0FBdEI7QUFLQSxVQUFNSixPQUFPLENBQUNNLE1BQVIsQ0FBZVQsR0FBRyxDQUFDVSxJQUFuQixDQUFOO0FBQ0EsVUFBTUMsY0FBYyxHQUFHLE1BQU1QLGlCQUFRQyxPQUFSLENBQWdCO0FBQzNDQyxNQUFBQSxLQUFLLEVBQUU7QUFDTEMsUUFBQUEsSUFBSSxFQUFFTixHQUFHLENBQUNPLE1BQUosQ0FBV0Q7QUFEWjtBQURvQyxLQUFoQixDQUE3QjtBQUtBTixJQUFBQSxHQUFHLENBQUNXLElBQUosQ0FBU0QsY0FBVDtBQUNELEdBZEQsQ0FjRSxPQUFPRSxHQUFQLEVBQVk7QUFDWlgsSUFBQUEsSUFBSSxDQUFDVyxHQUFELENBQUo7QUFDRDtBQUNGLENBbEJEOztlQW9CZWQsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICdtb2RlbHMvQ29udGFjdCc7XG4vLyBpbXBvcnQgeyBib2R5U2NoZW1hIH0gZnJvbSAnLi92YWxpZGF0ZSc7XG5cbmNvbnN0IHVwZGF0ZUNvbnRhY3RDb250cm9sbGVyID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHRyeSB7XG4gICAgLy8gYXdhaXQgYm9keVNjaGVtYS52YWxpZGF0ZShyZXEuYm9keSk7XG4gICAgY29uc3QgY29udGFjdCA9IGF3YWl0IENvbnRhY3QuZmluZE9uZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICB1dWlkOiByZXMubG9jYWxzLnV1aWRcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhd2FpdCBjb250YWN0LnVwZGF0ZShyZXEuYm9keSk7XG4gICAgY29uc3QgdXBkYXRlZENvbnRhY3QgPSBhd2FpdCBDb250YWN0LmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdXVpZDogcmVzLmxvY2Fscy51dWlkXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVzLmpzb24odXBkYXRlZENvbnRhY3QpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUNvbnRhY3RDb250cm9sbGVyO1xuIl19