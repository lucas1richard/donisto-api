"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _getContact = _interopRequireDefault(require("./controllers/getContact"));

var _login = _interopRequireDefault(require("./controllers/login"));

var _updateContact = _interopRequireDefault(require("./controllers/updateContact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import createContactController from './controllers/createContact';
const router = (0, _express.Router)();
router.put('/', _updateContact.default);
router.post('/get', _getContact.default); // router.post('/create', createContactController);

router.post('/login', _login.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY29udGFjdC9pbmRleC50cyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJwdXQiLCJ1cGRhdGVDb250YWN0Q29udHJvbGxlciIsInBvc3QiLCJnZXRDb250YWN0Q29udHJvbGxlciIsImxvZ2luQ29udHJvbGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBRkE7QUFJQSxNQUFNQSxNQUFNLEdBQUcsc0JBQWY7QUFFQUEsTUFBTSxDQUFDQyxHQUFQLENBQVcsR0FBWCxFQUFnQkMsc0JBQWhCO0FBQ0FGLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLE1BQVosRUFBb0JDLG1CQUFwQixFLENBQ0E7O0FBQ0FKLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLFFBQVosRUFBc0JFLGNBQXRCO2VBRWVMLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBnZXRDb250YWN0Q29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2dldENvbnRhY3QnO1xuLy8gaW1wb3J0IGNyZWF0ZUNvbnRhY3RDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvY3JlYXRlQ29udGFjdCc7XG5pbXBvcnQgbG9naW5Db250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvbG9naW4nO1xuaW1wb3J0IHVwZGF0ZUNvbnRhY3RDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvdXBkYXRlQ29udGFjdCc7XG5cbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xuXG5yb3V0ZXIucHV0KCcvJywgdXBkYXRlQ29udGFjdENvbnRyb2xsZXIpO1xucm91dGVyLnBvc3QoJy9nZXQnLCBnZXRDb250YWN0Q29udHJvbGxlcik7XG4vLyByb3V0ZXIucG9zdCgnL2NyZWF0ZScsIGNyZWF0ZUNvbnRhY3RDb250cm9sbGVyKTtcbnJvdXRlci5wb3N0KCcvbG9naW4nLCBsb2dpbkNvbnRyb2xsZXIpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=