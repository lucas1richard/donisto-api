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
        uuid: res.locals.uuid
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY29udGFjdC9jb250cm9sbGVycy9nZXRDb250YWN0L2luZGV4LnRzIl0sIm5hbWVzIjpbImdldENvbnRhY3RDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImNvbnRhY3QiLCJDb250YWN0cyIsImZpbmRPbmUiLCJ3aGVyZSIsInV1aWQiLCJsb2NhbHMiLCJhdHRyaWJ1dGVzIiwiZXhjbHVkZSIsIkNvbnRhY3RLZXlzIiwiUEFTU1dPUkQiLCJTQUxUIiwiaW5jbHVkZSIsIm1vZGVsIiwiT3JnYW5pemF0aW9ucyIsImpzb24iLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFFQSxNQUFNQSxvQkFBb0MsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQ3JFLE1BQUk7QUFDRixVQUFNQyxPQUFPLEdBQUcsTUFBTUMsaUJBQVNDLE9BQVQsQ0FBaUI7QUFDckNDLE1BQUFBLEtBQUssRUFBRTtBQUNMQyxRQUFBQSxJQUFJLEVBQUVOLEdBQUcsQ0FBQ08sTUFBSixDQUFXRDtBQURaLE9BRDhCO0FBSXJDRSxNQUFBQSxVQUFVLEVBQUU7QUFDVkMsUUFBQUEsT0FBTyxFQUFFLENBQ1BDLGtCQUFZQyxRQURMLEVBRVBELGtCQUFZRSxJQUZMO0FBREMsT0FKeUI7QUFVckNDLE1BQUFBLE9BQU8sRUFBRSxDQUFDO0FBQ1JDLFFBQUFBLEtBQUssRUFBRUM7QUFEQyxPQUFEO0FBVjRCLEtBQWpCLENBQXRCO0FBY0FmLElBQUFBLEdBQUcsQ0FBQ2dCLElBQUosQ0FBU2QsT0FBVDtBQUNELEdBaEJELENBZ0JFLE9BQU9lLEdBQVAsRUFBWTtBQUNaaEIsSUFBQUEsSUFBSSxDQUFDZ0IsR0FBRCxDQUFKO0FBQ0Q7QUFDRixDQXBCRDs7ZUFzQmVuQixvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBDb250YWN0cywgT3JnYW5pemF0aW9ucyB9IGZyb20gJ21vZGVscyc7XG5pbXBvcnQgeyBDb250YWN0S2V5cyB9IGZyb20gJ21vZGVscy9rZXlzJztcblxuY29uc3QgZ2V0Q29udGFjdENvbnRyb2xsZXI6IFJlcXVlc3RIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29udGFjdCA9IGF3YWl0IENvbnRhY3RzLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdXVpZDogcmVzLmxvY2Fscy51dWlkXG4gICAgICB9LFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBleGNsdWRlOiBbXG4gICAgICAgICAgQ29udGFjdEtleXMuUEFTU1dPUkQsXG4gICAgICAgICAgQ29udGFjdEtleXMuU0FMVCxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiBbe1xuICAgICAgICBtb2RlbDogT3JnYW5pemF0aW9uc1xuICAgICAgfV1cbiAgICB9KTtcbiAgICByZXMuanNvbihjb250YWN0KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDb250YWN0Q29udHJvbGxlcjtcbiJdfQ==