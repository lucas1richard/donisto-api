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

var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvaW5kZXgudHMiXSwibmFtZXMiOlsicm91dGVyIiwicG9zdCIsImxvZ2luQ29udHJvbGxlciIsImNyZWF0ZUNvbnRhY3RDb250cm9sbGVyIiwidXNlIiwiYXV0aE1pZGRsZXdhcmUiLCJjb250YWN0Iiwib3JnYW5pemF0aW9uIiwibmV3c2ZlZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1BLE1BQU0sR0FBRyxzQkFBZjtBQUVBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxRQUFaLEVBQXNCQyxjQUF0QixFLENBQXdDOztBQUN4Q0YsTUFBTSxDQUFDQyxJQUFQLENBQVksaUJBQVosRUFBK0JFLHNCQUEvQixFLENBQXlEOztBQUd6REgsTUFBTSxDQUFDSSxHQUFQLENBQVdDLGFBQVg7QUFFQUwsTUFBTSxDQUFDSSxHQUFQLENBQVcsVUFBWCxFQUF1QkUsZ0JBQXZCLEUsQ0FBaUM7O0FBQ2pDTixNQUFNLENBQUNJLEdBQVAsQ0FBVyxlQUFYLEVBQTRCRyxxQkFBNUIsRSxDQUEyQzs7QUFDM0NQLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLFdBQVgsRUFBd0JJLGlCQUF4QixFLENBQW1DOztlQUVwQlIsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcbmltcG9ydCBsb2dpbkNvbnRyb2xsZXIgZnJvbSAnLi9jb250YWN0L2NvbnRyb2xsZXJzL2xvZ2luJztcbmltcG9ydCBvcmdhbml6YXRpb24gZnJvbSAnLi9vcmdhbml6YXRpb24nO1xuaW1wb3J0IG5ld3NmZWVkIGZyb20gJy4vbmV3c2ZlZWQnO1xuaW1wb3J0IGF1dGhNaWRkbGV3YXJlIGZyb20gJ21pZGRsZXdhcmVzL3YxL2F1dGgnO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3RDb250cm9sbGVyIGZyb20gJy4vY29udGFjdC9jb250cm9sbGVycy9jcmVhdGVDb250YWN0JztcblxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XG5cbnJvdXRlci5wb3N0KCcvbG9naW4nLCBsb2dpbkNvbnRyb2xsZXIpOyAvLyB1bnNlY3VyZWQgcm91dGVcbnJvdXRlci5wb3N0KCcvY29udGFjdC9jcmVhdGUnLCBjcmVhdGVDb250YWN0Q29udHJvbGxlcik7IC8vIHVuc2VjdXJlZCByb3V0ZVxuXG5cbnJvdXRlci51c2UoYXV0aE1pZGRsZXdhcmUpO1xuXG5yb3V0ZXIudXNlKCcvY29udGFjdCcsIGNvbnRhY3QpOyAvLyBzZWN1cmVkIHJvdXRlXG5yb3V0ZXIudXNlKCcvb3JnYW5pemF0aW9uJywgb3JnYW5pemF0aW9uKTsgLy8gc2VjdXJlZCByb3V0ZVxucm91dGVyLnVzZSgnL25ld3NmZWVkJywgbmV3c2ZlZWQpOyAvLyBzZWN1cmVkIHJvdXRlXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==