"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodySchema = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const bodySchema = _joi.default.object({
  name: _joi.default.string().required(),
  organizationUuid: _joi.default.string().required()
});

exports.bodySchema = bodySchema;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY2F1c2UvY29udHJvbGxlcnMvY3JlYXRlQ2F1c2UvdmFsaWRhdGUudHMiXSwibmFtZXMiOlsiYm9keVNjaGVtYSIsImpvaSIsIm9iamVjdCIsIm5hbWUiLCJzdHJpbmciLCJyZXF1aXJlZCIsIm9yZ2FuaXphdGlvblV1aWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVPLE1BQU1BLFVBQVUsR0FBR0MsYUFBSUMsTUFBSixDQUFXO0FBQ25DQyxFQUFBQSxJQUFJLEVBQUVGLGFBQUlHLE1BQUosR0FBYUMsUUFBYixFQUQ2QjtBQUVuQ0MsRUFBQUEsZ0JBQWdCLEVBQUVMLGFBQUlHLE1BQUosR0FBYUMsUUFBYjtBQUZpQixDQUFYLENBQW5CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGpvaSBmcm9tICdqb2knO1xuXG5leHBvcnQgY29uc3QgYm9keVNjaGVtYSA9IGpvaS5vYmplY3Qoe1xuICBuYW1lOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgb3JnYW5pemF0aW9uVXVpZDogam9pLnN0cmluZygpLnJlcXVpcmVkKClcbn0pO1xuIl19