"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _contact = _interopRequireDefault(require("./contact"));

var _organization = _interopRequireDefault(require("./organization"));

var _newsfeed = _interopRequireDefault(require("./newsfeed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.use('/contact', _contact.default);
router.use('/organization', _organization.default);
router.use('/newsfeed', _newsfeed.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvYXBpLnRzIl0sIm5hbWVzIjpbInJvdXRlciIsInVzZSIsImNvbnRhY3QiLCJvcmdhbml6YXRpb24iLCJuZXdzZmVlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLHNCQUFmO0FBRUFBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQVgsRUFBdUJDLGdCQUF2QjtBQUNBRixNQUFNLENBQUNDLEdBQVAsQ0FBVyxlQUFYLEVBQTRCRSxxQkFBNUI7QUFDQUgsTUFBTSxDQUFDQyxHQUFQLENBQVcsV0FBWCxFQUF3QkcsaUJBQXhCO2VBRWVKLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQgb3JnYW5pemF0aW9uIGZyb20gJy4vb3JnYW5pemF0aW9uJztcbmltcG9ydCBuZXdzZmVlZCBmcm9tICcuL25ld3NmZWVkJztcblxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XG5cbnJvdXRlci51c2UoJy9jb250YWN0JywgY29udGFjdCk7XG5yb3V0ZXIudXNlKCcvb3JnYW5pemF0aW9uJywgb3JnYW5pemF0aW9uKTtcbnJvdXRlci51c2UoJy9uZXdzZmVlZCcsIG5ld3NmZWVkKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19