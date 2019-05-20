"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _createCause = _interopRequireDefault(require("./controllers/createCause"));

var _getCauses = _interopRequireDefault(require("./controllers/getCauses"));

var _getCausesDetail = _interopRequireDefault(require("./controllers/getCausesDetail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.post('/', _createCause.default);
router.post('/detail', _getCausesDetail.default);
router.get('/', _getCauses.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY2F1c2UvaW5kZXgudHMiXSwibmFtZXMiOlsicm91dGVyIiwicG9zdCIsImNyZWF0ZUNhdXNlQ29udHJvbGxlciIsImdldENhdXNlc0RldGFpbENvbnRyb2xsZXIiLCJnZXQiLCJnZXRDYXVzZXNDb250cm9sbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsc0JBQWY7QUFFQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksR0FBWixFQUFpQkMsb0JBQWpCO0FBQ0FGLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLFNBQVosRUFBdUJFLHdCQUF2QjtBQUNBSCxNQUFNLENBQUNJLEdBQVAsQ0FBVyxHQUFYLEVBQWdCQyxrQkFBaEI7ZUFFZUwsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNyZWF0ZUNhdXNlQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2NyZWF0ZUNhdXNlJztcbmltcG9ydCBnZXRDYXVzZXNDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvZ2V0Q2F1c2VzJztcbmltcG9ydCBnZXRDYXVzZXNEZXRhaWxDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvZ2V0Q2F1c2VzRGV0YWlsJztcblxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XG5cbnJvdXRlci5wb3N0KCcvJywgY3JlYXRlQ2F1c2VDb250cm9sbGVyKTtcbnJvdXRlci5wb3N0KCcvZGV0YWlsJywgZ2V0Q2F1c2VzRGV0YWlsQ29udHJvbGxlcik7XG5yb3V0ZXIuZ2V0KCcvJywgZ2V0Q2F1c2VzQ29udHJvbGxlcik7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==