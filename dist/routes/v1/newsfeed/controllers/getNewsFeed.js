"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _NewsFeed = _interopRequireDefault(require("../../../../models/NewsFeed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getNewsFeedController = async (req, res, next) => {
  try {
    const newsFeedItems = await _NewsFeed.default.findAll();
    res.json(newsFeedItems);
  } catch (err) {
    next(err);
  }
};

var _default = getNewsFeedController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvbmV3c2ZlZWQvY29udHJvbGxlcnMvZ2V0TmV3c0ZlZWQudHMiXSwibmFtZXMiOlsiZ2V0TmV3c0ZlZWRDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsIm5ld3NGZWVkSXRlbXMiLCJOZXdzRmVlZCIsImZpbmRBbGwiLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxxQkFBcUIsR0FBRyxPQUFPQyxHQUFQLEVBQXFCQyxHQUFyQixFQUFvQ0MsSUFBcEMsS0FBMkQ7QUFDdkYsTUFBSTtBQUNGLFVBQU1DLGFBQWEsR0FBRyxNQUFNQyxrQkFBU0MsT0FBVCxFQUE1QjtBQUNBSixJQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBU0gsYUFBVDtBQUNELEdBSEQsQ0FHRSxPQUFPSSxHQUFQLEVBQVk7QUFDWkwsSUFBQUEsSUFBSSxDQUFDSyxHQUFELENBQUo7QUFDRDtBQUNGLENBUEQ7O2VBU2VSLHFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IE5ld3NGZWVkIGZyb20gJ21vZGVscy9OZXdzRmVlZCc7XG5cbmNvbnN0IGdldE5ld3NGZWVkQ29udHJvbGxlciA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IG5ld3NGZWVkSXRlbXMgPSBhd2FpdCBOZXdzRmVlZC5maW5kQWxsKCk7XG4gICAgcmVzLmpzb24obmV3c0ZlZWRJdGVtcyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TmV3c0ZlZWRDb250cm9sbGVyO1xuIl19