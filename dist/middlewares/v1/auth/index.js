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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9taWRkbGV3YXJlcy92MS9hdXRoL2luZGV4LnRzIl0sIm5hbWVzIjpbImF1dGhNaWRkbGV3YXJlIiwiZXhwcmVzcyIsIlJvdXRlciIsInVzZSIsImF1dGhNaWRkbGV3YXJlRnVuYyIsInJlcSIsInJlcyIsIm5leHQiLCJsb2NhbHMiLCJqd3RTZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJoZWFkZXJzIiwiTk9ERV9FTlYiLCJ1c2VyX2lkIiwidXVpZCIsImNoZWNrU2VjdXJlUm91dGUiLCJBcnJheSIsImlzQXJyYXkiLCJPYmplY3QiLCJhc3NpZ24iLCJlcnIiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsInRva2VuIiwia2V5IiwicmVkaXNTdG9yZWQiLCJyZWRpc0NsaWVudCIsImV4cGlyZSIsIkVycm9yIiwic2VjcmV0IiwiZGVjb2RlZCIsImp3dCIsImRlY29kZSIsImlkIiwiY29udGFjdCIsIkNvbnRhY3QiLCJmaW5kT25lIiwid2hlcmUiLCJDb250YWN0S2V5cyIsIlVVSUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7O0FBSEE7QUFLQSxNQUFNQSxjQUFjLEdBQUdDLGlCQUFRQyxNQUFSLEVBQXZCOztBQUVBRixjQUFjLENBQUNHLEdBQWYsQ0FBbUJDLGtCQUFuQjtlQUVlSixjOzs7QUFFZixlQUFlSSxrQkFBZixDQUFrQ0MsR0FBbEMsRUFBZ0RDLEdBQWhELEVBQStEQyxJQUEvRCxFQUFtRjtBQUNqRixNQUFJO0FBQ0ZELElBQUFBLEdBQUcsQ0FBQ0UsTUFBSixHQUFhO0FBQ1hDLE1BQUFBLFNBQVMsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDO0FBRFosS0FBYjtBQUlBLFVBQU07QUFBRUMsTUFBQUE7QUFBRixRQUFvQlIsR0FBRyxDQUFDUyxPQUE5Qjs7QUFDQSxRQUFJSixPQUFPLENBQUNDLEdBQVIsQ0FBWUksUUFBWixLQUF5QixNQUE3QixFQUFxQztBQUNuQyxZQUFNO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxVQUFvQixNQUFNQyxnQkFBZ0IsQ0FDOUNDLEtBQUssQ0FBQ0MsT0FBTixDQUFjUCxhQUFkLElBQ0lBLGFBQWEsQ0FBQyxDQUFELENBRGpCLEdBRUlBLGFBSDBDLENBQWhEO0FBS0FRLE1BQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjaEIsR0FBRyxDQUFDRSxNQUFsQixFQUEwQjtBQUFFUSxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsT0FBMUI7QUFDRCxLQVBELE1BT087QUFDTEksTUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNoQixHQUFHLENBQUNFLE1BQWxCLEVBQTBCO0FBQUVRLFFBQUFBLE9BQU8sRUFBRVgsR0FBRyxDQUFDUyxPQUFKLENBQVlFLE9BQVosSUFBdUI7QUFBbEMsT0FBMUI7QUFDRDs7QUFDRFQsSUFBQUEsSUFBSTtBQUNMLEdBakJELENBaUJFLE9BQU9nQixHQUFQLEVBQVk7QUFDWmpCLElBQUFBLEdBQUcsQ0FBQ2tCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkYsR0FBRyxDQUFDRyxPQUF6QjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7QUFHQSxlQUFlUixnQkFBZixDQUFnQ1MsS0FBaEMsRUFBK0M7QUFDN0MsUUFBTUMsR0FBRyxHQUFJLHlCQUF3QkQsS0FBTSxFQUEzQztBQUNBLFFBQU1FLFdBQVcsR0FBRyxNQUFNLCtCQUFhRCxHQUFiLENBQTFCOztBQUNBLE1BQUlDLFdBQVcsSUFBSUEsV0FBVyxDQUFDYixPQUEvQixFQUF3QztBQUN0QyxXQUFPYSxXQUFQO0FBQ0Q7O0FBRURDLHVCQUFZQyxNQUFaLENBQW1CSCxHQUFuQixFQUF3QixLQUF4QixFQVA2QyxDQU9iOzs7QUFDaEMsTUFBSSxDQUFDRCxLQUFELElBQVVBLEtBQUssS0FBSyxpQkFBeEIsRUFBMkM7QUFDekMsVUFBTUssS0FBSyxDQUFDLDJDQUFELENBQVg7QUFDRDs7QUFFRCxRQUFNQyxNQUFNLEdBQUd2QixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBM0I7O0FBQ0EsUUFBTXNCLE9BQU8sR0FBR0MsbUJBQUlDLE1BQUosQ0FBV1QsS0FBWCxFQUFrQk0sTUFBbEIsQ0FBaEI7O0FBRUEsUUFBTWpCLE9BQU8sR0FBR2tCLE9BQU8sQ0FBQ0csRUFBUixJQUFjSCxPQUFPLENBQUNQLEtBQXRDO0FBQ0EsUUFBTTtBQUFFVixJQUFBQTtBQUFGLE1BQVdpQixPQUFqQjtBQUNBLFFBQU1JLE9BQU8sR0FBRyxNQUFNQyxpQkFBUUMsT0FBUixDQUFnQjtBQUNwQ0MsSUFBQUEsS0FBSyxFQUFFO0FBQ0wsT0FBQ0MscUJBQVlDLElBQWIsR0FBb0IxQjtBQURmO0FBRDZCLEdBQWhCLENBQXRCOztBQU1BLE1BQUksQ0FBQ3FCLE9BQUwsRUFBYztBQUNaLFVBQU1OLEtBQUssQ0FBQywyQ0FBRCxDQUFYO0FBQ0Q7O0FBRUQsK0JBQVdKLEdBQVgsRUFBZ0I7QUFBRVosSUFBQUEsT0FBRjtBQUFXQyxJQUFBQTtBQUFYLEdBQWhCO0FBQ0EsU0FBT2lCLE9BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWN0IGZyb20gJ21vZGVscy9Db250YWN0JztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuLy8gaW1wb3J0IG5vZGVwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGp3dCBmcm9tICdqd3Qtc2ltcGxlJztcbmltcG9ydCByZWRpc0NsaWVudCwgeyBoZ2V0QWxsQXN5bmMsIGhtc2V0QXN5bmMgfSBmcm9tICdyZWRpcy1jbGllbnQnO1xuaW1wb3J0IENvbnRhY3RLZXlzIGZyb20gJ21vZGVscy9Db250YWN0L3R5cGVzL0NvbnRhY3RLZXlzJztcblxuY29uc3QgYXV0aE1pZGRsZXdhcmUgPSBleHByZXNzLlJvdXRlcigpO1xuXG5hdXRoTWlkZGxld2FyZS51c2UoYXV0aE1pZGRsZXdhcmVGdW5jKTtcblxuZXhwb3J0IGRlZmF1bHQgYXV0aE1pZGRsZXdhcmU7XG5cbmFzeW5jIGZ1bmN0aW9uIGF1dGhNaWRkbGV3YXJlRnVuYyhyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICB0cnkge1xuICAgIHJlcy5sb2NhbHMgPSB7XG4gICAgICBqd3RTZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9TRUNSRVRcbiAgICB9O1xuXG4gICAgY29uc3QgeyBhdXRob3JpemF0aW9uIH0gPSByZXEuaGVhZGVycztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgICAgY29uc3QgeyB1c2VyX2lkLCB1dWlkIH0gPSBhd2FpdCBjaGVja1NlY3VyZVJvdXRlKFxuICAgICAgICBBcnJheS5pc0FycmF5KGF1dGhvcml6YXRpb24pXG4gICAgICAgICAgPyBhdXRob3JpemF0aW9uWzBdXG4gICAgICAgICAgOiBhdXRob3JpemF0aW9uXG4gICAgICApO1xuICAgICAgT2JqZWN0LmFzc2lnbihyZXMubG9jYWxzLCB7IHVzZXJfaWQsIHV1aWQgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocmVzLmxvY2FscywgeyB1c2VyX2lkOiByZXEuaGVhZGVycy51c2VyX2lkIHx8IDEgfSk7XG4gICAgfVxuICAgIG5leHQoKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoZXJyLm1lc3NhZ2UpO1xuICB9XG59XG5cbi8qKlxuICogSWYgYSB2YWxpZCB0b2tlbiBpcyBwcm92aWRlZCwgb3RoZXJ3aXNlICoqdGhyb3cgYW4gZXJyb3IqKlxuICovXG5hc3luYyBmdW5jdGlvbiBjaGVja1NlY3VyZVJvdXRlKHRva2VuOiBzdHJpbmcpIHtcbiAgY29uc3Qga2V5ID0gYGRvbmlzdG86Y29udGFjdDp0b2tlbjoke3Rva2VufWA7XG4gIGNvbnN0IHJlZGlzU3RvcmVkID0gYXdhaXQgaGdldEFsbEFzeW5jKGtleSk7XG4gIGlmIChyZWRpc1N0b3JlZCAmJiByZWRpc1N0b3JlZC51c2VyX2lkKSB7XG4gICAgcmV0dXJuIHJlZGlzU3RvcmVkO1xuICB9XG5cbiAgcmVkaXNDbGllbnQuZXhwaXJlKGtleSwgODY0MDApOyAvLyBleHBpcmUgaW4gMjQgaG91cnNcbiAgaWYgKCF0b2tlbiB8fCB0b2tlbiA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICB0aHJvdyBFcnJvcignWW91IG11c3QgaGF2ZSBhbiBhY2NvdW50IGFuZCBiZSBsb2dnZWQgaW4nKTtcbiAgfVxuXG4gIGNvbnN0IHNlY3JldCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQ7XG4gIGNvbnN0IGRlY29kZWQgPSBqd3QuZGVjb2RlKHRva2VuLCBzZWNyZXQpO1xuXG4gIGNvbnN0IHVzZXJfaWQgPSBkZWNvZGVkLmlkIHx8IGRlY29kZWQudG9rZW47XG4gIGNvbnN0IHsgdXVpZCB9ID0gZGVjb2RlZDtcbiAgY29uc3QgY29udGFjdCA9IGF3YWl0IENvbnRhY3QuZmluZE9uZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIFtDb250YWN0S2V5cy5VVUlEXTogdXVpZFxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKCFjb250YWN0KSB7XG4gICAgdGhyb3cgRXJyb3IoJ1lvdSBtdXN0IGhhdmUgYW4gYWNjb3VudCBhbmQgYmUgbG9nZ2VkIGluJyk7XG4gIH1cblxuICBobXNldEFzeW5jKGtleSwgeyB1c2VyX2lkLCB1dWlkIH0pO1xuICByZXR1cm4gZGVjb2RlZDtcbn1cbiJdfQ==