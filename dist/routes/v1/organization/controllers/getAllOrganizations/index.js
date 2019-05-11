"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Organization = _interopRequireDefault(require("../../../../../models/Organization"));

var _Links = _interopRequireDefault(require("../../../../../models/Links"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getAllOrganizationsController = async (req, res, next) => {
  try {
    const organizations = await _Organization.default.findAll({
      include: [_Links.default]
    });
    res.json(organizations);
  } catch (err) {
    next(err);
  }
};

var _default = getAllOrganizationsController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvb3JnYW5pemF0aW9uL2NvbnRyb2xsZXJzL2dldEFsbE9yZ2FuaXphdGlvbnMvaW5kZXgudHMiXSwibmFtZXMiOlsiZ2V0QWxsT3JnYW5pemF0aW9uc0NvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJuZXh0Iiwib3JnYW5pemF0aW9ucyIsIk9yZ2FuaXphdGlvbiIsImZpbmRBbGwiLCJpbmNsdWRlIiwiTGlua3MiLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSw2QkFBNkMsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQzlFLE1BQUk7QUFDRixVQUFNQyxhQUFhLEdBQUcsTUFBTUMsc0JBQWFDLE9BQWIsQ0FBcUI7QUFDL0NDLE1BQUFBLE9BQU8sRUFBRSxDQUFDQyxjQUFEO0FBRHNDLEtBQXJCLENBQTVCO0FBR0FOLElBQUFBLEdBQUcsQ0FBQ08sSUFBSixDQUFTTCxhQUFUO0FBQ0QsR0FMRCxDQUtFLE9BQU9NLEdBQVAsRUFBWTtBQUNaUCxJQUFBQSxJQUFJLENBQUNPLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0FURDs7ZUFXZVYsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IE9yZ2FuaXphdGlvbiBmcm9tICdtb2RlbHMvT3JnYW5pemF0aW9uJztcbmltcG9ydCBMaW5rcyBmcm9tICdtb2RlbHMvTGlua3MnO1xuXG5jb25zdCBnZXRBbGxPcmdhbml6YXRpb25zQ29udHJvbGxlcjogUmVxdWVzdEhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBvcmdhbml6YXRpb25zID0gYXdhaXQgT3JnYW5pemF0aW9uLmZpbmRBbGwoe1xuICAgICAgaW5jbHVkZTogW0xpbmtzXVxuICAgIH0pO1xuICAgIHJlcy5qc29uKG9yZ2FuaXphdGlvbnMpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldEFsbE9yZ2FuaXphdGlvbnNDb250cm9sbGVyO1xuIl19