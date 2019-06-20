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

var _default = getNewsFeedController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvbmV3c2ZlZWQvY29udHJvbGxlcnMvZ2V0TmV3c0ZlZWQudHMiXSwibmFtZXMiOlsiZ2V0TmV3c0ZlZWQiLCJ1c2VyVXVpZCIsImxpbWl0IiwibmV3c0ZlZWRJdGVtcyIsIk5ld3NGZWVkIiwiZmluZEFsbCIsIm9yZGVyIiwiaW5jbHVkZSIsIm1vZGVsIiwiT3JnYW5pemF0aW9ucyIsIndoZXJlIiwiT3AiLCJvciIsIk9yZ2FuaXphdGlvbktleXMiLCJVVUlEIiwiaW4iLCJzZXF1ZWxpemUiLCJsaXRlcmFsIiwiZm9yZWlnbktleXMiLCJPUkdBTklaQVRJT04iLCJjb250YWN0T3JnRm9sbG93cyIsIkNPTlRBQ1QiLCJDb250YWN0T3JnRm9sbG93c0tleXMiLCJSRUpFQ1RFRCIsIm9yZ2FuaXphdGlvbnNDb250YWN0cyIsImdldE5ld3NGZWVkQ29udHJvbGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJ1c2VyIiwidXVpZCIsImpzb24iLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1BLFdBQVcsR0FBRyxPQUFPQyxRQUFQLEVBQXlCQyxLQUFLLEdBQUcsRUFBakMsS0FBd0M7QUFDMUQsUUFBTUMsYUFBYSxHQUFHLE1BQU1DLGlCQUFTQyxPQUFULENBQWlCO0FBQzNDQyxJQUFBQSxLQUFLLEVBQUUsQ0FDTCxDQUFDLElBQUQsRUFBTyxNQUFQLENBREssQ0FEb0M7QUFJM0NDLElBQUFBLE9BQU8sRUFBRSxDQUFDO0FBQ1JDLE1BQUFBLEtBQUssRUFBRUMscUJBREM7QUFFUkMsTUFBQUEsS0FBSyxFQUFFO0FBQ0wsU0FBQ0MsY0FBR0MsRUFBSixHQUFTLENBQUM7QUFDUixXQUFDQyx1QkFBaUJDLElBQWxCLEdBQXlCO0FBQ3ZCLGFBQUNILGNBQUdJLEVBQUosR0FBU0MsY0FBVUMsT0FBVixDQUFtQjs7bUJBRXJCQyxxQkFBWUMsWUFBYTtzQkFDdEJDLG9DQUFrQjt1QkFDakJGLHFCQUFZRyxPQUFRLFFBQU9wQixRQUFTO3VCQUNwQ3FCLDRCQUFzQkMsUUFBUztjQUxqQztBQURjO0FBRGpCLFNBQUQsRUFVTjtBQUNELFdBQUNWLHVCQUFpQkMsSUFBbEIsR0FBeUI7QUFDdkIsYUFBQ0gsY0FBR0ksRUFBSixHQUFTQyxjQUFVQyxPQUFWLENBQW1COzttQkFFckJDLHFCQUFZQyxZQUFhO3NCQUN0QkssNENBQXNCO3VCQUNyQk4scUJBQVlHLE9BQVEsUUFBT3BCLFFBQVM7Y0FKdEM7QUFEYztBQUR4QixTQVZNO0FBREo7QUFGQyxLQUFELENBSmtDO0FBNkIzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxJQUFBQTtBQXREMkMsR0FBakIsQ0FBNUI7QUF3REEsU0FBT0MsYUFBUDtBQUNELENBMUREOztBQTREQSxNQUFNc0IscUJBQXFDLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixLQUEwQjtBQUN0RSxNQUFJO0FBQ0YsVUFBTXpCLGFBQWEsR0FBRyxNQUFNSCxXQUFXLENBQUMwQixHQUFHLENBQUNHLElBQUosQ0FBU0MsSUFBVixDQUF2QztBQUNBSCxJQUFBQSxHQUFHLENBQUNJLElBQUosQ0FBUzVCLGFBQVQ7QUFDRCxHQUhELENBR0UsT0FBTzZCLEdBQVAsRUFBWTtBQUNaSixJQUFBQSxJQUFJLENBQUNJLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0FQRDs7ZUFTZVAscUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgTmV3c0ZlZWQsIE9yZ2FuaXphdGlvbnMsIENvbnRhY3RzIH0gZnJvbSAnbW9kZWxzJztcbmltcG9ydCB7IE9wIH0gZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCBzZXF1ZWxpemUgZnJvbSAnZGF0YWJhc2UvY29ubic7XG5pbXBvcnQgTW9kZWxBbGlhc2VzIGZyb20gJ21vZGVscy9hbGlhc2VzJztcbmltcG9ydCBmb3JlaWduS2V5cyBmcm9tICdkYXRhYmFzZS9mb3JlaWduS2V5cyc7XG5pbXBvcnQgeyBDb250YWN0T3JnRm9sbG93c0tleXMsIE9yZ2FuaXphdGlvbktleXMgfSBmcm9tICdtb2RlbHMva2V5cyc7XG5pbXBvcnQgeyBjb250YWN0T3JnRm9sbG93cyB9IGZyb20gJ21vZGVscy9Db250YWN0T3JnRm9sbG93cyc7XG5pbXBvcnQgeyBvcmdhbml6YXRpb25zQ29udGFjdHMgfSBmcm9tICdtb2RlbHMvT3JnYW5pemF0aW9uc0NvbnRhY3RzJztcblxuY29uc3QgZ2V0TmV3c0ZlZWQgPSBhc3luYyAodXNlclV1aWQ6IHN0cmluZywgbGltaXQgPSAxMCkgPT4ge1xuICBjb25zdCBuZXdzRmVlZEl0ZW1zID0gYXdhaXQgTmV3c0ZlZWQuZmluZEFsbCh7XG4gICAgb3JkZXI6IFtcbiAgICAgIFsnaWQnLCAnREVTQyddXG4gICAgXSxcbiAgICBpbmNsdWRlOiBbe1xuICAgICAgbW9kZWw6IE9yZ2FuaXphdGlvbnMsXG4gICAgICB3aGVyZToge1xuICAgICAgICBbT3Aub3JdOiBbe1xuICAgICAgICAgIFtPcmdhbml6YXRpb25LZXlzLlVVSURdOiB7XG4gICAgICAgICAgICBbT3AuaW5dOiBzZXF1ZWxpemUubGl0ZXJhbChgKFxuICAgICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgICBcIiR7Zm9yZWlnbktleXMuT1JHQU5JWkFUSU9OfVwiXG4gICAgICAgICAgICAgIGZyb20gXCIke2NvbnRhY3RPcmdGb2xsb3dzfVwiXG4gICAgICAgICAgICAgIHdoZXJlIFwiJHtmb3JlaWduS2V5cy5DT05UQUNUfVwiID0gJyR7dXNlclV1aWR9J1xuICAgICAgICAgICAgICAgIGFuZCBcIiR7Q29udGFjdE9yZ0ZvbGxvd3NLZXlzLlJFSkVDVEVEfVwiID0gZmFsc2VcbiAgICAgICAgICAgIClgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIFtPcmdhbml6YXRpb25LZXlzLlVVSURdOiB7XG4gICAgICAgICAgICBbT3AuaW5dOiBzZXF1ZWxpemUubGl0ZXJhbChgKFxuICAgICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgICBcIiR7Zm9yZWlnbktleXMuT1JHQU5JWkFUSU9OfVwiXG4gICAgICAgICAgICAgIGZyb20gXCIke29yZ2FuaXphdGlvbnNDb250YWN0c31cIlxuICAgICAgICAgICAgICB3aGVyZSBcIiR7Zm9yZWlnbktleXMuQ09OVEFDVH1cIiA9ICcke3VzZXJVdWlkfSdcbiAgICAgICAgICAgIClgKVxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH1cbiAgICB9XSxcbiAgICAvLyBpbmNsdWRlOiBbe1xuICAgIC8vICAgbW9kZWw6IE9yZ2FuaXphdGlvbnMsXG4gICAgLy8gICByZXF1aXJlZDogdHJ1ZSxcbiAgICAvLyAgIGluY2x1ZGU6IFt7XG4gICAgLy8gICAgIG1vZGVsOiBDb250YWN0cyxcbiAgICAvLyAgICAgYXM6IE1vZGVsQWxpYXNlcy5Gb2xsb3dDb250YWN0cyxcbiAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgLy8gICAgIGF0dHJpYnV0ZXM6IFtdLFxuICAgIC8vICAgICB0aHJvdWdoOiB7XG4gICAgLy8gICAgICAgd2hlcmU6IHtcbiAgICAvLyAgICAgICAgIFtmb3JlaWduS2V5cy5DT05UQUNUXTogdXNlclV1aWQsXG4gICAgLy8gICAgICAgICBbQ29udGFjdE9yZ0ZvbGxvd3NLZXlzLlJFSkVDVEVEXTogZmFsc2UsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgIH0sIHtcbiAgICAvLyAgICAgbW9kZWw6IENvbnRhY3RzLFxuICAgIC8vICAgICAvLyByZXF1aXJlZDogdHJ1ZSxcbiAgICAvLyAgICAgYXR0cmlidXRlczogW10sXG4gICAgLy8gICAgIHRocm91Z2g6IHtcbiAgICAvLyAgICAgICB3aGVyZToge1xuICAgIC8vICAgICAgICAgW2ZvcmVpZ25LZXlzLkNPTlRBQ1RdOiB1c2VyVXVpZCxcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgfV1cbiAgICAvLyB9XSxcbiAgICBsaW1pdCxcbiAgfSk7XG4gIHJldHVybiBuZXdzRmVlZEl0ZW1zO1xufTtcblxuY29uc3QgZ2V0TmV3c0ZlZWRDb250cm9sbGVyOiBSZXF1ZXN0SGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IG5ld3NGZWVkSXRlbXMgPSBhd2FpdCBnZXROZXdzRmVlZChyZXEudXNlci51dWlkKTtcbiAgICByZXMuanNvbihuZXdzRmVlZEl0ZW1zKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXROZXdzRmVlZENvbnRyb2xsZXI7XG4iXX0=