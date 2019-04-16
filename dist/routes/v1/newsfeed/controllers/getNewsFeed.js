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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvbmV3c2ZlZWQvY29udHJvbGxlcnMvZ2V0TmV3c0ZlZWQudHMiXSwibmFtZXMiOlsiZ2V0TmV3c0ZlZWRDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsIm5ld3NGZWVkSXRlbXMiLCJOZXdzRmVlZCIsImZpbmRBbGwiLCJvcmRlciIsImluY2x1ZGUiLCJPcmdhbml6YXRpb25zIiwibGltaXQiLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxxQkFBcUIsR0FBRyxPQUM1QkMsR0FENEIsRUFFNUJDLEdBRjRCLEVBRzVCQyxJQUg0QixLQUl6QjtBQUNILE1BQUk7QUFDRixVQUFNQyxhQUFhLEdBQUcsTUFBTUMsa0JBQVNDLE9BQVQsQ0FBaUI7QUFDM0NDLE1BQUFBLEtBQUssRUFBRSxDQUNMLENBQUMsSUFBRCxFQUFPLE1BQVAsQ0FESyxDQURvQztBQUkzQ0MsTUFBQUEsT0FBTyxFQUFFLENBQ1BDLHFCQURPLENBSmtDO0FBTzNDQyxNQUFBQSxLQUFLLEVBQUU7QUFQb0MsS0FBakIsQ0FBNUI7QUFTQVIsSUFBQUEsR0FBRyxDQUFDUyxJQUFKLENBQVNQLGFBQVQ7QUFDRCxHQVhELENBV0UsT0FBT1EsR0FBUCxFQUFZO0FBQ1pULElBQUFBLElBQUksQ0FBQ1MsR0FBRCxDQUFKO0FBQ0Q7QUFDRixDQW5CRDs7ZUFxQmVaLHFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IE5ld3NGZWVkIGZyb20gJ21vZGVscy9OZXdzRmVlZCc7XG5pbXBvcnQgT3JnYW5pemF0aW9ucyBmcm9tICdtb2RlbHMvT3JnYW5pemF0aW9uJztcblxuY29uc3QgZ2V0TmV3c0ZlZWRDb250cm9sbGVyID0gYXN5bmMgKFxuICByZXE6IFJlcXVlc3QsXG4gIHJlczogUmVzcG9uc2UsXG4gIG5leHQ6IE5leHRGdW5jdGlvblxuKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgbmV3c0ZlZWRJdGVtcyA9IGF3YWl0IE5ld3NGZWVkLmZpbmRBbGwoe1xuICAgICAgb3JkZXI6IFtcbiAgICAgICAgWydpZCcsICdERVNDJ11cbiAgICAgIF0sXG4gICAgICBpbmNsdWRlOiBbXG4gICAgICAgIE9yZ2FuaXphdGlvbnNcbiAgICAgIF0sXG4gICAgICBsaW1pdDogMTAsXG4gICAgfSk7XG4gICAgcmVzLmpzb24obmV3c0ZlZWRJdGVtcyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TmV3c0ZlZWRDb250cm9sbGVyO1xuIl19