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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvY29udGFjdC9jb250cm9sbGVycy9sb2dpbi92YWxpZGF0ZS50cyJdLCJuYW1lcyI6WyJib2R5U2NoZW1hIiwiam9pIiwib2JqZWN0IiwiZW1haWwiLCJzdHJpbmciLCJyZXF1aXJlZCIsInBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFTyxNQUFNQSxVQUFVLEdBQUdDLGFBQUlDLE1BQUosQ0FBVztBQUNuQ0MsRUFBQUEsS0FBSyxFQUFFRixhQUFJRyxNQUFKLEdBQWFELEtBQWIsR0FBcUJFLFFBQXJCLEVBRDRCO0FBRW5DQyxFQUFBQSxRQUFRLEVBQUVMLGFBQUlHLE1BQUosR0FBYUMsUUFBYjtBQUZ5QixDQUFYLENBQW5CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGpvaSBmcm9tICdqb2knO1xuXG5leHBvcnQgY29uc3QgYm9keVNjaGVtYSA9IGpvaS5vYmplY3Qoe1xuICBlbWFpbDogam9pLnN0cmluZygpLmVtYWlsKCkucmVxdWlyZWQoKSxcbiAgcGFzc3dvcmQ6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpXG59KTsiXX0=