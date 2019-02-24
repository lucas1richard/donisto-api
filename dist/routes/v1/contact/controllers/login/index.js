"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Contact = _interopRequireDefault(require("../../../../../models/Contact"));

var _validate = require("./validate");

var _jwtSimple = _interopRequireDefault(require("jwt-simple"));

var _redisClient = _interopRequireWildcard(require("../../../../../redis-client"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const loginController = async (req, res, next) => {
  try {
    await _validate.bodySchema.validate(req.body);
    const contact = await _Contact.default.findByPassword({
      email: req.body.email,
      password: req.body.password
    });

    if (contact) {
      const token = _jwtSimple.default.encode({
        id: contact.id,
        uuid: contact.uuid
      }, process.env.JWT_SECRET);

      const key = `donisto:contact:token:${token}`;
      await (0, _redisClient.hmsetAsync)(key, {
        user_id: contact.id,
        uuid: contact.uuid
      });

      _redisClient.default.expire(key, 86400); // expire in 24 hours


      res.status(200).set('token', token).json(contact);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    next(err);
  }
};

var _default = loginController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY29udGFjdC9jb250cm9sbGVycy9sb2dpbi9pbmRleC50cyJdLCJuYW1lcyI6WyJsb2dpbkNvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwiYm9keVNjaGVtYSIsInZhbGlkYXRlIiwiYm9keSIsImNvbnRhY3QiLCJDb250YWN0IiwiZmluZEJ5UGFzc3dvcmQiLCJlbWFpbCIsInBhc3N3b3JkIiwidG9rZW4iLCJqd3QiLCJlbmNvZGUiLCJpZCIsInV1aWQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImtleSIsInVzZXJfaWQiLCJyZWRpc0NsaWVudCIsImV4cGlyZSIsInN0YXR1cyIsInNldCIsImpzb24iLCJzZW5kU3RhdHVzIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLE1BQU1BLGVBQWUsR0FBRyxPQUFPQyxHQUFQLEVBQXFCQyxHQUFyQixFQUFvQ0MsSUFBcEMsS0FBMkQ7QUFDakYsTUFBSTtBQUNGLFVBQU1DLHFCQUFXQyxRQUFYLENBQW9CSixHQUFHLENBQUNLLElBQXhCLENBQU47QUFFQSxVQUFNQyxPQUFPLEdBQUcsTUFBTUMsaUJBQVFDLGNBQVIsQ0FBdUI7QUFDM0NDLE1BQUFBLEtBQUssRUFBRVQsR0FBRyxDQUFDSyxJQUFKLENBQVNJLEtBRDJCO0FBRTNDQyxNQUFBQSxRQUFRLEVBQUVWLEdBQUcsQ0FBQ0ssSUFBSixDQUFTSztBQUZ3QixLQUF2QixDQUF0Qjs7QUFJQSxRQUFJSixPQUFKLEVBQWE7QUFDWCxZQUFNSyxLQUFLLEdBQUdDLG1CQUFJQyxNQUFKLENBQVc7QUFDdkJDLFFBQUFBLEVBQUUsRUFBRVIsT0FBTyxDQUFDUSxFQURXO0FBRXZCQyxRQUFBQSxJQUFJLEVBQUVULE9BQU8sQ0FBQ1M7QUFGUyxPQUFYLEVBR1hDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUhELENBQWQ7O0FBS0EsWUFBTUMsR0FBRyxHQUFJLHlCQUF3QlIsS0FBTSxFQUEzQztBQUVBLFlBQU0sNkJBQVdRLEdBQVgsRUFBZ0I7QUFDcEJDLFFBQUFBLE9BQU8sRUFBRWQsT0FBTyxDQUFDUSxFQURHO0FBRXBCQyxRQUFBQSxJQUFJLEVBQUVULE9BQU8sQ0FBQ1M7QUFGTSxPQUFoQixDQUFOOztBQUtBTSwyQkFBWUMsTUFBWixDQUFtQkgsR0FBbkIsRUFBd0IsS0FBeEIsRUFiVyxDQWFxQjs7O0FBRWhDbEIsTUFBQUEsR0FBRyxDQUNBc0IsTUFESCxDQUNVLEdBRFYsRUFFR0MsR0FGSCxDQUVPLE9BRlAsRUFFZ0JiLEtBRmhCLEVBR0djLElBSEgsQ0FHUW5CLE9BSFI7QUFJRCxLQW5CRCxNQW1CTztBQUNMTCxNQUFBQSxHQUFHLENBQUN5QixVQUFKLENBQWUsR0FBZjtBQUNEO0FBQ0YsR0E3QkQsQ0E2QkUsT0FBT0MsR0FBUCxFQUFZO0FBQ1p6QixJQUFBQSxJQUFJLENBQUN5QixHQUFELENBQUo7QUFDRDtBQUNGLENBakNEOztlQW1DZTVCLGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICdtb2RlbHMvQ29udGFjdCc7XG5pbXBvcnQgeyBib2R5U2NoZW1hIH0gZnJvbSAnLi92YWxpZGF0ZSc7XG5pbXBvcnQgand0IGZyb20gJ2p3dC1zaW1wbGUnO1xuaW1wb3J0IHJlZGlzQ2xpZW50LCB7IGhtc2V0QXN5bmMgfSBmcm9tICdyZWRpcy1jbGllbnQnO1xuXG5jb25zdCBsb2dpbkNvbnRyb2xsZXIgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBib2R5U2NoZW1hLnZhbGlkYXRlKHJlcS5ib2R5KTtcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBhd2FpdCBDb250YWN0LmZpbmRCeVBhc3N3b3JkKHtcbiAgICAgIGVtYWlsOiByZXEuYm9keS5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiByZXEuYm9keS5wYXNzd29yZFxuICAgIH0pO1xuICAgIGlmIChjb250YWN0KSB7XG4gICAgICBjb25zdCB0b2tlbiA9IGp3dC5lbmNvZGUoe1xuICAgICAgICBpZDogY29udGFjdC5pZCxcbiAgICAgICAgdXVpZDogY29udGFjdC51dWlkXG4gICAgICB9LCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUKTtcblxuICAgICAgY29uc3Qga2V5ID0gYGRvbmlzdG86Y29udGFjdDp0b2tlbjoke3Rva2VufWA7XG5cbiAgICAgIGF3YWl0IGhtc2V0QXN5bmMoa2V5LCB7XG4gICAgICAgIHVzZXJfaWQ6IGNvbnRhY3QuaWQsXG4gICAgICAgIHV1aWQ6IGNvbnRhY3QudXVpZFxuICAgICAgfSk7XG5cbiAgICAgIHJlZGlzQ2xpZW50LmV4cGlyZShrZXksIDg2NDAwKTsgLy8gZXhwaXJlIGluIDI0IGhvdXJzXG5cbiAgICAgIHJlc1xuICAgICAgICAuc3RhdHVzKDIwMClcbiAgICAgICAgLnNldCgndG9rZW4nLCB0b2tlbilcbiAgICAgICAgLmpzb24oY29udGFjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5zZW5kU3RhdHVzKDQwMSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2luQ29udHJvbGxlcjtcbiJdfQ==