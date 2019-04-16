"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _conn = _interopRequireDefault(require("../../config/database/conn"));

var _attributes = _interopRequireDefault(require("./attributes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NewsFeedCauses = _conn.default.define('newsfeedcauses', _attributes.default, {});

var _default = NewsFeedCauses;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvTmV3c0ZlZWRDYXVzZXMvaW5kZXgudHMiXSwibmFtZXMiOlsiTmV3c0ZlZWRDYXVzZXMiLCJzZXF1ZWxpemUiLCJkZWZpbmUiLCJhdHRyaWJ1dGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFTQSxNQUFNQSxjQUFjLEdBQUdDLGNBQVVDLE1BQVYsQ0FBaUIsZ0JBQWpCLEVBQW1DQyxtQkFBbkMsRUFBK0MsRUFBL0MsQ0FBdkI7O2VBR2VILGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgc2VxdWVsaXplIGZyb20gJ2NvbmZpZy9kYXRhYmFzZS9jb25uJztcbmltcG9ydCBhdHRyaWJ1dGVzIGZyb20gJy4vYXR0cmlidXRlcyc7XG5pbXBvcnQgTmV3c0ZlZWRDYXVzZXNBdHRyaWJ1dGVzIGZyb20gJy4vdHlwZXMvQXR0cmlidXRlcyc7XG5pbXBvcnQgeyBOZXdzRmVlZENhdXNlc0luc3RhbmNlIH0gZnJvbSAnLi90eXBlcy9OZXdzRmVlZENhdXNlc0luc3RhbmNlJztcblxuaW50ZXJmYWNlIElOZXdzRmVlZENhdXNlc01ldGhvZHMge1xufVxuXG5pbnRlcmZhY2UgSU5ld3NGZWVkQ2F1c2VzIGV4dGVuZHMgU2VxdWVsaXplLk1vZGVsPE5ld3NGZWVkQ2F1c2VzSW5zdGFuY2UsIE5ld3NGZWVkQ2F1c2VzQXR0cmlidXRlcz4sIElOZXdzRmVlZENhdXNlc01ldGhvZHMge31cblxuY29uc3QgTmV3c0ZlZWRDYXVzZXMgPSBzZXF1ZWxpemUuZGVmaW5lKCduZXdzZmVlZGNhdXNlcycsIGF0dHJpYnV0ZXMsIHtcbn0pIGFzIElOZXdzRmVlZENhdXNlcztcblxuZXhwb3J0IGRlZmF1bHQgTmV3c0ZlZWRDYXVzZXM7XG4iXX0=