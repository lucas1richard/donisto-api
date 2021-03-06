"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _conn = _interopRequireDefault(require("../config/database/conn"));

var _attributes = _interopRequireDefault(require("./attributes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ContactOrgFollows = _conn.default.define('contactorgfollows', _attributes.default, {});

var _default = ContactOrgFollows;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db250YWN0T3JnRm9sbG93cy9pbmRleC50cyJdLCJuYW1lcyI6WyJDb250YWN0T3JnRm9sbG93cyIsInNlcXVlbGl6ZSIsImRlZmluZSIsImF0dHJpYnV0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7OztBQVNBLE1BQU1BLGlCQUFpQixHQUFHQyxjQUFVQyxNQUFWLENBQWlCLG1CQUFqQixFQUFzQ0MsbUJBQXRDLEVBQWtELEVBQWxELENBQTFCOztlQUdlSCxpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCBzZXF1ZWxpemUgZnJvbSAnY29uZmlnL2RhdGFiYXNlL2Nvbm4nO1xuaW1wb3J0IGF0dHJpYnV0ZXMgZnJvbSAnLi9hdHRyaWJ1dGVzJztcbmltcG9ydCBDb250YWN0T3JnRm9sbG93c0F0dHJpYnV0ZXMgZnJvbSAnLi90eXBlcy9BdHRyaWJ1dGVzJztcbmltcG9ydCB7IENvbnRhY3RPcmdGb2xsb3dzSW5zdGFuY2UgfSBmcm9tICcuL3R5cGVzL0NvbnRhY3RPcmdGb2xsb3dzSW5zdGFuY2UnO1xuXG5pbnRlcmZhY2UgSUNvbnRhY3RPcmdGb2xsb3dzTWV0aG9kcyB7XG59XG5cbmludGVyZmFjZSBJQ29udGFjdE9yZ0ZvbGxvd3MgZXh0ZW5kcyBTZXF1ZWxpemUuTW9kZWw8Q29udGFjdE9yZ0ZvbGxvd3NJbnN0YW5jZSwgQ29udGFjdE9yZ0ZvbGxvd3NBdHRyaWJ1dGVzPiwgSUNvbnRhY3RPcmdGb2xsb3dzTWV0aG9kcyB7fVxuXG5jb25zdCBDb250YWN0T3JnRm9sbG93cyA9IHNlcXVlbGl6ZS5kZWZpbmUoJ2NvbnRhY3Rvcmdmb2xsb3dzJywgYXR0cmlidXRlcywge1xufSkgYXMgSUNvbnRhY3RPcmdGb2xsb3dzO1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0T3JnRm9sbG93cztcbiJdfQ==