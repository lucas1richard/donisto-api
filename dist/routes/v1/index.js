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
router.post('/login', _login.default); // unsecured route

router.post('/contact/create', _createContact.default); // unsecured route

router.use(_auth.default);
router.use('/contact', _contact.default); // secured route

router.use('/organization', _organization.default); // secured route

router.use('/newsfeed', _newsfeed.default); // secured route

router.use('/cause', _cause.default); // secured route

router.use('/donation', _donation.default); // secured route

var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvaW5kZXgudHMiXSwibmFtZXMiOlsicm91dGVyIiwicG9zdCIsImxvZ2luQ29udHJvbGxlciIsImNyZWF0ZUNvbnRhY3RDb250cm9sbGVyIiwidXNlIiwiYXV0aE1pZGRsZXdhcmUiLCJjb250YWN0Iiwib3JnYW5pemF0aW9uIiwibmV3c2ZlZWQiLCJjYXVzZSIsImRvbmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsc0JBQWY7QUFFQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksUUFBWixFQUFzQkMsY0FBdEIsRSxDQUF3Qzs7QUFDeENGLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGlCQUFaLEVBQStCRSxzQkFBL0IsRSxDQUF5RDs7QUFHekRILE1BQU0sQ0FBQ0ksR0FBUCxDQUFXQyxhQUFYO0FBRUFMLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLFVBQVgsRUFBdUJFLGdCQUF2QixFLENBQWlDOztBQUNqQ04sTUFBTSxDQUFDSSxHQUFQLENBQVcsZUFBWCxFQUE0QkcscUJBQTVCLEUsQ0FBMkM7O0FBQzNDUCxNQUFNLENBQUNJLEdBQVAsQ0FBVyxXQUFYLEVBQXdCSSxpQkFBeEIsRSxDQUFtQzs7QUFDbkNSLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLFFBQVgsRUFBcUJLLGNBQXJCLEUsQ0FBNkI7O0FBQzdCVCxNQUFNLENBQUNJLEdBQVAsQ0FBVyxXQUFYLEVBQXdCTSxpQkFBeEIsRSxDQUFtQzs7ZUFFcEJWLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQgbG9naW5Db250cm9sbGVyIGZyb20gJy4vY29udGFjdC9jb250cm9sbGVycy9sb2dpbic7XG5pbXBvcnQgb3JnYW5pemF0aW9uIGZyb20gJy4vb3JnYW5pemF0aW9uJztcbmltcG9ydCBuZXdzZmVlZCBmcm9tICcuL25ld3NmZWVkJztcbmltcG9ydCBjYXVzZSBmcm9tICcuL2NhdXNlJztcbmltcG9ydCBkb25hdGlvbiBmcm9tICcuL2RvbmF0aW9uJztcbmltcG9ydCBhdXRoTWlkZGxld2FyZSBmcm9tICdtaWRkbGV3YXJlcy92MS9hdXRoJztcbmltcG9ydCBjcmVhdGVDb250YWN0Q29udHJvbGxlciBmcm9tICcuL2NvbnRhY3QvY29udHJvbGxlcnMvY3JlYXRlQ29udGFjdCc7XG5cbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xuXG5yb3V0ZXIucG9zdCgnL2xvZ2luJywgbG9naW5Db250cm9sbGVyKTsgLy8gdW5zZWN1cmVkIHJvdXRlXG5yb3V0ZXIucG9zdCgnL2NvbnRhY3QvY3JlYXRlJywgY3JlYXRlQ29udGFjdENvbnRyb2xsZXIpOyAvLyB1bnNlY3VyZWQgcm91dGVcblxuXG5yb3V0ZXIudXNlKGF1dGhNaWRkbGV3YXJlKTtcblxucm91dGVyLnVzZSgnL2NvbnRhY3QnLCBjb250YWN0KTsgLy8gc2VjdXJlZCByb3V0ZVxucm91dGVyLnVzZSgnL29yZ2FuaXphdGlvbicsIG9yZ2FuaXphdGlvbik7IC8vIHNlY3VyZWQgcm91dGVcbnJvdXRlci51c2UoJy9uZXdzZmVlZCcsIG5ld3NmZWVkKTsgLy8gc2VjdXJlZCByb3V0ZVxucm91dGVyLnVzZSgnL2NhdXNlJywgY2F1c2UpOyAvLyBzZWN1cmVkIHJvdXRlXG5yb3V0ZXIudXNlKCcvZG9uYXRpb24nLCBkb25hdGlvbik7IC8vIHNlY3VyZWQgcm91dGVcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19