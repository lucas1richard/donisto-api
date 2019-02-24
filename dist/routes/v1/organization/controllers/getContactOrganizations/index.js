"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _OrganizationsContacts = _interopRequireDefault(require("../../../../../models/OrganizationsContacts"));

var _foreignKeys = _interopRequireDefault(require("../../../../../database/foreignKeys"));

var _Organization = _interopRequireDefault(require("../../../../../models/Organization"));

var _types = require("../../../../../models/Organization/types");

var _sequelize = require("sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getContactOrganizationsController(req, res, next) {
  try {
    const organizationUuids = await _OrganizationsContacts.default.findAll({
      where: {
        [_foreignKeys.default.CONTACT]: res.locals.uuid
      }
    });
    const organizations = await _Organization.default.findAll({
      where: {
        [_types.OrganizationKeys.UUID]: {
          [_sequelize.Op.in]: organizationUuids.map(orguuid => {
            return orguuid[_foreignKeys.default.ORGANIZATION];
          })
        }
      }
    });
    res.json(organizations);
  } catch (err) {
    next(err);
  }
}

var _default = getContactOrganizationsController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvb3JnYW5pemF0aW9uL2NvbnRyb2xsZXJzL2dldENvbnRhY3RPcmdhbml6YXRpb25zL2luZGV4LnRzIl0sIm5hbWVzIjpbImdldENvbnRhY3RPcmdhbml6YXRpb25zQ29udHJvbGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJvcmdhbml6YXRpb25VdWlkcyIsIk9yZ2FuaXphdGlvbnNDb250YWN0cyIsImZpbmRBbGwiLCJ3aGVyZSIsImZvcmVpZ25LZXlzIiwiQ09OVEFDVCIsImxvY2FscyIsInV1aWQiLCJvcmdhbml6YXRpb25zIiwiT3JnYW5pemF0aW9ucyIsIk9yZ2FuaXphdGlvbktleXMiLCJVVUlEIiwiT3AiLCJpbiIsIm1hcCIsIm9yZ3V1aWQiLCJPUkdBTklaQVRJT04iLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFHQSxlQUFlQSxpQ0FBZixDQUFpREMsR0FBakQsRUFBK0RDLEdBQS9ELEVBQThFQyxJQUE5RSxFQUFrRztBQUNoRyxNQUFJO0FBQ0YsVUFBTUMsaUJBQWlCLEdBQUcsTUFBTUMsK0JBQXNCQyxPQUF0QixDQUE4QjtBQUM1REMsTUFBQUEsS0FBSyxFQUFFO0FBQ0wsU0FBQ0MscUJBQVlDLE9BQWIsR0FBdUJQLEdBQUcsQ0FBQ1EsTUFBSixDQUFXQztBQUQ3QjtBQURxRCxLQUE5QixDQUFoQztBQU1BLFVBQU1DLGFBQWEsR0FBRyxNQUFNQyxzQkFBY1AsT0FBZCxDQUFzQjtBQUNoREMsTUFBQUEsS0FBSyxFQUFFO0FBQ0wsU0FBQ08sd0JBQWlCQyxJQUFsQixHQUF5QjtBQUN2QixXQUFDQyxjQUFHQyxFQUFKLEdBQVNiLGlCQUFpQixDQUFDYyxHQUFsQixDQUF1QkMsT0FBRCxJQUE4QztBQUMzRSxtQkFBT0EsT0FBTyxDQUFDWCxxQkFBWVksWUFBYixDQUFkO0FBQ0QsV0FGUTtBQURjO0FBRHBCO0FBRHlDLEtBQXRCLENBQTVCO0FBVUFsQixJQUFBQSxHQUFHLENBQUNtQixJQUFKLENBQVNULGFBQVQ7QUFDRCxHQWxCRCxDQWtCRSxPQUFPVSxHQUFQLEVBQVk7QUFDWm5CLElBQUFBLElBQUksQ0FBQ21CLEdBQUQsQ0FBSjtBQUNEO0FBQ0Y7O2VBRWN0QixpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFJlcXVlc3QsXG4gIFJlc3BvbnNlLFxuICBOZXh0RnVuY3Rpb25cbn0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgT3JnYW5pemF0aW9uc0NvbnRhY3RzIGZyb20gJ21vZGVscy9Pcmdhbml6YXRpb25zQ29udGFjdHMnO1xuaW1wb3J0IGZvcmVpZ25LZXlzIGZyb20gJ2RhdGFiYXNlL2ZvcmVpZ25LZXlzJztcbmltcG9ydCBPcmdhbml6YXRpb25zIGZyb20gJ21vZGVscy9Pcmdhbml6YXRpb24nO1xuaW1wb3J0IHsgT3JnYW5pemF0aW9uS2V5cyB9IGZyb20gJ21vZGVscy9Pcmdhbml6YXRpb24vdHlwZXMnO1xuaW1wb3J0IHsgT3AgfSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IE9yZ2FuaXphdGlvbnNDb250YWN0c0F0dHJpYnV0ZXMgZnJvbSAnbW9kZWxzL09yZ2FuaXphdGlvbnNDb250YWN0cy90eXBlcy9BdHRyaWJ1dGVzJztcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29udGFjdE9yZ2FuaXphdGlvbnNDb250cm9sbGVyKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgb3JnYW5pemF0aW9uVXVpZHMgPSBhd2FpdCBPcmdhbml6YXRpb25zQ29udGFjdHMuZmluZEFsbCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbZm9yZWlnbktleXMuQ09OVEFDVF06IHJlcy5sb2NhbHMudXVpZFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgb3JnYW5pemF0aW9ucyA9IGF3YWl0IE9yZ2FuaXphdGlvbnMuZmluZEFsbCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbT3JnYW5pemF0aW9uS2V5cy5VVUlEXToge1xuICAgICAgICAgIFtPcC5pbl06IG9yZ2FuaXphdGlvblV1aWRzLm1hcCgob3JndXVpZDogT3JnYW5pemF0aW9uc0NvbnRhY3RzQXR0cmlidXRlcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9yZ3V1aWRbZm9yZWlnbktleXMuT1JHQU5JWkFUSU9OXTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXMuanNvbihvcmdhbml6YXRpb25zKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldENvbnRhY3RPcmdhbml6YXRpb25zQ29udHJvbGxlcjtcbiJdfQ==