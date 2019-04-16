"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodySchema = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const bodySchema = _joi.default.object({
  title: _joi.default.string().required(),
  story: _joi.default.string().required(),
  organizationUuid: _joi.default.string().required()
});

exports.bodySchema = bodySchema;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY2F1c2UvY29udHJvbGxlcnMvY3JlYXRlTmV3c0ZlZWQvdmFsaWRhdGUudHMiXSwibmFtZXMiOlsiYm9keVNjaGVtYSIsImpvaSIsIm9iamVjdCIsInRpdGxlIiwic3RyaW5nIiwicmVxdWlyZWQiLCJzdG9yeSIsIm9yZ2FuaXphdGlvblV1aWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVPLE1BQU1BLFVBQVUsR0FBR0MsYUFBSUMsTUFBSixDQUFXO0FBQ25DQyxFQUFBQSxLQUFLLEVBQUVGLGFBQUlHLE1BQUosR0FBYUMsUUFBYixFQUQ0QjtBQUVuQ0MsRUFBQUEsS0FBSyxFQUFFTCxhQUFJRyxNQUFKLEdBQWFDLFFBQWIsRUFGNEI7QUFHbkNFLEVBQUFBLGdCQUFnQixFQUFFTixhQUFJRyxNQUFKLEdBQWFDLFFBQWI7QUFIaUIsQ0FBWCxDQUFuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqb2kgZnJvbSAnam9pJztcblxuZXhwb3J0IGNvbnN0IGJvZHlTY2hlbWEgPSBqb2kub2JqZWN0KHtcbiAgdGl0bGU6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICBzdG9yeTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIG9yZ2FuaXphdGlvblV1aWQ6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpXG59KTtcbiJdfQ==