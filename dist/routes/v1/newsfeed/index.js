"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _getNewsFeed = _interopRequireDefault(require("./controllers/getNewsFeed"));

var _createNewsFeed = _interopRequireDefault(require("./controllers/createNewsFeed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get('/get', _getNewsFeed.default);
router.post('/', _createNewsFeed.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvbmV3c2ZlZWQvaW5kZXgudHMiXSwibmFtZXMiOlsicm91dGVyIiwiZ2V0IiwiZ2V0TmV3c0ZlZWRDb250cm9sbGVyIiwicG9zdCIsImNyZWF0ZU5ld3NGZWVkQ29udHJvbGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLHNCQUFmO0FBRUFBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLE1BQVgsRUFBbUJDLG9CQUFuQjtBQUNBRixNQUFNLENBQUNHLElBQVAsQ0FBWSxHQUFaLEVBQWlCQyx1QkFBakI7ZUFFZUosTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGdldE5ld3NGZWVkQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2dldE5ld3NGZWVkJztcbmltcG9ydCBjcmVhdGVOZXdzRmVlZENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9jcmVhdGVOZXdzRmVlZCc7XG5cbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xuXG5yb3V0ZXIuZ2V0KCcvZ2V0JywgZ2V0TmV3c0ZlZWRDb250cm9sbGVyKTtcbnJvdXRlci5wb3N0KCcvJywgY3JlYXRlTmV3c0ZlZWRDb250cm9sbGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19