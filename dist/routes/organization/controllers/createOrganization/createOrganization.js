"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Organization = _interopRequireDefault(require("../../../../models/Organization"));

var _OrganizationKeys = _interopRequireDefault(require("../../../../models/Organization/types/OrganizationKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createOrganizationController = async (req, res) => {
  const organization = await _Organization.default.create({
    [_OrganizationKeys.default.NAME]: 'OrganizationName'
  });
  res.json({
    organization
  });
};

var _default = createOrganizationController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvb3JnYW5pemF0aW9uL2NvbnRyb2xsZXJzL2NyZWF0ZU9yZ2FuaXphdGlvbi9jcmVhdGVPcmdhbml6YXRpb24udHMiXSwibmFtZXMiOlsiY3JlYXRlT3JnYW5pemF0aW9uQ29udHJvbGxlciIsInJlcSIsInJlcyIsIm9yZ2FuaXphdGlvbiIsIk9yZ2FuaXphdGlvbiIsImNyZWF0ZSIsIk9yZ2FuaXphdGlvbktleXMiLCJOQU1FIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsNEJBQTRCLEdBQUcsT0FBT0MsR0FBUCxFQUFxQkMsR0FBckIsS0FBdUM7QUFDMUUsUUFBTUMsWUFBWSxHQUFHLE1BQU1DLHNCQUFhQyxNQUFiLENBQW9CO0FBQzdDLEtBQUNDLDBCQUFpQkMsSUFBbEIsR0FBeUI7QUFEb0IsR0FBcEIsQ0FBM0I7QUFJQUwsRUFBQUEsR0FBRyxDQUFDTSxJQUFKLENBQVM7QUFDUEwsSUFBQUE7QUFETyxHQUFUO0FBR0QsQ0FSRDs7ZUFVZUgsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IE9yZ2FuaXphdGlvbiBmcm9tICdtb2RlbHMvT3JnYW5pemF0aW9uJztcbmltcG9ydCBPcmdhbml6YXRpb25LZXlzIGZyb20gJ21vZGVscy9Pcmdhbml6YXRpb24vdHlwZXMvT3JnYW5pemF0aW9uS2V5cyc7XG5cbmNvbnN0IGNyZWF0ZU9yZ2FuaXphdGlvbkNvbnRyb2xsZXIgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IG9yZ2FuaXphdGlvbiA9IGF3YWl0IE9yZ2FuaXphdGlvbi5jcmVhdGUoe1xuICAgIFtPcmdhbml6YXRpb25LZXlzLk5BTUVdOiAnT3JnYW5pemF0aW9uTmFtZScsXG4gIH0pO1xuXG4gIHJlcy5qc29uKHtcbiAgICBvcmdhbml6YXRpb25cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVPcmdhbml6YXRpb25Db250cm9sbGVyO1xuIl19