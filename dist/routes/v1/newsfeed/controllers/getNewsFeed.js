"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _NewsFeed = _interopRequireDefault(require("../../../../models/NewsFeed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getNewsFeedController = async (req, res, next) => {
  try {
    const newsFeedItems = await _NewsFeed.default.findAll({
      order: [['id', 'DESC']]
    });
    res.json(newsFeedItems);
  } catch (err) {
    next(err);
  }
};

var _default = getNewsFeedController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvbmV3c2ZlZWQvY29udHJvbGxlcnMvZ2V0TmV3c0ZlZWQudHMiXSwibmFtZXMiOlsiZ2V0TmV3c0ZlZWRDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsIm5ld3NGZWVkSXRlbXMiLCJOZXdzRmVlZCIsImZpbmRBbGwiLCJvcmRlciIsImpzb24iLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUVBLE1BQU1BLHFCQUFxQixHQUFHLE9BQU9DLEdBQVAsRUFBcUJDLEdBQXJCLEVBQW9DQyxJQUFwQyxLQUEyRDtBQUN2RixNQUFJO0FBQ0YsVUFBTUMsYUFBYSxHQUFHLE1BQU1DLGtCQUFTQyxPQUFULENBQWlCO0FBQzNDQyxNQUFBQSxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUQsRUFBTyxNQUFQLENBQUQ7QUFEb0MsS0FBakIsQ0FBNUI7QUFHQUwsSUFBQUEsR0FBRyxDQUFDTSxJQUFKLENBQVNKLGFBQVQ7QUFDRCxHQUxELENBS0UsT0FBT0ssR0FBUCxFQUFZO0FBQ1pOLElBQUFBLElBQUksQ0FBQ00sR0FBRCxDQUFKO0FBQ0Q7QUFDRixDQVREOztlQVdlVCxxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBOZXdzRmVlZCBmcm9tICdtb2RlbHMvTmV3c0ZlZWQnO1xuXG5jb25zdCBnZXROZXdzRmVlZENvbnRyb2xsZXIgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBuZXdzRmVlZEl0ZW1zID0gYXdhaXQgTmV3c0ZlZWQuZmluZEFsbCh7XG4gICAgICBvcmRlcjogW1snaWQnLCAnREVTQyddXVxuICAgIH0pO1xuICAgIHJlcy5qc29uKG5ld3NGZWVkSXRlbXMpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldE5ld3NGZWVkQ29udHJvbGxlcjtcbiJdfQ==