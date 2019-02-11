"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _winston = _interopRequireWildcard(require("winston"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const logger = new _winston.Logger({
  transports: [new _winston.default.transports.Console({
    level: process.env.NODE_ENV === 'production' ? 'error' : 'debug'
  }), new _winston.default.transports.File({
    filename: 'debug.log',
    level: 'debug'
  })]
});

if (process.env.NODE_ENV !== 'production') {
  logger.debug('Logging initialized at debug level');
}

var _default = logger;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2xvZ2dlci50cyJdLCJuYW1lcyI6WyJsb2dnZXIiLCJMb2dnZXIiLCJ0cmFuc3BvcnRzIiwid2luc3RvbiIsIkNvbnNvbGUiLCJsZXZlbCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIkZpbGUiLCJmaWxlbmFtZSIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFJQSxNQUFNQSxNQUFNLEdBQUcsSUFBS0MsZUFBTCxDQUFhO0FBQ3hCQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUixJQUFLQyxpQkFBUUQsVUFBUixDQUFtQkUsT0FBeEIsQ0FBaUM7QUFBRUMsSUFBQUEsS0FBSyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUF6QixHQUF3QyxPQUF4QyxHQUFrRDtBQUEzRCxHQUFqQyxDQURRLEVBRVIsSUFBS0wsaUJBQVFELFVBQVIsQ0FBbUJPLElBQXhCLENBQThCO0FBQUVDLElBQUFBLFFBQVEsRUFBRSxXQUFaO0FBQXlCTCxJQUFBQSxLQUFLLEVBQUU7QUFBaEMsR0FBOUIsQ0FGUTtBQURZLENBQWIsQ0FBZjs7QUFPQSxJQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztBQUN2Q1IsRUFBQUEsTUFBTSxDQUFDVyxLQUFQLENBQWEsb0NBQWI7QUFDSDs7ZUFFY1gsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3aW5zdG9uIGZyb20gJ3dpbnN0b24nO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnd2luc3Rvbic7XG5pbXBvcnQgeyBFTlZJUk9OTUVOVCB9IGZyb20gJy4vc2VjcmV0cyc7XG5cbmNvbnN0IGxvZ2dlciA9IG5ldyAoTG9nZ2VyKSh7XG4gICAgdHJhbnNwb3J0czogW1xuICAgICAgICBuZXcgKHdpbnN0b24udHJhbnNwb3J0cy5Db25zb2xlKSh7IGxldmVsOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ2Vycm9yJyA6ICdkZWJ1ZycgfSksXG4gICAgICAgIG5ldyAod2luc3Rvbi50cmFuc3BvcnRzLkZpbGUpKHsgZmlsZW5hbWU6ICdkZWJ1Zy5sb2cnLCBsZXZlbDogJ2RlYnVnJ30pXG4gICAgXVxufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VyLmRlYnVnKCdMb2dnaW5nIGluaXRpYWxpemVkIGF0IGRlYnVnIGxldmVsJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcjtcblxuIl19