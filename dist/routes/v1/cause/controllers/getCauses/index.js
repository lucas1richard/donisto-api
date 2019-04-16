"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Cause = _interopRequireDefault(require("../../../../../models/Cause"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getCausesController(req, res, next) {
  try {
    const causes = await _Cause.default.findAll();
    res.json(causes);
  } catch (err) {
    next(err);
  }
}

var _default = getCausesController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY2F1c2UvY29udHJvbGxlcnMvZ2V0Q2F1c2VzL2luZGV4LnRzIl0sIm5hbWVzIjpbImdldENhdXNlc0NvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwiY2F1c2VzIiwiQ2F1c2UiLCJmaW5kQWxsIiwianNvbiIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBRUEsZUFBZUEsbUJBQWYsQ0FBbUNDLEdBQW5DLEVBQWlEQyxHQUFqRCxFQUFnRUMsSUFBaEUsRUFBb0Y7QUFDbEYsTUFBSTtBQUNGLFVBQU1DLE1BQU0sR0FBRyxNQUFNQyxlQUFNQyxPQUFOLEVBQXJCO0FBQ0FKLElBQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTSCxNQUFUO0FBQ0QsR0FIRCxDQUdFLE9BQU9JLEdBQVAsRUFBWTtBQUNaTCxJQUFBQSxJQUFJLENBQUNLLEdBQUQsQ0FBSjtBQUNEO0FBQ0Y7O2VBRWNSLG1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IENhdXNlIGZyb20gJ21vZGVscy9DYXVzZSc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENhdXNlc0NvbnRyb2xsZXIocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjYXVzZXMgPSBhd2FpdCBDYXVzZS5maW5kQWxsKCk7XG4gICAgcmVzLmpzb24oY2F1c2VzKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldENhdXNlc0NvbnRyb2xsZXI7Il19