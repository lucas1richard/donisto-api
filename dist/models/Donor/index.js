"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _conn = _interopRequireDefault(require("../../config/database/conn"));

var _attributes = _interopRequireDefault(require("./attributes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Donors = _conn.default.define('donors', _attributes.default);

var _default = Donors;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvRG9ub3IvaW5kZXgudHMiXSwibmFtZXMiOlsiRG9ub3JzIiwic2VxdWVsaXplIiwiZGVmaW5lIiwiYXR0cmlidXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOzs7O0FBR0EsTUFBTUEsTUFBTSxHQUFHQyxjQUFVQyxNQUFWLENBQWlCLFFBQWpCLEVBQTJCQyxtQkFBM0IsQ0FBZjs7ZUFFZUgsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCBzZXF1ZWxpemUgZnJvbSAnY29uZmlnL2RhdGFiYXNlL2Nvbm4nO1xuaW1wb3J0IGF0dHJpYnV0ZXMgZnJvbSAnLi9hdHRyaWJ1dGVzJztcbmltcG9ydCBDb250YWN0QXR0cmlidXRlcyBmcm9tICcuL3R5cGVzL0F0dHJpYnV0ZXMnO1xuXG5jb25zdCBEb25vcnMgPSBzZXF1ZWxpemUuZGVmaW5lKCdkb25vcnMnLCBhdHRyaWJ1dGVzKSBhcyBTZXF1ZWxpemUuTW9kZWw8YW55LCBDb250YWN0QXR0cmlidXRlcz47XG5cbmV4cG9ydCBkZWZhdWx0IERvbm9ycztcbiJdfQ==