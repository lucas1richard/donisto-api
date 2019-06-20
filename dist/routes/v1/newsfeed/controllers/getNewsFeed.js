"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../../../models");

var _sequelize = require("sequelize");

var _conn = _interopRequireDefault(require("../../../../database/conn"));

var _foreignKeys = _interopRequireDefault(require("../../../../database/foreignKeys"));

var _keys = require("../../../../models/keys");

var _ContactOrgFollows = require("../../../../models/ContactOrgFollows");

var _OrganizationsContacts = require("../../../../models/OrganizationsContacts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getNewsFeed = async (userUuid, limit = 10) => {
  const newsFeedItems = await _models.NewsFeed.findAll({
    order: [['id', 'DESC']],
    include: [{
      model: _models.Organizations,
      where: {
        [_sequelize.Op.or]: [{
          [_keys.OrganizationKeys.UUID]: {
            [_sequelize.Op.in]: _conn.default.literal(`(
              select
                "${_foreignKeys.default.ORGANIZATION}"
              from "${_ContactOrgFollows.contactOrgFollows}"
              where "${_foreignKeys.default.CONTACT}" = '${userUuid}'
                and "${_keys.ContactOrgFollowsKeys.REJECTED}" = false
            )`)
          }
        }, {
          [_keys.OrganizationKeys.UUID]: {
            [_sequelize.Op.in]: _conn.default.literal(`(
              select
                "${_foreignKeys.default.ORGANIZATION}"
              from "${_OrganizationsContacts.organizationsContacts}"
              where "${_foreignKeys.default.CONTACT}" = '${userUuid}'
            )`)
          }
        }]
      }
    }],
    // include: [{
    //   model: Organizations,
    //   required: true,
    //   include: [{
    //     model: Contacts,
    //     as: ModelAliases.FollowContacts,
    //     required: true,
    //     attributes: [],
    //     through: {
    //       where: {
    //         [foreignKeys.CONTACT]: userUuid,
    //         [ContactOrgFollowsKeys.REJECTED]: false,
    //       },
    //     },
    //   }, {
    //     model: Contacts,
    //     // required: true,
    //     attributes: [],
    //     through: {
    //       where: {
    //         [foreignKeys.CONTACT]: userUuid,
    //       },
    //     },
    //   }]
    // }],
    limit
  });
  return newsFeedItems;
};

const getNewsFeedController = async (req, res, next) => {
  try {
    const newsFeedItems = await getNewsFeed(req.user.uuid);
    res.json(newsFeedItems);
  } catch (err) {
    next(err);
  }
};

var _default = getNewsFeedController; // select name, rejected, email from contactorgfollows join organizations on (contactorgfollows.organization_uuid = organizations.uuid) join contacts on (contactorgfollows.contact_uuid = contacts.uuid);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvbmV3c2ZlZWQvY29udHJvbGxlcnMvZ2V0TmV3c0ZlZWQudHMiXSwibmFtZXMiOlsiZ2V0TmV3c0ZlZWQiLCJ1c2VyVXVpZCIsImxpbWl0IiwibmV3c0ZlZWRJdGVtcyIsIk5ld3NGZWVkIiwiZmluZEFsbCIsIm9yZGVyIiwiaW5jbHVkZSIsIm1vZGVsIiwiT3JnYW5pemF0aW9ucyIsIndoZXJlIiwiT3AiLCJvciIsIk9yZ2FuaXphdGlvbktleXMiLCJVVUlEIiwiaW4iLCJzZXF1ZWxpemUiLCJsaXRlcmFsIiwiZm9yZWlnbktleXMiLCJPUkdBTklaQVRJT04iLCJjb250YWN0T3JnRm9sbG93cyIsIkNPTlRBQ1QiLCJDb250YWN0T3JnRm9sbG93c0tleXMiLCJSRUpFQ1RFRCIsIm9yZ2FuaXphdGlvbnNDb250YWN0cyIsImdldE5ld3NGZWVkQ29udHJvbGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJ1c2VyIiwidXVpZCIsImpzb24iLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1BLFdBQVcsR0FBRyxPQUFPQyxRQUFQLEVBQXlCQyxLQUFLLEdBQUcsRUFBakMsS0FBd0M7QUFDMUQsUUFBTUMsYUFBYSxHQUFHLE1BQU1DLGlCQUFTQyxPQUFULENBQWlCO0FBQzNDQyxJQUFBQSxLQUFLLEVBQUUsQ0FDTCxDQUFDLElBQUQsRUFBTyxNQUFQLENBREssQ0FEb0M7QUFJM0NDLElBQUFBLE9BQU8sRUFBRSxDQUFDO0FBQ1JDLE1BQUFBLEtBQUssRUFBRUMscUJBREM7QUFFUkMsTUFBQUEsS0FBSyxFQUFFO0FBQ0wsU0FBQ0MsY0FBR0MsRUFBSixHQUFTLENBQUM7QUFDUixXQUFDQyx1QkFBaUJDLElBQWxCLEdBQXlCO0FBQ3ZCLGFBQUNILGNBQUdJLEVBQUosR0FBU0MsY0FBVUMsT0FBVixDQUFtQjs7bUJBRXJCQyxxQkFBWUMsWUFBYTtzQkFDdEJDLG9DQUFrQjt1QkFDakJGLHFCQUFZRyxPQUFRLFFBQU9wQixRQUFTO3VCQUNwQ3FCLDRCQUFzQkMsUUFBUztjQUxqQztBQURjO0FBRGpCLFNBQUQsRUFVTjtBQUNELFdBQUNWLHVCQUFpQkMsSUFBbEIsR0FBeUI7QUFDdkIsYUFBQ0gsY0FBR0ksRUFBSixHQUFTQyxjQUFVQyxPQUFWLENBQW1COzttQkFFckJDLHFCQUFZQyxZQUFhO3NCQUN0QkssNENBQXNCO3VCQUNyQk4scUJBQVlHLE9BQVEsUUFBT3BCLFFBQVM7Y0FKdEM7QUFEYztBQUR4QixTQVZNO0FBREo7QUFGQyxLQUFELENBSmtDO0FBNkIzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxJQUFBQTtBQXREMkMsR0FBakIsQ0FBNUI7QUF3REEsU0FBT0MsYUFBUDtBQUNELENBMUREOztBQTREQSxNQUFNc0IscUJBQXFDLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixLQUEwQjtBQUN0RSxNQUFJO0FBQ0YsVUFBTXpCLGFBQWEsR0FBRyxNQUFNSCxXQUFXLENBQUMwQixHQUFHLENBQUNHLElBQUosQ0FBU0MsSUFBVixDQUF2QztBQUNBSCxJQUFBQSxHQUFHLENBQUNJLElBQUosQ0FBUzVCLGFBQVQ7QUFDRCxHQUhELENBR0UsT0FBTzZCLEdBQVAsRUFBWTtBQUNaSixJQUFBQSxJQUFJLENBQUNJLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0FQRDs7ZUFTZVAscUIsRUFFZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBOZXdzRmVlZCwgT3JnYW5pemF0aW9ucywgQ29udGFjdHMgfSBmcm9tICdtb2RlbHMnO1xuaW1wb3J0IHsgT3AgfSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IHNlcXVlbGl6ZSBmcm9tICdkYXRhYmFzZS9jb25uJztcbmltcG9ydCBNb2RlbEFsaWFzZXMgZnJvbSAnbW9kZWxzL2FsaWFzZXMnO1xuaW1wb3J0IGZvcmVpZ25LZXlzIGZyb20gJ2RhdGFiYXNlL2ZvcmVpZ25LZXlzJztcbmltcG9ydCB7IENvbnRhY3RPcmdGb2xsb3dzS2V5cywgT3JnYW5pemF0aW9uS2V5cyB9IGZyb20gJ21vZGVscy9rZXlzJztcbmltcG9ydCB7IGNvbnRhY3RPcmdGb2xsb3dzIH0gZnJvbSAnbW9kZWxzL0NvbnRhY3RPcmdGb2xsb3dzJztcbmltcG9ydCB7IG9yZ2FuaXphdGlvbnNDb250YWN0cyB9IGZyb20gJ21vZGVscy9Pcmdhbml6YXRpb25zQ29udGFjdHMnO1xuXG5jb25zdCBnZXROZXdzRmVlZCA9IGFzeW5jICh1c2VyVXVpZDogc3RyaW5nLCBsaW1pdCA9IDEwKSA9PiB7XG4gIGNvbnN0IG5ld3NGZWVkSXRlbXMgPSBhd2FpdCBOZXdzRmVlZC5maW5kQWxsKHtcbiAgICBvcmRlcjogW1xuICAgICAgWydpZCcsICdERVNDJ11cbiAgICBdLFxuICAgIGluY2x1ZGU6IFt7XG4gICAgICBtb2RlbDogT3JnYW5pemF0aW9ucyxcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIFtPcC5vcl06IFt7XG4gICAgICAgICAgW09yZ2FuaXphdGlvbktleXMuVVVJRF06IHtcbiAgICAgICAgICAgIFtPcC5pbl06IHNlcXVlbGl6ZS5saXRlcmFsKGAoXG4gICAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgICAgIFwiJHtmb3JlaWduS2V5cy5PUkdBTklaQVRJT059XCJcbiAgICAgICAgICAgICAgZnJvbSBcIiR7Y29udGFjdE9yZ0ZvbGxvd3N9XCJcbiAgICAgICAgICAgICAgd2hlcmUgXCIke2ZvcmVpZ25LZXlzLkNPTlRBQ1R9XCIgPSAnJHt1c2VyVXVpZH0nXG4gICAgICAgICAgICAgICAgYW5kIFwiJHtDb250YWN0T3JnRm9sbG93c0tleXMuUkVKRUNURUR9XCIgPSBmYWxzZVxuICAgICAgICAgICAgKWApXG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgW09yZ2FuaXphdGlvbktleXMuVVVJRF06IHtcbiAgICAgICAgICAgIFtPcC5pbl06IHNlcXVlbGl6ZS5saXRlcmFsKGAoXG4gICAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgICAgIFwiJHtmb3JlaWduS2V5cy5PUkdBTklaQVRJT059XCJcbiAgICAgICAgICAgICAgZnJvbSBcIiR7b3JnYW5pemF0aW9uc0NvbnRhY3RzfVwiXG4gICAgICAgICAgICAgIHdoZXJlIFwiJHtmb3JlaWduS2V5cy5DT05UQUNUfVwiID0gJyR7dXNlclV1aWR9J1xuICAgICAgICAgICAgKWApXG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfVxuICAgIH1dLFxuICAgIC8vIGluY2x1ZGU6IFt7XG4gICAgLy8gICBtb2RlbDogT3JnYW5pemF0aW9ucyxcbiAgICAvLyAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIC8vICAgaW5jbHVkZTogW3tcbiAgICAvLyAgICAgbW9kZWw6IENvbnRhY3RzLFxuICAgIC8vICAgICBhczogTW9kZWxBbGlhc2VzLkZvbGxvd0NvbnRhY3RzLFxuICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAvLyAgICAgYXR0cmlidXRlczogW10sXG4gICAgLy8gICAgIHRocm91Z2g6IHtcbiAgICAvLyAgICAgICB3aGVyZToge1xuICAgIC8vICAgICAgICAgW2ZvcmVpZ25LZXlzLkNPTlRBQ1RdOiB1c2VyVXVpZCxcbiAgICAvLyAgICAgICAgIFtDb250YWN0T3JnRm9sbG93c0tleXMuUkVKRUNURURdOiBmYWxzZSxcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgfSwge1xuICAgIC8vICAgICBtb2RlbDogQ29udGFjdHMsXG4gICAgLy8gICAgIC8vIHJlcXVpcmVkOiB0cnVlLFxuICAgIC8vICAgICBhdHRyaWJ1dGVzOiBbXSxcbiAgICAvLyAgICAgdGhyb3VnaDoge1xuICAgIC8vICAgICAgIHdoZXJlOiB7XG4gICAgLy8gICAgICAgICBbZm9yZWlnbktleXMuQ09OVEFDVF06IHVzZXJVdWlkLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICB9XVxuICAgIC8vIH1dLFxuICAgIGxpbWl0LFxuICB9KTtcbiAgcmV0dXJuIG5ld3NGZWVkSXRlbXM7XG59O1xuXG5jb25zdCBnZXROZXdzRmVlZENvbnRyb2xsZXI6IFJlcXVlc3RIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgbmV3c0ZlZWRJdGVtcyA9IGF3YWl0IGdldE5ld3NGZWVkKHJlcS51c2VyLnV1aWQpO1xuICAgIHJlcy5qc29uKG5ld3NGZWVkSXRlbXMpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldE5ld3NGZWVkQ29udHJvbGxlcjtcblxuLy8gc2VsZWN0IG5hbWUsIHJlamVjdGVkLCBlbWFpbCBmcm9tIGNvbnRhY3Rvcmdmb2xsb3dzIGpvaW4gb3JnYW5pemF0aW9ucyBvbiAoY29udGFjdG9yZ2ZvbGxvd3Mub3JnYW5pemF0aW9uX3V1aWQgPSBvcmdhbml6YXRpb25zLnV1aWQpIGpvaW4gY29udGFjdHMgb24gKGNvbnRhY3Rvcmdmb2xsb3dzLmNvbnRhY3RfdXVpZCA9IGNvbnRhY3RzLnV1aWQpO1xuXG4iXX0=