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
        [_foreignKeys.default.CONTACT]: req.user.uuid
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY29udGFjdC9jb250cm9sbGVycy9nZXRPcmdOZXdzRmVlZC9pbmRleC50cyJdLCJuYW1lcyI6WyJnZXRPcmdOZXdzRmVlZENvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJuZXh0Iiwib3JnYW5pemF0aW9uVXVpZHMiLCJPcmdhbml6YXRpb25zQ29udGFjdHMiLCJmaW5kQWxsIiwid2hlcmUiLCJmb3JlaWduS2V5cyIsIkNPTlRBQ1QiLCJ1c2VyIiwidXVpZCIsIm5ld3NGZWVkcyIsIk5ld3NGZWVkIiwiT1JHQU5JWkFUSU9OIiwiT3AiLCJpbiIsIm1hcCIsIm9yZ3V1aWQiLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFJQSxNQUFNQSx3QkFBd0MsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQ3pFLE1BQUk7QUFDRjtBQUNBLFVBQU1DLGlCQUFpQixHQUFHLE1BQU1DLDhCQUFzQkMsT0FBdEIsQ0FBOEI7QUFDNURDLE1BQUFBLEtBQUssRUFBRTtBQUNMLFNBQUNDLHFCQUFZQyxPQUFiLEdBQXVCUixHQUFHLENBQUNTLElBQUosQ0FBU0M7QUFEM0I7QUFEcUQsS0FBOUIsQ0FBaEMsQ0FGRSxDQVFGOztBQUNBLFVBQU1DLFNBQVMsR0FBRyxNQUFNQyxpQkFBU1AsT0FBVCxDQUFpQjtBQUN2Q0MsTUFBQUEsS0FBSyxFQUFFO0FBQ0wsU0FBQ0MscUJBQVlNLFlBQWIsR0FBNEI7QUFDMUIsV0FBQ0MsY0FBR0MsRUFBSixHQUFTWixpQkFBaUIsQ0FBQ2EsR0FBbEIsQ0FBdUJDLE9BQUQsSUFBOEM7QUFDM0UsbUJBQU9BLE9BQU8sQ0FBQ1YscUJBQVlNLFlBQWIsQ0FBZDtBQUNELFdBRlE7QUFEaUI7QUFEdkI7QUFEZ0MsS0FBakIsQ0FBeEI7QUFVQVosSUFBQUEsR0FBRyxDQUFDaUIsSUFBSixDQUFTUCxTQUFUO0FBQ0QsR0FwQkQsQ0FvQkUsT0FBT1EsR0FBUCxFQUFZO0FBQ1pqQixJQUFBQSxJQUFJLENBQUNpQixHQUFELENBQUo7QUFDRDtBQUNGLENBeEJEOztlQTBCZXBCLHdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZvcmVpZ25LZXlzIGZyb20gJ2RhdGFiYXNlL2ZvcmVpZ25LZXlzJztcbmltcG9ydCB7IE9yZ2FuaXphdGlvbnNDb250YWN0cywgTmV3c0ZlZWQgfSBmcm9tICdtb2RlbHMnO1xuaW1wb3J0IHsgT3AgfSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IE9yZ2FuaXphdGlvbnNDb250YWN0c0F0dHJpYnV0ZXMgZnJvbSAnbW9kZWxzL09yZ2FuaXphdGlvbnNDb250YWN0cy90eXBlcy9BdHRyaWJ1dGVzJztcbmltcG9ydCB7IFJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5cbmNvbnN0IGdldE9yZ05ld3NGZWVkQ29udHJvbGxlcjogUmVxdWVzdEhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBnZXQgb3JnYW5pemF0aW9ucyBhc3NvY2lhdGVkIHRvIHRoZSBjb250YWN0XG4gICAgY29uc3Qgb3JnYW5pemF0aW9uVXVpZHMgPSBhd2FpdCBPcmdhbml6YXRpb25zQ29udGFjdHMuZmluZEFsbCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbZm9yZWlnbktleXMuQ09OVEFDVF06IHJlcS51c2VyLnV1aWQsXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBnZXQgbmV3cyBmZWVkcyBhc3NvY2lhdGVkIHRvIGFsbCBvcmdhbml6YXRpb25zXG4gICAgY29uc3QgbmV3c0ZlZWRzID0gYXdhaXQgTmV3c0ZlZWQuZmluZEFsbCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbZm9yZWlnbktleXMuT1JHQU5JWkFUSU9OXToge1xuICAgICAgICAgIFtPcC5pbl06IG9yZ2FuaXphdGlvblV1aWRzLm1hcCgob3JndXVpZDogT3JnYW5pemF0aW9uc0NvbnRhY3RzQXR0cmlidXRlcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9yZ3V1aWRbZm9yZWlnbktleXMuT1JHQU5JWkFUSU9OXTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXMuanNvbihuZXdzRmVlZHMpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldE9yZ05ld3NGZWVkQ29udHJvbGxlcjtcbiJdfQ==