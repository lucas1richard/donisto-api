"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const getNewsFeedController = async (req, res, next) => {
  try {
    res.json([{
      id: '1',
      title: 'News Item 1',
      subtitle: 'From organization 1'
    }, {
      id: '2',
      title: 'News Item 2',
      subtitle: 'From organization 2'
    }, {
      id: '3',
      title: 'News Item 3',
      subtitle: 'From organization 3'
    }]);
  } catch (err) {
    next(err);
  }
};

var _default = getNewsFeedController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvbmV3c2ZlZWQvY29udHJvbGxlcnMvZ2V0TmV3c0ZlZWQudHMiXSwibmFtZXMiOlsiZ2V0TmV3c0ZlZWRDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImpzb24iLCJpZCIsInRpdGxlIiwic3VidGl0bGUiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxNQUFNQSxxQkFBcUIsR0FBRyxPQUFPQyxHQUFQLEVBQXFCQyxHQUFyQixFQUFvQ0MsSUFBcEMsS0FBMkQ7QUFDdkYsTUFBSTtBQUNGRCxJQUFBQSxHQUFHLENBQUNFLElBQUosQ0FBUyxDQUFDO0FBQ1JDLE1BQUFBLEVBQUUsRUFBRSxHQURJO0FBRVJDLE1BQUFBLEtBQUssRUFBRSxhQUZDO0FBR1JDLE1BQUFBLFFBQVEsRUFBRTtBQUhGLEtBQUQsRUFJTjtBQUNERixNQUFBQSxFQUFFLEVBQUUsR0FESDtBQUVEQyxNQUFBQSxLQUFLLEVBQUUsYUFGTjtBQUdEQyxNQUFBQSxRQUFRLEVBQUU7QUFIVCxLQUpNLEVBUU47QUFDREYsTUFBQUEsRUFBRSxFQUFFLEdBREg7QUFFREMsTUFBQUEsS0FBSyxFQUFFLGFBRk47QUFHREMsTUFBQUEsUUFBUSxFQUFFO0FBSFQsS0FSTSxDQUFUO0FBYUQsR0FkRCxDQWNFLE9BQU9DLEdBQVAsRUFBWTtBQUNaTCxJQUFBQSxJQUFJLENBQUNLLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0FsQkQ7O2VBb0JlUixxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcblxuY29uc3QgZ2V0TmV3c0ZlZWRDb250cm9sbGVyID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHRyeSB7XG4gICAgcmVzLmpzb24oW3tcbiAgICAgIGlkOiAnMScsXG4gICAgICB0aXRsZTogJ05ld3MgSXRlbSAxJyxcbiAgICAgIHN1YnRpdGxlOiAnRnJvbSBvcmdhbml6YXRpb24gMSdcbiAgICB9LCB7XG4gICAgICBpZDogJzInLFxuICAgICAgdGl0bGU6ICdOZXdzIEl0ZW0gMicsXG4gICAgICBzdWJ0aXRsZTogJ0Zyb20gb3JnYW5pemF0aW9uIDInXG4gICAgfSwge1xuICAgICAgaWQ6ICczJyxcbiAgICAgIHRpdGxlOiAnTmV3cyBJdGVtIDMnLFxuICAgICAgc3VidGl0bGU6ICdGcm9tIG9yZ2FuaXphdGlvbiAzJ1xuICAgIH1dKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXROZXdzRmVlZENvbnRyb2xsZXI7XG4iXX0=