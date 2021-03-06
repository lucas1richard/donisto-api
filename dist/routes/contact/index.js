"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _getContact = _interopRequireDefault(require("./controllers/getContact"));

var _createContact = _interopRequireDefault(require("./controllers/createContact"));

var _login = _interopRequireDefault(require("./controllers/login"));

var _updateContact = _interopRequireDefault(require("./controllers/updateContact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.put('/', _updateContact.default);
router.post('/get', _getContact.default);
router.post('/create', _createContact.default);
router.post('/login', _login.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY29udGFjdC9pbmRleC50cyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJwdXQiLCJ1cGRhdGVDb250YWN0Q29udHJvbGxlciIsInBvc3QiLCJnZXRDb250YWN0Q29udHJvbGxlciIsImNyZWF0ZUNvbnRhY3RDb250cm9sbGVyIiwibG9naW5Db250cm9sbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsc0JBQWY7QUFFQUEsTUFBTSxDQUFDQyxHQUFQLENBQVcsR0FBWCxFQUFnQkMsc0JBQWhCO0FBQ0FGLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLE1BQVosRUFBb0JDLG1CQUFwQjtBQUNBSixNQUFNLENBQUNHLElBQVAsQ0FBWSxTQUFaLEVBQXVCRSxzQkFBdkI7QUFDQUwsTUFBTSxDQUFDRyxJQUFQLENBQVksUUFBWixFQUFzQkcsY0FBdEI7ZUFFZU4sTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGdldENvbnRhY3RDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvZ2V0Q29udGFjdCc7XG5pbXBvcnQgY3JlYXRlQ29udGFjdENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9jcmVhdGVDb250YWN0JztcbmltcG9ydCBsb2dpbkNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9sb2dpbic7XG5pbXBvcnQgdXBkYXRlQ29udGFjdENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy91cGRhdGVDb250YWN0JztcblxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XG5cbnJvdXRlci5wdXQoJy8nLCB1cGRhdGVDb250YWN0Q29udHJvbGxlcik7XG5yb3V0ZXIucG9zdCgnL2dldCcsIGdldENvbnRhY3RDb250cm9sbGVyKTtcbnJvdXRlci5wb3N0KCcvY3JlYXRlJywgY3JlYXRlQ29udGFjdENvbnRyb2xsZXIpO1xucm91dGVyLnBvc3QoJy9sb2dpbicsIGxvZ2luQ29udHJvbGxlcik7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==