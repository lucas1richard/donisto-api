"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _contact = _interopRequireDefault(require("./contact"));

var _login = _interopRequireDefault(require("./contact/controllers/login"));

var _organization = _interopRequireDefault(require("./organization"));

var _newsfeed = _interopRequireDefault(require("./newsfeed"));

var _auth = _interopRequireDefault(require("../middlewares/v1/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.post('/login', _login.default); // unsecured route

router.use(_auth.default);
router.use('/contact', _contact.default); // secured route

router.use('/organization', _organization.default); // secured route

router.use('/newsfeed', _newsfeed.default); // secured route

var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvYXBpLnRzIl0sIm5hbWVzIjpbInJvdXRlciIsInBvc3QiLCJsb2dpbkNvbnRyb2xsZXIiLCJ1c2UiLCJhdXRoTWlkZGxld2FyZSIsImNvbnRhY3QiLCJvcmdhbml6YXRpb24iLCJuZXdzZmVlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLHNCQUFmO0FBRUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVosRUFBc0JDLGNBQXRCLEUsQ0FBd0M7O0FBR3hDRixNQUFNLENBQUNHLEdBQVAsQ0FBV0MsYUFBWDtBQUVBSixNQUFNLENBQUNHLEdBQVAsQ0FBVyxVQUFYLEVBQXVCRSxnQkFBdkIsRSxDQUFpQzs7QUFDakNMLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLGVBQVgsRUFBNEJHLHFCQUE1QixFLENBQTJDOztBQUMzQ04sTUFBTSxDQUFDRyxHQUFQLENBQVcsV0FBWCxFQUF3QkksaUJBQXhCLEUsQ0FBbUM7O2VBRXBCUCxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IGxvZ2luQ29udHJvbGxlciBmcm9tICcuL2NvbnRhY3QvY29udHJvbGxlcnMvbG9naW4nO1xuaW1wb3J0IG9yZ2FuaXphdGlvbiBmcm9tICcuL29yZ2FuaXphdGlvbic7XG5pbXBvcnQgbmV3c2ZlZWQgZnJvbSAnLi9uZXdzZmVlZCc7XG5pbXBvcnQgYXV0aE1pZGRsZXdhcmUgZnJvbSAnbWlkZGxld2FyZXMvdjEvYXV0aCc7XG5cbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xuXG5yb3V0ZXIucG9zdCgnL2xvZ2luJywgbG9naW5Db250cm9sbGVyKTsgLy8gdW5zZWN1cmVkIHJvdXRlXG5cblxucm91dGVyLnVzZShhdXRoTWlkZGxld2FyZSk7XG5cbnJvdXRlci51c2UoJy9jb250YWN0JywgY29udGFjdCk7IC8vIHNlY3VyZWQgcm91dGVcbnJvdXRlci51c2UoJy9vcmdhbml6YXRpb24nLCBvcmdhbml6YXRpb24pOyAvLyBzZWN1cmVkIHJvdXRlXG5yb3V0ZXIudXNlKCcvbmV3c2ZlZWQnLCBuZXdzZmVlZCk7IC8vIHNlY3VyZWQgcm91dGVcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19