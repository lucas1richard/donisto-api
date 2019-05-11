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

const getContactOrganizationsController = async (req, res, next) => {
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
};

var _default = getContactOrganizationsController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvb3JnYW5pemF0aW9uL2NvbnRyb2xsZXJzL2dldENvbnRhY3RPcmdhbml6YXRpb25zL2luZGV4LnRzIl0sIm5hbWVzIjpbImdldENvbnRhY3RPcmdhbml6YXRpb25zQ29udHJvbGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJvcmdhbml6YXRpb25VdWlkcyIsIk9yZ2FuaXphdGlvbnNDb250YWN0cyIsImZpbmRBbGwiLCJ3aGVyZSIsImZvcmVpZ25LZXlzIiwiQ09OVEFDVCIsImxvY2FscyIsInV1aWQiLCJvcmdhbml6YXRpb25zIiwiT3JnYW5pemF0aW9ucyIsIk9yZ2FuaXphdGlvbktleXMiLCJVVUlEIiwiT3AiLCJpbiIsIm1hcCIsIm9yZ3V1aWQiLCJPUkdBTklaQVRJT04iLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFHQSxNQUFNQSxpQ0FBaUQsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQ2xGLE1BQUk7QUFDRixVQUFNQyxpQkFBaUIsR0FBRyxNQUFNQywrQkFBc0JDLE9BQXRCLENBQThCO0FBQzVEQyxNQUFBQSxLQUFLLEVBQUU7QUFDTCxTQUFDQyxxQkFBWUMsT0FBYixHQUF1QlAsR0FBRyxDQUFDUSxNQUFKLENBQVdDO0FBRDdCO0FBRHFELEtBQTlCLENBQWhDO0FBTUEsVUFBTUMsYUFBYSxHQUFHLE1BQU1DLHNCQUFjUCxPQUFkLENBQXNCO0FBQ2hEQyxNQUFBQSxLQUFLLEVBQUU7QUFDTCxTQUFDTyx3QkFBaUJDLElBQWxCLEdBQXlCO0FBQ3ZCLFdBQUNDLGNBQUdDLEVBQUosR0FBU2IsaUJBQWlCLENBQUNjLEdBQWxCLENBQXVCQyxPQUFELElBQThDO0FBQzNFLG1CQUFPQSxPQUFPLENBQUNYLHFCQUFZWSxZQUFiLENBQWQ7QUFDRCxXQUZRO0FBRGM7QUFEcEI7QUFEeUMsS0FBdEIsQ0FBNUI7QUFVQWxCLElBQUFBLEdBQUcsQ0FBQ21CLElBQUosQ0FBU1QsYUFBVDtBQUNELEdBbEJELENBa0JFLE9BQU9VLEdBQVAsRUFBWTtBQUNabkIsSUFBQUEsSUFBSSxDQUFDbUIsR0FBRCxDQUFKO0FBQ0Q7QUFDRixDQXRCRDs7ZUF3QmV0QixpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgT3JnYW5pemF0aW9uc0NvbnRhY3RzIGZyb20gJ21vZGVscy9Pcmdhbml6YXRpb25zQ29udGFjdHMnO1xuaW1wb3J0IGZvcmVpZ25LZXlzIGZyb20gJ2RhdGFiYXNlL2ZvcmVpZ25LZXlzJztcbmltcG9ydCBPcmdhbml6YXRpb25zIGZyb20gJ21vZGVscy9Pcmdhbml6YXRpb24nO1xuaW1wb3J0IHsgT3JnYW5pemF0aW9uS2V5cyB9IGZyb20gJ21vZGVscy9Pcmdhbml6YXRpb24vdHlwZXMnO1xuaW1wb3J0IHsgT3AgfSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IE9yZ2FuaXphdGlvbnNDb250YWN0c0F0dHJpYnV0ZXMgZnJvbSAnbW9kZWxzL09yZ2FuaXphdGlvbnNDb250YWN0cy90eXBlcy9BdHRyaWJ1dGVzJztcblxuY29uc3QgZ2V0Q29udGFjdE9yZ2FuaXphdGlvbnNDb250cm9sbGVyOiBSZXF1ZXN0SGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IG9yZ2FuaXphdGlvblV1aWRzID0gYXdhaXQgT3JnYW5pemF0aW9uc0NvbnRhY3RzLmZpbmRBbGwoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgW2ZvcmVpZ25LZXlzLkNPTlRBQ1RdOiByZXMubG9jYWxzLnV1aWRcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IG9yZ2FuaXphdGlvbnMgPSBhd2FpdCBPcmdhbml6YXRpb25zLmZpbmRBbGwoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgW09yZ2FuaXphdGlvbktleXMuVVVJRF06IHtcbiAgICAgICAgICBbT3AuaW5dOiBvcmdhbml6YXRpb25VdWlkcy5tYXAoKG9yZ3V1aWQ6IE9yZ2FuaXphdGlvbnNDb250YWN0c0F0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvcmd1dWlkW2ZvcmVpZ25LZXlzLk9SR0FOSVpBVElPTl07XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVzLmpzb24ob3JnYW5pemF0aW9ucyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q29udGFjdE9yZ2FuaXphdGlvbnNDb250cm9sbGVyO1xuIl19