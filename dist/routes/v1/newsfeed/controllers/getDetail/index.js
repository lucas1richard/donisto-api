"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _NewsFeed = _interopRequireDefault(require("../../../../../models/NewsFeed"));

var _Cause = _interopRequireDefault(require("../../../../../models/Cause"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getNewsFeedDetailController = async (req, res, next) => {
  try {
    const newsFeedItem = await _NewsFeed.default.findOne({
      where: {
        uuid: req.params.newsItemUuid
      },
      include: [_Cause.default]
    });
    res.json(newsFeedItem);
  } catch (err) {
    next(err);
  }
};

var _default = getNewsFeedDetailController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvbmV3c2ZlZWQvY29udHJvbGxlcnMvZ2V0RGV0YWlsL2luZGV4LnRzIl0sIm5hbWVzIjpbImdldE5ld3NGZWVkRGV0YWlsQ29udHJvbGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJuZXdzRmVlZEl0ZW0iLCJOZXdzRmVlZCIsImZpbmRPbmUiLCJ3aGVyZSIsInV1aWQiLCJwYXJhbXMiLCJuZXdzSXRlbVV1aWQiLCJpbmNsdWRlIiwiQ2F1c2UiLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSwyQkFBMkIsR0FBRyxPQUNsQ0MsR0FEa0MsRUFFbENDLEdBRmtDLEVBR2xDQyxJQUhrQyxLQUkvQjtBQUNILE1BQUk7QUFDRixVQUFNQyxZQUFZLEdBQUcsTUFBTUMsa0JBQVNDLE9BQVQsQ0FBaUI7QUFDMUNDLE1BQUFBLEtBQUssRUFBRTtBQUNMQyxRQUFBQSxJQUFJLEVBQUVQLEdBQUcsQ0FBQ1EsTUFBSixDQUFXQztBQURaLE9BRG1DO0FBSTFDQyxNQUFBQSxPQUFPLEVBQUUsQ0FBQ0MsY0FBRDtBQUppQyxLQUFqQixDQUEzQjtBQU9BVixJQUFBQSxHQUFHLENBQUNXLElBQUosQ0FBU1QsWUFBVDtBQUNELEdBVEQsQ0FTRSxPQUFPVSxHQUFQLEVBQVk7QUFDWlgsSUFBQUEsSUFBSSxDQUFDVyxHQUFELENBQUo7QUFDRDtBQUNGLENBakJEOztlQW1CZWQsMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgTmV3c0ZlZWQgZnJvbSAnbW9kZWxzL05ld3NGZWVkJztcbmltcG9ydCBDYXVzZSBmcm9tICdtb2RlbHMvQ2F1c2UnO1xuXG5jb25zdCBnZXROZXdzRmVlZERldGFpbENvbnRyb2xsZXIgPSBhc3luYyAoXG4gIHJlcTogUmVxdWVzdCxcbiAgcmVzOiBSZXNwb25zZSxcbiAgbmV4dDogTmV4dEZ1bmN0aW9uXG4pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBuZXdzRmVlZEl0ZW0gPSBhd2FpdCBOZXdzRmVlZC5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHV1aWQ6IHJlcS5wYXJhbXMubmV3c0l0ZW1VdWlkXG4gICAgICB9LFxuICAgICAgaW5jbHVkZTogW0NhdXNlXVxuICAgIH0pO1xuXG4gICAgcmVzLmpzb24obmV3c0ZlZWRJdGVtKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXROZXdzRmVlZERldGFpbENvbnRyb2xsZXI7XG4iXX0=