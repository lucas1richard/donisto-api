"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _conn = _interopRequireDefault(require("../../config/database/conn"));

var _attributes = _interopRequireDefault(require("./attributes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Cause = _conn.default.define('cause', _attributes.default, {});

var _default = Cause;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvQ2F1c2UvaW5kZXgudHMiXSwibmFtZXMiOlsiQ2F1c2UiLCJzZXF1ZWxpemUiLCJkZWZpbmUiLCJhdHRyaWJ1dGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFhQSxNQUFNQSxLQUFLLEdBQWdCQyxjQUFVQyxNQUFWLENBQWlCLE9BQWpCLEVBQTBCQyxtQkFBMUIsRUFBc0MsRUFBdEMsQ0FBM0I7O2VBR2VILEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgc2VxdWVsaXplIGZyb20gJ2NvbmZpZy9kYXRhYmFzZS9jb25uJztcbmltcG9ydCBhdHRyaWJ1dGVzIGZyb20gJy4vYXR0cmlidXRlcyc7XG5pbXBvcnQgQ2F1c2VBdHRyaWJ1dGVzIGZyb20gJy4vdHlwZXMvQXR0cmlidXRlcyc7XG5pbXBvcnQgeyBDYXVzZUluc3RhbmNlIH0gZnJvbSAnLi90eXBlcy9DYXVzZUluc3RhbmNlJztcblxuaW50ZXJmYWNlIElDYXVzZU1ldGhvZHMge1xufVxuXG5pbnRlcmZhY2UgSUNhdXNlIGV4dGVuZHMgU2VxdWVsaXplLk1vZGVsPENhdXNlSW5zdGFuY2UsIENhdXNlQXR0cmlidXRlcz4sIElDYXVzZU1ldGhvZHMge31cblxuZXhwb3J0IHR5cGUgSUNhdXNlTW9kZWwgPSB0eXBlb2YgU2VxdWVsaXplLk1vZGVsICYge1xuICBuZXcgKHZhbHVlcz86IG9iamVjdCwgb3B0aW9ucz86IFNlcXVlbGl6ZS5CdWlsZE9wdGlvbnMpOiBDYXVzZUluc3RhbmNlO1xufTtcblxuY29uc3QgQ2F1c2UgPSA8SUNhdXNlTW9kZWw+c2VxdWVsaXplLmRlZmluZSgnY2F1c2UnLCBhdHRyaWJ1dGVzLCB7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ2F1c2U7XG4iXX0=