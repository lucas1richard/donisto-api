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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9taWRkbGV3YXJlcy92MS9hdXRoL2luZGV4LnRzIl0sIm5hbWVzIjpbImF1dGhNaWRkbGV3YXJlIiwiZXhwcmVzcyIsIlJvdXRlciIsInVzZSIsInJlcSIsInJlcyIsIm5leHQiLCJsb2NhbHMiLCJqd3RTZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJoZWFkZXJzIiwiTk9ERV9FTlYiLCJ1c2VyX2lkIiwidXVpZCIsImNoZWNrU2VjdXJlUm91dGUiLCJBcnJheSIsImlzQXJyYXkiLCJPYmplY3QiLCJhc3NpZ24iLCJlcnIiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsInRva2VuIiwia2V5IiwicmVkaXNTdG9yZWQiLCJyZWRpc0NsaWVudCIsImV4cGlyZSIsIkVycm9yIiwic2VjcmV0IiwiZGVjb2RlZCIsImp3dCIsImRlY29kZSIsImlkIiwiY29uc29sZSIsImxvZyIsImNvbnRhY3QiLCJDb250YWN0IiwiZmluZE9uZSIsIndoZXJlIiwiQ29udGFjdEtleXMiLCJVVUlEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBTUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7OztBQWJBOzs7Ozs7QUFXQTtBQUlBLE1BQU1BLGNBQWMsR0FBR0MsaUJBQVFDLE1BQVIsRUFBdkI7O0FBRUFGLGNBQWMsQ0FBQ0csR0FBZixDQUFtQixlQUFlSCxjQUFmLENBQThCSSxHQUE5QixFQUE0Q0MsR0FBNUMsRUFBMkRDLElBQTNELEVBQStFO0FBQ2hHLE1BQUk7QUFDRkQsSUFBQUEsR0FBRyxDQUFDRSxNQUFKLEdBQWE7QUFDWEMsTUFBQUEsU0FBUyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUM7QUFEWixLQUFiO0FBSUEsVUFBTTtBQUFFQyxNQUFBQTtBQUFGLFFBQW9CUixHQUFHLENBQUNTLE9BQTlCOztBQUNBLFFBQUlKLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxRQUFaLEtBQXlCLE1BQTdCLEVBQXFDO0FBQ25DLFlBQU07QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLFVBQW9CLE1BQU1DLGdCQUFnQixDQUFDQyxLQUFLLENBQUNDLE9BQU4sQ0FBY1AsYUFBZCxJQUErQkEsYUFBYSxDQUFDLENBQUQsQ0FBNUMsR0FBa0RBLGFBQW5ELENBQWhEO0FBQ0FRLE1BQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjaEIsR0FBRyxDQUFDRSxNQUFsQixFQUEwQjtBQUFFUSxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsT0FBMUI7QUFDRCxLQUhELE1BR087QUFDTEksTUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNoQixHQUFHLENBQUNFLE1BQWxCLEVBQTBCO0FBQUVRLFFBQUFBLE9BQU8sRUFBRVgsR0FBRyxDQUFDUyxPQUFKLENBQVlFLE9BQVosSUFBdUI7QUFBbEMsT0FBMUI7QUFDRDs7QUFDRFQsSUFBQUEsSUFBSTtBQUNMLEdBYkQsQ0FhRSxPQUFPZ0IsR0FBUCxFQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQWpCLElBQUFBLEdBQUcsQ0FBQ2tCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkYsR0FBRyxDQUFDRyxPQUF6QixFQVJZLENBU1o7QUFDRDtBQUNGLENBekJEO2VBMkJlekIsYztBQUVmOzs7Ozs7QUFHQSxlQUFlaUIsZ0JBQWYsQ0FBZ0NTLEtBQWhDLEVBQStDO0FBQzdDLFFBQU1DLEdBQUcsR0FBSSx5QkFBd0JELEtBQU0sRUFBM0M7QUFDQSxRQUFNRSxXQUFXLEdBQUcsTUFBTSwrQkFBYUQsR0FBYixDQUExQjs7QUFDQSxNQUFJQyxXQUFXLElBQUlBLFdBQVcsQ0FBQ2IsT0FBL0IsRUFBd0M7QUFDdEMsV0FBT2EsV0FBUDtBQUNEOztBQUVEQyx1QkFBWUMsTUFBWixDQUFtQkgsR0FBbkIsRUFBd0IsS0FBeEIsRUFQNkMsQ0FPYjs7O0FBQ2hDLE1BQUksQ0FBQ0QsS0FBRCxJQUFVQSxLQUFLLEtBQUssaUJBQXhCLEVBQTJDO0FBQ3pDLFVBQU1LLEtBQUssQ0FBQywyQ0FBRCxDQUFYO0FBQ0Q7O0FBRUQsUUFBTUMsTUFBTSxHQUFHdkIsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQTNCOztBQUNBLFFBQU1zQixPQUFPLEdBQUdDLG1CQUFJQyxNQUFKLENBQVdULEtBQVgsRUFBa0JNLE1BQWxCLENBQWhCOztBQUVBLFFBQU1qQixPQUFPLEdBQUdrQixPQUFPLENBQUNHLEVBQVIsSUFBY0gsT0FBTyxDQUFDUCxLQUF0QztBQUNBLFFBQU07QUFBRVYsSUFBQUE7QUFBRixNQUFXaUIsT0FBakI7QUFDQUksRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLE9BQVo7QUFDQSxRQUFNTSxPQUFPLEdBQUcsTUFBTUMsaUJBQVFDLE9BQVIsQ0FBZ0I7QUFDcENDLElBQUFBLEtBQUssRUFBRTtBQUNMLE9BQUNDLHFCQUFZQyxJQUFiLEdBQW9CNUI7QUFEZjtBQUQ2QixHQUFoQixDQUF0Qjs7QUFNQSxNQUFJLENBQUN1QixPQUFMLEVBQWM7QUFDWixVQUFNUixLQUFLLENBQUMsMkNBQUQsQ0FBWDtBQUNEOztBQUVELCtCQUFXSixHQUFYLEVBQWdCO0FBQUVaLElBQUFBLE9BQUY7QUFBV0MsSUFBQUE7QUFBWCxHQUFoQjtBQUNBLFNBQU9pQixPQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgVGhpcyBpcyB3aGVyZSBhbGwgYXZhaWxhYmxlIGFwaSByb3V0ZXMgYXJlIGRlZmluZWQsIGluY2x1ZGluZ1xuICogb3BlbiB2cyBwcm90ZWN0ZWQgcm91dGVzLiBUaGVyZSBpcyBhIHJlZGlzQ2xpZW50IHVzZWQgdG8gc2F2ZSB0aGUgY29udGFjdCB0b2tlblxuICogYW5kIGlkIHRvIGFsbG93IGNhY2hpbmcgdG8gcmVkdWNlIHVubmVjZXNzYXJ5IGRhdGFiYXNlIHBpbmdzIHRvIGF1dGhlbnRpY2F0ZVxuICogYSBjb250YWN0LlxuICovXG5pbXBvcnQgQ29udGFjdCBmcm9tICdtb2RlbHMvQ29udGFjdCc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBub2RlcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBqd3QgZnJvbSAnand0LXNpbXBsZSc7XG4vLyBpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuaW1wb3J0IHJlZGlzQ2xpZW50LCB7IGhnZXRBbGxBc3luYywgaG1zZXRBc3luYyB9IGZyb20gJ3JlZGlzLWNsaWVudCc7XG5pbXBvcnQgQ29udGFjdEtleXMgZnJvbSAnbW9kZWxzL0NvbnRhY3QvdHlwZXMvQ29udGFjdEtleXMnO1xuXG5jb25zdCBhdXRoTWlkZGxld2FyZSA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbmF1dGhNaWRkbGV3YXJlLnVzZShhc3luYyBmdW5jdGlvbiBhdXRoTWlkZGxld2FyZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICB0cnkge1xuICAgIHJlcy5sb2NhbHMgPSB7XG4gICAgICBqd3RTZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9TRUNSRVRcbiAgICB9O1xuXG4gICAgY29uc3QgeyBhdXRob3JpemF0aW9uIH0gPSByZXEuaGVhZGVycztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgICAgY29uc3QgeyB1c2VyX2lkLCB1dWlkIH0gPSBhd2FpdCBjaGVja1NlY3VyZVJvdXRlKEFycmF5LmlzQXJyYXkoYXV0aG9yaXphdGlvbikgPyBhdXRob3JpemF0aW9uWzBdIDogYXV0aG9yaXphdGlvbik7XG4gICAgICBPYmplY3QuYXNzaWduKHJlcy5sb2NhbHMsIHsgdXNlcl9pZCwgdXVpZCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmFzc2lnbihyZXMubG9jYWxzLCB7IHVzZXJfaWQ6IHJlcS5oZWFkZXJzLnVzZXJfaWQgfHwgMSB9KTtcbiAgICB9XG4gICAgbmV4dCgpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAvLyAgIHJlcy5zZW5kRmlsZShcbiAgICAvLyAgICAgbm9kZXBhdGguam9pbihcbiAgICAvLyAgICAgICBfX2Rpcm5hbWUsICcuLicsICdwdWJsaWMnLCAndW5hdXRob3JpemVkLmh0bWwnXG4gICAgLy8gICAgIClcbiAgICAvLyAgICk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDQwMSkuc2VuZChlcnIubWVzc2FnZSk7XG4gICAgLy8gfVxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXV0aE1pZGRsZXdhcmU7XG5cbi8qKlxuICogSWYgYSB2YWxpZCB0b2tlbiBpcyBwcm92aWRlZCwgb3RoZXJ3aXNlICoqdGhyb3cgYW4gZXJyb3IqKlxuICovXG5hc3luYyBmdW5jdGlvbiBjaGVja1NlY3VyZVJvdXRlKHRva2VuOiBzdHJpbmcpIHtcbiAgY29uc3Qga2V5ID0gYGRvbmlzdG86Y29udGFjdDp0b2tlbjoke3Rva2VufWA7XG4gIGNvbnN0IHJlZGlzU3RvcmVkID0gYXdhaXQgaGdldEFsbEFzeW5jKGtleSk7XG4gIGlmIChyZWRpc1N0b3JlZCAmJiByZWRpc1N0b3JlZC51c2VyX2lkKSB7XG4gICAgcmV0dXJuIHJlZGlzU3RvcmVkO1xuICB9XG5cbiAgcmVkaXNDbGllbnQuZXhwaXJlKGtleSwgODY0MDApOyAvLyBleHBpcmUgaW4gMjQgaG91cnNcbiAgaWYgKCF0b2tlbiB8fCB0b2tlbiA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICB0aHJvdyBFcnJvcignWW91IG11c3QgaGF2ZSBhbiBhY2NvdW50IGFuZCBiZSBsb2dnZWQgaW4nKTtcbiAgfVxuXG4gIGNvbnN0IHNlY3JldCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQ7XG4gIGNvbnN0IGRlY29kZWQgPSBqd3QuZGVjb2RlKHRva2VuLCBzZWNyZXQpO1xuXG4gIGNvbnN0IHVzZXJfaWQgPSBkZWNvZGVkLmlkIHx8IGRlY29kZWQudG9rZW47XG4gIGNvbnN0IHsgdXVpZCB9ID0gZGVjb2RlZDtcbiAgY29uc29sZS5sb2coZGVjb2RlZCk7XG4gIGNvbnN0IGNvbnRhY3QgPSBhd2FpdCBDb250YWN0LmZpbmRPbmUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBbQ29udGFjdEtleXMuVVVJRF06IHV1aWRcbiAgICB9XG4gIH0pO1xuXG4gIGlmICghY29udGFjdCkge1xuICAgIHRocm93IEVycm9yKCdZb3UgbXVzdCBoYXZlIGFuIGFjY291bnQgYW5kIGJlIGxvZ2dlZCBpbicpO1xuICB9XG5cbiAgaG1zZXRBc3luYyhrZXksIHsgdXNlcl9pZCwgdXVpZCB9KTtcbiAgcmV0dXJuIGRlY29kZWQ7XG59XG4iXX0=