"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../../../../models");

const getContactController = async (req, res, next) => {
  try {
    const contact = await _models.Contacts.findOne({
      where: {
        uuid: res.locals.uuid
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY29udGFjdC9jb250cm9sbGVycy9nZXRDb250YWN0L2luZGV4LnRzIl0sIm5hbWVzIjpbImdldENvbnRhY3RDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImNvbnRhY3QiLCJDb250YWN0cyIsImZpbmRPbmUiLCJ3aGVyZSIsInV1aWQiLCJsb2NhbHMiLCJpbmNsdWRlIiwibW9kZWwiLCJPcmdhbml6YXRpb25zIiwianNvbiIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUVBLE1BQU1BLG9CQUFvQyxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsS0FBMEI7QUFDckUsTUFBSTtBQUNGLFVBQU1DLE9BQU8sR0FBRyxNQUFNQyxpQkFBU0MsT0FBVCxDQUFpQjtBQUNyQ0MsTUFBQUEsS0FBSyxFQUFFO0FBQ0xDLFFBQUFBLElBQUksRUFBRU4sR0FBRyxDQUFDTyxNQUFKLENBQVdEO0FBRFosT0FEOEI7QUFJckNFLE1BQUFBLE9BQU8sRUFBRSxDQUFDO0FBQ1JDLFFBQUFBLEtBQUssRUFBRUM7QUFEQyxPQUFEO0FBSjRCLEtBQWpCLENBQXRCO0FBUUFWLElBQUFBLEdBQUcsQ0FBQ1csSUFBSixDQUFTVCxPQUFUO0FBQ0QsR0FWRCxDQVVFLE9BQU9VLEdBQVAsRUFBWTtBQUNaWCxJQUFBQSxJQUFJLENBQUNXLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0FkRDs7ZUFnQmVkLG9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IENvbnRhY3RzLCBPcmdhbml6YXRpb25zIH0gZnJvbSAnbW9kZWxzJztcblxuY29uc3QgZ2V0Q29udGFjdENvbnRyb2xsZXI6IFJlcXVlc3RIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29udGFjdCA9IGF3YWl0IENvbnRhY3RzLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdXVpZDogcmVzLmxvY2Fscy51dWlkXG4gICAgICB9LFxuICAgICAgaW5jbHVkZTogW3tcbiAgICAgICAgbW9kZWw6IE9yZ2FuaXphdGlvbnNcbiAgICAgIH1dXG4gICAgfSk7XG4gICAgcmVzLmpzb24oY29udGFjdCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q29udGFjdENvbnRyb2xsZXI7XG4iXX0=