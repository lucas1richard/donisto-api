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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2hhbmRsZVRva2VuLnRzIl0sIm5hbWVzIjpbImhhbmRsZVRva2VuIiwiaWQiLCJ1dWlkIiwidG9rZW4iLCJqd3QiLCJlbmNvZGUiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImtleSIsInVzZXJfaWQiLCJyZWRpc0NsaWVudCIsImV4cGlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQSxlQUFlQSxXQUFmLENBQTJCQyxFQUEzQixFQUF1Q0MsSUFBdkMsRUFBcUQ7QUFDbkQsUUFBTUMsS0FBSyxHQUFHQyxtQkFBSUMsTUFBSixDQUFXO0FBQ3ZCSixJQUFBQSxFQUR1QjtBQUV2QkMsSUFBQUE7QUFGdUIsR0FBWCxFQUdYSSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFIRCxDQUFkOztBQUtBLFFBQU1DLEdBQUcsR0FBSSx5QkFBd0JOLEtBQU0sRUFBM0M7QUFFQSxRQUFNLDZCQUFXTSxHQUFYLEVBQWdCO0FBQ3BCQyxJQUFBQSxPQUFPLEVBQUVULEVBRFc7QUFFcEJDLElBQUFBLElBQUksRUFBRUE7QUFGYyxHQUFoQixDQUFOOztBQUtBUyx1QkFBWUMsTUFBWixDQUFtQkgsR0FBbkIsRUFBd0IsS0FBeEIsRUFibUQsQ0FhbkI7OztBQUVoQyxTQUFPTixLQUFQO0FBQ0Q7O2VBRWNILFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2p3dC1zaW1wbGUnO1xuaW1wb3J0IHJlZGlzQ2xpZW50LCB7IGhtc2V0QXN5bmMgfSBmcm9tICdyZWRpcy1jbGllbnQnO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVUb2tlbihpZDogc3RyaW5nLCB1dWlkOiBzdHJpbmcpIHtcbiAgY29uc3QgdG9rZW4gPSBqd3QuZW5jb2RlKHtcbiAgICBpZCxcbiAgICB1dWlkXG4gIH0sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQpO1xuXG4gIGNvbnN0IGtleSA9IGBkb25pc3RvOmNvbnRhY3Q6dG9rZW46JHt0b2tlbn1gO1xuXG4gIGF3YWl0IGhtc2V0QXN5bmMoa2V5LCB7XG4gICAgdXNlcl9pZDogaWQsXG4gICAgdXVpZDogdXVpZFxuICB9KTtcblxuICByZWRpc0NsaWVudC5leHBpcmUoa2V5LCA4NjQwMCk7IC8vIGV4cGlyZSBpbiAyNCBob3Vyc1xuXG4gIHJldHVybiB0b2tlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlVG9rZW47XG4iXX0=