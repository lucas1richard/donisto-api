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

var _cause = _interopRequireDefault(require("./cause"));

var _auth = _interopRequireDefault(require("../../middlewares/v1/auth"));

var _createContact = _interopRequireDefault(require("./contact/controllers/createContact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.post('/login', _login.default); // unsecured route

router.post('/contact/create', _createContact.default); // unsecured route

router.use(_auth.default);
router.use('/contact', _contact.default); // secured route

router.use('/organization', _organization.default); // secured route

router.use('/newsfeed', _newsfeed.default); // secured route

router.use('/cause', _cause.default); // secured route

var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvaW5kZXgudHMiXSwibmFtZXMiOlsicm91dGVyIiwicG9zdCIsImxvZ2luQ29udHJvbGxlciIsImNyZWF0ZUNvbnRhY3RDb250cm9sbGVyIiwidXNlIiwiYXV0aE1pZGRsZXdhcmUiLCJjb250YWN0Iiwib3JnYW5pemF0aW9uIiwibmV3c2ZlZWQiLCJjYXVzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLHNCQUFmO0FBRUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVosRUFBc0JDLGNBQXRCLEUsQ0FBd0M7O0FBQ3hDRixNQUFNLENBQUNDLElBQVAsQ0FBWSxpQkFBWixFQUErQkUsc0JBQS9CLEUsQ0FBeUQ7O0FBR3pESCxNQUFNLENBQUNJLEdBQVAsQ0FBV0MsYUFBWDtBQUVBTCxNQUFNLENBQUNJLEdBQVAsQ0FBVyxVQUFYLEVBQXVCRSxnQkFBdkIsRSxDQUFpQzs7QUFDakNOLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLGVBQVgsRUFBNEJHLHFCQUE1QixFLENBQTJDOztBQUMzQ1AsTUFBTSxDQUFDSSxHQUFQLENBQVcsV0FBWCxFQUF3QkksaUJBQXhCLEUsQ0FBbUM7O0FBQ25DUixNQUFNLENBQUNJLEdBQVAsQ0FBVyxRQUFYLEVBQXFCSyxjQUFyQixFLENBQTZCOztlQUVkVCxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IGxvZ2luQ29udHJvbGxlciBmcm9tICcuL2NvbnRhY3QvY29udHJvbGxlcnMvbG9naW4nO1xuaW1wb3J0IG9yZ2FuaXphdGlvbiBmcm9tICcuL29yZ2FuaXphdGlvbic7XG5pbXBvcnQgbmV3c2ZlZWQgZnJvbSAnLi9uZXdzZmVlZCc7XG5pbXBvcnQgY2F1c2UgZnJvbSAnLi9jYXVzZSc7XG5pbXBvcnQgYXV0aE1pZGRsZXdhcmUgZnJvbSAnbWlkZGxld2FyZXMvdjEvYXV0aCc7XG5pbXBvcnQgY3JlYXRlQ29udGFjdENvbnRyb2xsZXIgZnJvbSAnLi9jb250YWN0L2NvbnRyb2xsZXJzL2NyZWF0ZUNvbnRhY3QnO1xuXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcblxucm91dGVyLnBvc3QoJy9sb2dpbicsIGxvZ2luQ29udHJvbGxlcik7IC8vIHVuc2VjdXJlZCByb3V0ZVxucm91dGVyLnBvc3QoJy9jb250YWN0L2NyZWF0ZScsIGNyZWF0ZUNvbnRhY3RDb250cm9sbGVyKTsgLy8gdW5zZWN1cmVkIHJvdXRlXG5cblxucm91dGVyLnVzZShhdXRoTWlkZGxld2FyZSk7XG5cbnJvdXRlci51c2UoJy9jb250YWN0JywgY29udGFjdCk7IC8vIHNlY3VyZWQgcm91dGVcbnJvdXRlci51c2UoJy9vcmdhbml6YXRpb24nLCBvcmdhbml6YXRpb24pOyAvLyBzZWN1cmVkIHJvdXRlXG5yb3V0ZXIudXNlKCcvbmV3c2ZlZWQnLCBuZXdzZmVlZCk7IC8vIHNlY3VyZWQgcm91dGVcbnJvdXRlci51c2UoJy9jYXVzZScsIGNhdXNlKTsgLy8gc2VjdXJlZCByb3V0ZVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=