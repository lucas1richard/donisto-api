"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Organization = _interopRequireDefault(require("../../../../../models/Organization"));

var _types = require("../../../../../models/Organization/types");

var _Contact = _interopRequireDefault(require("../../../../../models/Contact"));

var _ContactKeys = _interopRequireDefault(require("../../../../../models/Contact/types/ContactKeys"));

var _OrganizationsContacts = _interopRequireDefault(require("../../../../../models/OrganizationsContacts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createOrganizationController = async (req, res, next) => {
  try {
    const organization = await _Organization.default.create({
      [_types.OrganizationKeys.NAME]: req.body.name,
      [_types.OrganizationKeys.CITY]: req.body.city,
      [_types.OrganizationKeys.STATE]: req.body.state,
      [_types.OrganizationKeys.ZIP]: req.body.zip,
      [_types.OrganizationKeys.MISSION]: req.body.mission
    });
    const contact = await _Contact.default.findOne({
      where: {
        [_ContactKeys.default.UUID]: res.locals.uuid
      }
    });
    organization.addContact(contact, {
      through: _OrganizationsContacts.default
    });
    res.json({
      organization
    });
  } catch (err) {
    next(err);
  }
};

var _default = createOrganizationController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvb3JnYW5pemF0aW9uL2NvbnRyb2xsZXJzL2NyZWF0ZU9yZ2FuaXphdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6WyJjcmVhdGVPcmdhbml6YXRpb25Db250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsIm9yZ2FuaXphdGlvbiIsIk9yZ2FuaXphdGlvbiIsImNyZWF0ZSIsIk9yZ2FuaXphdGlvbktleXMiLCJOQU1FIiwiYm9keSIsIm5hbWUiLCJDSVRZIiwiY2l0eSIsIlNUQVRFIiwic3RhdGUiLCJaSVAiLCJ6aXAiLCJNSVNTSU9OIiwibWlzc2lvbiIsImNvbnRhY3QiLCJDb250YWN0cyIsImZpbmRPbmUiLCJ3aGVyZSIsIkNvbnRhY3RLZXlzIiwiVVVJRCIsImxvY2FscyIsInV1aWQiLCJhZGRDb250YWN0IiwidGhyb3VnaCIsIk9yZ2FuaXphdGlvbnNDb250YWN0cyIsImpzb24iLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1BLDRCQUE0QyxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsS0FBMEI7QUFDN0UsTUFBSTtBQUNGLFVBQU1DLFlBQVksR0FBRyxNQUFNQyxzQkFBYUMsTUFBYixDQUFvQjtBQUM3QyxPQUFDQyx3QkFBaUJDLElBQWxCLEdBQXlCUCxHQUFHLENBQUNRLElBQUosQ0FBU0MsSUFEVztBQUU3QyxPQUFDSCx3QkFBaUJJLElBQWxCLEdBQXlCVixHQUFHLENBQUNRLElBQUosQ0FBU0csSUFGVztBQUc3QyxPQUFDTCx3QkFBaUJNLEtBQWxCLEdBQTBCWixHQUFHLENBQUNRLElBQUosQ0FBU0ssS0FIVTtBQUk3QyxPQUFDUCx3QkFBaUJRLEdBQWxCLEdBQXdCZCxHQUFHLENBQUNRLElBQUosQ0FBU08sR0FKWTtBQUs3QyxPQUFDVCx3QkFBaUJVLE9BQWxCLEdBQTRCaEIsR0FBRyxDQUFDUSxJQUFKLENBQVNTO0FBTFEsS0FBcEIsQ0FBM0I7QUFRQSxVQUFNQyxPQUFPLEdBQUcsTUFBTUMsaUJBQVNDLE9BQVQsQ0FBaUI7QUFDckNDLE1BQUFBLEtBQUssRUFBRTtBQUNMLFNBQUNDLHFCQUFZQyxJQUFiLEdBQW9CdEIsR0FBRyxDQUFDdUIsTUFBSixDQUFXQztBQUQxQjtBQUQ4QixLQUFqQixDQUF0QjtBQU1BdEIsSUFBQUEsWUFBWSxDQUFDdUIsVUFBYixDQUF3QlIsT0FBeEIsRUFBaUM7QUFBRVMsTUFBQUEsT0FBTyxFQUFFQztBQUFYLEtBQWpDO0FBRUEzQixJQUFBQSxHQUFHLENBQUM0QixJQUFKLENBQVM7QUFDUDFCLE1BQUFBO0FBRE8sS0FBVDtBQUdELEdBcEJELENBb0JFLE9BQU8yQixHQUFQLEVBQVk7QUFDWjVCLElBQUFBLElBQUksQ0FBQzRCLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0F4QkQ7O2VBMEJlL0IsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IE9yZ2FuaXphdGlvbiBmcm9tICdtb2RlbHMvT3JnYW5pemF0aW9uJztcbmltcG9ydCB7IE9yZ2FuaXphdGlvbktleXMgfSBmcm9tICdtb2RlbHMvT3JnYW5pemF0aW9uL3R5cGVzJztcbmltcG9ydCBDb250YWN0cyBmcm9tICdtb2RlbHMvQ29udGFjdCc7XG5pbXBvcnQgQ29udGFjdEtleXMgZnJvbSAnbW9kZWxzL0NvbnRhY3QvdHlwZXMvQ29udGFjdEtleXMnO1xuaW1wb3J0IE9yZ2FuaXphdGlvbnNDb250YWN0cyBmcm9tICdtb2RlbHMvT3JnYW5pemF0aW9uc0NvbnRhY3RzJztcblxuY29uc3QgY3JlYXRlT3JnYW5pemF0aW9uQ29udHJvbGxlcjogUmVxdWVzdEhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBvcmdhbml6YXRpb24gPSBhd2FpdCBPcmdhbml6YXRpb24uY3JlYXRlKHtcbiAgICAgIFtPcmdhbml6YXRpb25LZXlzLk5BTUVdOiByZXEuYm9keS5uYW1lLFxuICAgICAgW09yZ2FuaXphdGlvbktleXMuQ0lUWV06IHJlcS5ib2R5LmNpdHksXG4gICAgICBbT3JnYW5pemF0aW9uS2V5cy5TVEFURV06IHJlcS5ib2R5LnN0YXRlLFxuICAgICAgW09yZ2FuaXphdGlvbktleXMuWklQXTogcmVxLmJvZHkuemlwLFxuICAgICAgW09yZ2FuaXphdGlvbktleXMuTUlTU0lPTl06IHJlcS5ib2R5Lm1pc3Npb24sXG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250YWN0ID0gYXdhaXQgQ29udGFjdHMuZmluZE9uZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbQ29udGFjdEtleXMuVVVJRF06IHJlcy5sb2NhbHMudXVpZFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgb3JnYW5pemF0aW9uLmFkZENvbnRhY3QoY29udGFjdCwgeyB0aHJvdWdoOiBPcmdhbml6YXRpb25zQ29udGFjdHMgfSk7XG5cbiAgICByZXMuanNvbih7XG4gICAgICBvcmdhbml6YXRpb25cbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVPcmdhbml6YXRpb25Db250cm9sbGVyO1xuIl19