"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _getContact = _interopRequireDefault(require("./controllers/getContact"));

var _createContact = _interopRequireDefault(require("./controllers/createContact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.post('/get', _getContact.default);
router.post('/create', _createContact.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY29udGFjdC9pbmRleC50cyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJwb3N0IiwiZ2V0Q29udGFjdENvbnRyb2xsZXIiLCJjcmVhdGVDb250YWN0Q29udHJvbGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLHNCQUFmO0FBRUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLE1BQVosRUFBb0JDLG1CQUFwQjtBQUNBRixNQUFNLENBQUNDLElBQVAsQ0FBWSxTQUFaLEVBQXVCRSxzQkFBdkI7ZUFFZUgsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGdldENvbnRhY3RDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvZ2V0Q29udGFjdCc7XG5pbXBvcnQgY3JlYXRlQ29udGFjdENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9jcmVhdGVDb250YWN0JztcblxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XG5cbnJvdXRlci5wb3N0KCcvZ2V0JywgZ2V0Q29udGFjdENvbnRyb2xsZXIpO1xucm91dGVyLnBvc3QoJy9jcmVhdGUnLCBjcmVhdGVDb250YWN0Q29udHJvbGxlcik7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==