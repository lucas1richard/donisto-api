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
        uuid: req.user.uuid
      }
    });
    await contact.update(req.body);
    const updatedContact = await _Contact.default.findOne({
      where: {
        uuid: req.user.uuid
      }
    });
    res.json(updatedContact);
  } catch (err) {
    next(err);
  }
};

var _default = updateContactController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY29udGFjdC9jb250cm9sbGVycy91cGRhdGVDb250YWN0L2luZGV4LnRzIl0sIm5hbWVzIjpbInVwZGF0ZUNvbnRhY3RDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImNvbnRhY3QiLCJDb250YWN0IiwiZmluZE9uZSIsIndoZXJlIiwidXVpZCIsInVzZXIiLCJ1cGRhdGUiLCJib2R5IiwidXBkYXRlZENvbnRhY3QiLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFFQSxNQUFNQSx1QkFBdUMsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQ3hFLE1BQUk7QUFDRixVQUFNQyxPQUFPLEdBQUcsTUFBTUMsaUJBQVFDLE9BQVIsQ0FBZ0I7QUFDcENDLE1BQUFBLEtBQUssRUFBRTtBQUNMQyxRQUFBQSxJQUFJLEVBQUVQLEdBQUcsQ0FBQ1EsSUFBSixDQUFTRDtBQURWO0FBRDZCLEtBQWhCLENBQXRCO0FBS0EsVUFBTUosT0FBTyxDQUFDTSxNQUFSLENBQWVULEdBQUcsQ0FBQ1UsSUFBbkIsQ0FBTjtBQUNBLFVBQU1DLGNBQWMsR0FBRyxNQUFNUCxpQkFBUUMsT0FBUixDQUFnQjtBQUMzQ0MsTUFBQUEsS0FBSyxFQUFFO0FBQ0xDLFFBQUFBLElBQUksRUFBRVAsR0FBRyxDQUFDUSxJQUFKLENBQVNEO0FBRFY7QUFEb0MsS0FBaEIsQ0FBN0I7QUFLQU4sSUFBQUEsR0FBRyxDQUFDVyxJQUFKLENBQVNELGNBQVQ7QUFDRCxHQWJELENBYUUsT0FBT0UsR0FBUCxFQUFZO0FBQ1pYLElBQUFBLElBQUksQ0FBQ1csR0FBRCxDQUFKO0FBQ0Q7QUFDRixDQWpCRDs7ZUFtQmVkLHVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBDb250YWN0IGZyb20gJ21vZGVscy9Db250YWN0JztcblxuY29uc3QgdXBkYXRlQ29udGFjdENvbnRyb2xsZXI6IFJlcXVlc3RIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29udGFjdCA9IGF3YWl0IENvbnRhY3QuZmluZE9uZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICB1dWlkOiByZXEudXNlci51dWlkLFxuICAgICAgfVxuICAgIH0pO1xuICAgIGF3YWl0IGNvbnRhY3QudXBkYXRlKHJlcS5ib2R5KTtcbiAgICBjb25zdCB1cGRhdGVkQ29udGFjdCA9IGF3YWl0IENvbnRhY3QuZmluZE9uZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICB1dWlkOiByZXEudXNlci51dWlkLFxuICAgICAgfVxuICAgIH0pO1xuICAgIHJlcy5qc29uKHVwZGF0ZWRDb250YWN0KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVDb250YWN0Q29udHJvbGxlcjtcbiJdfQ==