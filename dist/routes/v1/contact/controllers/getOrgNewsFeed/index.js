"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _foreignKeys = _interopRequireDefault(require("../../../../../database/foreignKeys"));

var _models = require("../../../../../models");

var _sequelize = require("sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getOrgNewsFeedController = async (req, res, next) => {
  try {
    // get organizations associated to the contact
    const organizationUuids = await _models.OrganizationsContacts.findAll({
      where: {
        [_foreignKeys.default.CONTACT]: req.user
      }
    }); // get news feeds associated to all organizations

    const newsFeeds = await _models.NewsFeed.findAll({
      where: {
        [_foreignKeys.default.ORGANIZATION]: {
          [_sequelize.Op.in]: organizationUuids.map(orguuid => {
            return orguuid[_foreignKeys.default.ORGANIZATION];
          })
        }
      }
    });
    res.json(newsFeeds);
  } catch (err) {
    next(err);
  }
};

var _default = getOrgNewsFeedController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY29udGFjdC9jb250cm9sbGVycy9nZXRPcmdOZXdzRmVlZC9pbmRleC50cyJdLCJuYW1lcyI6WyJnZXRPcmdOZXdzRmVlZENvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJuZXh0Iiwib3JnYW5pemF0aW9uVXVpZHMiLCJPcmdhbml6YXRpb25zQ29udGFjdHMiLCJmaW5kQWxsIiwid2hlcmUiLCJmb3JlaWduS2V5cyIsIkNPTlRBQ1QiLCJ1c2VyIiwibmV3c0ZlZWRzIiwiTmV3c0ZlZWQiLCJPUkdBTklaQVRJT04iLCJPcCIsImluIiwibWFwIiwib3JndXVpZCIsImpzb24iLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUlBLE1BQU1BLHdCQUF3QyxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsS0FBMEI7QUFDekUsTUFBSTtBQUNGO0FBQ0EsVUFBTUMsaUJBQWlCLEdBQUcsTUFBTUMsOEJBQXNCQyxPQUF0QixDQUE4QjtBQUM1REMsTUFBQUEsS0FBSyxFQUFFO0FBQ0wsU0FBQ0MscUJBQVlDLE9BQWIsR0FBdUJSLEdBQUcsQ0FBQ1M7QUFEdEI7QUFEcUQsS0FBOUIsQ0FBaEMsQ0FGRSxDQVFGOztBQUNBLFVBQU1DLFNBQVMsR0FBRyxNQUFNQyxpQkFBU04sT0FBVCxDQUFpQjtBQUN2Q0MsTUFBQUEsS0FBSyxFQUFFO0FBQ0wsU0FBQ0MscUJBQVlLLFlBQWIsR0FBNEI7QUFDMUIsV0FBQ0MsY0FBR0MsRUFBSixHQUFTWCxpQkFBaUIsQ0FBQ1ksR0FBbEIsQ0FBdUJDLE9BQUQsSUFBOEM7QUFDM0UsbUJBQU9BLE9BQU8sQ0FBQ1QscUJBQVlLLFlBQWIsQ0FBZDtBQUNELFdBRlE7QUFEaUI7QUFEdkI7QUFEZ0MsS0FBakIsQ0FBeEI7QUFVQVgsSUFBQUEsR0FBRyxDQUFDZ0IsSUFBSixDQUFTUCxTQUFUO0FBQ0QsR0FwQkQsQ0FvQkUsT0FBT1EsR0FBUCxFQUFZO0FBQ1poQixJQUFBQSxJQUFJLENBQUNnQixHQUFELENBQUo7QUFDRDtBQUNGLENBeEJEOztlQTBCZW5CLHdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZvcmVpZ25LZXlzIGZyb20gJ2RhdGFiYXNlL2ZvcmVpZ25LZXlzJztcbmltcG9ydCB7IE9yZ2FuaXphdGlvbnNDb250YWN0cywgTmV3c0ZlZWQgfSBmcm9tICdtb2RlbHMnO1xuaW1wb3J0IHsgT3AgfSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IE9yZ2FuaXphdGlvbnNDb250YWN0c0F0dHJpYnV0ZXMgZnJvbSAnbW9kZWxzL09yZ2FuaXphdGlvbnNDb250YWN0cy90eXBlcy9BdHRyaWJ1dGVzJztcbmltcG9ydCB7IFJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5cbmNvbnN0IGdldE9yZ05ld3NGZWVkQ29udHJvbGxlcjogUmVxdWVzdEhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBnZXQgb3JnYW5pemF0aW9ucyBhc3NvY2lhdGVkIHRvIHRoZSBjb250YWN0XG4gICAgY29uc3Qgb3JnYW5pemF0aW9uVXVpZHMgPSBhd2FpdCBPcmdhbml6YXRpb25zQ29udGFjdHMuZmluZEFsbCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbZm9yZWlnbktleXMuQ09OVEFDVF06IHJlcS51c2VyLFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gZ2V0IG5ld3MgZmVlZHMgYXNzb2NpYXRlZCB0byBhbGwgb3JnYW5pemF0aW9uc1xuICAgIGNvbnN0IG5ld3NGZWVkcyA9IGF3YWl0IE5ld3NGZWVkLmZpbmRBbGwoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgW2ZvcmVpZ25LZXlzLk9SR0FOSVpBVElPTl06IHtcbiAgICAgICAgICBbT3AuaW5dOiBvcmdhbml6YXRpb25VdWlkcy5tYXAoKG9yZ3V1aWQ6IE9yZ2FuaXphdGlvbnNDb250YWN0c0F0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvcmd1dWlkW2ZvcmVpZ25LZXlzLk9SR0FOSVpBVElPTl07XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVzLmpzb24obmV3c0ZlZWRzKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRPcmdOZXdzRmVlZENvbnRyb2xsZXI7XG4iXX0=