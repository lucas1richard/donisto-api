"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _conn = _interopRequireDefault(require("../../config/database/conn"));

var _attributes = _interopRequireDefault(require("./attributes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NewsFeed = _conn.default.define('newsfeed', _attributes.default, {});

var _default = NewsFeed;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvTmV3c0ZlZWQvaW5kZXgudHMiXSwibmFtZXMiOlsiTmV3c0ZlZWQiLCJzZXF1ZWxpemUiLCJkZWZpbmUiLCJhdHRyaWJ1dGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFhQSxNQUFNQSxRQUFRLEdBQW1CQyxjQUFVQyxNQUFWLENBQWlCLFVBQWpCLEVBQTZCQyxtQkFBN0IsRUFBeUMsRUFBekMsQ0FBakM7O2VBR2VILFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgc2VxdWVsaXplIGZyb20gJ2NvbmZpZy9kYXRhYmFzZS9jb25uJztcbmltcG9ydCBhdHRyaWJ1dGVzIGZyb20gJy4vYXR0cmlidXRlcyc7XG5pbXBvcnQgTmV3c0ZlZWRBdHRyaWJ1dGVzIGZyb20gJy4vdHlwZXMvQXR0cmlidXRlcyc7XG5pbXBvcnQgeyBOZXdzRmVlZEluc3RhbmNlIH0gZnJvbSAnLi90eXBlcy9OZXdzRmVlZEluc3RhbmNlJztcblxuaW50ZXJmYWNlIElOZXdzRmVlZE1ldGhvZHMge1xufVxuXG5pbnRlcmZhY2UgSU5ld3NGZWVkIGV4dGVuZHMgU2VxdWVsaXplLk1vZGVsPE5ld3NGZWVkSW5zdGFuY2UsIE5ld3NGZWVkQXR0cmlidXRlcz4sIElOZXdzRmVlZE1ldGhvZHMge31cblxuZXhwb3J0IHR5cGUgSU5ld3NGZWVkTW9kZWwgPSB0eXBlb2YgU2VxdWVsaXplLk1vZGVsICYge1xuICBuZXcgKHZhbHVlcz86IG9iamVjdCwgb3B0aW9ucz86IFNlcXVlbGl6ZS5CdWlsZE9wdGlvbnMpOiBOZXdzRmVlZEluc3RhbmNlO1xufTtcblxuY29uc3QgTmV3c0ZlZWQgPSA8SU5ld3NGZWVkTW9kZWw+c2VxdWVsaXplLmRlZmluZSgnbmV3c2ZlZWQnLCBhdHRyaWJ1dGVzLCB7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3c0ZlZWQ7XG4iXX0=