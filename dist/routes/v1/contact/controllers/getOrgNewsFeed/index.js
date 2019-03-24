"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _foreignKeys = _interopRequireDefault(require("../../../../../database/foreignKeys"));

var _OrganizationsContacts = _interopRequireDefault(require("../../../../../models/OrganizationsContacts"));

var _sequelize = require("sequelize");

var _NewsFeed = _interopRequireDefault(require("../../../../../models/NewsFeed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getOrgNewsFeedController(req, res, next) {
  try {
    // get organizations associated to the contact
    const organizationUuids = await _OrganizationsContacts.default.findAll({
      where: {
        [_foreignKeys.default.CONTACT]: res.locals.uuid
      }
    }); // get news feeds associated to all organizations

    const newsFeeds = await _NewsFeed.default.findAll({
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
}

var _default = getOrgNewsFeedController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY29udGFjdC9jb250cm9sbGVycy9nZXRPcmdOZXdzRmVlZC9pbmRleC50cyJdLCJuYW1lcyI6WyJnZXRPcmdOZXdzRmVlZENvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJuZXh0Iiwib3JnYW5pemF0aW9uVXVpZHMiLCJPcmdhbml6YXRpb25zQ29udGFjdHMiLCJmaW5kQWxsIiwid2hlcmUiLCJmb3JlaWduS2V5cyIsIkNPTlRBQ1QiLCJsb2NhbHMiLCJ1dWlkIiwibmV3c0ZlZWRzIiwiTmV3c0ZlZWQiLCJPUkdBTklaQVRJT04iLCJPcCIsImluIiwibWFwIiwib3JndXVpZCIsImpzb24iLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFHQTs7OztBQUVBLGVBQWVBLHdCQUFmLENBQXdDQyxHQUF4QyxFQUFzREMsR0FBdEQsRUFBcUVDLElBQXJFLEVBQXlGO0FBQ3ZGLE1BQUk7QUFDRjtBQUNBLFVBQU1DLGlCQUFpQixHQUFHLE1BQU1DLCtCQUFzQkMsT0FBdEIsQ0FBOEI7QUFDNURDLE1BQUFBLEtBQUssRUFBRTtBQUNMLFNBQUNDLHFCQUFZQyxPQUFiLEdBQXVCUCxHQUFHLENBQUNRLE1BQUosQ0FBV0M7QUFEN0I7QUFEcUQsS0FBOUIsQ0FBaEMsQ0FGRSxDQVFGOztBQUNBLFVBQU1DLFNBQVMsR0FBRyxNQUFNQyxrQkFBU1AsT0FBVCxDQUFpQjtBQUN2Q0MsTUFBQUEsS0FBSyxFQUFFO0FBQ0wsU0FBQ0MscUJBQVlNLFlBQWIsR0FBNEI7QUFDMUIsV0FBQ0MsY0FBR0MsRUFBSixHQUFTWixpQkFBaUIsQ0FBQ2EsR0FBbEIsQ0FBdUJDLE9BQUQsSUFBOEM7QUFDM0UsbUJBQU9BLE9BQU8sQ0FBQ1YscUJBQVlNLFlBQWIsQ0FBZDtBQUNELFdBRlE7QUFEaUI7QUFEdkI7QUFEZ0MsS0FBakIsQ0FBeEI7QUFVQVosSUFBQUEsR0FBRyxDQUFDaUIsSUFBSixDQUFTUCxTQUFUO0FBQ0QsR0FwQkQsQ0FvQkUsT0FBT1EsR0FBUCxFQUFZO0FBQ1pqQixJQUFBQSxJQUFJLENBQUNpQixHQUFELENBQUo7QUFDRDtBQUNGOztlQUVjcEIsd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZm9yZWlnbktleXMgZnJvbSAnZGF0YWJhc2UvZm9yZWlnbktleXMnO1xuaW1wb3J0IE9yZ2FuaXphdGlvbnNDb250YWN0cyBmcm9tICdtb2RlbHMvT3JnYW5pemF0aW9uc0NvbnRhY3RzJztcbmltcG9ydCB7IE9wIH0gZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCBPcmdhbml6YXRpb25zQ29udGFjdHNBdHRyaWJ1dGVzIGZyb20gJ21vZGVscy9Pcmdhbml6YXRpb25zQ29udGFjdHMvdHlwZXMvQXR0cmlidXRlcyc7XG5pbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlLCBSZXF1ZXN0IH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgTmV3c0ZlZWQgZnJvbSAnbW9kZWxzL05ld3NGZWVkJztcblxuYXN5bmMgZnVuY3Rpb24gZ2V0T3JnTmV3c0ZlZWRDb250cm9sbGVyKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSB7XG4gIHRyeSB7XG4gICAgLy8gZ2V0IG9yZ2FuaXphdGlvbnMgYXNzb2NpYXRlZCB0byB0aGUgY29udGFjdFxuICAgIGNvbnN0IG9yZ2FuaXphdGlvblV1aWRzID0gYXdhaXQgT3JnYW5pemF0aW9uc0NvbnRhY3RzLmZpbmRBbGwoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgW2ZvcmVpZ25LZXlzLkNPTlRBQ1RdOiByZXMubG9jYWxzLnV1aWRcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGdldCBuZXdzIGZlZWRzIGFzc29jaWF0ZWQgdG8gYWxsIG9yZ2FuaXphdGlvbnNcbiAgICBjb25zdCBuZXdzRmVlZHMgPSBhd2FpdCBOZXdzRmVlZC5maW5kQWxsKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIFtmb3JlaWduS2V5cy5PUkdBTklaQVRJT05dOiB7XG4gICAgICAgICAgW09wLmluXTogb3JnYW5pemF0aW9uVXVpZHMubWFwKChvcmd1dWlkOiBPcmdhbml6YXRpb25zQ29udGFjdHNBdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb3JndXVpZFtmb3JlaWduS2V5cy5PUkdBTklaQVRJT05dO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlcy5qc29uKG5ld3NGZWVkcyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG5leHQoZXJyKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRPcmdOZXdzRmVlZENvbnRyb2xsZXI7XG4iXX0=