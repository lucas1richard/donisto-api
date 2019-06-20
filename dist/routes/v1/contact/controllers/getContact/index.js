"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../../../../models");

var _keys = require("../../../../../models/keys");

const getContactController = async (req, res, next) => {
  try {
    const contact = await _models.Contacts.findOne({
      where: {
        uuid: req.user.uuid
      },
      attributes: {
        exclude: [_keys.ContactKeys.PASSWORD, _keys.ContactKeys.SALT]
      },
      include: [{
        model: _models.Organizations
      }]
    });
    res.json(contact);
  } catch (err) {
    next(err);
  }
};

var _default = getContactController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY29udGFjdC9jb250cm9sbGVycy9nZXRDb250YWN0L2luZGV4LnRzIl0sIm5hbWVzIjpbImdldENvbnRhY3RDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImNvbnRhY3QiLCJDb250YWN0cyIsImZpbmRPbmUiLCJ3aGVyZSIsInV1aWQiLCJ1c2VyIiwiYXR0cmlidXRlcyIsImV4Y2x1ZGUiLCJDb250YWN0S2V5cyIsIlBBU1NXT1JEIiwiU0FMVCIsImluY2x1ZGUiLCJtb2RlbCIsIk9yZ2FuaXphdGlvbnMiLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBRUEsTUFBTUEsb0JBQW9DLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixLQUEwQjtBQUNyRSxNQUFJO0FBQ0YsVUFBTUMsT0FBTyxHQUFHLE1BQU1DLGlCQUFTQyxPQUFULENBQWlCO0FBQ3JDQyxNQUFBQSxLQUFLLEVBQUU7QUFDTEMsUUFBQUEsSUFBSSxFQUFFUCxHQUFHLENBQUNRLElBQUosQ0FBU0Q7QUFEVixPQUQ4QjtBQUlyQ0UsTUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLFFBQUFBLE9BQU8sRUFBRSxDQUNQQyxrQkFBWUMsUUFETCxFQUVQRCxrQkFBWUUsSUFGTDtBQURDLE9BSnlCO0FBVXJDQyxNQUFBQSxPQUFPLEVBQUUsQ0FBQztBQUNSQyxRQUFBQSxLQUFLLEVBQUVDO0FBREMsT0FBRDtBQVY0QixLQUFqQixDQUF0QjtBQWNBZixJQUFBQSxHQUFHLENBQUNnQixJQUFKLENBQVNkLE9BQVQ7QUFDRCxHQWhCRCxDQWdCRSxPQUFPZSxHQUFQLEVBQVk7QUFDWmhCLElBQUFBLElBQUksQ0FBQ2dCLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0FwQkQ7O2VBc0JlbkIsb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgQ29udGFjdHMsIE9yZ2FuaXphdGlvbnMgfSBmcm9tICdtb2RlbHMnO1xuaW1wb3J0IHsgQ29udGFjdEtleXMgfSBmcm9tICdtb2RlbHMva2V5cyc7XG5cbmNvbnN0IGdldENvbnRhY3RDb250cm9sbGVyOiBSZXF1ZXN0SGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNvbnRhY3QgPSBhd2FpdCBDb250YWN0cy5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHV1aWQ6IHJlcS51c2VyLnV1aWQsXG4gICAgICB9LFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBleGNsdWRlOiBbXG4gICAgICAgICAgQ29udGFjdEtleXMuUEFTU1dPUkQsXG4gICAgICAgICAgQ29udGFjdEtleXMuU0FMVCxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiBbe1xuICAgICAgICBtb2RlbDogT3JnYW5pemF0aW9ucyxcbiAgICAgIH1dLFxuICAgIH0pO1xuICAgIHJlcy5qc29uKGNvbnRhY3QpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENvbnRhY3RDb250cm9sbGVyO1xuIl19