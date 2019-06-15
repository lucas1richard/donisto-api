"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Contact = _interopRequireDefault(require("../../../../../models/Contact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const updateContactController = async (req, res, next) => {
  try {
    const contact = await _Contact.default.findOne({
      where: {
        uuid: req.user
      }
    });
    await contact.update(req.body);
    const updatedContact = await _Contact.default.findOne({
      where: {
        uuid: req.user
      }
    });
    res.json(updatedContact);
  } catch (err) {
    next(err);
  }
};

var _default = updateContactController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY29udGFjdC9jb250cm9sbGVycy91cGRhdGVDb250YWN0L2luZGV4LnRzIl0sIm5hbWVzIjpbInVwZGF0ZUNvbnRhY3RDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImNvbnRhY3QiLCJDb250YWN0IiwiZmluZE9uZSIsIndoZXJlIiwidXVpZCIsInVzZXIiLCJ1cGRhdGUiLCJib2R5IiwidXBkYXRlZENvbnRhY3QiLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFFQSxNQUFNQSx1QkFBdUMsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQ3hFLE1BQUk7QUFDRixVQUFNQyxPQUFPLEdBQUcsTUFBTUMsaUJBQVFDLE9BQVIsQ0FBZ0I7QUFDcENDLE1BQUFBLEtBQUssRUFBRTtBQUNMQyxRQUFBQSxJQUFJLEVBQUVQLEdBQUcsQ0FBQ1E7QUFETDtBQUQ2QixLQUFoQixDQUF0QjtBQUtBLFVBQU1MLE9BQU8sQ0FBQ00sTUFBUixDQUFlVCxHQUFHLENBQUNVLElBQW5CLENBQU47QUFDQSxVQUFNQyxjQUFjLEdBQUcsTUFBTVAsaUJBQVFDLE9BQVIsQ0FBZ0I7QUFDM0NDLE1BQUFBLEtBQUssRUFBRTtBQUNMQyxRQUFBQSxJQUFJLEVBQUVQLEdBQUcsQ0FBQ1E7QUFETDtBQURvQyxLQUFoQixDQUE3QjtBQUtBUCxJQUFBQSxHQUFHLENBQUNXLElBQUosQ0FBU0QsY0FBVDtBQUNELEdBYkQsQ0FhRSxPQUFPRSxHQUFQLEVBQVk7QUFDWlgsSUFBQUEsSUFBSSxDQUFDVyxHQUFELENBQUo7QUFDRDtBQUNGLENBakJEOztlQW1CZWQsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnbW9kZWxzL0NvbnRhY3QnO1xuXG5jb25zdCB1cGRhdGVDb250YWN0Q29udHJvbGxlcjogUmVxdWVzdEhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb250YWN0ID0gYXdhaXQgQ29udGFjdC5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHV1aWQ6IHJlcS51c2VyLFxuICAgICAgfVxuICAgIH0pO1xuICAgIGF3YWl0IGNvbnRhY3QudXBkYXRlKHJlcS5ib2R5KTtcbiAgICBjb25zdCB1cGRhdGVkQ29udGFjdCA9IGF3YWl0IENvbnRhY3QuZmluZE9uZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICB1dWlkOiByZXEudXNlcixcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXMuanNvbih1cGRhdGVkQ29udGFjdCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQ29udGFjdENvbnRyb2xsZXI7XG4iXX0=