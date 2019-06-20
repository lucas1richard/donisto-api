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
      req.user = {
        uuid
      };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9taWRkbGV3YXJlcy92MS9hdXRoL2luZGV4LnRzIl0sIm5hbWVzIjpbImF1dGhNaWRkbGV3YXJlIiwiZXhwcmVzcyIsIlJvdXRlciIsInVzZSIsImF1dGhNaWRkbGV3YXJlRnVuYyIsInJlcSIsInJlcyIsIm5leHQiLCJsb2NhbHMiLCJqd3RTZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJoZWFkZXJzIiwiTk9ERV9FTlYiLCJ1c2VyX2lkIiwidXVpZCIsImNoZWNrU2VjdXJlUm91dGUiLCJBcnJheSIsImlzQXJyYXkiLCJPYmplY3QiLCJhc3NpZ24iLCJ1c2VyIiwiZXJyIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJ0b2tlbiIsImtleSIsInJlZGlzU3RvcmVkIiwicmVkaXNDbGllbnQiLCJleHBpcmUiLCJFcnJvciIsInNlY3JldCIsImRlY29kZWQiLCJqd3QiLCJkZWNvZGUiLCJpZCIsImNvbnRhY3QiLCJDb250YWN0IiwiZmluZE9uZSIsIndoZXJlIiwiQ29udGFjdEtleXMiLCJVVUlEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUhBO0FBS0EsTUFBTUEsY0FBYyxHQUFHQyxpQkFBUUMsTUFBUixFQUF2Qjs7QUFFQUYsY0FBYyxDQUFDRyxHQUFmLENBQW1CQyxrQkFBbkI7ZUFFZUosYzs7O0FBRWYsZUFBZUksa0JBQWYsQ0FBa0NDLEdBQWxDLEVBQWdEQyxHQUFoRCxFQUErREMsSUFBL0QsRUFBbUY7QUFDakYsTUFBSTtBQUNGRCxJQUFBQSxHQUFHLENBQUNFLE1BQUosR0FBYTtBQUNYQyxNQUFBQSxTQUFTLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQztBQURaLEtBQWI7QUFJQSxVQUFNO0FBQUVDLE1BQUFBO0FBQUYsUUFBb0JSLEdBQUcsQ0FBQ1MsT0FBOUI7O0FBQ0EsUUFBSUosT0FBTyxDQUFDQyxHQUFSLENBQVlJLFFBQVosS0FBeUIsTUFBN0IsRUFBcUM7QUFDbkMsWUFBTTtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsVUFBb0IsTUFBTUMsZ0JBQWdCLENBQzlDQyxLQUFLLENBQUNDLE9BQU4sQ0FBY1AsYUFBZCxJQUNJQSxhQUFhLENBQUMsQ0FBRCxDQURqQixHQUVJQSxhQUgwQyxDQUFoRDtBQUtBUSxNQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY2hCLEdBQUcsQ0FBQ0UsTUFBbEIsRUFBMEI7QUFBRVEsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE9BQTFCO0FBQ0FaLE1BQUFBLEdBQUcsQ0FBQ2tCLElBQUosR0FBVztBQUFFTixRQUFBQTtBQUFGLE9BQVg7QUFDRCxLQVJELE1BUU87QUFDTEksTUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNoQixHQUFHLENBQUNFLE1BQWxCLEVBQTBCO0FBQUVRLFFBQUFBLE9BQU8sRUFBRVgsR0FBRyxDQUFDUyxPQUFKLENBQVlFLE9BQVosSUFBdUI7QUFBbEMsT0FBMUI7QUFDRDs7QUFDRFQsSUFBQUEsSUFBSTtBQUNMLEdBbEJELENBa0JFLE9BQU9pQixHQUFQLEVBQVk7QUFDWmxCLElBQUFBLEdBQUcsQ0FBQ21CLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkYsR0FBRyxDQUFDRyxPQUF6QjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7QUFHQSxlQUFlVCxnQkFBZixDQUFnQ1UsS0FBaEMsRUFBK0M7QUFDN0MsUUFBTUMsR0FBRyxHQUFJLHlCQUF3QkQsS0FBTSxFQUEzQztBQUNBLFFBQU1FLFdBQVcsR0FBRyxNQUFNLCtCQUFhRCxHQUFiLENBQTFCOztBQUNBLE1BQUlDLFdBQVcsSUFBSUEsV0FBVyxDQUFDZCxPQUEvQixFQUF3QztBQUN0QyxXQUFPYyxXQUFQO0FBQ0Q7O0FBRURDLHVCQUFZQyxNQUFaLENBQW1CSCxHQUFuQixFQUF3QixLQUF4QixFQVA2QyxDQU9iOzs7QUFDaEMsTUFBSSxDQUFDRCxLQUFELElBQVVBLEtBQUssS0FBSyxpQkFBeEIsRUFBMkM7QUFDekMsVUFBTUssS0FBSyxDQUFDLDJDQUFELENBQVg7QUFDRDs7QUFFRCxRQUFNQyxNQUFNLEdBQUd4QixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBM0I7O0FBQ0EsUUFBTXVCLE9BQU8sR0FBR0MsbUJBQUlDLE1BQUosQ0FBV1QsS0FBWCxFQUFrQk0sTUFBbEIsQ0FBaEI7O0FBRUEsUUFBTWxCLE9BQU8sR0FBR21CLE9BQU8sQ0FBQ0csRUFBUixJQUFjSCxPQUFPLENBQUNQLEtBQXRDO0FBQ0EsUUFBTTtBQUFFWCxJQUFBQTtBQUFGLE1BQVdrQixPQUFqQjtBQUNBLFFBQU1JLE9BQU8sR0FBRyxNQUFNQyxpQkFBUUMsT0FBUixDQUFnQjtBQUNwQ0MsSUFBQUEsS0FBSyxFQUFFO0FBQ0wsT0FBQ0MscUJBQVlDLElBQWIsR0FBb0IzQjtBQURmO0FBRDZCLEdBQWhCLENBQXRCOztBQU1BLE1BQUksQ0FBQ3NCLE9BQUwsRUFBYztBQUNaLFVBQU1OLEtBQUssQ0FBQywyQ0FBRCxDQUFYO0FBQ0Q7O0FBRUQsK0JBQVdKLEdBQVgsRUFBZ0I7QUFBRWIsSUFBQUEsT0FBRjtBQUFXQyxJQUFBQTtBQUFYLEdBQWhCO0FBQ0EsU0FBT2tCLE9BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWN0IGZyb20gJ21vZGVscy9Db250YWN0JztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuLy8gaW1wb3J0IG5vZGVwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGp3dCBmcm9tICdqd3Qtc2ltcGxlJztcbmltcG9ydCByZWRpc0NsaWVudCwgeyBoZ2V0QWxsQXN5bmMsIGhtc2V0QXN5bmMgfSBmcm9tICdyZWRpcy1jbGllbnQnO1xuaW1wb3J0IENvbnRhY3RLZXlzIGZyb20gJ21vZGVscy9Db250YWN0L3R5cGVzL0NvbnRhY3RLZXlzJztcblxuY29uc3QgYXV0aE1pZGRsZXdhcmUgPSBleHByZXNzLlJvdXRlcigpO1xuXG5hdXRoTWlkZGxld2FyZS51c2UoYXV0aE1pZGRsZXdhcmVGdW5jKTtcblxuZXhwb3J0IGRlZmF1bHQgYXV0aE1pZGRsZXdhcmU7XG5cbmFzeW5jIGZ1bmN0aW9uIGF1dGhNaWRkbGV3YXJlRnVuYyhyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICB0cnkge1xuICAgIHJlcy5sb2NhbHMgPSB7XG4gICAgICBqd3RTZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9TRUNSRVRcbiAgICB9O1xuXG4gICAgY29uc3QgeyBhdXRob3JpemF0aW9uIH0gPSByZXEuaGVhZGVycztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgICAgY29uc3QgeyB1c2VyX2lkLCB1dWlkIH0gPSBhd2FpdCBjaGVja1NlY3VyZVJvdXRlKFxuICAgICAgICBBcnJheS5pc0FycmF5KGF1dGhvcml6YXRpb24pXG4gICAgICAgICAgPyBhdXRob3JpemF0aW9uWzBdXG4gICAgICAgICAgOiBhdXRob3JpemF0aW9uXG4gICAgICApO1xuICAgICAgT2JqZWN0LmFzc2lnbihyZXMubG9jYWxzLCB7IHVzZXJfaWQsIHV1aWQgfSk7XG4gICAgICByZXEudXNlciA9IHsgdXVpZCB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3QuYXNzaWduKHJlcy5sb2NhbHMsIHsgdXNlcl9pZDogcmVxLmhlYWRlcnMudXNlcl9pZCB8fCAxIH0pO1xuICAgIH1cbiAgICBuZXh0KCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKGVyci5tZXNzYWdlKTtcbiAgfVxufVxuXG4vKipcbiAqIElmIGEgdmFsaWQgdG9rZW4gaXMgcHJvdmlkZWQsIG90aGVyd2lzZSAqKnRocm93IGFuIGVycm9yKipcbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2hlY2tTZWN1cmVSb3V0ZSh0b2tlbjogc3RyaW5nKSB7XG4gIGNvbnN0IGtleSA9IGBkb25pc3RvOmNvbnRhY3Q6dG9rZW46JHt0b2tlbn1gO1xuICBjb25zdCByZWRpc1N0b3JlZCA9IGF3YWl0IGhnZXRBbGxBc3luYyhrZXkpO1xuICBpZiAocmVkaXNTdG9yZWQgJiYgcmVkaXNTdG9yZWQudXNlcl9pZCkge1xuICAgIHJldHVybiByZWRpc1N0b3JlZDtcbiAgfVxuXG4gIHJlZGlzQ2xpZW50LmV4cGlyZShrZXksIDg2NDAwKTsgLy8gZXhwaXJlIGluIDI0IGhvdXJzXG4gIGlmICghdG9rZW4gfHwgdG9rZW4gPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgdGhyb3cgRXJyb3IoJ1lvdSBtdXN0IGhhdmUgYW4gYWNjb3VudCBhbmQgYmUgbG9nZ2VkIGluJyk7XG4gIH1cblxuICBjb25zdCBzZWNyZXQgPSBwcm9jZXNzLmVudi5KV1RfU0VDUkVUO1xuICBjb25zdCBkZWNvZGVkID0gand0LmRlY29kZSh0b2tlbiwgc2VjcmV0KTtcblxuICBjb25zdCB1c2VyX2lkID0gZGVjb2RlZC5pZCB8fCBkZWNvZGVkLnRva2VuO1xuICBjb25zdCB7IHV1aWQgfSA9IGRlY29kZWQ7XG4gIGNvbnN0IGNvbnRhY3QgPSBhd2FpdCBDb250YWN0LmZpbmRPbmUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBbQ29udGFjdEtleXMuVVVJRF06IHV1aWRcbiAgICB9XG4gIH0pO1xuXG4gIGlmICghY29udGFjdCkge1xuICAgIHRocm93IEVycm9yKCdZb3UgbXVzdCBoYXZlIGFuIGFjY291bnQgYW5kIGJlIGxvZ2dlZCBpbicpO1xuICB9XG5cbiAgaG1zZXRBc3luYyhrZXksIHsgdXNlcl9pZCwgdXVpZCB9KTtcbiAgcmV0dXJuIGRlY29kZWQ7XG59XG4iXX0=