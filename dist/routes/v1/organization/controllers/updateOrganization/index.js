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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvb3JnYW5pemF0aW9uL2NvbnRyb2xsZXJzL3VwZGF0ZU9yZ2FuaXphdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6WyJ1cGRhdGVPcmdhbml6YXRpb25Db250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImNpdHkiLCJzdGF0ZSIsInppcCIsIm1pc3Npb24iLCJ1dWlkIiwiYm9keSIsInVwZGF0ZU9iaiIsIk9yZ2FuaXphdGlvbktleXMiLCJDSVRZIiwiU1RBVEUiLCJaSVAiLCJNSVNTSU9OIiwib3JnYW5pemF0aW9uIiwiT3JnYW5pemF0aW9uIiwiZmluZE9uZSIsIndoZXJlIiwiVVVJRCIsInVwZGF0ZSIsInVwZGF0ZWRPcmdhbml6YXRpb24iLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7O0FBQ0E7Ozs7QUFHQSxNQUFNQSw0QkFBNEIsR0FBRyxPQUFPQyxHQUFQLEVBQXFCQyxHQUFyQixFQUFvQ0MsSUFBcEMsS0FBMkQ7QUFDOUYsTUFBSTtBQUNGLFVBQU07QUFBRUMsTUFBQUEsSUFBRjtBQUFRQyxNQUFBQSxLQUFSO0FBQWVDLE1BQUFBLEdBQWY7QUFBb0JDLE1BQUFBLE9BQXBCO0FBQTZCQyxNQUFBQTtBQUE3QixRQUFzQ1AsR0FBRyxDQUFDUSxJQUFoRDtBQUNBLFVBQU1DLFNBQWtDLEdBQUcsRUFBM0M7O0FBQ0EsUUFBSU4sSUFBSixFQUFVO0FBQ1JNLE1BQUFBLFNBQVMsQ0FBQ0MsMEJBQWlCQyxJQUFsQixDQUFULEdBQW1DUixJQUFuQztBQUNEOztBQUNELFFBQUlDLEtBQUosRUFBVztBQUNUSyxNQUFBQSxTQUFTLENBQUNDLDBCQUFpQkUsS0FBbEIsQ0FBVCxHQUFvQ1IsS0FBcEM7QUFDRDs7QUFDRCxRQUFJQyxHQUFKLEVBQVM7QUFDUEksTUFBQUEsU0FBUyxDQUFDQywwQkFBaUJHLEdBQWxCLENBQVQsR0FBa0NSLEdBQWxDO0FBQ0Q7O0FBQ0QsUUFBSUMsT0FBSixFQUFhO0FBQ1hHLE1BQUFBLFNBQVMsQ0FBQ0MsMEJBQWlCSSxPQUFsQixDQUFULEdBQXNDUixPQUF0QztBQUNEOztBQUNELFVBQU1TLFlBQVksR0FBRyxNQUFNQyxzQkFBYUMsT0FBYixDQUFxQjtBQUM5Q0MsTUFBQUEsS0FBSyxFQUFFO0FBQ0wsU0FBQ1IsMEJBQWlCUyxJQUFsQixHQUF5Qlo7QUFEcEI7QUFEdUMsS0FBckIsQ0FBM0I7QUFNQSxVQUFNUSxZQUFZLENBQUNLLE1BQWIsQ0FBb0JYLFNBQXBCLENBQU47QUFFQSxVQUFNWSxtQkFBbUIsR0FBRyxNQUFNTCxzQkFBYUMsT0FBYixDQUFxQjtBQUNyREMsTUFBQUEsS0FBSyxFQUFFO0FBQ0wsU0FBQ1IsMEJBQWlCUyxJQUFsQixHQUF5Qlo7QUFEcEI7QUFEOEMsS0FBckIsQ0FBbEM7QUFNQU4sSUFBQUEsR0FBRyxDQUFDcUIsSUFBSixDQUFTRCxtQkFBVDtBQUNELEdBOUJELENBOEJFLE9BQU9FLEdBQVAsRUFBWTtBQUNackIsSUFBQUEsSUFBSSxDQUFDcUIsR0FBRCxDQUFKO0FBQ0Q7QUFDRixDQWxDRDs7ZUFvQ2V4Qiw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFJlcXVlc3QsXG4gIFJlc3BvbnNlXG59IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IE9yZ2FuaXphdGlvbiBmcm9tICdtb2RlbHMvT3JnYW5pemF0aW9uJztcbmltcG9ydCBPcmdhbml6YXRpb25LZXlzIGZyb20gJ21vZGVscy9Pcmdhbml6YXRpb24vdHlwZXMvT3JnYW5pemF0aW9uS2V5cyc7XG5pbXBvcnQgeyBOZXh0RnVuY3Rpb24gfSBmcm9tICdjb25uZWN0JztcblxuY29uc3QgdXBkYXRlT3JnYW5pemF0aW9uQ29udHJvbGxlciA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgY2l0eSwgc3RhdGUsIHppcCwgbWlzc2lvbiwgdXVpZCB9ID0gcmVxLmJvZHk7XG4gICAgY29uc3QgdXBkYXRlT2JqOiB7IFt4OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICAgIGlmIChjaXR5KSB7XG4gICAgICB1cGRhdGVPYmpbT3JnYW5pemF0aW9uS2V5cy5DSVRZXSA9IGNpdHk7XG4gICAgfVxuICAgIGlmIChzdGF0ZSkge1xuICAgICAgdXBkYXRlT2JqW09yZ2FuaXphdGlvbktleXMuU1RBVEVdID0gc3RhdGU7XG4gICAgfVxuICAgIGlmICh6aXApIHtcbiAgICAgIHVwZGF0ZU9ialtPcmdhbml6YXRpb25LZXlzLlpJUF0gPSB6aXA7XG4gICAgfVxuICAgIGlmIChtaXNzaW9uKSB7XG4gICAgICB1cGRhdGVPYmpbT3JnYW5pemF0aW9uS2V5cy5NSVNTSU9OXSA9IG1pc3Npb247XG4gICAgfVxuICAgIGNvbnN0IG9yZ2FuaXphdGlvbiA9IGF3YWl0IE9yZ2FuaXphdGlvbi5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIFtPcmdhbml6YXRpb25LZXlzLlVVSURdOiB1dWlkXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBhd2FpdCBvcmdhbml6YXRpb24udXBkYXRlKHVwZGF0ZU9iaik7XG5cbiAgICBjb25zdCB1cGRhdGVkT3JnYW5pemF0aW9uID0gYXdhaXQgT3JnYW5pemF0aW9uLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgW09yZ2FuaXphdGlvbktleXMuVVVJRF06IHV1aWRcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlcy5qc29uKHVwZGF0ZWRPcmdhbml6YXRpb24pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZU9yZ2FuaXphdGlvbkNvbnRyb2xsZXI7XG4iXX0=