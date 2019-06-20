"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getDiscoverOrganizations = void 0;

var _models = require("../../../../../models");

var _sequelize = _interopRequireDefault(require("sequelize"));

var _conn = _interopRequireDefault(require("../../../../../database/conn"));

var _aliases = _interopRequireDefault(require("../../../../../models/aliases"));

var _foreignKeys = _interopRequireDefault(require("../../../../../config/database/foreignKeys"));

var _keys = require("../../../../../models/keys");

var _ContactOrgFollows = require("../../../../../models/ContactOrgFollows");

var _OrganizationsContacts = require("../../../../../models/OrganizationsContacts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Op
} = _sequelize.default;

const getDiscoverOrganizations = async (userUuid, limit = 10) => {
  // Filter out orgs that the user has already followed or rejected
  const alreadyFollowedOrRejectedFilter = {
    model: _models.Contacts,
    attributes: [],
    required: false,
    as: _aliases.default.FollowContacts,
    through: {
      where: {
        [_foreignKeys.default.CONTACT]: {
          [Op.not]: userUuid
        }
      }
    }
  }; // Filter out orgs that the user is a part-of

  const alreadyMemberFilter = {
    model: _models.Contacts,
    attributes: [],
    required: true,
    through: {
      where: {
        [_foreignKeys.default.CONTACT]: {
          [Op.not]: userUuid
        }
      }
    }
  };
  const organizations = await _models.Organizations.findAll({
    // include: [
    //   // alreadyFollowedOrRejectedFilter,
    //   alreadyMemberFilter
    // ],
    where: {
      [Op.and]: [{
        [_keys.OrganizationKeys.UUID]: {
          [Op.notIn]: _conn.default.literal(`(
            select
              "${_foreignKeys.default.ORGANIZATION}"
            from "${_ContactOrgFollows.contactOrgFollows}"
            where "${_foreignKeys.default.CONTACT}" = '${userUuid}'
          )`)
        }
      }, {
        [_keys.OrganizationKeys.UUID]: {
          [Op.notIn]: _conn.default.literal(`(
            select
              "${_foreignKeys.default.ORGANIZATION}"
            from "${_OrganizationsContacts.organizationsContacts}"
            where "${_foreignKeys.default.CONTACT}" = '${userUuid}'
          )`)
        }
      }]
    },
    limit
  });
  return organizations;
};

exports.getDiscoverOrganizations = getDiscoverOrganizations;

const getDiscoverOrganizationsController = async (req, res, next) => {
  try {
    const organizations = await getDiscoverOrganizations(req.user.uuid, 10);
    res.json(organizations);
  } catch (err) {
    next(err);
  }
};

var _default = getDiscoverOrganizationsController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvb3JnYW5pemF0aW9uL2NvbnRyb2xsZXJzL2dldERpc2NvdmVyT3JnYW5pemF0aW9ucy9pbmRleC50cyJdLCJuYW1lcyI6WyJPcCIsIlNlcXVlbGl6ZSIsImdldERpc2NvdmVyT3JnYW5pemF0aW9ucyIsInVzZXJVdWlkIiwibGltaXQiLCJhbHJlYWR5Rm9sbG93ZWRPclJlamVjdGVkRmlsdGVyIiwibW9kZWwiLCJDb250YWN0cyIsImF0dHJpYnV0ZXMiLCJyZXF1aXJlZCIsImFzIiwiTW9kZWxBbGlhc2VzIiwiRm9sbG93Q29udGFjdHMiLCJ0aHJvdWdoIiwid2hlcmUiLCJmb3JlaWduS2V5cyIsIkNPTlRBQ1QiLCJub3QiLCJhbHJlYWR5TWVtYmVyRmlsdGVyIiwib3JnYW5pemF0aW9ucyIsIk9yZ2FuaXphdGlvbnMiLCJmaW5kQWxsIiwiYW5kIiwiT3JnYW5pemF0aW9uS2V5cyIsIlVVSUQiLCJub3RJbiIsInNlcXVlbGl6ZSIsImxpdGVyYWwiLCJPUkdBTklaQVRJT04iLCJjb250YWN0T3JnRm9sbG93cyIsIm9yZ2FuaXphdGlvbnNDb250YWN0cyIsImdldERpc2NvdmVyT3JnYW5pemF0aW9uc0NvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwidXNlciIsInV1aWQiLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNO0FBQUVBLEVBQUFBO0FBQUYsSUFBU0Msa0JBQWY7O0FBRU8sTUFBTUMsd0JBQXdCLEdBQUcsT0FBT0MsUUFBUCxFQUF5QkMsS0FBYSxHQUFHLEVBQXpDLEtBQWdEO0FBQ3RGO0FBQ0EsUUFBTUMsK0JBQXNELEdBQUc7QUFDN0RDLElBQUFBLEtBQUssRUFBRUMsZ0JBRHNEO0FBRTdEQyxJQUFBQSxVQUFVLEVBQUUsRUFGaUQ7QUFHN0RDLElBQUFBLFFBQVEsRUFBRSxLQUhtRDtBQUk3REMsSUFBQUEsRUFBRSxFQUFFQyxpQkFBYUMsY0FKNEM7QUFLN0RDLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxLQUFLLEVBQUU7QUFDTCxTQUFDQyxxQkFBWUMsT0FBYixHQUF1QjtBQUNyQixXQUFDaEIsRUFBRSxDQUFDaUIsR0FBSixHQUFVZDtBQURXO0FBRGxCO0FBREE7QUFMb0QsR0FBL0QsQ0FGc0YsQ0FnQnRGOztBQUNBLFFBQU1lLG1CQUEwQyxHQUFHO0FBQ2pEWixJQUFBQSxLQUFLLEVBQUVDLGdCQUQwQztBQUVqREMsSUFBQUEsVUFBVSxFQUFFLEVBRnFDO0FBR2pEQyxJQUFBQSxRQUFRLEVBQUUsSUFIdUM7QUFJakRJLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxLQUFLLEVBQUU7QUFDTCxTQUFDQyxxQkFBWUMsT0FBYixHQUF1QjtBQUNyQixXQUFDaEIsRUFBRSxDQUFDaUIsR0FBSixHQUFVZDtBQURXO0FBRGxCO0FBREE7QUFKd0MsR0FBbkQ7QUFhQSxRQUFNZ0IsYUFBYSxHQUFHLE1BQU1DLHNCQUFjQyxPQUFkLENBQXNCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0FQLElBQUFBLEtBQUssRUFBRTtBQUNMLE9BQUNkLEVBQUUsQ0FBQ3NCLEdBQUosR0FBVSxDQUFDO0FBQ1QsU0FBQ0MsdUJBQWlCQyxJQUFsQixHQUF5QjtBQUN2QixXQUFDeEIsRUFBRSxDQUFDeUIsS0FBSixHQUFZQyxjQUFVQyxPQUFWLENBQW1COztpQkFFeEJaLHFCQUFZYSxZQUFhO29CQUN0QkMsb0NBQWtCO3FCQUNqQmQscUJBQVlDLE9BQVEsUUFBT2IsUUFBUztZQUpuQztBQURXO0FBRGhCLE9BQUQsRUFTTDtBQUNILFNBQUNvQix1QkFBaUJDLElBQWxCLEdBQXlCO0FBQ3ZCLFdBQUN4QixFQUFFLENBQUN5QixLQUFKLEdBQVlDLGNBQVVDLE9BQVYsQ0FBbUI7O2lCQUV4QloscUJBQVlhLFlBQWE7b0JBQ3RCRSw0Q0FBc0I7cUJBQ3JCZixxQkFBWUMsT0FBUSxRQUFPYixRQUFTO1lBSm5DO0FBRFc7QUFEdEIsT0FUSztBQURMLEtBTHlDO0FBMEJoREMsSUFBQUE7QUExQmdELEdBQXRCLENBQTVCO0FBNkJBLFNBQU9lLGFBQVA7QUFDRCxDQTVETTs7OztBQThEUCxNQUFNWSxrQ0FBa0QsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQ25GLE1BQUk7QUFDRixVQUFNZixhQUFhLEdBQUcsTUFBTWpCLHdCQUF3QixDQUFDOEIsR0FBRyxDQUFDRyxJQUFKLENBQVNDLElBQVYsRUFBZ0IsRUFBaEIsQ0FBcEQ7QUFFQUgsSUFBQUEsR0FBRyxDQUFDSSxJQUFKLENBQVNsQixhQUFUO0FBQ0QsR0FKRCxDQUlFLE9BQU9tQixHQUFQLEVBQVk7QUFDWkosSUFBQUEsSUFBSSxDQUFDSSxHQUFELENBQUo7QUFDRDtBQUNGLENBUkQ7O2VBVWVQLGtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IE9yZ2FuaXphdGlvbnMsIENvbnRhY3RzIH0gZnJvbSAnbW9kZWxzJztcbmltcG9ydCBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCBzZXF1ZWxpemUgZnJvbSAnZGF0YWJhc2UvY29ubic7XG5pbXBvcnQgTW9kZWxBbGlhc2VzIGZyb20gJ21vZGVscy9hbGlhc2VzJztcbmltcG9ydCBmb3JlaWduS2V5cyBmcm9tICdjb25maWcvZGF0YWJhc2UvZm9yZWlnbktleXMnO1xuaW1wb3J0IHsgT3JnYW5pemF0aW9uS2V5cyB9IGZyb20gJ21vZGVscy9rZXlzJztcbmltcG9ydCB7IGNvbnRhY3RPcmdGb2xsb3dzIH0gZnJvbSAnbW9kZWxzL0NvbnRhY3RPcmdGb2xsb3dzJztcbmltcG9ydCB7IG9yZ2FuaXphdGlvbnNDb250YWN0cyB9IGZyb20gJ21vZGVscy9Pcmdhbml6YXRpb25zQ29udGFjdHMnO1xuXG5jb25zdCB7IE9wIH0gPSBTZXF1ZWxpemU7XG5cbmV4cG9ydCBjb25zdCBnZXREaXNjb3Zlck9yZ2FuaXphdGlvbnMgPSBhc3luYyAodXNlclV1aWQ6IHN0cmluZywgbGltaXQ6IG51bWJlciA9IDEwKSA9PiB7XG4gIC8vIEZpbHRlciBvdXQgb3JncyB0aGF0IHRoZSB1c2VyIGhhcyBhbHJlYWR5IGZvbGxvd2VkIG9yIHJlamVjdGVkXG4gIGNvbnN0IGFscmVhZHlGb2xsb3dlZE9yUmVqZWN0ZWRGaWx0ZXI6IFNlcXVlbGl6ZS5JbmNsdWRlYWJsZSA9IHtcbiAgICBtb2RlbDogQ29udGFjdHMsXG4gICAgYXR0cmlidXRlczogW10sXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGFzOiBNb2RlbEFsaWFzZXMuRm9sbG93Q29udGFjdHMsXG4gICAgdGhyb3VnaDoge1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgW2ZvcmVpZ25LZXlzLkNPTlRBQ1RdOiB7XG4gICAgICAgICAgW09wLm5vdF06IHVzZXJVdWlkLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfTtcblxuICAvLyBGaWx0ZXIgb3V0IG9yZ3MgdGhhdCB0aGUgdXNlciBpcyBhIHBhcnQtb2ZcbiAgY29uc3QgYWxyZWFkeU1lbWJlckZpbHRlcjogU2VxdWVsaXplLkluY2x1ZGVhYmxlID0ge1xuICAgIG1vZGVsOiBDb250YWN0cyxcbiAgICBhdHRyaWJ1dGVzOiBbXSxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB0aHJvdWdoOiB7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbZm9yZWlnbktleXMuQ09OVEFDVF06IHtcbiAgICAgICAgICBbT3Aubm90XTogdXNlclV1aWQsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IG9yZ2FuaXphdGlvbnMgPSBhd2FpdCBPcmdhbml6YXRpb25zLmZpbmRBbGwoe1xuICAgIC8vIGluY2x1ZGU6IFtcbiAgICAvLyAgIC8vIGFscmVhZHlGb2xsb3dlZE9yUmVqZWN0ZWRGaWx0ZXIsXG4gICAgLy8gICBhbHJlYWR5TWVtYmVyRmlsdGVyXG4gICAgLy8gXSxcbiAgICB3aGVyZToge1xuICAgICAgW09wLmFuZF06IFt7XG4gICAgICAgIFtPcmdhbml6YXRpb25LZXlzLlVVSURdOiB7XG4gICAgICAgICAgW09wLm5vdEluXTogc2VxdWVsaXplLmxpdGVyYWwoYChcbiAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgICBcIiR7Zm9yZWlnbktleXMuT1JHQU5JWkFUSU9OfVwiXG4gICAgICAgICAgICBmcm9tIFwiJHtjb250YWN0T3JnRm9sbG93c31cIlxuICAgICAgICAgICAgd2hlcmUgXCIke2ZvcmVpZ25LZXlzLkNPTlRBQ1R9XCIgPSAnJHt1c2VyVXVpZH0nXG4gICAgICAgICAgKWApXG4gICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICBbT3JnYW5pemF0aW9uS2V5cy5VVUlEXToge1xuICAgICAgICAgIFtPcC5ub3RJbl06IHNlcXVlbGl6ZS5saXRlcmFsKGAoXG4gICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgXCIke2ZvcmVpZ25LZXlzLk9SR0FOSVpBVElPTn1cIlxuICAgICAgICAgICAgZnJvbSBcIiR7b3JnYW5pemF0aW9uc0NvbnRhY3RzfVwiXG4gICAgICAgICAgICB3aGVyZSBcIiR7Zm9yZWlnbktleXMuQ09OVEFDVH1cIiA9ICcke3VzZXJVdWlkfSdcbiAgICAgICAgICApYClcbiAgICAgICAgfSxcbiAgICAgIH1dLFxuICAgIH0sXG4gICAgbGltaXQsXG4gIH0pO1xuXG4gIHJldHVybiBvcmdhbml6YXRpb25zO1xufTtcblxuY29uc3QgZ2V0RGlzY292ZXJPcmdhbml6YXRpb25zQ29udHJvbGxlcjogUmVxdWVzdEhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBvcmdhbml6YXRpb25zID0gYXdhaXQgZ2V0RGlzY292ZXJPcmdhbml6YXRpb25zKHJlcS51c2VyLnV1aWQsIDEwKTtcblxuICAgIHJlcy5qc29uKG9yZ2FuaXphdGlvbnMpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERpc2NvdmVyT3JnYW5pemF0aW9uc0NvbnRyb2xsZXI7Il19