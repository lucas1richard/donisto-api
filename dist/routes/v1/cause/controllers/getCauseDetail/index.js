"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../../../../models");

var _keys = require("../../../../../models/keys");

const getCausesDetailController = async (req, res, next) => {
  try {
    const {
      causeUuid
    } = req.params;
    const cause = await _models.Causes.findOne({
      where: {
        [_keys.CauseKeys.UUID]: causeUuid
      },
      include: [{
        model: _models.Donations
      }]
    });
  } catch (err) {}
};

var _default = getCausesDetailController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY2F1c2UvY29udHJvbGxlcnMvZ2V0Q2F1c2VEZXRhaWwvaW5kZXgudHMiXSwibmFtZXMiOlsiZ2V0Q2F1c2VzRGV0YWlsQ29udHJvbGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJjYXVzZVV1aWQiLCJwYXJhbXMiLCJjYXVzZSIsIkNhdXNlcyIsImZpbmRPbmUiLCJ3aGVyZSIsIkNhdXNlS2V5cyIsIlVVSUQiLCJpbmNsdWRlIiwibW9kZWwiLCJEb25hdGlvbnMiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFFQSxNQUFNQSx5QkFBeUMsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQzFFLE1BQUk7QUFDRixVQUFNO0FBQUVDLE1BQUFBO0FBQUYsUUFBZ0JILEdBQUcsQ0FBQ0ksTUFBMUI7QUFDQSxVQUFNQyxLQUFLLEdBQUcsTUFBTUMsZUFBT0MsT0FBUCxDQUFlO0FBQ2pDQyxNQUFBQSxLQUFLLEVBQUU7QUFDTCxTQUFDQyxnQkFBVUMsSUFBWCxHQUFrQlA7QUFEYixPQUQwQjtBQUlqQ1EsTUFBQUEsT0FBTyxFQUFFLENBQUM7QUFDUkMsUUFBQUEsS0FBSyxFQUFFQztBQURDLE9BQUQ7QUFKd0IsS0FBZixDQUFwQjtBQVFELEdBVkQsQ0FVRSxPQUFPQyxHQUFQLEVBQVksQ0FFYjtBQUNGLENBZEQ7O2VBZ0JlZix5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBDYXVzZXMsIERvbmF0aW9ucyB9IGZyb20gJ21vZGVscyc7XG5pbXBvcnQgeyBDYXVzZUtleXMgfSBmcm9tICdtb2RlbHMva2V5cyc7XG5cbmNvbnN0IGdldENhdXNlc0RldGFpbENvbnRyb2xsZXI6IFJlcXVlc3RIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBjYXVzZVV1aWQgfSA9IHJlcS5wYXJhbXM7XG4gICAgY29uc3QgY2F1c2UgPSBhd2FpdCBDYXVzZXMuZmluZE9uZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbQ2F1c2VLZXlzLlVVSURdOiBjYXVzZVV1aWRcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiBbe1xuICAgICAgICBtb2RlbDogRG9uYXRpb25zLFxuICAgICAgfV1cbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG5cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q2F1c2VzRGV0YWlsQ29udHJvbGxlcjsiXX0=