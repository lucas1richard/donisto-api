"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../../../../models");

var _keys = require("../../../../../models/keys");

var _ContactOrgFollows = _interopRequireDefault(require("../../../../../models/ContactOrgFollows"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const followOrganizationController = async (req, res, next) => {
  try {
    const organization = await _models.Organizations.findOne({
      where: {
        [_keys.OrganizationKeys.UUID]: req.body.org_uuid
      }
    });
    const contact = await _models.Contacts.findOne({
      where: {
        [_keys.ContactKeys.UUID]: req.user
      }
    });
    await organization.addContact(contact, {
      through: _ContactOrgFollows.default
    });
    res.json(organization);
  } catch (err) {
    next(err);
  }
};

var _default = followOrganizationController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvb3JnYW5pemF0aW9uL2NvbnRyb2xsZXJzL2ZvbGxvd09yZ2FuaXphdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6WyJmb2xsb3dPcmdhbml6YXRpb25Db250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsIm9yZ2FuaXphdGlvbiIsIk9yZ2FuaXphdGlvbnMiLCJmaW5kT25lIiwid2hlcmUiLCJPcmdhbml6YXRpb25LZXlzIiwiVVVJRCIsImJvZHkiLCJvcmdfdXVpZCIsImNvbnRhY3QiLCJDb250YWN0cyIsIkNvbnRhY3RLZXlzIiwidXNlciIsImFkZENvbnRhY3QiLCJ0aHJvdWdoIiwiQ29udGFjdE9yZ0ZvbGxvd3MiLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSw0QkFBNEMsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQzdFLE1BQUk7QUFDRixVQUFNQyxZQUFZLEdBQUcsTUFBTUMsc0JBQWNDLE9BQWQsQ0FBc0I7QUFDL0NDLE1BQUFBLEtBQUssRUFBRTtBQUNMLFNBQUNDLHVCQUFpQkMsSUFBbEIsR0FBeUJSLEdBQUcsQ0FBQ1MsSUFBSixDQUFTQztBQUQ3QjtBQUR3QyxLQUF0QixDQUEzQjtBQU1BLFVBQU1DLE9BQU8sR0FBRyxNQUFNQyxpQkFBU1AsT0FBVCxDQUFpQjtBQUNyQ0MsTUFBQUEsS0FBSyxFQUFFO0FBQ0wsU0FBQ08sa0JBQVlMLElBQWIsR0FBb0JSLEdBQUcsQ0FBQ2M7QUFEbkI7QUFEOEIsS0FBakIsQ0FBdEI7QUFNQSxVQUFNWCxZQUFZLENBQUNZLFVBQWIsQ0FBd0JKLE9BQXhCLEVBQWlDO0FBQUVLLE1BQUFBLE9BQU8sRUFBRUM7QUFBWCxLQUFqQyxDQUFOO0FBRUFoQixJQUFBQSxHQUFHLENBQUNpQixJQUFKLENBQVNmLFlBQVQ7QUFDRCxHQWhCRCxDQWdCRSxPQUFPZ0IsR0FBUCxFQUFZO0FBQ1pqQixJQUFBQSxJQUFJLENBQUNpQixHQUFELENBQUo7QUFDRDtBQUNGLENBcEJEOztlQXNCZXBCLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IE9yZ2FuaXphdGlvbnMsIENvbnRhY3RzLCBPcmdhbml6YXRpb25zQ29udGFjdHMgfSBmcm9tICdtb2RlbHMnO1xuaW1wb3J0IHsgT3JnYW5pemF0aW9uS2V5cywgQ29udGFjdEtleXMgfSBmcm9tICdtb2RlbHMva2V5cyc7XG5pbXBvcnQgQ29udGFjdE9yZ0ZvbGxvd3MgZnJvbSAnbW9kZWxzL0NvbnRhY3RPcmdGb2xsb3dzJztcblxuY29uc3QgZm9sbG93T3JnYW5pemF0aW9uQ29udHJvbGxlcjogUmVxdWVzdEhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBvcmdhbml6YXRpb24gPSBhd2FpdCBPcmdhbml6YXRpb25zLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgW09yZ2FuaXphdGlvbktleXMuVVVJRF06IHJlcS5ib2R5Lm9yZ191dWlkLFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGFjdCA9IGF3YWl0IENvbnRhY3RzLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgW0NvbnRhY3RLZXlzLlVVSURdOiByZXEudXNlclxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYXdhaXQgb3JnYW5pemF0aW9uLmFkZENvbnRhY3QoY29udGFjdCwgeyB0aHJvdWdoOiBDb250YWN0T3JnRm9sbG93cyB9KTtcblxuICAgIHJlcy5qc29uKG9yZ2FuaXphdGlvbik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9sbG93T3JnYW5pemF0aW9uQ29udHJvbGxlcjtcbiJdfQ==