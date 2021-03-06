"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.hgetAllAsync = exports.hmsetAsync = exports.hsetAsync = exports.hgetAsync = exports.getAsync = exports.redisClient = void 0;

var _redis = _interopRequireDefault(require("redis"));

var _util = require("util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function safeFunction(func) {
  if (process.env.NODE_ENV !== 'test') {
    return func;
  }

  return func;
}

const redisClient = _redis.default.createClient(process.env.REDIS_URL);

exports.redisClient = redisClient;
const getAsync = (0, _util.promisify)(safeFunction(redisClient.get)).bind(redisClient);
exports.getAsync = getAsync;
const hgetAsync = (0, _util.promisify)(safeFunction(redisClient.hget)).bind(redisClient);
exports.hgetAsync = hgetAsync;
const hsetAsync = (0, _util.promisify)(safeFunction(redisClient.hset)).bind(redisClient);
exports.hsetAsync = hsetAsync;
const hmsetAsync = (0, _util.promisify)(safeFunction(redisClient.hmset)).bind(redisClient);
exports.hmsetAsync = hmsetAsync;
const hgetAllAsync = (0, _util.promisify)(safeFunction(redisClient.hgetall)).bind(redisClient);
exports.hgetAllAsync = hgetAllAsync;
redisClient.on('error', err => {});
redisClient.getAsync = getAsync;
redisClient.hgetAsync = hgetAsync;
redisClient.hsetAsync = hsetAsync;
redisClient.hmsetAsync = hmsetAsync;
redisClient.hgetAllAsync = hgetAllAsync;
module.exports = redisClient;
var _default = redisClient;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWRpcy1jbGllbnQvaW5kZXgudHMiXSwibmFtZXMiOlsic2FmZUZ1bmN0aW9uIiwiZnVuYyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInJlZGlzQ2xpZW50IiwicmVkaXMiLCJjcmVhdGVDbGllbnQiLCJSRURJU19VUkwiLCJnZXRBc3luYyIsImdldCIsImJpbmQiLCJoZ2V0QXN5bmMiLCJoZ2V0IiwiaHNldEFzeW5jIiwiaHNldCIsImhtc2V0QXN5bmMiLCJobXNldCIsImhnZXRBbGxBc3luYyIsImhnZXRhbGwiLCJvbiIsImVyciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLElBQXRCLEVBQWlDO0FBQy9CLE1BQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLE1BQTdCLEVBQXFDO0FBQ25DLFdBQU9ILElBQVA7QUFDRDs7QUFDRCxTQUFPQSxJQUFQO0FBQ0Q7O0FBVU0sTUFBTUksV0FBVyxHQUFHQyxlQUFNQyxZQUFOLENBQW1CTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUssU0FBL0IsQ0FBcEI7OztBQUNBLE1BQU1DLFFBQVEsR0FBRyxxQkFBVVQsWUFBWSxDQUFDSyxXQUFXLENBQUNLLEdBQWIsQ0FBdEIsRUFBeUNDLElBQXpDLENBQThDTixXQUE5QyxDQUFqQjs7QUFDQSxNQUFNTyxTQUFTLEdBQUcscUJBQVVaLFlBQVksQ0FBQ0ssV0FBVyxDQUFDUSxJQUFiLENBQXRCLEVBQTBDRixJQUExQyxDQUErQ04sV0FBL0MsQ0FBbEI7O0FBQ0EsTUFBTVMsU0FBUyxHQUFHLHFCQUFVZCxZQUFZLENBQUNLLFdBQVcsQ0FBQ1UsSUFBYixDQUF0QixFQUEwQ0osSUFBMUMsQ0FBK0NOLFdBQS9DLENBQWxCOztBQUNBLE1BQU1XLFVBQVUsR0FBRyxxQkFBVWhCLFlBQVksQ0FBQ0ssV0FBVyxDQUFDWSxLQUFiLENBQXRCLEVBQTJDTixJQUEzQyxDQUFnRE4sV0FBaEQsQ0FBbkI7O0FBQ0EsTUFBTWEsWUFBWSxHQUFHLHFCQUFVbEIsWUFBWSxDQUFDSyxXQUFXLENBQUNjLE9BQWIsQ0FBdEIsRUFBNkNSLElBQTdDLENBQWtETixXQUFsRCxDQUFyQjs7QUFFUEEsV0FBVyxDQUFDZSxFQUFaLENBQWUsT0FBZixFQUF5QkMsR0FBRCxJQUFTLENBQ2hDLENBREQ7QUFHQWhCLFdBQVcsQ0FBQ0ksUUFBWixHQUF1QkEsUUFBdkI7QUFDQUosV0FBVyxDQUFDTyxTQUFaLEdBQXdCQSxTQUF4QjtBQUNBUCxXQUFXLENBQUNTLFNBQVosR0FBd0JBLFNBQXhCO0FBQ0FULFdBQVcsQ0FBQ1csVUFBWixHQUF5QkEsVUFBekI7QUFDQVgsV0FBVyxDQUFDYSxZQUFaLEdBQTJCQSxZQUEzQjtBQUVBSSxNQUFNLENBQUNDLE9BQVAsR0FBaUJsQixXQUFqQjtlQUdlQSxXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZGlzLCB7IFJlZGlzQ2xpZW50IH0gZnJvbSAncmVkaXMnO1xuaW1wb3J0IHsgcHJvbWlzaWZ5IH0gZnJvbSAndXRpbCc7XG5cbmZ1bmN0aW9uIHNhZmVGdW5jdGlvbihmdW5jOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcpIHtcbiAgICByZXR1cm4gZnVuYztcbiAgfVxuICByZXR1cm4gZnVuYztcbn1cblxuaW50ZXJmYWNlIENsaWVudCBleHRlbmRzIFJlZGlzQ2xpZW50IHtcbiAgZ2V0QXN5bmMoKTogUHJvbWlzZTxhbnk+O1xuICBoZ2V0QXN5bmMoKTogUHJvbWlzZTxhbnk+O1xuICBoc2V0QXN5bmMoKTogUHJvbWlzZTxhbnk+O1xuICBobXNldEFzeW5jKCk6IFByb21pc2U8YW55PjtcbiAgaGdldEFsbEFzeW5jKCk6IFByb21pc2U8YW55Pjtcbn1cblxuZXhwb3J0IGNvbnN0IHJlZGlzQ2xpZW50ID0gcmVkaXMuY3JlYXRlQ2xpZW50KHByb2Nlc3MuZW52LlJFRElTX1VSTCkgYXMgQ2xpZW50O1xuZXhwb3J0IGNvbnN0IGdldEFzeW5jID0gcHJvbWlzaWZ5KHNhZmVGdW5jdGlvbihyZWRpc0NsaWVudC5nZXQpKS5iaW5kKHJlZGlzQ2xpZW50KTtcbmV4cG9ydCBjb25zdCBoZ2V0QXN5bmMgPSBwcm9taXNpZnkoc2FmZUZ1bmN0aW9uKHJlZGlzQ2xpZW50LmhnZXQpKS5iaW5kKHJlZGlzQ2xpZW50KTtcbmV4cG9ydCBjb25zdCBoc2V0QXN5bmMgPSBwcm9taXNpZnkoc2FmZUZ1bmN0aW9uKHJlZGlzQ2xpZW50LmhzZXQpKS5iaW5kKHJlZGlzQ2xpZW50KTtcbmV4cG9ydCBjb25zdCBobXNldEFzeW5jID0gcHJvbWlzaWZ5KHNhZmVGdW5jdGlvbihyZWRpc0NsaWVudC5obXNldCkpLmJpbmQocmVkaXNDbGllbnQpO1xuZXhwb3J0IGNvbnN0IGhnZXRBbGxBc3luYyA9IHByb21pc2lmeShzYWZlRnVuY3Rpb24ocmVkaXNDbGllbnQuaGdldGFsbCkpLmJpbmQocmVkaXNDbGllbnQpO1xuXG5yZWRpc0NsaWVudC5vbignZXJyb3InLCAoZXJyKSA9PiB7XG59KTtcblxucmVkaXNDbGllbnQuZ2V0QXN5bmMgPSBnZXRBc3luYztcbnJlZGlzQ2xpZW50LmhnZXRBc3luYyA9IGhnZXRBc3luYztcbnJlZGlzQ2xpZW50LmhzZXRBc3luYyA9IGhzZXRBc3luYztcbnJlZGlzQ2xpZW50Lmhtc2V0QXN5bmMgPSBobXNldEFzeW5jO1xucmVkaXNDbGllbnQuaGdldEFsbEFzeW5jID0gaGdldEFsbEFzeW5jO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZGlzQ2xpZW50O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHJlZGlzQ2xpZW50O1xuIl19