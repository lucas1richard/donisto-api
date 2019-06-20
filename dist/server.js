"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _conn = _interopRequireDefault(require("./config/database/conn"));

var _app = _interopRequireDefault(require("./app"));

require("./database/associate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Error Handler. Provides full stack - remove for production
 */
// app.use(errorHandler());
_conn.default.sync({
  logging: false
});
/**
 * Start Express server.
 */


const server = _app.default.listen(_app.default.get('port'), () => {
  console.log('  App is running at http://localhost:%d in %s mode', _app.default.get('port'), _app.default.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

var _default = server;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOlsiY29ubiIsInN5bmMiLCJsb2dnaW5nIiwic2VydmVyIiwiYXBwIiwibGlzdGVuIiwiZ2V0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUE7OztBQUdBO0FBRUFBLGNBQUtDLElBQUwsQ0FBVTtBQUFFQyxFQUFBQSxPQUFPLEVBQUU7QUFBWCxDQUFWO0FBRUE7Ozs7O0FBR0EsTUFBTUMsTUFBTSxHQUFHQyxhQUFJQyxNQUFKLENBQVdELGFBQUlFLEdBQUosQ0FBUSxNQUFSLENBQVgsRUFBNEIsTUFBTTtBQUMvQ0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQ0Usb0RBREYsRUFFRUosYUFBSUUsR0FBSixDQUFRLE1BQVIsQ0FGRixFQUdFRixhQUFJRSxHQUFKLENBQVEsS0FBUixDQUhGO0FBS0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUFaO0FBQ0QsQ0FQYyxDQUFmOztlQVdlTCxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tICdlcnJvcmhhbmRsZXInO1xuaW1wb3J0IGNvbm4gZnJvbSAnLi9jb25maWcvZGF0YWJhc2UvY29ubic7XG5pbXBvcnQgYXBwIGZyb20gJy4vYXBwJztcbmltcG9ydCAnLi9kYXRhYmFzZS9hc3NvY2lhdGUnO1xuXG4vKipcbiAqIEVycm9yIEhhbmRsZXIuIFByb3ZpZGVzIGZ1bGwgc3RhY2sgLSByZW1vdmUgZm9yIHByb2R1Y3Rpb25cbiAqL1xuLy8gYXBwLnVzZShlcnJvckhhbmRsZXIoKSk7XG5cbmNvbm4uc3luYyh7IGxvZ2dpbmc6IGZhbHNlIH0pO1xuXG4vKipcbiAqIFN0YXJ0IEV4cHJlc3Mgc2VydmVyLlxuICovXG5jb25zdCBzZXJ2ZXIgPSBhcHAubGlzdGVuKGFwcC5nZXQoJ3BvcnQnKSwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcbiAgICAnICBBcHAgaXMgcnVubmluZyBhdCBodHRwOi8vbG9jYWxob3N0OiVkIGluICVzIG1vZGUnLFxuICAgIGFwcC5nZXQoJ3BvcnQnKSxcbiAgICBhcHAuZ2V0KCdlbnYnKVxuICApO1xuICBjb25zb2xlLmxvZygnICBQcmVzcyBDVFJMLUMgdG8gc3RvcFxcbicpO1xufSk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBzZXJ2ZXI7XG4iXX0=