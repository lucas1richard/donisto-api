"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _NewsFeed = _interopRequireDefault(require("../../../../models/NewsFeed"));

var _Organization = _interopRequireDefault(require("../../../../models/Organization"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getNewsFeedController = async (req, res, next) => {
  try {
    const newsFeedItems = await _NewsFeed.default.findAll({
      order: [['id', 'DESC']],
      include: [_Organization.default],
      limit: 10
    });
    res.json(newsFeedItems);
  } catch (err) {
    next(err);
  }
};

var _default = getNewsFeedController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvbmV3c2ZlZWQvY29udHJvbGxlcnMvZ2V0TmV3c0ZlZWQudHMiXSwibmFtZXMiOlsiZ2V0TmV3c0ZlZWRDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsIm5ld3NGZWVkSXRlbXMiLCJOZXdzRmVlZCIsImZpbmRBbGwiLCJvcmRlciIsImluY2x1ZGUiLCJPcmdhbml6YXRpb25zIiwibGltaXQiLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxxQkFBcUIsR0FBRyxPQUFPQyxHQUFQLEVBQXFCQyxHQUFyQixFQUFvQ0MsSUFBcEMsS0FBMkQ7QUFDdkYsTUFBSTtBQUNGLFVBQU1DLGFBQWEsR0FBRyxNQUFNQyxrQkFBU0MsT0FBVCxDQUFpQjtBQUMzQ0MsTUFBQUEsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFELEVBQU8sTUFBUCxDQUFELENBRG9DO0FBRTNDQyxNQUFBQSxPQUFPLEVBQUUsQ0FBQ0MscUJBQUQsQ0FGa0M7QUFHM0NDLE1BQUFBLEtBQUssRUFBRTtBQUhvQyxLQUFqQixDQUE1QjtBQUtBUixJQUFBQSxHQUFHLENBQUNTLElBQUosQ0FBU1AsYUFBVDtBQUNELEdBUEQsQ0FPRSxPQUFPUSxHQUFQLEVBQVk7QUFDWlQsSUFBQUEsSUFBSSxDQUFDUyxHQUFELENBQUo7QUFDRDtBQUNGLENBWEQ7O2VBYWVaLHFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IE5ld3NGZWVkIGZyb20gJ21vZGVscy9OZXdzRmVlZCc7XG5pbXBvcnQgT3JnYW5pemF0aW9ucyBmcm9tICdtb2RlbHMvT3JnYW5pemF0aW9uJztcblxuY29uc3QgZ2V0TmV3c0ZlZWRDb250cm9sbGVyID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgbmV3c0ZlZWRJdGVtcyA9IGF3YWl0IE5ld3NGZWVkLmZpbmRBbGwoe1xuICAgICAgb3JkZXI6IFtbJ2lkJywgJ0RFU0MnXV0sXG4gICAgICBpbmNsdWRlOiBbT3JnYW5pemF0aW9uc10sXG4gICAgICBsaW1pdDogMTBcbiAgICB9KTtcbiAgICByZXMuanNvbihuZXdzRmVlZEl0ZW1zKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXROZXdzRmVlZENvbnRyb2xsZXI7XG4iXX0=