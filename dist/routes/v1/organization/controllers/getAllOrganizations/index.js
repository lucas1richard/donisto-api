"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../../../../models");

const noOrgPlaceholder = [];

const getAllOrganizationsController = async (req, res, next) => {
  try {
    const organizations = await _models.Organizations.findAll({
      include: [_models.Links]
    });
    res.json(organizations || noOrgPlaceholder);
  } catch (err) {
    next(err);
  }
};

var _default = getAllOrganizationsController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvb3JnYW5pemF0aW9uL2NvbnRyb2xsZXJzL2dldEFsbE9yZ2FuaXphdGlvbnMvaW5kZXgudHMiXSwibmFtZXMiOlsibm9PcmdQbGFjZWhvbGRlciIsImdldEFsbE9yZ2FuaXphdGlvbnNDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsIm9yZ2FuaXphdGlvbnMiLCJPcmdhbml6YXRpb25zIiwiZmluZEFsbCIsImluY2x1ZGUiLCJMaW5rcyIsImpzb24iLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFFQSxNQUFNQSxnQkFBdUIsR0FBRyxFQUFoQzs7QUFFQSxNQUFNQyw2QkFBNkMsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQzlFLE1BQUk7QUFDRixVQUFNQyxhQUFhLEdBQUcsTUFBTUMsc0JBQWNDLE9BQWQsQ0FBc0I7QUFDaERDLE1BQUFBLE9BQU8sRUFBRSxDQUFDQyxhQUFEO0FBRHVDLEtBQXRCLENBQTVCO0FBR0FOLElBQUFBLEdBQUcsQ0FBQ08sSUFBSixDQUFTTCxhQUFhLElBQUlMLGdCQUExQjtBQUNELEdBTEQsQ0FLRSxPQUFPVyxHQUFQLEVBQVk7QUFDWlAsSUFBQUEsSUFBSSxDQUFDTyxHQUFELENBQUo7QUFDRDtBQUNGLENBVEQ7O2VBV2VWLDZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IE9yZ2FuaXphdGlvbnMsIExpbmtzIH0gZnJvbSAnbW9kZWxzJztcblxuY29uc3Qgbm9PcmdQbGFjZWhvbGRlcjogYW55W10gPSBbXTtcblxuY29uc3QgZ2V0QWxsT3JnYW5pemF0aW9uc0NvbnRyb2xsZXI6IFJlcXVlc3RIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3Qgb3JnYW5pemF0aW9ucyA9IGF3YWl0IE9yZ2FuaXphdGlvbnMuZmluZEFsbCh7XG4gICAgICBpbmNsdWRlOiBbTGlua3NdXG4gICAgfSk7XG4gICAgcmVzLmpzb24ob3JnYW5pemF0aW9ucyB8fCBub09yZ1BsYWNlaG9sZGVyKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRBbGxPcmdhbml6YXRpb25zQ29udHJvbGxlcjtcbiJdfQ==