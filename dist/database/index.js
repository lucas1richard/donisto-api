"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logger = _interopRequireDefault(require("./logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

const config = {
  development: {
    url: process.env.DATABASE_URL,
    // logging: false,
    logging: _logger.default,
    operatorsAliases: false
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    logging: false,
    operatorsAliases: false
  },
  production: {
    url: process.env.DATABASE_URL,
    logging: false,
    operatorsAliases: false
  }
};
module.exports = config;
var _default = config;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZS9pbmRleC50cyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29uZmlnIiwiZGV2ZWxvcG1lbnQiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVJMIiwibG9nZ2luZyIsImxvZ2dlciIsIm9wZXJhdG9yc0FsaWFzZXMiLCJ0ZXN0IiwiVEVTVF9EQVRBQkFTRV9VUkwiLCJwcm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBREFBLE9BQU8sQ0FBQyxRQUFELENBQVAsQ0FBa0JDLE1BQWxCOztBQWdCQSxNQUFNQSxNQUFnQixHQUFHO0FBQ3ZCQyxFQUFBQSxXQUFXLEVBQUU7QUFDWEMsSUFBQUEsR0FBRyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsWUFETjtBQUVYO0FBQ0FDLElBQUFBLE9BQU8sRUFBRUMsZUFIRTtBQUlYQyxJQUFBQSxnQkFBZ0IsRUFBRTtBQUpQLEdBRFU7QUFPdkJDLEVBQUFBLElBQUksRUFBRTtBQUNKUCxJQUFBQSxHQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTSxpQkFEYjtBQUVKSixJQUFBQSxPQUFPLEVBQUUsS0FGTDtBQUdKRSxJQUFBQSxnQkFBZ0IsRUFBRTtBQUhkLEdBUGlCO0FBWXZCRyxFQUFBQSxVQUFVLEVBQUU7QUFDVlQsSUFBQUEsR0FBRyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsWUFEUDtBQUVWQyxJQUFBQSxPQUFPLEVBQUUsS0FGQztBQUdWRSxJQUFBQSxnQkFBZ0IsRUFBRTtBQUhSO0FBWlcsQ0FBekI7QUFtQkFJLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmIsTUFBakI7ZUFDZUEsTSIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpO1xuaW1wb3J0IGxvZ2dlciwgeyBJTG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluZERiQ29uZmlnIHtcbiAgdXJsOiBzdHJpbmc7XG4gIGxvZ2dpbmc/OiBJTG9nZ2VyIHwgZmFsc2U7XG4gIG9wZXJhdG9yc0FsaWFzZXM6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgREJDb25maWcge1xuICBkZXZlbG9wbWVudDogSW5kRGJDb25maWc7XG4gIHRlc3Q6IEluZERiQ29uZmlnO1xuICBwcm9kdWN0aW9uOiBJbmREYkNvbmZpZztcbiAgW3g6IHN0cmluZ106IEluZERiQ29uZmlnO1xufVxuXG5jb25zdCBjb25maWc6IERCQ29uZmlnID0ge1xuICBkZXZlbG9wbWVudDoge1xuICAgIHVybDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMLFxuICAgIC8vIGxvZ2dpbmc6IGZhbHNlLFxuICAgIGxvZ2dpbmc6IGxvZ2dlcixcbiAgICBvcGVyYXRvcnNBbGlhc2VzOiBmYWxzZVxuICB9LFxuICB0ZXN0OiB7XG4gICAgdXJsOiBwcm9jZXNzLmVudi5URVNUX0RBVEFCQVNFX1VSTCxcbiAgICBsb2dnaW5nOiBmYWxzZSxcbiAgICBvcGVyYXRvcnNBbGlhc2VzOiBmYWxzZVxuICB9LFxuICBwcm9kdWN0aW9uOiB7XG4gICAgdXJsOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwsXG4gICAgbG9nZ2luZzogZmFsc2UsXG4gICAgb3BlcmF0b3JzQWxpYXNlczogZmFsc2VcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25maWc7XG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iXX0=