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

var _donation = _interopRequireDefault(require("./donation"));

var _auth = _interopRequireDefault(require("../../middlewares/v1/auth"));

var _createContact = _interopRequireDefault(require("./contact/controllers/createContact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
/* unsecured */

router.post('/login', _login.default);
/* unsecured */

router.post('/contact/create', _createContact.default);
router.use(_auth.default);
/* secured   */

router.use('/contact', _contact.default);
/* secured   */

router.use('/organization', _organization.default);
/* secured   */

router.use('/newsfeed', _newsfeed.default);
/* secured   */

router.use('/cause', _cause.default);
/* secured   */

router.use('/donation', _donation.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvaW5kZXgudHMiXSwibmFtZXMiOlsicm91dGVyIiwicG9zdCIsImxvZ2luQ29udHJvbGxlciIsImNyZWF0ZUNvbnRhY3RDb250cm9sbGVyIiwidXNlIiwiYXV0aE1pZGRsZXdhcmUiLCJjb250YWN0Iiwib3JnYW5pemF0aW9uIiwibmV3c2ZlZWQiLCJjYXVzZSIsImRvbmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsc0JBQWY7QUFFQTs7QUFBZ0JBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVosRUFBc0JDLGNBQXRCO0FBQ2hCOztBQUFnQkYsTUFBTSxDQUFDQyxJQUFQLENBQVksaUJBQVosRUFBK0JFLHNCQUEvQjtBQUVoQkgsTUFBTSxDQUFDSSxHQUFQLENBQVdDLGFBQVg7QUFFQTs7QUFBZ0JMLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLFVBQVgsRUFBdUJFLGdCQUF2QjtBQUNoQjs7QUFBZ0JOLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLGVBQVgsRUFBNEJHLHFCQUE1QjtBQUNoQjs7QUFBZ0JQLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLFdBQVgsRUFBd0JJLGlCQUF4QjtBQUNoQjs7QUFBZ0JSLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLFFBQVgsRUFBcUJLLGNBQXJCO0FBQ2hCOztBQUFnQlQsTUFBTSxDQUFDSSxHQUFQLENBQVcsV0FBWCxFQUF3Qk0saUJBQXhCO2VBRURWLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQgbG9naW5Db250cm9sbGVyIGZyb20gJy4vY29udGFjdC9jb250cm9sbGVycy9sb2dpbic7XG5pbXBvcnQgb3JnYW5pemF0aW9uIGZyb20gJy4vb3JnYW5pemF0aW9uJztcbmltcG9ydCBuZXdzZmVlZCBmcm9tICcuL25ld3NmZWVkJztcbmltcG9ydCBjYXVzZSBmcm9tICcuL2NhdXNlJztcbmltcG9ydCBkb25hdGlvbiBmcm9tICcuL2RvbmF0aW9uJztcbmltcG9ydCBhdXRoTWlkZGxld2FyZSBmcm9tICdtaWRkbGV3YXJlcy92MS9hdXRoJztcbmltcG9ydCBjcmVhdGVDb250YWN0Q29udHJvbGxlciBmcm9tICcuL2NvbnRhY3QvY29udHJvbGxlcnMvY3JlYXRlQ29udGFjdCc7XG5cbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xuXG4vKiB1bnNlY3VyZWQgKi8gcm91dGVyLnBvc3QoJy9sb2dpbicsIGxvZ2luQ29udHJvbGxlcik7XG4vKiB1bnNlY3VyZWQgKi8gcm91dGVyLnBvc3QoJy9jb250YWN0L2NyZWF0ZScsIGNyZWF0ZUNvbnRhY3RDb250cm9sbGVyKTtcblxucm91dGVyLnVzZShhdXRoTWlkZGxld2FyZSk7XG5cbi8qIHNlY3VyZWQgICAqLyByb3V0ZXIudXNlKCcvY29udGFjdCcsIGNvbnRhY3QpO1xuLyogc2VjdXJlZCAgICovIHJvdXRlci51c2UoJy9vcmdhbml6YXRpb24nLCBvcmdhbml6YXRpb24pO1xuLyogc2VjdXJlZCAgICovIHJvdXRlci51c2UoJy9uZXdzZmVlZCcsIG5ld3NmZWVkKTtcbi8qIHNlY3VyZWQgICAqLyByb3V0ZXIudXNlKCcvY2F1c2UnLCBjYXVzZSk7XG4vKiBzZWN1cmVkICAgKi8gcm91dGVyLnVzZSgnL2RvbmF0aW9uJywgZG9uYXRpb24pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=