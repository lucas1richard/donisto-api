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
        [_foreignKeys.default.CONTACT]: req.user
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvb3JnYW5pemF0aW9uL2NvbnRyb2xsZXJzL2dldENvbnRhY3RPcmdhbml6YXRpb25zL2luZGV4LnRzIl0sIm5hbWVzIjpbIm5vT3JnUGxhY2Vob2xkZXIiLCJnZXRDb250YWN0T3JnYW5pemF0aW9uc0NvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJuZXh0Iiwib3JnYW5pemF0aW9uVXVpZHMiLCJPcmdhbml6YXRpb25zQ29udGFjdHMiLCJmaW5kQWxsIiwid2hlcmUiLCJmb3JlaWduS2V5cyIsIkNPTlRBQ1QiLCJ1c2VyIiwib3JnYW5pemF0aW9ucyIsIk9yZ2FuaXphdGlvbnMiLCJPcmdhbml6YXRpb25LZXlzIiwiVVVJRCIsIk9wIiwiaW4iLCJtYXAiLCJvcmd1dWlkIiwiT1JHQU5JWkFUSU9OIiwianNvbiIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBR0EsTUFBTUEsZ0JBQXVCLEdBQUcsRUFBaEM7O0FBRUEsTUFBTUMsaUNBQWlELEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixLQUEwQjtBQUNsRixNQUFJO0FBQ0YsVUFBTUMsaUJBQWlCLEdBQUcsTUFBTUMsOEJBQXNCQyxPQUF0QixDQUE4QjtBQUM1REMsTUFBQUEsS0FBSyxFQUFFO0FBQ0wsU0FBQ0MscUJBQVlDLE9BQWIsR0FBdUJSLEdBQUcsQ0FBQ1M7QUFEdEI7QUFEcUQsS0FBOUIsQ0FBaEM7QUFNQSxVQUFNQyxhQUFhLEdBQUcsTUFBTUMsc0JBQWNOLE9BQWQsQ0FBc0I7QUFDaERDLE1BQUFBLEtBQUssRUFBRTtBQUNMLFNBQUNNLHVCQUFpQkMsSUFBbEIsR0FBeUI7QUFDdkIsV0FBQ0MsY0FBR0MsRUFBSixHQUFTWixpQkFBaUIsQ0FBQ2EsR0FBbEIsQ0FBdUJDLE9BQUQsSUFBOEM7QUFDM0UsbUJBQU9BLE9BQU8sQ0FBQ1YscUJBQVlXLFlBQWIsQ0FBZDtBQUNELFdBRlE7QUFEYztBQURwQjtBQUR5QyxLQUF0QixDQUE1QjtBQVVBakIsSUFBQUEsR0FBRyxDQUFDa0IsSUFBSixDQUFTVCxhQUFhLElBQUlaLGdCQUExQjtBQUNELEdBbEJELENBa0JFLE9BQU9zQixHQUFQLEVBQVk7QUFDWmxCLElBQUFBLElBQUksQ0FBQ2tCLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0F0QkQ7O2VBd0JlckIsaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgT3AgfSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IGZvcmVpZ25LZXlzIGZyb20gJ2RhdGFiYXNlL2ZvcmVpZ25LZXlzJztcbmltcG9ydCB7IE9yZ2FuaXphdGlvbnNDb250YWN0cywgT3JnYW5pemF0aW9ucyB9IGZyb20gJ21vZGVscyc7XG5pbXBvcnQgeyBPcmdhbml6YXRpb25LZXlzIH0gZnJvbSAnbW9kZWxzL2tleXMnO1xuaW1wb3J0IE9yZ2FuaXphdGlvbnNDb250YWN0c0F0dHJpYnV0ZXMgZnJvbSAnbW9kZWxzL09yZ2FuaXphdGlvbnNDb250YWN0cy90eXBlcy9BdHRyaWJ1dGVzJztcblxuY29uc3Qgbm9PcmdQbGFjZWhvbGRlcjogYW55W10gPSBbXTtcblxuY29uc3QgZ2V0Q29udGFjdE9yZ2FuaXphdGlvbnNDb250cm9sbGVyOiBSZXF1ZXN0SGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IG9yZ2FuaXphdGlvblV1aWRzID0gYXdhaXQgT3JnYW5pemF0aW9uc0NvbnRhY3RzLmZpbmRBbGwoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgW2ZvcmVpZ25LZXlzLkNPTlRBQ1RdOiByZXEudXNlcixcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IG9yZ2FuaXphdGlvbnMgPSBhd2FpdCBPcmdhbml6YXRpb25zLmZpbmRBbGwoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgW09yZ2FuaXphdGlvbktleXMuVVVJRF06IHtcbiAgICAgICAgICBbT3AuaW5dOiBvcmdhbml6YXRpb25VdWlkcy5tYXAoKG9yZ3V1aWQ6IE9yZ2FuaXphdGlvbnNDb250YWN0c0F0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvcmd1dWlkW2ZvcmVpZ25LZXlzLk9SR0FOSVpBVElPTl07XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVzLmpzb24ob3JnYW5pemF0aW9ucyB8fCBub09yZ1BsYWNlaG9sZGVyKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDb250YWN0T3JnYW5pemF0aW9uc0NvbnRyb2xsZXI7XG4iXX0=