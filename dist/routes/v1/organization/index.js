"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _getAllOrganizations = _interopRequireDefault(require("./controllers/getAllOrganizations"));

var _createOrganization = _interopRequireDefault(require("./controllers/createOrganization"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get('/', _getAllOrganizations.default);
router.get('/create', _createOrganization.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvb3JnYW5pemF0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbInJvdXRlciIsImdldCIsImdldEFsbE9yZ2FuaXphdGlvbnNDb250cm9sbGVyIiwiY3JlYXRlT3JnYW5pemF0aW9uQ29udHJvbGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLHNCQUFmO0FBRUFBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLEdBQVgsRUFBZ0JDLDRCQUFoQjtBQUNBRixNQUFNLENBQUNDLEdBQVAsQ0FBVyxTQUFYLEVBQXNCRSwyQkFBdEI7ZUFFZUgsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGdldEFsbE9yZ2FuaXphdGlvbnNDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvZ2V0QWxsT3JnYW5pemF0aW9ucyc7XG5pbXBvcnQgY3JlYXRlT3JnYW5pemF0aW9uQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2NyZWF0ZU9yZ2FuaXphdGlvbic7XG5cbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xuXG5yb3V0ZXIuZ2V0KCcvJywgZ2V0QWxsT3JnYW5pemF0aW9uc0NvbnRyb2xsZXIpO1xucm91dGVyLmdldCgnL2NyZWF0ZScsIGNyZWF0ZU9yZ2FuaXphdGlvbkNvbnRyb2xsZXIpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=