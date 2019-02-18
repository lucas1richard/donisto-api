"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodySchema = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const bodySchema = _joi.default.object({
  email: _joi.default.string().email().required(),
  password: _joi.default.string().required()
});

exports.bodySchema = bodySchema;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvY29udGFjdC9jb250cm9sbGVycy9sb2dpbi9jb250cm9sbGVycy9sb2dpbkNvbnRyb2xsZXIvdmFsaWRhdGUudHMiXSwibmFtZXMiOlsiYm9keVNjaGVtYSIsImpvaSIsIm9iamVjdCIsImVtYWlsIiwic3RyaW5nIiwicmVxdWlyZWQiLCJwYXNzd29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRU8sTUFBTUEsVUFBVSxHQUFHQyxhQUFJQyxNQUFKLENBQVc7QUFDbkNDLEVBQUFBLEtBQUssRUFBRUYsYUFBSUcsTUFBSixHQUFhRCxLQUFiLEdBQXFCRSxRQUFyQixFQUQ0QjtBQUVuQ0MsRUFBQUEsUUFBUSxFQUFFTCxhQUFJRyxNQUFKLEdBQWFDLFFBQWI7QUFGeUIsQ0FBWCxDQUFuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqb2kgZnJvbSAnam9pJztcblxuZXhwb3J0IGNvbnN0IGJvZHlTY2hlbWEgPSBqb2kub2JqZWN0KHtcbiAgZW1haWw6IGpvaS5zdHJpbmcoKS5lbWFpbCgpLnJlcXVpcmVkKCksXG4gIHBhc3N3b3JkOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKVxufSk7Il19