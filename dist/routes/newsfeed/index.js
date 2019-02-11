"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _getNewsFeed = _interopRequireDefault(require("./controllers/getNewsFeed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get('/get', _getNewsFeed.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbmV3c2ZlZWQvaW5kZXgudHMiXSwibmFtZXMiOlsicm91dGVyIiwiZ2V0IiwiZ2V0TmV3c0ZlZWRDb250cm9sbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsc0JBQWY7QUFFQUEsTUFBTSxDQUFDQyxHQUFQLENBQVcsTUFBWCxFQUFtQkMsb0JBQW5CO2VBRWVGLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBnZXROZXdzRmVlZENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9nZXROZXdzRmVlZCc7XG5cbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xuXG5yb3V0ZXIuZ2V0KCcvZ2V0JywgZ2V0TmV3c0ZlZWRDb250cm9sbGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19