"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Contact = _interopRequireDefault(require("../../../models/Contact"));

var _express = _interopRequireDefault(require("express"));

var _jwtSimple = _interopRequireDefault(require("jwt-simple"));

var _redisClient = _interopRequireWildcard(require("../../../redis-client"));

var _ContactKeys = _interopRequireDefault(require("../../../models/Contact/types/ContactKeys"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import nodepath from 'path';
const authMiddleware = _express.default.Router();

authMiddleware.use(authMiddlewareFunc);
var _default = authMiddleware;
exports.default = _default;

async function authMiddlewareFunc(req, res, next) {
  try {
    res.locals = {
      jwtSecret: process.env.JWT_SECRET
    };
    const {
      authorization
    } = req.headers;

    if (process.env.NODE_ENV !== 'test') {
      const {
        user_id,
        uuid
      } = await checkSecureRoute(Array.isArray(authorization) ? authorization[0] : authorization);
      Object.assign(res.locals, {
        user_id,
        uuid
      });
      req.user = uuid;
    } else {
      Object.assign(res.locals, {
        user_id: req.headers.user_id || 1
      });
    }

    next();
  } catch (err) {
    res.status(401).send(err.message);
  }
}
/**
 * If a valid token is provided, otherwise **throw an error**
 */


async function checkSecureRoute(token) {
  const key = `donisto:contact:token:${token}`;
  const redisStored = await (0, _redisClient.hgetAllAsync)(key);

  if (redisStored && redisStored.user_id) {
    return redisStored;
  }

  _redisClient.default.expire(key, 86400); // expire in 24 hours


  if (!token || token === '[object Object]') {
    throw Error('You must have an account and be logged in');
  }

  const secret = process.env.JWT_SECRET;

  const decoded = _jwtSimple.default.decode(token, secret);

  const user_id = decoded.id || decoded.token;
  const {
    uuid
  } = decoded;
  const contact = await _Contact.default.findOne({
    where: {
      [_ContactKeys.default.UUID]: uuid
    }
  });

  if (!contact) {
    throw Error('You must have an account and be logged in');
  }

  (0, _redisClient.hmsetAsync)(key, {
    user_id,
    uuid
  });
  return decoded;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9taWRkbGV3YXJlcy92MS9hdXRoL2luZGV4LnRzIl0sIm5hbWVzIjpbImF1dGhNaWRkbGV3YXJlIiwiZXhwcmVzcyIsIlJvdXRlciIsInVzZSIsImF1dGhNaWRkbGV3YXJlRnVuYyIsInJlcSIsInJlcyIsIm5leHQiLCJsb2NhbHMiLCJqd3RTZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJoZWFkZXJzIiwiTk9ERV9FTlYiLCJ1c2VyX2lkIiwidXVpZCIsImNoZWNrU2VjdXJlUm91dGUiLCJBcnJheSIsImlzQXJyYXkiLCJPYmplY3QiLCJhc3NpZ24iLCJ1c2VyIiwiZXJyIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJ0b2tlbiIsImtleSIsInJlZGlzU3RvcmVkIiwicmVkaXNDbGllbnQiLCJleHBpcmUiLCJFcnJvciIsInNlY3JldCIsImRlY29kZWQiLCJqd3QiLCJkZWNvZGUiLCJpZCIsImNvbnRhY3QiLCJDb250YWN0IiwiZmluZE9uZSIsIndoZXJlIiwiQ29udGFjdEtleXMiLCJVVUlEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUhBO0FBS0EsTUFBTUEsY0FBYyxHQUFHQyxpQkFBUUMsTUFBUixFQUF2Qjs7QUFFQUYsY0FBYyxDQUFDRyxHQUFmLENBQW1CQyxrQkFBbkI7ZUFFZUosYzs7O0FBRWYsZUFBZUksa0JBQWYsQ0FBa0NDLEdBQWxDLEVBQWdEQyxHQUFoRCxFQUErREMsSUFBL0QsRUFBbUY7QUFDakYsTUFBSTtBQUNGRCxJQUFBQSxHQUFHLENBQUNFLE1BQUosR0FBYTtBQUNYQyxNQUFBQSxTQUFTLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQztBQURaLEtBQWI7QUFJQSxVQUFNO0FBQUVDLE1BQUFBO0FBQUYsUUFBb0JSLEdBQUcsQ0FBQ1MsT0FBOUI7O0FBQ0EsUUFBSUosT0FBTyxDQUFDQyxHQUFSLENBQVlJLFFBQVosS0FBeUIsTUFBN0IsRUFBcUM7QUFDbkMsWUFBTTtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsVUFBb0IsTUFBTUMsZ0JBQWdCLENBQzlDQyxLQUFLLENBQUNDLE9BQU4sQ0FBY1AsYUFBZCxJQUNJQSxhQUFhLENBQUMsQ0FBRCxDQURqQixHQUVJQSxhQUgwQyxDQUFoRDtBQUtBUSxNQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY2hCLEdBQUcsQ0FBQ0UsTUFBbEIsRUFBMEI7QUFBRVEsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE9BQTFCO0FBQ0FaLE1BQUFBLEdBQUcsQ0FBQ2tCLElBQUosR0FBV04sSUFBWDtBQUNELEtBUkQsTUFRTztBQUNMSSxNQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY2hCLEdBQUcsQ0FBQ0UsTUFBbEIsRUFBMEI7QUFBRVEsUUFBQUEsT0FBTyxFQUFFWCxHQUFHLENBQUNTLE9BQUosQ0FBWUUsT0FBWixJQUF1QjtBQUFsQyxPQUExQjtBQUNEOztBQUNEVCxJQUFBQSxJQUFJO0FBQ0wsR0FsQkQsQ0FrQkUsT0FBT2lCLEdBQVAsRUFBWTtBQUNabEIsSUFBQUEsR0FBRyxDQUFDbUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCRixHQUFHLENBQUNHLE9BQXpCO0FBQ0Q7QUFDRjtBQUVEOzs7OztBQUdBLGVBQWVULGdCQUFmLENBQWdDVSxLQUFoQyxFQUErQztBQUM3QyxRQUFNQyxHQUFHLEdBQUkseUJBQXdCRCxLQUFNLEVBQTNDO0FBQ0EsUUFBTUUsV0FBVyxHQUFHLE1BQU0sK0JBQWFELEdBQWIsQ0FBMUI7O0FBQ0EsTUFBSUMsV0FBVyxJQUFJQSxXQUFXLENBQUNkLE9BQS9CLEVBQXdDO0FBQ3RDLFdBQU9jLFdBQVA7QUFDRDs7QUFFREMsdUJBQVlDLE1BQVosQ0FBbUJILEdBQW5CLEVBQXdCLEtBQXhCLEVBUDZDLENBT2I7OztBQUNoQyxNQUFJLENBQUNELEtBQUQsSUFBVUEsS0FBSyxLQUFLLGlCQUF4QixFQUEyQztBQUN6QyxVQUFNSyxLQUFLLENBQUMsMkNBQUQsQ0FBWDtBQUNEOztBQUVELFFBQU1DLE1BQU0sR0FBR3hCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUEzQjs7QUFDQSxRQUFNdUIsT0FBTyxHQUFHQyxtQkFBSUMsTUFBSixDQUFXVCxLQUFYLEVBQWtCTSxNQUFsQixDQUFoQjs7QUFFQSxRQUFNbEIsT0FBTyxHQUFHbUIsT0FBTyxDQUFDRyxFQUFSLElBQWNILE9BQU8sQ0FBQ1AsS0FBdEM7QUFDQSxRQUFNO0FBQUVYLElBQUFBO0FBQUYsTUFBV2tCLE9BQWpCO0FBQ0EsUUFBTUksT0FBTyxHQUFHLE1BQU1DLGlCQUFRQyxPQUFSLENBQWdCO0FBQ3BDQyxJQUFBQSxLQUFLLEVBQUU7QUFDTCxPQUFDQyxxQkFBWUMsSUFBYixHQUFvQjNCO0FBRGY7QUFENkIsR0FBaEIsQ0FBdEI7O0FBTUEsTUFBSSxDQUFDc0IsT0FBTCxFQUFjO0FBQ1osVUFBTU4sS0FBSyxDQUFDLDJDQUFELENBQVg7QUFDRDs7QUFFRCwrQkFBV0osR0FBWCxFQUFnQjtBQUFFYixJQUFBQSxPQUFGO0FBQVdDLElBQUFBO0FBQVgsR0FBaEI7QUFDQSxTQUFPa0IsT0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhY3QgZnJvbSAnbW9kZWxzL0NvbnRhY3QnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG4vLyBpbXBvcnQgbm9kZXBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgand0IGZyb20gJ2p3dC1zaW1wbGUnO1xuaW1wb3J0IHJlZGlzQ2xpZW50LCB7IGhnZXRBbGxBc3luYywgaG1zZXRBc3luYyB9IGZyb20gJ3JlZGlzLWNsaWVudCc7XG5pbXBvcnQgQ29udGFjdEtleXMgZnJvbSAnbW9kZWxzL0NvbnRhY3QvdHlwZXMvQ29udGFjdEtleXMnO1xuXG5jb25zdCBhdXRoTWlkZGxld2FyZSA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbmF1dGhNaWRkbGV3YXJlLnVzZShhdXRoTWlkZGxld2FyZUZ1bmMpO1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoTWlkZGxld2FyZTtcblxuYXN5bmMgZnVuY3Rpb24gYXV0aE1pZGRsZXdhcmVGdW5jKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSB7XG4gIHRyeSB7XG4gICAgcmVzLmxvY2FscyA9IHtcbiAgICAgIGp3dFNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVFxuICAgIH07XG5cbiAgICBjb25zdCB7IGF1dGhvcml6YXRpb24gfSA9IHJlcS5oZWFkZXJzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgICBjb25zdCB7IHVzZXJfaWQsIHV1aWQgfSA9IGF3YWl0IGNoZWNrU2VjdXJlUm91dGUoXG4gICAgICAgIEFycmF5LmlzQXJyYXkoYXV0aG9yaXphdGlvbilcbiAgICAgICAgICA/IGF1dGhvcml6YXRpb25bMF1cbiAgICAgICAgICA6IGF1dGhvcml6YXRpb25cbiAgICAgICk7XG4gICAgICBPYmplY3QuYXNzaWduKHJlcy5sb2NhbHMsIHsgdXNlcl9pZCwgdXVpZCB9KTtcbiAgICAgIHJlcS51c2VyID0gdXVpZDtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmFzc2lnbihyZXMubG9jYWxzLCB7IHVzZXJfaWQ6IHJlcS5oZWFkZXJzLnVzZXJfaWQgfHwgMSB9KTtcbiAgICB9XG4gICAgbmV4dCgpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXMuc3RhdHVzKDQwMSkuc2VuZChlcnIubWVzc2FnZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBJZiBhIHZhbGlkIHRva2VuIGlzIHByb3ZpZGVkLCBvdGhlcndpc2UgKip0aHJvdyBhbiBlcnJvcioqXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrU2VjdXJlUm91dGUodG9rZW46IHN0cmluZykge1xuICBjb25zdCBrZXkgPSBgZG9uaXN0bzpjb250YWN0OnRva2VuOiR7dG9rZW59YDtcbiAgY29uc3QgcmVkaXNTdG9yZWQgPSBhd2FpdCBoZ2V0QWxsQXN5bmMoa2V5KTtcbiAgaWYgKHJlZGlzU3RvcmVkICYmIHJlZGlzU3RvcmVkLnVzZXJfaWQpIHtcbiAgICByZXR1cm4gcmVkaXNTdG9yZWQ7XG4gIH1cblxuICByZWRpc0NsaWVudC5leHBpcmUoa2V5LCA4NjQwMCk7IC8vIGV4cGlyZSBpbiAyNCBob3Vyc1xuICBpZiAoIXRva2VuIHx8IHRva2VuID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIHRocm93IEVycm9yKCdZb3UgbXVzdCBoYXZlIGFuIGFjY291bnQgYW5kIGJlIGxvZ2dlZCBpbicpO1xuICB9XG5cbiAgY29uc3Qgc2VjcmV0ID0gcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVDtcbiAgY29uc3QgZGVjb2RlZCA9IGp3dC5kZWNvZGUodG9rZW4sIHNlY3JldCk7XG5cbiAgY29uc3QgdXNlcl9pZCA9IGRlY29kZWQuaWQgfHwgZGVjb2RlZC50b2tlbjtcbiAgY29uc3QgeyB1dWlkIH0gPSBkZWNvZGVkO1xuICBjb25zdCBjb250YWN0ID0gYXdhaXQgQ29udGFjdC5maW5kT25lKHtcbiAgICB3aGVyZToge1xuICAgICAgW0NvbnRhY3RLZXlzLlVVSURdOiB1dWlkXG4gICAgfVxuICB9KTtcblxuICBpZiAoIWNvbnRhY3QpIHtcbiAgICB0aHJvdyBFcnJvcignWW91IG11c3QgaGF2ZSBhbiBhY2NvdW50IGFuZCBiZSBsb2dnZWQgaW4nKTtcbiAgfVxuXG4gIGhtc2V0QXN5bmMoa2V5LCB7IHVzZXJfaWQsIHV1aWQgfSk7XG4gIHJldHVybiBkZWNvZGVkO1xufVxuIl19