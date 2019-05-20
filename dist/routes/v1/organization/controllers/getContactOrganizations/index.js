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

const getContactOrganizationsController = async (req, res, next) => {
  try {
    const organizationUuids = await _models.OrganizationsContacts.findAll({
      where: {
        [_foreignKeys.default.CONTACT]: res.locals.uuid
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
    res.json(organizations);
  } catch (err) {
    next(err);
  }
};

var _default = getContactOrganizationsController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvb3JnYW5pemF0aW9uL2NvbnRyb2xsZXJzL2dldENvbnRhY3RPcmdhbml6YXRpb25zL2luZGV4LnRzIl0sIm5hbWVzIjpbImdldENvbnRhY3RPcmdhbml6YXRpb25zQ29udHJvbGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJvcmdhbml6YXRpb25VdWlkcyIsIk9yZ2FuaXphdGlvbnNDb250YWN0cyIsImZpbmRBbGwiLCJ3aGVyZSIsImZvcmVpZ25LZXlzIiwiQ09OVEFDVCIsImxvY2FscyIsInV1aWQiLCJvcmdhbml6YXRpb25zIiwiT3JnYW5pemF0aW9ucyIsIk9yZ2FuaXphdGlvbktleXMiLCJVVUlEIiwiT3AiLCJpbiIsIm1hcCIsIm9yZ3V1aWQiLCJPUkdBTklaQVRJT04iLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFHQSxNQUFNQSxpQ0FBaUQsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQ2xGLE1BQUk7QUFDRixVQUFNQyxpQkFBaUIsR0FBRyxNQUFNQyw4QkFBc0JDLE9BQXRCLENBQThCO0FBQzVEQyxNQUFBQSxLQUFLLEVBQUU7QUFDTCxTQUFDQyxxQkFBWUMsT0FBYixHQUF1QlAsR0FBRyxDQUFDUSxNQUFKLENBQVdDO0FBRDdCO0FBRHFELEtBQTlCLENBQWhDO0FBTUEsVUFBTUMsYUFBYSxHQUFHLE1BQU1DLHNCQUFjUCxPQUFkLENBQXNCO0FBQ2hEQyxNQUFBQSxLQUFLLEVBQUU7QUFDTCxTQUFDTyx1QkFBaUJDLElBQWxCLEdBQXlCO0FBQ3ZCLFdBQUNDLGNBQUdDLEVBQUosR0FBU2IsaUJBQWlCLENBQUNjLEdBQWxCLENBQXVCQyxPQUFELElBQThDO0FBQzNFLG1CQUFPQSxPQUFPLENBQUNYLHFCQUFZWSxZQUFiLENBQWQ7QUFDRCxXQUZRO0FBRGM7QUFEcEI7QUFEeUMsS0FBdEIsQ0FBNUI7QUFVQWxCLElBQUFBLEdBQUcsQ0FBQ21CLElBQUosQ0FBU1QsYUFBVDtBQUNELEdBbEJELENBa0JFLE9BQU9VLEdBQVAsRUFBWTtBQUNabkIsSUFBQUEsSUFBSSxDQUFDbUIsR0FBRCxDQUFKO0FBQ0Q7QUFDRixDQXRCRDs7ZUF3QmV0QixpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBPcCB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgZm9yZWlnbktleXMgZnJvbSAnZGF0YWJhc2UvZm9yZWlnbktleXMnO1xuaW1wb3J0IHsgT3JnYW5pemF0aW9uc0NvbnRhY3RzLCBPcmdhbml6YXRpb25zIH0gZnJvbSAnbW9kZWxzJztcbmltcG9ydCB7IE9yZ2FuaXphdGlvbktleXMgfSBmcm9tICdtb2RlbHMva2V5cyc7XG5pbXBvcnQgT3JnYW5pemF0aW9uc0NvbnRhY3RzQXR0cmlidXRlcyBmcm9tICdtb2RlbHMvT3JnYW5pemF0aW9uc0NvbnRhY3RzL3R5cGVzL0F0dHJpYnV0ZXMnO1xuXG5jb25zdCBnZXRDb250YWN0T3JnYW5pemF0aW9uc0NvbnRyb2xsZXI6IFJlcXVlc3RIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3Qgb3JnYW5pemF0aW9uVXVpZHMgPSBhd2FpdCBPcmdhbml6YXRpb25zQ29udGFjdHMuZmluZEFsbCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbZm9yZWlnbktleXMuQ09OVEFDVF06IHJlcy5sb2NhbHMudXVpZFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgb3JnYW5pemF0aW9ucyA9IGF3YWl0IE9yZ2FuaXphdGlvbnMuZmluZEFsbCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbT3JnYW5pemF0aW9uS2V5cy5VVUlEXToge1xuICAgICAgICAgIFtPcC5pbl06IG9yZ2FuaXphdGlvblV1aWRzLm1hcCgob3JndXVpZDogT3JnYW5pemF0aW9uc0NvbnRhY3RzQXR0cmlidXRlcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9yZ3V1aWRbZm9yZWlnbktleXMuT1JHQU5JWkFUSU9OXTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXMuanNvbihvcmdhbml6YXRpb25zKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDb250YWN0T3JnYW5pemF0aW9uc0NvbnRyb2xsZXI7XG4iXX0=