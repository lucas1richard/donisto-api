"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Contact = _interopRequireDefault(require("../../../../../models/Contact"));

var _validate = require("./validate");

var _handleToken = _interopRequireDefault(require("../../../../../utils/handleToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const createContactController = async (req, res, next) => {
  try {
    await _validate.bodySchema.validate(req.body);
    const contact = await _Contact.default.create(req.body);
    const token = await (0, _handleToken.default)(`${contact.id}`, contact.uuid);
    res.set('token', token).json(_objectSpread({}, contact.get(), {
      organizations: []
    }));
  } catch (err) {
    next(err);
  }
};

var _default = createContactController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY29udGFjdC9jb250cm9sbGVycy9jcmVhdGVDb250YWN0L2luZGV4LnRzIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRhY3RDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImJvZHlTY2hlbWEiLCJ2YWxpZGF0ZSIsImJvZHkiLCJjb250YWN0IiwiQ29udGFjdCIsImNyZWF0ZSIsInRva2VuIiwiaWQiLCJ1dWlkIiwic2V0IiwianNvbiIsImdldCIsIm9yZ2FuaXphdGlvbnMiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxNQUFNQSx1QkFBdUMsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQ3hFLE1BQUk7QUFDRixVQUFNQyxxQkFBV0MsUUFBWCxDQUFvQkosR0FBRyxDQUFDSyxJQUF4QixDQUFOO0FBRUEsVUFBTUMsT0FBTyxHQUFHLE1BQU1DLGlCQUFRQyxNQUFSLENBQWVSLEdBQUcsQ0FBQ0ssSUFBbkIsQ0FBdEI7QUFFQSxVQUFNSSxLQUFLLEdBQUcsTUFBTSwwQkFBYSxHQUFFSCxPQUFPLENBQUNJLEVBQUcsRUFBMUIsRUFBNkJKLE9BQU8sQ0FBQ0ssSUFBckMsQ0FBcEI7QUFFQVYsSUFBQUEsR0FBRyxDQUNBVyxHQURILENBQ08sT0FEUCxFQUNnQkgsS0FEaEIsRUFFR0ksSUFGSCxtQkFHT1AsT0FBTyxDQUFDUSxHQUFSLEVBSFA7QUFJSUMsTUFBQUEsYUFBYSxFQUFFO0FBSm5CO0FBTUQsR0FiRCxDQWFFLE9BQU9DLEdBQVAsRUFBWTtBQUNaZCxJQUFBQSxJQUFJLENBQUNjLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0FqQkQ7O2VBbUJlakIsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnbW9kZWxzL0NvbnRhY3QnO1xuaW1wb3J0IHsgYm9keVNjaGVtYSB9IGZyb20gJy4vdmFsaWRhdGUnO1xuaW1wb3J0IGhhbmRsZVRva2VuIGZyb20gJ3V0aWxzL2hhbmRsZVRva2VuJztcblxuY29uc3QgY3JlYXRlQ29udGFjdENvbnRyb2xsZXI6IFJlcXVlc3RIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYm9keVNjaGVtYS52YWxpZGF0ZShyZXEuYm9keSk7XG5cbiAgICBjb25zdCBjb250YWN0ID0gYXdhaXQgQ29udGFjdC5jcmVhdGUocmVxLmJvZHkpO1xuXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBoYW5kbGVUb2tlbihgJHtjb250YWN0LmlkfWAsIGNvbnRhY3QudXVpZCk7XG5cbiAgICByZXNcbiAgICAgIC5zZXQoJ3Rva2VuJywgdG9rZW4pXG4gICAgICAuanNvbih7XG4gICAgICAgIC4uLmNvbnRhY3QuZ2V0KCksXG4gICAgICAgIG9yZ2FuaXphdGlvbnM6IFtdXG4gICAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0Q29udHJvbGxlcjtcbiJdfQ==