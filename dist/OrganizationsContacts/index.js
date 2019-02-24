"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _conn = _interopRequireDefault(require("../config/database/conn"));

var _attributes = _interopRequireDefault(require("./attributes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OrganizationsContacts = _conn.default.define('organizationscontacts', _attributes.default, {});

var _default = OrganizationsContacts;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Pcmdhbml6YXRpb25zQ29udGFjdHMvaW5kZXgudHMiXSwibmFtZXMiOlsiT3JnYW5pemF0aW9uc0NvbnRhY3RzIiwic2VxdWVsaXplIiwiZGVmaW5lIiwiYXR0cmlidXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOzs7O0FBU0EsTUFBTUEscUJBQXFCLEdBQUdDLGNBQVVDLE1BQVYsQ0FBaUIsdUJBQWpCLEVBQTBDQyxtQkFBMUMsRUFBc0QsRUFBdEQsQ0FBOUI7O2VBR2VILHFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IHNlcXVlbGl6ZSBmcm9tICdjb25maWcvZGF0YWJhc2UvY29ubic7XG5pbXBvcnQgYXR0cmlidXRlcyBmcm9tICcuL2F0dHJpYnV0ZXMnO1xuaW1wb3J0IE9yZ2FuaXphdGlvbnNDb250YWN0c0F0dHJpYnV0ZXMgZnJvbSAnLi90eXBlcy9BdHRyaWJ1dGVzJztcbmltcG9ydCB7IE9yZ2FuaXphdGlvbnNDb250YWN0c0luc3RhbmNlIH0gZnJvbSAnLi90eXBlcy9Pcmdhbml6YXRpb25zQ29udGFjdHNJbnN0YW5jZSc7XG5cbmludGVyZmFjZSBJT3JnYW5pemF0aW9uc0NvbnRhY3RzTWV0aG9kcyB7XG59XG5cbmludGVyZmFjZSBJT3JnYW5pemF0aW9uc0NvbnRhY3RzIGV4dGVuZHMgU2VxdWVsaXplLk1vZGVsPE9yZ2FuaXphdGlvbnNDb250YWN0c0luc3RhbmNlLCBPcmdhbml6YXRpb25zQ29udGFjdHNBdHRyaWJ1dGVzPiwgSU9yZ2FuaXphdGlvbnNDb250YWN0c01ldGhvZHMge31cblxuY29uc3QgT3JnYW5pemF0aW9uc0NvbnRhY3RzID0gc2VxdWVsaXplLmRlZmluZSgnb3JnYW5pemF0aW9uc2NvbnRhY3RzJywgYXR0cmlidXRlcywge1xufSkgYXMgSU9yZ2FuaXphdGlvbnNDb250YWN0cztcblxuZXhwb3J0IGRlZmF1bHQgT3JnYW5pemF0aW9uc0NvbnRhY3RzO1xuIl19