"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _foreignKeys = _interopRequireDefault(require("../../../../../database/foreignKeys"));

var _models = require("../../../../../models");

var _keys = require("../../../../../models/keys");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const noOrgPlaceholder = [];

const getContactOrganizationsController = async (req, res, next) => {
  try {
    const organizationUuids = await _models.OrganizationsContacts.findAll({
      where: {
        [_foreignKeys.default.CONTACT]: req.user.uuid
      }
    });
    const organizations = await _models.Organizations.findAll({
      where: {
        [_keys.OrganizationKeys.UUID]: {
          [_sequelize.Op.in]: organizationUuids.map(orguuid => {
            return orguuid[_foreignKeys.default.ORGANIZATION];
          })
        }
      }
    });
    res.json(organizations || noOrgPlaceholder);
  } catch (err) {
    next(err);
  }
};

var _default = getContactOrganizationsController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvb3JnYW5pemF0aW9uL2NvbnRyb2xsZXJzL2dldENvbnRhY3RPcmdhbml6YXRpb25zL2luZGV4LnRzIl0sIm5hbWVzIjpbIm5vT3JnUGxhY2Vob2xkZXIiLCJnZXRDb250YWN0T3JnYW5pemF0aW9uc0NvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJuZXh0Iiwib3JnYW5pemF0aW9uVXVpZHMiLCJPcmdhbml6YXRpb25zQ29udGFjdHMiLCJmaW5kQWxsIiwid2hlcmUiLCJmb3JlaWduS2V5cyIsIkNPTlRBQ1QiLCJ1c2VyIiwidXVpZCIsIm9yZ2FuaXphdGlvbnMiLCJPcmdhbml6YXRpb25zIiwiT3JnYW5pemF0aW9uS2V5cyIsIlVVSUQiLCJPcCIsImluIiwibWFwIiwib3JndXVpZCIsIk9SR0FOSVpBVElPTiIsImpzb24iLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUdBLE1BQU1BLGdCQUF1QixHQUFHLEVBQWhDOztBQUVBLE1BQU1DLGlDQUFpRCxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsS0FBMEI7QUFDbEYsTUFBSTtBQUNGLFVBQU1DLGlCQUFpQixHQUFHLE1BQU1DLDhCQUFzQkMsT0FBdEIsQ0FBOEI7QUFDNURDLE1BQUFBLEtBQUssRUFBRTtBQUNMLFNBQUNDLHFCQUFZQyxPQUFiLEdBQXVCUixHQUFHLENBQUNTLElBQUosQ0FBU0M7QUFEM0I7QUFEcUQsS0FBOUIsQ0FBaEM7QUFNQSxVQUFNQyxhQUFhLEdBQUcsTUFBTUMsc0JBQWNQLE9BQWQsQ0FBc0I7QUFDaERDLE1BQUFBLEtBQUssRUFBRTtBQUNMLFNBQUNPLHVCQUFpQkMsSUFBbEIsR0FBeUI7QUFDdkIsV0FBQ0MsY0FBR0MsRUFBSixHQUFTYixpQkFBaUIsQ0FBQ2MsR0FBbEIsQ0FBdUJDLE9BQUQsSUFBOEM7QUFDM0UsbUJBQU9BLE9BQU8sQ0FBQ1gscUJBQVlZLFlBQWIsQ0FBZDtBQUNELFdBRlE7QUFEYztBQURwQjtBQUR5QyxLQUF0QixDQUE1QjtBQVVBbEIsSUFBQUEsR0FBRyxDQUFDbUIsSUFBSixDQUFTVCxhQUFhLElBQUliLGdCQUExQjtBQUNELEdBbEJELENBa0JFLE9BQU91QixHQUFQLEVBQVk7QUFDWm5CLElBQUFBLElBQUksQ0FBQ21CLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0F0QkQ7O2VBd0JldEIsaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgT3AgfSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IGZvcmVpZ25LZXlzIGZyb20gJ2RhdGFiYXNlL2ZvcmVpZ25LZXlzJztcbmltcG9ydCB7IE9yZ2FuaXphdGlvbnNDb250YWN0cywgT3JnYW5pemF0aW9ucyB9IGZyb20gJ21vZGVscyc7XG5pbXBvcnQgeyBPcmdhbml6YXRpb25LZXlzIH0gZnJvbSAnbW9kZWxzL2tleXMnO1xuaW1wb3J0IE9yZ2FuaXphdGlvbnNDb250YWN0c0F0dHJpYnV0ZXMgZnJvbSAnbW9kZWxzL09yZ2FuaXphdGlvbnNDb250YWN0cy90eXBlcy9BdHRyaWJ1dGVzJztcblxuY29uc3Qgbm9PcmdQbGFjZWhvbGRlcjogYW55W10gPSBbXTtcblxuY29uc3QgZ2V0Q29udGFjdE9yZ2FuaXphdGlvbnNDb250cm9sbGVyOiBSZXF1ZXN0SGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IG9yZ2FuaXphdGlvblV1aWRzID0gYXdhaXQgT3JnYW5pemF0aW9uc0NvbnRhY3RzLmZpbmRBbGwoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgW2ZvcmVpZ25LZXlzLkNPTlRBQ1RdOiByZXEudXNlci51dWlkLFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgb3JnYW5pemF0aW9ucyA9IGF3YWl0IE9yZ2FuaXphdGlvbnMuZmluZEFsbCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbT3JnYW5pemF0aW9uS2V5cy5VVUlEXToge1xuICAgICAgICAgIFtPcC5pbl06IG9yZ2FuaXphdGlvblV1aWRzLm1hcCgob3JndXVpZDogT3JnYW5pemF0aW9uc0NvbnRhY3RzQXR0cmlidXRlcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9yZ3V1aWRbZm9yZWlnbktleXMuT1JHQU5JWkFUSU9OXTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXMuanNvbihvcmdhbml6YXRpb25zIHx8IG5vT3JnUGxhY2Vob2xkZXIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENvbnRhY3RPcmdhbml6YXRpb25zQ29udHJvbGxlcjtcbiJdfQ==