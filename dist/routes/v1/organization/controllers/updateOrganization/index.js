"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Organization = _interopRequireDefault(require("../../../../../models/Organization"));

var _OrganizationKeys = _interopRequireDefault(require("../../../../../models/Organization/types/OrganizationKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const updateOrganizationController = async (req, res, next) => {
  try {
    const {
      city,
      state,
      zip,
      mission,
      uuid
    } = req.body;
    const updateObj = {};

    if (city) {
      updateObj[_OrganizationKeys.default.CITY] = city;
    }

    if (state) {
      updateObj[_OrganizationKeys.default.STATE] = state;
    }

    if (zip) {
      updateObj[_OrganizationKeys.default.ZIP] = zip;
    }

    if (mission) {
      updateObj[_OrganizationKeys.default.MISSION] = mission;
    }

    const organization = await _Organization.default.findOne({
      where: {
        [_OrganizationKeys.default.UUID]: uuid
      }
    });
    await organization.update(updateObj);
    const updatedOrganization = await _Organization.default.findOne({
      where: {
        [_OrganizationKeys.default.UUID]: uuid
      }
    });
    res.json(updatedOrganization);
  } catch (err) {
    next(err);
  }
};

var _default = updateOrganizationController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvb3JnYW5pemF0aW9uL2NvbnRyb2xsZXJzL3VwZGF0ZU9yZ2FuaXphdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6WyJ1cGRhdGVPcmdhbml6YXRpb25Db250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImNpdHkiLCJzdGF0ZSIsInppcCIsIm1pc3Npb24iLCJ1dWlkIiwiYm9keSIsInVwZGF0ZU9iaiIsIk9yZ2FuaXphdGlvbktleXMiLCJDSVRZIiwiU1RBVEUiLCJaSVAiLCJNSVNTSU9OIiwib3JnYW5pemF0aW9uIiwiT3JnYW5pemF0aW9uIiwiZmluZE9uZSIsIndoZXJlIiwiVVVJRCIsInVwZGF0ZSIsInVwZGF0ZWRPcmdhbml6YXRpb24iLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSw0QkFBNEMsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQzdFLE1BQUk7QUFDRixVQUFNO0FBQUVDLE1BQUFBLElBQUY7QUFBUUMsTUFBQUEsS0FBUjtBQUFlQyxNQUFBQSxHQUFmO0FBQW9CQyxNQUFBQSxPQUFwQjtBQUE2QkMsTUFBQUE7QUFBN0IsUUFBc0NQLEdBQUcsQ0FBQ1EsSUFBaEQ7QUFDQSxVQUFNQyxTQUFrQyxHQUFHLEVBQTNDOztBQUNBLFFBQUlOLElBQUosRUFBVTtBQUNSTSxNQUFBQSxTQUFTLENBQUNDLDBCQUFpQkMsSUFBbEIsQ0FBVCxHQUFtQ1IsSUFBbkM7QUFDRDs7QUFDRCxRQUFJQyxLQUFKLEVBQVc7QUFDVEssTUFBQUEsU0FBUyxDQUFDQywwQkFBaUJFLEtBQWxCLENBQVQsR0FBb0NSLEtBQXBDO0FBQ0Q7O0FBQ0QsUUFBSUMsR0FBSixFQUFTO0FBQ1BJLE1BQUFBLFNBQVMsQ0FBQ0MsMEJBQWlCRyxHQUFsQixDQUFULEdBQWtDUixHQUFsQztBQUNEOztBQUNELFFBQUlDLE9BQUosRUFBYTtBQUNYRyxNQUFBQSxTQUFTLENBQUNDLDBCQUFpQkksT0FBbEIsQ0FBVCxHQUFzQ1IsT0FBdEM7QUFDRDs7QUFDRCxVQUFNUyxZQUFZLEdBQUcsTUFBTUMsc0JBQWFDLE9BQWIsQ0FBcUI7QUFDOUNDLE1BQUFBLEtBQUssRUFBRTtBQUNMLFNBQUNSLDBCQUFpQlMsSUFBbEIsR0FBeUJaO0FBRHBCO0FBRHVDLEtBQXJCLENBQTNCO0FBTUEsVUFBTVEsWUFBWSxDQUFDSyxNQUFiLENBQW9CWCxTQUFwQixDQUFOO0FBRUEsVUFBTVksbUJBQW1CLEdBQUcsTUFBTUwsc0JBQWFDLE9BQWIsQ0FBcUI7QUFDckRDLE1BQUFBLEtBQUssRUFBRTtBQUNMLFNBQUNSLDBCQUFpQlMsSUFBbEIsR0FBeUJaO0FBRHBCO0FBRDhDLEtBQXJCLENBQWxDO0FBTUFOLElBQUFBLEdBQUcsQ0FBQ3FCLElBQUosQ0FBU0QsbUJBQVQ7QUFDRCxHQTlCRCxDQThCRSxPQUFPRSxHQUFQLEVBQVk7QUFDWnJCLElBQUFBLElBQUksQ0FBQ3FCLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0FsQ0Q7O2VBb0NleEIsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IE9yZ2FuaXphdGlvbiBmcm9tICdtb2RlbHMvT3JnYW5pemF0aW9uJztcbmltcG9ydCBPcmdhbml6YXRpb25LZXlzIGZyb20gJ21vZGVscy9Pcmdhbml6YXRpb24vdHlwZXMvT3JnYW5pemF0aW9uS2V5cyc7XG5cbmNvbnN0IHVwZGF0ZU9yZ2FuaXphdGlvbkNvbnRyb2xsZXI6IFJlcXVlc3RIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBjaXR5LCBzdGF0ZSwgemlwLCBtaXNzaW9uLCB1dWlkIH0gPSByZXEuYm9keTtcbiAgICBjb25zdCB1cGRhdGVPYmo6IHsgW3g6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gICAgaWYgKGNpdHkpIHtcbiAgICAgIHVwZGF0ZU9ialtPcmdhbml6YXRpb25LZXlzLkNJVFldID0gY2l0eTtcbiAgICB9XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICB1cGRhdGVPYmpbT3JnYW5pemF0aW9uS2V5cy5TVEFURV0gPSBzdGF0ZTtcbiAgICB9XG4gICAgaWYgKHppcCkge1xuICAgICAgdXBkYXRlT2JqW09yZ2FuaXphdGlvbktleXMuWklQXSA9IHppcDtcbiAgICB9XG4gICAgaWYgKG1pc3Npb24pIHtcbiAgICAgIHVwZGF0ZU9ialtPcmdhbml6YXRpb25LZXlzLk1JU1NJT05dID0gbWlzc2lvbjtcbiAgICB9XG4gICAgY29uc3Qgb3JnYW5pemF0aW9uID0gYXdhaXQgT3JnYW5pemF0aW9uLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgW09yZ2FuaXphdGlvbktleXMuVVVJRF06IHV1aWRcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGF3YWl0IG9yZ2FuaXphdGlvbi51cGRhdGUodXBkYXRlT2JqKTtcblxuICAgIGNvbnN0IHVwZGF0ZWRPcmdhbml6YXRpb24gPSBhd2FpdCBPcmdhbml6YXRpb24uZmluZE9uZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbT3JnYW5pemF0aW9uS2V5cy5VVUlEXTogdXVpZFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVzLmpzb24odXBkYXRlZE9yZ2FuaXphdGlvbik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlT3JnYW5pemF0aW9uQ29udHJvbGxlcjtcbiJdfQ==