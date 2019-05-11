"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Organization = _interopRequireDefault(require("../../../../../models/Organization"));

var _types = require("../../../../../models/Organization/types");

var _OrganizationsContacts = _interopRequireDefault(require("../../../../../models/OrganizationsContacts"));

var _foreignKeys = _interopRequireDefault(require("../../../../../database/foreignKeys"));

var _Links = _interopRequireDefault(require("../../../../../models/Links"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getOrganizationDetailController = async (req, res, next) => {
  try {
    const {
      uuid
    } = res.locals;
    const {
      organization_uuid
    } = req.body;
    const organization = await _Organization.default.findOne({
      where: {
        [_types.OrganizationKeys.UUID]: organization_uuid
      },
      include: [_Links.default]
    });
    const contactIsMember = await _OrganizationsContacts.default.findOne({
      where: {
        [_foreignKeys.default.ORGANIZATION]: organization_uuid,
        [_foreignKeys.default.CONTACT]: uuid
      }
    });
    res.json(_objectSpread({}, organization.get(), {
      contactIsMember: !!contactIsMember
    }));
  } catch (err) {
    next(err);
  }
};

var _default = getOrganizationDetailController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvb3JnYW5pemF0aW9uL2NvbnRyb2xsZXJzL2dldE9yZ2FuaXphdGlvbkRldGFpbC9pbmRleC50cyJdLCJuYW1lcyI6WyJnZXRPcmdhbml6YXRpb25EZXRhaWxDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsInV1aWQiLCJsb2NhbHMiLCJvcmdhbml6YXRpb25fdXVpZCIsImJvZHkiLCJvcmdhbml6YXRpb24iLCJPcmdhbml6YXRpb24iLCJmaW5kT25lIiwid2hlcmUiLCJPcmdhbml6YXRpb25LZXlzIiwiVVVJRCIsImluY2x1ZGUiLCJMaW5rcyIsImNvbnRhY3RJc01lbWJlciIsIk9yZ2FuaXphdGlvbnNDb250YWN0cyIsImZvcmVpZ25LZXlzIiwiT1JHQU5JWkFUSU9OIiwiQ09OVEFDVCIsImpzb24iLCJnZXQiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxNQUFNQSwrQkFBK0MsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQ2hGLE1BQUk7QUFDRixVQUFNO0FBQUVDLE1BQUFBO0FBQUYsUUFBV0YsR0FBRyxDQUFDRyxNQUFyQjtBQUNBLFVBQU07QUFBRUMsTUFBQUE7QUFBRixRQUF3QkwsR0FBRyxDQUFDTSxJQUFsQztBQUNBLFVBQU1DLFlBQVksR0FBRyxNQUFNQyxzQkFBYUMsT0FBYixDQUFxQjtBQUM5Q0MsTUFBQUEsS0FBSyxFQUFFO0FBQ0wsU0FBQ0Msd0JBQWlCQyxJQUFsQixHQUF5QlA7QUFEcEIsT0FEdUM7QUFJOUNRLE1BQUFBLE9BQU8sRUFBRSxDQUFDQyxjQUFEO0FBSnFDLEtBQXJCLENBQTNCO0FBT0EsVUFBTUMsZUFBZSxHQUFHLE1BQU1DLCtCQUFzQlAsT0FBdEIsQ0FBOEI7QUFDMURDLE1BQUFBLEtBQUssRUFBRTtBQUNMLFNBQUNPLHFCQUFZQyxZQUFiLEdBQTRCYixpQkFEdkI7QUFFTCxTQUFDWSxxQkFBWUUsT0FBYixHQUF1QmhCO0FBRmxCO0FBRG1ELEtBQTlCLENBQTlCO0FBTUFGLElBQUFBLEdBQUcsQ0FBQ21CLElBQUosbUJBQ0tiLFlBQVksQ0FBQ2MsR0FBYixFQURMO0FBRUVOLE1BQUFBLGVBQWUsRUFBRSxDQUFDLENBQUNBO0FBRnJCO0FBSUQsR0FwQkQsQ0FvQkUsT0FBT08sR0FBUCxFQUFZO0FBQ1pwQixJQUFBQSxJQUFJLENBQUNvQixHQUFELENBQUo7QUFDRDtBQUNGLENBeEJEOztlQTBCZXZCLCtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBPcmdhbml6YXRpb24gZnJvbSAnbW9kZWxzL09yZ2FuaXphdGlvbic7XG5pbXBvcnQgeyBPcmdhbml6YXRpb25LZXlzIH0gZnJvbSAnbW9kZWxzL09yZ2FuaXphdGlvbi90eXBlcyc7XG5pbXBvcnQgT3JnYW5pemF0aW9uc0NvbnRhY3RzIGZyb20gJ21vZGVscy9Pcmdhbml6YXRpb25zQ29udGFjdHMnO1xuaW1wb3J0IGZvcmVpZ25LZXlzIGZyb20gJ2RhdGFiYXNlL2ZvcmVpZ25LZXlzJztcbmltcG9ydCBMaW5rcyBmcm9tICdtb2RlbHMvTGlua3MnO1xuXG5jb25zdCBnZXRPcmdhbml6YXRpb25EZXRhaWxDb250cm9sbGVyOiBSZXF1ZXN0SGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdXVpZCB9ID0gcmVzLmxvY2FscztcbiAgICBjb25zdCB7IG9yZ2FuaXphdGlvbl91dWlkIH0gPSByZXEuYm9keTtcbiAgICBjb25zdCBvcmdhbml6YXRpb24gPSBhd2FpdCBPcmdhbml6YXRpb24uZmluZE9uZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbT3JnYW5pemF0aW9uS2V5cy5VVUlEXTogb3JnYW5pemF0aW9uX3V1aWRcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiBbTGlua3NdXG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250YWN0SXNNZW1iZXIgPSBhd2FpdCBPcmdhbml6YXRpb25zQ29udGFjdHMuZmluZE9uZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbZm9yZWlnbktleXMuT1JHQU5JWkFUSU9OXTogb3JnYW5pemF0aW9uX3V1aWQsXG4gICAgICAgIFtmb3JlaWduS2V5cy5DT05UQUNUXTogdXVpZFxuICAgICAgfVxuICAgIH0pO1xuICAgIHJlcy5qc29uKHtcbiAgICAgIC4uLm9yZ2FuaXphdGlvbi5nZXQoKSxcbiAgICAgIGNvbnRhY3RJc01lbWJlcjogISFjb250YWN0SXNNZW1iZXJcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRPcmdhbml6YXRpb25EZXRhaWxDb250cm9sbGVyO1xuIl19