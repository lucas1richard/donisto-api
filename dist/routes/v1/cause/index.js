"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _createCause = _interopRequireDefault(require("./controllers/createCause"));

var _getCauses = _interopRequireDefault(require("./controllers/getCauses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.post('/', _createCause.default);
router.get('/', _getCauses.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY2F1c2UvaW5kZXgudHMiXSwibmFtZXMiOlsicm91dGVyIiwicG9zdCIsImNyZWF0ZUNhdXNlQ29udHJvbGxlciIsImdldCIsImdldENhdXNlc0NvbnRyb2xsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1BLE1BQU0sR0FBRyxzQkFBZjtBQUVBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaLEVBQWlCQyxvQkFBakI7QUFDQUYsTUFBTSxDQUFDRyxHQUFQLENBQVcsR0FBWCxFQUFnQkMsa0JBQWhCO2VBRWVKLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBjcmVhdGVDYXVzZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9jcmVhdGVDYXVzZSc7XG5pbXBvcnQgZ2V0Q2F1c2VzQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2dldENhdXNlcyc7XG5cbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xuXG5yb3V0ZXIucG9zdCgnLycsIGNyZWF0ZUNhdXNlQ29udHJvbGxlcik7XG5yb3V0ZXIuZ2V0KCcvJywgZ2V0Q2F1c2VzQ29udHJvbGxlcik7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==