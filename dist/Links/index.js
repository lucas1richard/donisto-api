"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _conn = _interopRequireDefault(require("../config/database/conn"));

var _attributes = _interopRequireDefault(require("./attributes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Links = _conn.default.define('links', _attributes.default, {});

var _default = Links;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MaW5rcy9pbmRleC50cyJdLCJuYW1lcyI6WyJMaW5rcyIsInNlcXVlbGl6ZSIsImRlZmluZSIsImF0dHJpYnV0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7OztBQVNBLE1BQU1BLEtBQUssR0FBR0MsY0FBVUMsTUFBVixDQUFpQixPQUFqQixFQUEwQkMsbUJBQTFCLEVBQXNDLEVBQXRDLENBQWQ7O2VBR2VILEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgc2VxdWVsaXplIGZyb20gJ2NvbmZpZy9kYXRhYmFzZS9jb25uJztcbmltcG9ydCBhdHRyaWJ1dGVzIGZyb20gJy4vYXR0cmlidXRlcyc7XG5pbXBvcnQgTGlua3NBdHRyaWJ1dGVzIGZyb20gJy4vdHlwZXMvQXR0cmlidXRlcyc7XG5pbXBvcnQgeyBMaW5rc0luc3RhbmNlIH0gZnJvbSAnLi90eXBlcy9MaW5rc0luc3RhbmNlJztcblxuaW50ZXJmYWNlIElMaW5rc01ldGhvZHMge1xufVxuXG5pbnRlcmZhY2UgSUxpbmtzIGV4dGVuZHMgU2VxdWVsaXplLk1vZGVsPExpbmtzSW5zdGFuY2UsIExpbmtzQXR0cmlidXRlcz4sIElMaW5rc01ldGhvZHMge31cblxuY29uc3QgTGlua3MgPSBzZXF1ZWxpemUuZGVmaW5lKCdsaW5rcycsIGF0dHJpYnV0ZXMsIHtcbn0pIGFzIElMaW5rcztcblxuZXhwb3J0IGRlZmF1bHQgTGlua3M7XG4iXX0=