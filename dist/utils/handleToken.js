"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jwtSimple = _interopRequireDefault(require("jwt-simple"));

var _redisClient = _interopRequireWildcard(require("../redis-client"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function handleToken(id, uuid) {
  const token = _jwtSimple.default.encode({
    id,
    uuid
  }, process.env.JWT_SECRET);

  const key = `donisto:contact:token:${token}`;
  await (0, _redisClient.hmsetAsync)(key, {
    user_id: id,
    uuid: uuid
  });

  _redisClient.default.expire(key, 86400); // expire in 24 hours


  return token;
}

var _default = handleToken;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9oYW5kbGVUb2tlbi50cyJdLCJuYW1lcyI6WyJoYW5kbGVUb2tlbiIsImlkIiwidXVpZCIsInRva2VuIiwiand0IiwiZW5jb2RlIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJrZXkiLCJ1c2VyX2lkIiwicmVkaXNDbGllbnQiLCJleHBpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsZUFBZUEsV0FBZixDQUEyQkMsRUFBM0IsRUFBdUNDLElBQXZDLEVBQXFEO0FBQ25ELFFBQU1DLEtBQUssR0FBR0MsbUJBQUlDLE1BQUosQ0FBVztBQUN2QkosSUFBQUEsRUFEdUI7QUFFdkJDLElBQUFBO0FBRnVCLEdBQVgsRUFHWEksT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBSEQsQ0FBZDs7QUFLQSxRQUFNQyxHQUFHLEdBQUkseUJBQXdCTixLQUFNLEVBQTNDO0FBRUEsUUFBTSw2QkFBV00sR0FBWCxFQUFnQjtBQUNwQkMsSUFBQUEsT0FBTyxFQUFFVCxFQURXO0FBRXBCQyxJQUFBQSxJQUFJLEVBQUVBO0FBRmMsR0FBaEIsQ0FBTjs7QUFLQVMsdUJBQVlDLE1BQVosQ0FBbUJILEdBQW5CLEVBQXdCLEtBQXhCLEVBYm1ELENBYW5COzs7QUFFaEMsU0FBT04sS0FBUDtBQUNEOztlQUVjSCxXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tICdqd3Qtc2ltcGxlJztcbmltcG9ydCByZWRpc0NsaWVudCwgeyBobXNldEFzeW5jIH0gZnJvbSAncmVkaXMtY2xpZW50JztcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlVG9rZW4oaWQ6IHN0cmluZywgdXVpZDogc3RyaW5nKSB7XG4gIGNvbnN0IHRva2VuID0gand0LmVuY29kZSh7XG4gICAgaWQsXG4gICAgdXVpZFxuICB9LCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUKTtcblxuICBjb25zdCBrZXkgPSBgZG9uaXN0bzpjb250YWN0OnRva2VuOiR7dG9rZW59YDtcblxuICBhd2FpdCBobXNldEFzeW5jKGtleSwge1xuICAgIHVzZXJfaWQ6IGlkLFxuICAgIHV1aWQ6IHV1aWRcbiAgfSk7XG5cbiAgcmVkaXNDbGllbnQuZXhwaXJlKGtleSwgODY0MDApOyAvLyBleHBpcmUgaW4gMjQgaG91cnNcblxuICByZXR1cm4gdG9rZW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZVRva2VuO1xuIl19