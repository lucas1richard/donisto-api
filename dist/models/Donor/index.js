"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _conn = _interopRequireDefault(require("../../config/database/conn"));

var _attributes = _interopRequireDefault(require("./attributes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Contacts = _conn.default.define('donors', _attributes.default);

var _default = Contacts;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvRG9ub3IvaW5kZXgudHMiXSwibmFtZXMiOlsiQ29udGFjdHMiLCJzZXF1ZWxpemUiLCJkZWZpbmUiLCJhdHRyaWJ1dGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFHQSxNQUFNQSxRQUFRLEdBQUdDLGNBQVVDLE1BQVYsQ0FBaUIsUUFBakIsRUFBMkJDLG1CQUEzQixDQUFqQjs7ZUFFZUgsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCBzZXF1ZWxpemUgZnJvbSAnY29uZmlnL2RhdGFiYXNlL2Nvbm4nO1xuaW1wb3J0IGF0dHJpYnV0ZXMgZnJvbSAnLi9hdHRyaWJ1dGVzJztcbmltcG9ydCBDb250YWN0QXR0cmlidXRlcyBmcm9tICcuL3R5cGVzL0F0dHJpYnV0ZXMnO1xuXG5jb25zdCBDb250YWN0cyA9IHNlcXVlbGl6ZS5kZWZpbmUoJ2Rvbm9ycycsIGF0dHJpYnV0ZXMpIGFzIFNlcXVlbGl6ZS5Nb2RlbDxhbnksIENvbnRhY3RBdHRyaWJ1dGVzPjtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdHM7XG4iXX0=