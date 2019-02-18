"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Contact = _interopRequireDefault(require("../../../../models/Contact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { bodySchema } from './validate';
const updateContactController = async (req, res, next) => {
  try {
    // await bodySchema.validate(req.body);
    const contact = await _Contact.default.find({
      where: {
        uuid: res.locals.uuid
      }
    });
    await contact.update(req.body);
    const updatedContact = await _Contact.default.find({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvY29udGFjdC9jb250cm9sbGVycy91cGRhdGVDb250YWN0L2luZGV4LnRzIl0sIm5hbWVzIjpbInVwZGF0ZUNvbnRhY3RDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImNvbnRhY3QiLCJDb250YWN0IiwiZmluZCIsIndoZXJlIiwidXVpZCIsImxvY2FscyIsInVwZGF0ZSIsImJvZHkiLCJ1cGRhdGVkQ29udGFjdCIsImpzb24iLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBO0FBRUEsTUFBTUEsdUJBQXVCLEdBQUcsT0FBT0MsR0FBUCxFQUFxQkMsR0FBckIsRUFBb0NDLElBQXBDLEtBQTJEO0FBQ3pGLE1BQUk7QUFDRjtBQUNBLFVBQU1DLE9BQU8sR0FBRyxNQUFNQyxpQkFBUUMsSUFBUixDQUFhO0FBQ2pDQyxNQUFBQSxLQUFLLEVBQUU7QUFDTEMsUUFBQUEsSUFBSSxFQUFFTixHQUFHLENBQUNPLE1BQUosQ0FBV0Q7QUFEWjtBQUQwQixLQUFiLENBQXRCO0FBS0EsVUFBTUosT0FBTyxDQUFDTSxNQUFSLENBQWVULEdBQUcsQ0FBQ1UsSUFBbkIsQ0FBTjtBQUNBLFVBQU1DLGNBQWMsR0FBRyxNQUFNUCxpQkFBUUMsSUFBUixDQUFhO0FBQ3hDQyxNQUFBQSxLQUFLLEVBQUU7QUFDTEMsUUFBQUEsSUFBSSxFQUFFTixHQUFHLENBQUNPLE1BQUosQ0FBV0Q7QUFEWjtBQURpQyxLQUFiLENBQTdCO0FBS0FOLElBQUFBLEdBQUcsQ0FBQ1csSUFBSixDQUFTRCxjQUFUO0FBQ0QsR0FkRCxDQWNFLE9BQU9FLEdBQVAsRUFBWTtBQUNaWCxJQUFBQSxJQUFJLENBQUNXLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0FsQkQ7O2VBb0JlZCx1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBDb250YWN0IGZyb20gJ21vZGVscy9Db250YWN0Jztcbi8vIGltcG9ydCB7IGJvZHlTY2hlbWEgfSBmcm9tICcuL3ZhbGlkYXRlJztcblxuY29uc3QgdXBkYXRlQ29udGFjdENvbnRyb2xsZXIgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBhd2FpdCBib2R5U2NoZW1hLnZhbGlkYXRlKHJlcS5ib2R5KTtcbiAgICBjb25zdCBjb250YWN0ID0gYXdhaXQgQ29udGFjdC5maW5kKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHV1aWQ6IHJlcy5sb2NhbHMudXVpZFxuICAgICAgfVxuICAgIH0pO1xuICAgIGF3YWl0IGNvbnRhY3QudXBkYXRlKHJlcS5ib2R5KTtcbiAgICBjb25zdCB1cGRhdGVkQ29udGFjdCA9IGF3YWl0IENvbnRhY3QuZmluZCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICB1dWlkOiByZXMubG9jYWxzLnV1aWRcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXMuanNvbih1cGRhdGVkQ29udGFjdCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQ29udGFjdENvbnRyb2xsZXI7XG4iXX0=