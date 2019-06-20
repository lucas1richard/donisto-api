"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../../../../models");

var _keys = require("../../../../../models/keys");

var _foreignKeys = _interopRequireDefault(require("../../../../../database/foreignKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getOrganizationDetailController = async (req, res, next) => {
  try {
    const {
      uuid
    } = res.locals;
    const {
      organization_uuid
    } = req.body;
    const organization = await _models.Organizations.findOne({
      where: {
        [_keys.OrganizationKeys.UUID]: organization_uuid
      },
      include: [_models.Links, {
        model: _models.Causes,
        // attributes: [
        //   sequelize.fn('sum', sequelize.col('causes->donations.uuid')),
        //   'totalDonationAmount'
        // ],
        include: [{
          model: _models.Donations // attributes: [
          //   [sequelize.fn('sum', sequelize.col(DonationKeys.AMOUNT)), 'totalAmount']
          // ],
          // include: [{
          //   model: Contacts,
          //   attributes: [
          //     ContactKeys.UUID,
          //     ContactKeys.FIRST_NAME,
          //     ContactKeys.LAST_NAME,
          //     ContactKeys.EMAIL,
          //   ]
          // }]

        }]
      }] // group: [
      //   'organizations.uuid',
      //   'links.uuid',
      //   'causes.uuid',
      //   'causes->donations.uuid',
      //   // 'causes->donations->contact.uuid'
      // ],

    });
    const contactIsMember = await _models.OrganizationsContacts.findOne({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvb3JnYW5pemF0aW9uL2NvbnRyb2xsZXJzL2dldE9yZ2FuaXphdGlvbkRldGFpbC9pbmRleC50cyJdLCJuYW1lcyI6WyJnZXRPcmdhbml6YXRpb25EZXRhaWxDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsInV1aWQiLCJsb2NhbHMiLCJvcmdhbml6YXRpb25fdXVpZCIsImJvZHkiLCJvcmdhbml6YXRpb24iLCJPcmdhbml6YXRpb25zIiwiZmluZE9uZSIsIndoZXJlIiwiT3JnYW5pemF0aW9uS2V5cyIsIlVVSUQiLCJpbmNsdWRlIiwiTGlua3MiLCJtb2RlbCIsIkNhdXNlcyIsIkRvbmF0aW9ucyIsImNvbnRhY3RJc01lbWJlciIsIk9yZ2FuaXphdGlvbnNDb250YWN0cyIsImZvcmVpZ25LZXlzIiwiT1JHQU5JWkFUSU9OIiwiQ09OVEFDVCIsImpzb24iLCJnZXQiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFHQSxNQUFNQSwrQkFBK0MsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQ2hGLE1BQUk7QUFDRixVQUFNO0FBQUVDLE1BQUFBO0FBQUYsUUFBV0YsR0FBRyxDQUFDRyxNQUFyQjtBQUNBLFVBQU07QUFBRUMsTUFBQUE7QUFBRixRQUF3QkwsR0FBRyxDQUFDTSxJQUFsQztBQUNBLFVBQU1DLFlBQVksR0FBRyxNQUFNQyxzQkFBY0MsT0FBZCxDQUFzQjtBQUMvQ0MsTUFBQUEsS0FBSyxFQUFFO0FBQ0wsU0FBQ0MsdUJBQWlCQyxJQUFsQixHQUF5QlA7QUFEcEIsT0FEd0M7QUFJL0NRLE1BQUFBLE9BQU8sRUFBRSxDQUNQQyxhQURPLEVBRVA7QUFDRUMsUUFBQUEsS0FBSyxFQUFFQyxjQURUO0FBRUU7QUFDQTtBQUNBO0FBQ0E7QUFDQUgsUUFBQUEsT0FBTyxFQUFFLENBQUM7QUFDUkUsVUFBQUEsS0FBSyxFQUFFRSxpQkFEQyxDQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFiUSxTQUFEO0FBTlgsT0FGTyxDQUpzQyxDQTZCL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBbkMrQyxLQUF0QixDQUEzQjtBQXNDQSxVQUFNQyxlQUFlLEdBQUcsTUFBTUMsOEJBQXNCVixPQUF0QixDQUE4QjtBQUMxREMsTUFBQUEsS0FBSyxFQUFFO0FBQ0wsU0FBQ1UscUJBQVlDLFlBQWIsR0FBNEJoQixpQkFEdkI7QUFFTCxTQUFDZSxxQkFBWUUsT0FBYixHQUF1Qm5CO0FBRmxCO0FBRG1ELEtBQTlCLENBQTlCO0FBT0FGLElBQUFBLEdBQUcsQ0FBQ3NCLElBQUosbUJBQ0toQixZQUFZLENBQUNpQixHQUFiLEVBREw7QUFFRU4sTUFBQUEsZUFBZSxFQUFFLENBQUMsQ0FBQ0E7QUFGckI7QUFJRCxHQXBERCxDQW9ERSxPQUFPTyxHQUFQLEVBQVk7QUFDWnZCLElBQUFBLElBQUksQ0FBQ3VCLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0F4REQ7O2VBMERlMUIsK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgT3JnYW5pemF0aW9ucywgT3JnYW5pemF0aW9uc0NvbnRhY3RzLCBEb25hdGlvbnMsIENvbnRhY3RzLCBDYXVzZXMsIExpbmtzIH0gZnJvbSAnbW9kZWxzJztcbmltcG9ydCB7IE9yZ2FuaXphdGlvbktleXMsIENvbnRhY3RLZXlzLCBEb25hdGlvbktleXMgfSBmcm9tICdtb2RlbHMva2V5cyc7XG5pbXBvcnQgZm9yZWlnbktleXMgZnJvbSAnZGF0YWJhc2UvZm9yZWlnbktleXMnO1xuaW1wb3J0IHNlcXVlbGl6ZSBmcm9tICdkYXRhYmFzZS9jb25uJztcblxuY29uc3QgZ2V0T3JnYW5pemF0aW9uRGV0YWlsQ29udHJvbGxlcjogUmVxdWVzdEhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHV1aWQgfSA9IHJlcy5sb2NhbHM7XG4gICAgY29uc3QgeyBvcmdhbml6YXRpb25fdXVpZCB9ID0gcmVxLmJvZHk7XG4gICAgY29uc3Qgb3JnYW5pemF0aW9uID0gYXdhaXQgT3JnYW5pemF0aW9ucy5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIFtPcmdhbml6YXRpb25LZXlzLlVVSURdOiBvcmdhbml6YXRpb25fdXVpZFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgTGlua3MsXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RlbDogQ2F1c2VzLFxuICAgICAgICAgIC8vIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICAvLyAgIHNlcXVlbGl6ZS5mbignc3VtJywgc2VxdWVsaXplLmNvbCgnY2F1c2VzLT5kb25hdGlvbnMudXVpZCcpKSxcbiAgICAgICAgICAvLyAgICd0b3RhbERvbmF0aW9uQW1vdW50J1xuICAgICAgICAgIC8vIF0sXG4gICAgICAgICAgaW5jbHVkZTogW3tcbiAgICAgICAgICAgIG1vZGVsOiBEb25hdGlvbnMsXG4gICAgICAgICAgICAvLyBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgICAvLyAgIFtzZXF1ZWxpemUuZm4oJ3N1bScsIHNlcXVlbGl6ZS5jb2woRG9uYXRpb25LZXlzLkFNT1VOVCkpLCAndG90YWxBbW91bnQnXVxuICAgICAgICAgICAgLy8gXSxcbiAgICAgICAgICAgIC8vIGluY2x1ZGU6IFt7XG4gICAgICAgICAgICAvLyAgIG1vZGVsOiBDb250YWN0cyxcbiAgICAgICAgICAgIC8vICAgYXR0cmlidXRlczogW1xuICAgICAgICAgICAgLy8gICAgIENvbnRhY3RLZXlzLlVVSUQsXG4gICAgICAgICAgICAvLyAgICAgQ29udGFjdEtleXMuRklSU1RfTkFNRSxcbiAgICAgICAgICAgIC8vICAgICBDb250YWN0S2V5cy5MQVNUX05BTUUsXG4gICAgICAgICAgICAvLyAgICAgQ29udGFjdEtleXMuRU1BSUwsXG4gICAgICAgICAgICAvLyAgIF1cbiAgICAgICAgICAgIC8vIH1dXG4gICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIC8vIGdyb3VwOiBbXG4gICAgICAvLyAgICdvcmdhbml6YXRpb25zLnV1aWQnLFxuICAgICAgLy8gICAnbGlua3MudXVpZCcsXG4gICAgICAvLyAgICdjYXVzZXMudXVpZCcsXG4gICAgICAvLyAgICdjYXVzZXMtPmRvbmF0aW9ucy51dWlkJyxcbiAgICAgIC8vICAgLy8gJ2NhdXNlcy0+ZG9uYXRpb25zLT5jb250YWN0LnV1aWQnXG4gICAgICAvLyBdLFxuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGFjdElzTWVtYmVyID0gYXdhaXQgT3JnYW5pemF0aW9uc0NvbnRhY3RzLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgW2ZvcmVpZ25LZXlzLk9SR0FOSVpBVElPTl06IG9yZ2FuaXphdGlvbl91dWlkLFxuICAgICAgICBbZm9yZWlnbktleXMuQ09OVEFDVF06IHV1aWRcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlcy5qc29uKHtcbiAgICAgIC4uLm9yZ2FuaXphdGlvbi5nZXQoKSxcbiAgICAgIGNvbnRhY3RJc01lbWJlcjogISFjb250YWN0SXNNZW1iZXIsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0T3JnYW5pemF0aW9uRGV0YWlsQ29udHJvbGxlcjtcbiJdfQ==