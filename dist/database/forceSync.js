"use strict";

var _conn = _interopRequireDefault(require("./conn"));

require("./associate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_conn.default.sync({
  force: true
}).then(() => {
  process.exit();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZS9mb3JjZVN5bmMudHMiXSwibmFtZXMiOlsiY29ubiIsInN5bmMiLCJmb3JjZSIsInRoZW4iLCJwcm9jZXNzIiwiZXhpdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7OztBQUVBQSxjQUNHQyxJQURILENBQ1E7QUFBRUMsRUFBQUEsS0FBSyxFQUFFO0FBQVQsQ0FEUixFQUVHQyxJQUZILENBRVEsTUFBTTtBQUNWQyxFQUFBQSxPQUFPLENBQUNDLElBQVI7QUFDRCxDQUpIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm4gZnJvbSAnLi9jb25uJztcbmltcG9ydCAnLi9hc3NvY2lhdGUnO1xuXG5jb25uXG4gIC5zeW5jKHsgZm9yY2U6IHRydWUgfSlcbiAgLnRoZW4oKCkgPT4ge1xuICAgIHByb2Nlc3MuZXhpdCgpO1xuICB9KTsiXX0=