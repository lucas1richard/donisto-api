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
  force: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOlsiY29ubiIsInN5bmMiLCJmb3JjZSIsInNlcnZlciIsImFwcCIsImxpc3RlbiIsImdldCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBOzs7QUFHQTtBQUVBQSxjQUFLQyxJQUFMLENBQVU7QUFBRUMsRUFBQUEsS0FBSyxFQUFFO0FBQVQsQ0FBVjtBQUVBOzs7OztBQUdBLE1BQU1DLE1BQU0sR0FBR0MsYUFBSUMsTUFBSixDQUFXRCxhQUFJRSxHQUFKLENBQVEsTUFBUixDQUFYLEVBQTRCLE1BQU07QUFDL0NDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUNFLG9EQURGLEVBRUVKLGFBQUlFLEdBQUosQ0FBUSxNQUFSLENBRkYsRUFHRUYsYUFBSUUsR0FBSixDQUFRLEtBQVIsQ0FIRjtBQUtBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWjtBQUNELENBUGMsQ0FBZjs7ZUFXZUwsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSAnZXJyb3JoYW5kbGVyJztcbmltcG9ydCBjb25uIGZyb20gJy4vY29uZmlnL2RhdGFiYXNlL2Nvbm4nO1xuaW1wb3J0IGFwcCBmcm9tICcuL2FwcCc7XG5pbXBvcnQgJy4vZGF0YWJhc2UvYXNzb2NpYXRlJztcblxuLyoqXG4gKiBFcnJvciBIYW5kbGVyLiBQcm92aWRlcyBmdWxsIHN0YWNrIC0gcmVtb3ZlIGZvciBwcm9kdWN0aW9uXG4gKi9cbi8vIGFwcC51c2UoZXJyb3JIYW5kbGVyKCkpO1xuXG5jb25uLnN5bmMoeyBmb3JjZTogdHJ1ZSB9KTtcblxuLyoqXG4gKiBTdGFydCBFeHByZXNzIHNlcnZlci5cbiAqL1xuY29uc3Qgc2VydmVyID0gYXBwLmxpc3RlbihhcHAuZ2V0KCdwb3J0JyksICgpID0+IHtcbiAgY29uc29sZS5sb2coXG4gICAgJyAgQXBwIGlzIHJ1bm5pbmcgYXQgaHR0cDovL2xvY2FsaG9zdDolZCBpbiAlcyBtb2RlJyxcbiAgICBhcHAuZ2V0KCdwb3J0JyksXG4gICAgYXBwLmdldCgnZW52JylcbiAgKTtcbiAgY29uc29sZS5sb2coJyAgUHJlc3MgQ1RSTC1DIHRvIHN0b3BcXG4nKTtcbn0pO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgc2VydmVyO1xuIl19