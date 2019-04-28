"use strict";

var _conn = _interopRequireDefault(require("./conn"));

require("./associate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_conn.default.sync({
  force: true
}).then(() => {
  console.log('forceSync executed'); // process.exit();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZS9mb3JjZVN5bmMudHMiXSwibmFtZXMiOlsiY29ubiIsInN5bmMiLCJmb3JjZSIsInRoZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBRUFBLGNBQ0dDLElBREgsQ0FDUTtBQUFFQyxFQUFBQSxLQUFLLEVBQUU7QUFBVCxDQURSLEVBRUdDLElBRkgsQ0FFUSxNQUFNO0FBQ1ZDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBRFUsQ0FFVjtBQUNELENBTEgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubiBmcm9tICcuL2Nvbm4nO1xuaW1wb3J0ICcuL2Fzc29jaWF0ZSc7XG5cbmNvbm5cbiAgLnN5bmMoeyBmb3JjZTogdHJ1ZSB9KVxuICAudGhlbigoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2ZvcmNlU3luYyBleGVjdXRlZCcpO1xuICAgIC8vIHByb2Nlc3MuZXhpdCgpO1xuICB9KTsiXX0=