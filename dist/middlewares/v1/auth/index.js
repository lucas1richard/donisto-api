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

/**
 * @fileOverview This is where all available api routes are defined, including
 * open vs protected routes. There is a redisClient used to save the contact token
 * and id to allow caching to reduce unnecessary database pings to authenticate
 * a contact.
 */
// import chalk from 'chalk';
const authMiddleware = _express.default.Router();

authMiddleware.use(async function authMiddleware(req, res, next) {
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
    } else {
      Object.assign(res.locals, {
        user_id: req.headers.user_id || 1
      });
    }

    next();
  } catch (err) {
    // if (req.method === 'GET') {
    //   res.sendFile(
    //     nodepath.join(
    //       __dirname, '..', 'public', 'unauthorized.html'
    //     )
    //   );
    // } else {
    res.status(401).send(err.message); // }
  }
});
var _default = authMiddleware;
/**
 * If a valid token is provided, otherwise **throw an error**
 */

exports.default = _default;

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
  console.log(decoded);
  const contact = await _Contact.default.find({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9taWRkbGV3YXJlcy92MS9hdXRoL2luZGV4LnRzIl0sIm5hbWVzIjpbImF1dGhNaWRkbGV3YXJlIiwiZXhwcmVzcyIsIlJvdXRlciIsInVzZSIsInJlcSIsInJlcyIsIm5leHQiLCJsb2NhbHMiLCJqd3RTZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJoZWFkZXJzIiwiTk9ERV9FTlYiLCJ1c2VyX2lkIiwidXVpZCIsImNoZWNrU2VjdXJlUm91dGUiLCJBcnJheSIsImlzQXJyYXkiLCJPYmplY3QiLCJhc3NpZ24iLCJlcnIiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsInRva2VuIiwia2V5IiwicmVkaXNTdG9yZWQiLCJyZWRpc0NsaWVudCIsImV4cGlyZSIsIkVycm9yIiwic2VjcmV0IiwiZGVjb2RlZCIsImp3dCIsImRlY29kZSIsImlkIiwiY29uc29sZSIsImxvZyIsImNvbnRhY3QiLCJDb250YWN0IiwiZmluZCIsIndoZXJlIiwiQ29udGFjdEtleXMiLCJVVUlEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBTUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7OztBQWJBOzs7Ozs7QUFXQTtBQUlBLE1BQU1BLGNBQWMsR0FBR0MsaUJBQVFDLE1BQVIsRUFBdkI7O0FBRUFGLGNBQWMsQ0FBQ0csR0FBZixDQUFtQixlQUFlSCxjQUFmLENBQThCSSxHQUE5QixFQUE0Q0MsR0FBNUMsRUFBMkRDLElBQTNELEVBQStFO0FBQ2hHLE1BQUk7QUFDRkQsSUFBQUEsR0FBRyxDQUFDRSxNQUFKLEdBQWE7QUFDWEMsTUFBQUEsU0FBUyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUM7QUFEWixLQUFiO0FBSUEsVUFBTTtBQUFFQyxNQUFBQTtBQUFGLFFBQW9CUixHQUFHLENBQUNTLE9BQTlCOztBQUNBLFFBQUlKLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxRQUFaLEtBQXlCLE1BQTdCLEVBQXFDO0FBQ25DLFlBQU07QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLFVBQW9CLE1BQU1DLGdCQUFnQixDQUFDQyxLQUFLLENBQUNDLE9BQU4sQ0FBY1AsYUFBZCxJQUErQkEsYUFBYSxDQUFDLENBQUQsQ0FBNUMsR0FBa0RBLGFBQW5ELENBQWhEO0FBQ0FRLE1BQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjaEIsR0FBRyxDQUFDRSxNQUFsQixFQUEwQjtBQUFFUSxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsT0FBMUI7QUFDRCxLQUhELE1BR087QUFDTEksTUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNoQixHQUFHLENBQUNFLE1BQWxCLEVBQTBCO0FBQUVRLFFBQUFBLE9BQU8sRUFBRVgsR0FBRyxDQUFDUyxPQUFKLENBQVlFLE9BQVosSUFBdUI7QUFBbEMsT0FBMUI7QUFDRDs7QUFDRFQsSUFBQUEsSUFBSTtBQUNMLEdBYkQsQ0FhRSxPQUFPZ0IsR0FBUCxFQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQWpCLElBQUFBLEdBQUcsQ0FBQ2tCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkYsR0FBRyxDQUFDRyxPQUF6QixFQVJZLENBU1o7QUFDRDtBQUNGLENBekJEO2VBMkJlekIsYztBQUVmOzs7Ozs7QUFHQSxlQUFlaUIsZ0JBQWYsQ0FBZ0NTLEtBQWhDLEVBQStDO0FBQzdDLFFBQU1DLEdBQUcsR0FBSSx5QkFBd0JELEtBQU0sRUFBM0M7QUFDQSxRQUFNRSxXQUFXLEdBQUcsTUFBTSwrQkFBYUQsR0FBYixDQUExQjs7QUFDQSxNQUFJQyxXQUFXLElBQUlBLFdBQVcsQ0FBQ2IsT0FBL0IsRUFBd0M7QUFDdEMsV0FBT2EsV0FBUDtBQUNEOztBQUVEQyx1QkFBWUMsTUFBWixDQUFtQkgsR0FBbkIsRUFBd0IsS0FBeEIsRUFQNkMsQ0FPYjs7O0FBQ2hDLE1BQUksQ0FBQ0QsS0FBRCxJQUFVQSxLQUFLLEtBQUssaUJBQXhCLEVBQTJDO0FBQ3pDLFVBQU1LLEtBQUssQ0FBQywyQ0FBRCxDQUFYO0FBQ0Q7O0FBRUQsUUFBTUMsTUFBTSxHQUFHdkIsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQTNCOztBQUNBLFFBQU1zQixPQUFPLEdBQUdDLG1CQUFJQyxNQUFKLENBQVdULEtBQVgsRUFBa0JNLE1BQWxCLENBQWhCOztBQUVBLFFBQU1qQixPQUFPLEdBQUdrQixPQUFPLENBQUNHLEVBQVIsSUFBY0gsT0FBTyxDQUFDUCxLQUF0QztBQUNBLFFBQU07QUFBRVYsSUFBQUE7QUFBRixNQUFXaUIsT0FBakI7QUFDQUksRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLE9BQVo7QUFDQSxRQUFNTSxPQUFPLEdBQUcsTUFBTUMsaUJBQVFDLElBQVIsQ0FBYTtBQUNqQ0MsSUFBQUEsS0FBSyxFQUFFO0FBQ0wsT0FBQ0MscUJBQVlDLElBQWIsR0FBb0I1QjtBQURmO0FBRDBCLEdBQWIsQ0FBdEI7O0FBTUEsTUFBSSxDQUFDdUIsT0FBTCxFQUFjO0FBQ1osVUFBTVIsS0FBSyxDQUFDLDJDQUFELENBQVg7QUFDRDs7QUFFRCwrQkFBV0osR0FBWCxFQUFnQjtBQUFFWixJQUFBQSxPQUFGO0FBQVdDLElBQUFBO0FBQVgsR0FBaEI7QUFDQSxTQUFPaUIsT0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IFRoaXMgaXMgd2hlcmUgYWxsIGF2YWlsYWJsZSBhcGkgcm91dGVzIGFyZSBkZWZpbmVkLCBpbmNsdWRpbmdcbiAqIG9wZW4gdnMgcHJvdGVjdGVkIHJvdXRlcy4gVGhlcmUgaXMgYSByZWRpc0NsaWVudCB1c2VkIHRvIHNhdmUgdGhlIGNvbnRhY3QgdG9rZW5cbiAqIGFuZCBpZCB0byBhbGxvdyBjYWNoaW5nIHRvIHJlZHVjZSB1bm5lY2Vzc2FyeSBkYXRhYmFzZSBwaW5ncyB0byBhdXRoZW50aWNhdGVcbiAqIGEgY29udGFjdC5cbiAqL1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnbW9kZWxzL0NvbnRhY3QnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgbm9kZXBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgand0IGZyb20gJ2p3dC1zaW1wbGUnO1xuLy8gaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCByZWRpc0NsaWVudCwgeyBoZ2V0QWxsQXN5bmMsIGhtc2V0QXN5bmMgfSBmcm9tICdyZWRpcy1jbGllbnQnO1xuaW1wb3J0IENvbnRhY3RLZXlzIGZyb20gJ21vZGVscy9Db250YWN0L3R5cGVzL0NvbnRhY3RLZXlzJztcblxuY29uc3QgYXV0aE1pZGRsZXdhcmUgPSBleHByZXNzLlJvdXRlcigpO1xuXG5hdXRoTWlkZGxld2FyZS51c2UoYXN5bmMgZnVuY3Rpb24gYXV0aE1pZGRsZXdhcmUocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICByZXMubG9jYWxzID0ge1xuICAgICAgand0U2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVUXG4gICAgfTtcblxuICAgIGNvbnN0IHsgYXV0aG9yaXphdGlvbiB9ID0gcmVxLmhlYWRlcnM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcpIHtcbiAgICAgIGNvbnN0IHsgdXNlcl9pZCwgdXVpZCB9ID0gYXdhaXQgY2hlY2tTZWN1cmVSb3V0ZShBcnJheS5pc0FycmF5KGF1dGhvcml6YXRpb24pID8gYXV0aG9yaXphdGlvblswXSA6IGF1dGhvcml6YXRpb24pO1xuICAgICAgT2JqZWN0LmFzc2lnbihyZXMubG9jYWxzLCB7IHVzZXJfaWQsIHV1aWQgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocmVzLmxvY2FscywgeyB1c2VyX2lkOiByZXEuaGVhZGVycy51c2VyX2lkIHx8IDEgfSk7XG4gICAgfVxuICAgIG5leHQoKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgLy8gICByZXMuc2VuZEZpbGUoXG4gICAgLy8gICAgIG5vZGVwYXRoLmpvaW4oXG4gICAgLy8gICAgICAgX19kaXJuYW1lLCAnLi4nLCAncHVibGljJywgJ3VuYXV0aG9yaXplZC5odG1sJ1xuICAgIC8vICAgICApXG4gICAgLy8gICApO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoZXJyLm1lc3NhZ2UpO1xuICAgIC8vIH1cbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhNaWRkbGV3YXJlO1xuXG4vKipcbiAqIElmIGEgdmFsaWQgdG9rZW4gaXMgcHJvdmlkZWQsIG90aGVyd2lzZSAqKnRocm93IGFuIGVycm9yKipcbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2hlY2tTZWN1cmVSb3V0ZSh0b2tlbjogc3RyaW5nKSB7XG4gIGNvbnN0IGtleSA9IGBkb25pc3RvOmNvbnRhY3Q6dG9rZW46JHt0b2tlbn1gO1xuICBjb25zdCByZWRpc1N0b3JlZCA9IGF3YWl0IGhnZXRBbGxBc3luYyhrZXkpO1xuICBpZiAocmVkaXNTdG9yZWQgJiYgcmVkaXNTdG9yZWQudXNlcl9pZCkge1xuICAgIHJldHVybiByZWRpc1N0b3JlZDtcbiAgfVxuXG4gIHJlZGlzQ2xpZW50LmV4cGlyZShrZXksIDg2NDAwKTsgLy8gZXhwaXJlIGluIDI0IGhvdXJzXG4gIGlmICghdG9rZW4gfHwgdG9rZW4gPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgdGhyb3cgRXJyb3IoJ1lvdSBtdXN0IGhhdmUgYW4gYWNjb3VudCBhbmQgYmUgbG9nZ2VkIGluJyk7XG4gIH1cblxuICBjb25zdCBzZWNyZXQgPSBwcm9jZXNzLmVudi5KV1RfU0VDUkVUO1xuICBjb25zdCBkZWNvZGVkID0gand0LmRlY29kZSh0b2tlbiwgc2VjcmV0KTtcblxuICBjb25zdCB1c2VyX2lkID0gZGVjb2RlZC5pZCB8fCBkZWNvZGVkLnRva2VuO1xuICBjb25zdCB7IHV1aWQgfSA9IGRlY29kZWQ7XG4gIGNvbnNvbGUubG9nKGRlY29kZWQpO1xuICBjb25zdCBjb250YWN0ID0gYXdhaXQgQ29udGFjdC5maW5kKHtcbiAgICB3aGVyZToge1xuICAgICAgW0NvbnRhY3RLZXlzLlVVSURdOiB1dWlkXG4gICAgfVxuICB9KTtcblxuICBpZiAoIWNvbnRhY3QpIHtcbiAgICB0aHJvdyBFcnJvcignWW91IG11c3QgaGF2ZSBhbiBhY2NvdW50IGFuZCBiZSBsb2dnZWQgaW4nKTtcbiAgfVxuXG4gIGhtc2V0QXN5bmMoa2V5LCB7IHVzZXJfaWQsIHV1aWQgfSk7XG4gIHJldHVybiBkZWNvZGVkO1xufVxuIl19