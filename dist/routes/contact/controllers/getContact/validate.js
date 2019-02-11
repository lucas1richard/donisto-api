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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvY29udGFjdC9jb250cm9sbGVycy9nZXRDb250YWN0L3ZhbGlkYXRlLnRzIl0sIm5hbWVzIjpbImJvZHlTY2hlbWEiLCJqb2kiLCJvYmplY3QiLCJlbWFpbCIsInN0cmluZyIsInJlcXVpcmVkIiwicGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVPLE1BQU1BLFVBQVUsR0FBR0MsYUFBSUMsTUFBSixDQUFXO0FBQ25DQyxFQUFBQSxLQUFLLEVBQUVGLGFBQUlHLE1BQUosR0FBYUQsS0FBYixHQUFxQkUsUUFBckIsRUFENEI7QUFFbkNDLEVBQUFBLFFBQVEsRUFBRUwsYUFBSUcsTUFBSixHQUFhQyxRQUFiO0FBRnlCLENBQVgsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgam9pIGZyb20gJ2pvaSc7XG5cbmV4cG9ydCBjb25zdCBib2R5U2NoZW1hID0gam9pLm9iamVjdCh7XG4gIGVtYWlsOiBqb2kuc3RyaW5nKCkuZW1haWwoKS5yZXF1aXJlZCgpLFxuICBwYXNzd29yZDogam9pLnN0cmluZygpLnJlcXVpcmVkKClcbn0pOyJdfQ==