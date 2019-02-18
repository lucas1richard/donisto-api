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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.post('/login', _login.default); // unsecured route

router.use(_auth.default);
router.use('/contact', _contact.default); // secured route

router.use('/organization', _organization.default); // secured route

router.use('/newsfeed', _newsfeed.default); // secured route

var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvaW5kZXgudHMiXSwibmFtZXMiOlsicm91dGVyIiwicG9zdCIsImxvZ2luQ29udHJvbGxlciIsInVzZSIsImF1dGhNaWRkbGV3YXJlIiwiY29udGFjdCIsIm9yZ2FuaXphdGlvbiIsIm5ld3NmZWVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsc0JBQWY7QUFFQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksUUFBWixFQUFzQkMsY0FBdEIsRSxDQUF3Qzs7QUFHeENGLE1BQU0sQ0FBQ0csR0FBUCxDQUFXQyxhQUFYO0FBRUFKLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFVBQVgsRUFBdUJFLGdCQUF2QixFLENBQWlDOztBQUNqQ0wsTUFBTSxDQUFDRyxHQUFQLENBQVcsZUFBWCxFQUE0QkcscUJBQTVCLEUsQ0FBMkM7O0FBQzNDTixNQUFNLENBQUNHLEdBQVAsQ0FBVyxXQUFYLEVBQXdCSSxpQkFBeEIsRSxDQUFtQzs7ZUFFcEJQLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQgbG9naW5Db250cm9sbGVyIGZyb20gJy4vY29udGFjdC9jb250cm9sbGVycy9sb2dpbic7XG5pbXBvcnQgb3JnYW5pemF0aW9uIGZyb20gJy4vb3JnYW5pemF0aW9uJztcbmltcG9ydCBuZXdzZmVlZCBmcm9tICcuL25ld3NmZWVkJztcbmltcG9ydCBhdXRoTWlkZGxld2FyZSBmcm9tICdtaWRkbGV3YXJlcy92MS9hdXRoJztcblxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XG5cbnJvdXRlci5wb3N0KCcvbG9naW4nLCBsb2dpbkNvbnRyb2xsZXIpOyAvLyB1bnNlY3VyZWQgcm91dGVcblxuXG5yb3V0ZXIudXNlKGF1dGhNaWRkbGV3YXJlKTtcblxucm91dGVyLnVzZSgnL2NvbnRhY3QnLCBjb250YWN0KTsgLy8gc2VjdXJlZCByb3V0ZVxucm91dGVyLnVzZSgnL29yZ2FuaXphdGlvbicsIG9yZ2FuaXphdGlvbik7IC8vIHNlY3VyZWQgcm91dGVcbnJvdXRlci51c2UoJy9uZXdzZmVlZCcsIG5ld3NmZWVkKTsgLy8gc2VjdXJlZCByb3V0ZVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=