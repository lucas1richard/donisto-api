"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _getOrganization = _interopRequireDefault(require("./controllers/getOrganization"));

var _createOrganization = _interopRequireDefault(require("./controllers/createOrganization"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get('/', _getOrganization.default);
router.get('/create', _createOrganization.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvb3JnYW5pemF0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbInJvdXRlciIsImdldCIsImdldE9yZ2FuaXphdGlvbkNvbnRyb2xsZXIiLCJjcmVhdGVPcmdhbml6YXRpb25Db250cm9sbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsc0JBQWY7QUFFQUEsTUFBTSxDQUFDQyxHQUFQLENBQVcsR0FBWCxFQUFnQkMsd0JBQWhCO0FBQ0FGLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFNBQVgsRUFBc0JFLDJCQUF0QjtlQUVlSCxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgZ2V0T3JnYW5pemF0aW9uQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2dldE9yZ2FuaXphdGlvbic7XG5pbXBvcnQgY3JlYXRlT3JnYW5pemF0aW9uQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2NyZWF0ZU9yZ2FuaXphdGlvbic7XG5cbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xuXG5yb3V0ZXIuZ2V0KCcvJywgZ2V0T3JnYW5pemF0aW9uQ29udHJvbGxlcik7XG5yb3V0ZXIuZ2V0KCcvY3JlYXRlJywgY3JlYXRlT3JnYW5pemF0aW9uQ29udHJvbGxlcik7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==