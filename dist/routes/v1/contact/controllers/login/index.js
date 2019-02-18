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
      console.log(process.env.JWT_SECRET);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY29udGFjdC9jb250cm9sbGVycy9sb2dpbi9pbmRleC50cyJdLCJuYW1lcyI6WyJsb2dpbkNvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwiYm9keVNjaGVtYSIsInZhbGlkYXRlIiwiYm9keSIsImNvbnRhY3QiLCJDb250YWN0IiwiZmluZEJ5UGFzc3dvcmQiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwidG9rZW4iLCJqd3QiLCJlbmNvZGUiLCJpZCIsInV1aWQiLCJrZXkiLCJ1c2VyX2lkIiwicmVkaXNDbGllbnQiLCJleHBpcmUiLCJzdGF0dXMiLCJzZXQiLCJqc29uIiwic2VuZFN0YXR1cyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxlQUFlLEdBQUcsT0FBT0MsR0FBUCxFQUFxQkMsR0FBckIsRUFBb0NDLElBQXBDLEtBQTJEO0FBQ2pGLE1BQUk7QUFDRixVQUFNQyxxQkFBV0MsUUFBWCxDQUFvQkosR0FBRyxDQUFDSyxJQUF4QixDQUFOO0FBRUEsVUFBTUMsT0FBTyxHQUFHLE1BQU1DLGlCQUFRQyxjQUFSLENBQXVCO0FBQzNDQyxNQUFBQSxLQUFLLEVBQUVULEdBQUcsQ0FBQ0ssSUFBSixDQUFTSSxLQUQyQjtBQUUzQ0MsTUFBQUEsUUFBUSxFQUFFVixHQUFHLENBQUNLLElBQUosQ0FBU0s7QUFGd0IsS0FBdkIsQ0FBdEI7O0FBSUEsUUFBSUosT0FBSixFQUFhO0FBQ1hLLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBeEI7O0FBQ0EsWUFBTUMsS0FBSyxHQUFHQyxtQkFBSUMsTUFBSixDQUFXO0FBQ3ZCQyxRQUFBQSxFQUFFLEVBQUViLE9BQU8sQ0FBQ2EsRUFEVztBQUV2QkMsUUFBQUEsSUFBSSxFQUFFZCxPQUFPLENBQUNjO0FBRlMsT0FBWCxFQUdYUCxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFIRCxDQUFkOztBQUtBLFlBQU1NLEdBQUcsR0FBSSx5QkFBd0JMLEtBQU0sRUFBM0M7QUFFQSxZQUFNLDZCQUFXSyxHQUFYLEVBQWdCO0FBQ3BCQyxRQUFBQSxPQUFPLEVBQUVoQixPQUFPLENBQUNhLEVBREc7QUFFcEJDLFFBQUFBLElBQUksRUFBRWQsT0FBTyxDQUFDYztBQUZNLE9BQWhCLENBQU47O0FBS0FHLDJCQUFZQyxNQUFaLENBQW1CSCxHQUFuQixFQUF3QixLQUF4QixFQWRXLENBY3FCOzs7QUFFaENwQixNQUFBQSxHQUFHLENBQ0F3QixNQURILENBQ1UsR0FEVixFQUVHQyxHQUZILENBRU8sT0FGUCxFQUVnQlYsS0FGaEIsRUFHR1csSUFISCxDQUdRckIsT0FIUjtBQUlELEtBcEJELE1Bb0JPO0FBQ0xMLE1BQUFBLEdBQUcsQ0FBQzJCLFVBQUosQ0FBZSxHQUFmO0FBQ0Q7QUFDRixHQTlCRCxDQThCRSxPQUFPQyxHQUFQLEVBQVk7QUFDWjNCLElBQUFBLElBQUksQ0FBQzJCLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0FsQ0Q7O2VBb0NlOUIsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBDb250YWN0IGZyb20gJ21vZGVscy9Db250YWN0JztcbmltcG9ydCB7IGJvZHlTY2hlbWEgfSBmcm9tICcuL3ZhbGlkYXRlJztcbmltcG9ydCBqd3QgZnJvbSAnand0LXNpbXBsZSc7XG5pbXBvcnQgcmVkaXNDbGllbnQsIHsgaG1zZXRBc3luYyB9IGZyb20gJ3JlZGlzLWNsaWVudCc7XG5cbmNvbnN0IGxvZ2luQ29udHJvbGxlciA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IGJvZHlTY2hlbWEudmFsaWRhdGUocmVxLmJvZHkpO1xuXG4gICAgY29uc3QgY29udGFjdCA9IGF3YWl0IENvbnRhY3QuZmluZEJ5UGFzc3dvcmQoe1xuICAgICAgZW1haWw6IHJlcS5ib2R5LmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IHJlcS5ib2R5LnBhc3N3b3JkXG4gICAgfSk7XG4gICAgaWYgKGNvbnRhY3QpIHtcbiAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LkpXVF9TRUNSRVQpO1xuICAgICAgY29uc3QgdG9rZW4gPSBqd3QuZW5jb2RlKHtcbiAgICAgICAgaWQ6IGNvbnRhY3QuaWQsXG4gICAgICAgIHV1aWQ6IGNvbnRhY3QudXVpZFxuICAgICAgfSwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCk7XG5cbiAgICAgIGNvbnN0IGtleSA9IGBkb25pc3RvOmNvbnRhY3Q6dG9rZW46JHt0b2tlbn1gO1xuXG4gICAgICBhd2FpdCBobXNldEFzeW5jKGtleSwge1xuICAgICAgICB1c2VyX2lkOiBjb250YWN0LmlkLFxuICAgICAgICB1dWlkOiBjb250YWN0LnV1aWRcbiAgICAgIH0pO1xuXG4gICAgICByZWRpc0NsaWVudC5leHBpcmUoa2V5LCA4NjQwMCk7IC8vIGV4cGlyZSBpbiAyNCBob3Vyc1xuXG4gICAgICByZXNcbiAgICAgICAgLnN0YXR1cygyMDApXG4gICAgICAgIC5zZXQoJ3Rva2VuJywgdG9rZW4pXG4gICAgICAgIC5qc29uKGNvbnRhY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMuc2VuZFN0YXR1cyg0MDEpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dpbkNvbnRyb2xsZXI7XG4iXX0=