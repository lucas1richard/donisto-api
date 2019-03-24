"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _v = _interopRequireDefault(require("./v1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get('/', (req, res) => {
  res.send('Donisto API');
});
router.use('/v1', _v.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvYXBpLnRzIl0sIm5hbWVzIjpbInJvdXRlciIsImdldCIsInJlcSIsInJlcyIsInNlbmQiLCJ1c2UiLCJ2MSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLHNCQUFmO0FBRUFBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLEdBQVgsRUFBZ0IsQ0FBQ0MsR0FBRCxFQUFlQyxHQUFmLEtBQWlDO0FBQy9DQSxFQUFBQSxHQUFHLENBQUNDLElBQUosQ0FBUyxhQUFUO0FBQ0QsQ0FGRDtBQUdBSixNQUFNLENBQUNLLEdBQVAsQ0FBVyxLQUFYLEVBQWtCQyxVQUFsQjtlQUVlTixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHYxIGZyb20gJy4vdjEnO1xuXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcblxucm91dGVyLmdldCgnLycsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgcmVzLnNlbmQoJ0RvbmlzdG8gQVBJJyk7XG59KTtcbnJvdXRlci51c2UoJy92MScsIHYxKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19