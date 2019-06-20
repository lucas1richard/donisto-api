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
    logging: _logger.default
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    logging: false
  },
  production: {
    url: process.env.DATABASE_URL,
    logging: console.log
  }
};
module.exports = config;
var _default = config;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZS9pbmRleC50cyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29uZmlnIiwiZGV2ZWxvcG1lbnQiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVJMIiwibG9nZ2luZyIsImxvZ2dlciIsInRlc3QiLCJURVNUX0RBVEFCQVNFX1VSTCIsInByb2R1Y3Rpb24iLCJjb25zb2xlIiwibG9nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBREFBLE9BQU8sQ0FBQyxRQUFELENBQVAsQ0FBa0JDLE1BQWxCOztBQWVBLE1BQU1BLE1BQWdCLEdBQUc7QUFDdkJDLEVBQUFBLFdBQVcsRUFBRTtBQUNYQyxJQUFBQSxHQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxZQUROO0FBRVg7QUFDQUMsSUFBQUEsT0FBTyxFQUFFQztBQUhFLEdBRFU7QUFNdkJDLEVBQUFBLElBQUksRUFBRTtBQUNKTixJQUFBQSxHQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSyxpQkFEYjtBQUVKSCxJQUFBQSxPQUFPLEVBQUU7QUFGTCxHQU5pQjtBQVV2QkksRUFBQUEsVUFBVSxFQUFFO0FBQ1ZSLElBQUFBLEdBQUcsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFlBRFA7QUFFVkMsSUFBQUEsT0FBTyxFQUFFSyxPQUFPLENBQUNDO0FBRlA7QUFWVyxDQUF6QjtBQWdCQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZCxNQUFqQjtlQUNlQSxNIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XG5pbXBvcnQgbG9nZ2VyLCB7IElMb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5kRGJDb25maWcge1xuICB1cmw6IHN0cmluZztcbiAgbG9nZ2luZz86IElMb2dnZXIgfCBmYWxzZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEQkNvbmZpZyB7XG4gIGRldmVsb3BtZW50OiBJbmREYkNvbmZpZztcbiAgdGVzdDogSW5kRGJDb25maWc7XG4gIHByb2R1Y3Rpb246IEluZERiQ29uZmlnO1xuICBbeDogc3RyaW5nXTogSW5kRGJDb25maWc7XG59XG5cbmNvbnN0IGNvbmZpZzogREJDb25maWcgPSB7XG4gIGRldmVsb3BtZW50OiB7XG4gICAgdXJsOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwsXG4gICAgLy8gbG9nZ2luZzogZmFsc2UsXG4gICAgbG9nZ2luZzogbG9nZ2VyLFxuICB9LFxuICB0ZXN0OiB7XG4gICAgdXJsOiBwcm9jZXNzLmVudi5URVNUX0RBVEFCQVNFX1VSTCxcbiAgICBsb2dnaW5nOiBmYWxzZSxcbiAgfSxcbiAgcHJvZHVjdGlvbjoge1xuICAgIHVybDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMLFxuICAgIGxvZ2dpbmc6IGNvbnNvbGUubG9nLFxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbmZpZztcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiJdfQ==