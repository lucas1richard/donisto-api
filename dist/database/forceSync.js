"use strict";

var _conn = _interopRequireDefault(require("./conn"));

require("./associate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_conn.default.sync({
  force: true
}).then(() => {
  console.log('forceSync executed');
  process.exit();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZS9mb3JjZVN5bmMudHMiXSwibmFtZXMiOlsiY29ubiIsInN5bmMiLCJmb3JjZSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImV4aXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7Ozs7QUFFQUEsY0FDR0MsSUFESCxDQUNRO0FBQUVDLEVBQUFBLEtBQUssRUFBRTtBQUFULENBRFIsRUFFR0MsSUFGSCxDQUVRLE1BQU07QUFDVkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxJQUFSO0FBQ0QsQ0FMSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uIGZyb20gJy4vY29ubic7XG5pbXBvcnQgJy4vYXNzb2NpYXRlJztcblxuY29ublxuICAuc3luYyh7IGZvcmNlOiB0cnVlIH0pXG4gIC50aGVuKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZm9yY2VTeW5jIGV4ZWN1dGVkJyk7XG4gICAgcHJvY2Vzcy5leGl0KCk7XG4gIH0pOyJdfQ==