"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _getContact = _interopRequireDefault(require("./controllers/getContact"));

var _login = _interopRequireDefault(require("./controllers/login"));

var _updateContact = _interopRequireDefault(require("./controllers/updateContact"));

var _getOrgNewsFeed = _interopRequireDefault(require("./controllers/getOrgNewsFeed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.put('/', _updateContact.default);
router.get('/get', _getContact.default);
router.post('/login', _login.default);
router.get('/orgnewsfeed', _getOrgNewsFeed.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY29udGFjdC9pbmRleC50cyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJwdXQiLCJ1cGRhdGVDb250YWN0Q29udHJvbGxlciIsImdldCIsImdldENvbnRhY3RDb250cm9sbGVyIiwicG9zdCIsImxvZ2luQ29udHJvbGxlciIsImdldE9yZ05ld3NGZWVkQ29udHJvbGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLHNCQUFmO0FBRUFBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLEdBQVgsRUFBZ0JDLHNCQUFoQjtBQUNBRixNQUFNLENBQUNHLEdBQVAsQ0FBVyxNQUFYLEVBQW1CQyxtQkFBbkI7QUFDQUosTUFBTSxDQUFDSyxJQUFQLENBQVksUUFBWixFQUFzQkMsY0FBdEI7QUFDQU4sTUFBTSxDQUFDRyxHQUFQLENBQVcsY0FBWCxFQUEyQkksdUJBQTNCO2VBRWVQLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBnZXRDb250YWN0Q29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2dldENvbnRhY3QnO1xuaW1wb3J0IGxvZ2luQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2xvZ2luJztcbmltcG9ydCB1cGRhdGVDb250YWN0Q29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL3VwZGF0ZUNvbnRhY3QnO1xuaW1wb3J0IGdldE9yZ05ld3NGZWVkQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2dldE9yZ05ld3NGZWVkJztcblxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XG5cbnJvdXRlci5wdXQoJy8nLCB1cGRhdGVDb250YWN0Q29udHJvbGxlcik7XG5yb3V0ZXIuZ2V0KCcvZ2V0JywgZ2V0Q29udGFjdENvbnRyb2xsZXIpO1xucm91dGVyLnBvc3QoJy9sb2dpbicsIGxvZ2luQ29udHJvbGxlcik7XG5yb3V0ZXIuZ2V0KCcvb3JnbmV3c2ZlZWQnLCBnZXRPcmdOZXdzRmVlZENvbnRyb2xsZXIpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=