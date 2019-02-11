"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = beforeCreate;
exports.generatePassSalt = exports.genRandomString = void 0;

var crypto = _interopRequireWildcard(require("crypto"));

var _ContactKeys = _interopRequireDefault(require("../types/ContactKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const genRandomString = function (length) {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex')
  /** convert to hexadecimal format */
  .slice(0, length);
  /** return required number of characters */
};

exports.genRandomString = genRandomString;

const generatePassSalt = password => {
  const salt = genRandomString(16);
  const hash = crypto.createHmac('sha512', salt);
  hash.update(password);
  const value = hash.digest('hex');
  return {
    [_ContactKeys.default.PASSWORD]: value,
    [_ContactKeys.default.SALT]: salt
  };
};

exports.generatePassSalt = generatePassSalt;

function beforeCreate(user) {
  const {
    password,
    salt
  } = generatePassSalt(user[_ContactKeys.default.PASSWORD]);
  user[_ContactKeys.default.PASSWORD] = password;
  user[_ContactKeys.default.SALT] = salt;
  return user;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbHMvQ29udGFjdC9ob29rcy9iZWZvcmVDcmVhdGUudHMiXSwibmFtZXMiOlsiZ2VuUmFuZG9tU3RyaW5nIiwibGVuZ3RoIiwiY3J5cHRvIiwicmFuZG9tQnl0ZXMiLCJNYXRoIiwiY2VpbCIsInRvU3RyaW5nIiwic2xpY2UiLCJnZW5lcmF0ZVBhc3NTYWx0IiwicGFzc3dvcmQiLCJzYWx0IiwiaGFzaCIsImNyZWF0ZUhtYWMiLCJ1cGRhdGUiLCJ2YWx1ZSIsImRpZ2VzdCIsIkNvbnRhY3RLZXlzIiwiUEFTU1dPUkQiLCJTQUxUIiwiYmVmb3JlQ3JlYXRlIiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7O0FBRU8sTUFBTUEsZUFBZSxHQUFHLFVBQVNDLE1BQVQsRUFBeUI7QUFDdEQsU0FBT0MsTUFBTSxDQUFDQyxXQUFQLENBQW1CQyxJQUFJLENBQUNDLElBQUwsQ0FBVUosTUFBTSxHQUFHLENBQW5CLENBQW5CLEVBQ0pLLFFBREksQ0FDSyxLQURMO0FBQ1k7QUFEWixHQUVKQyxLQUZJLENBRUUsQ0FGRixFQUVLTixNQUZMLENBQVA7QUFFdUI7QUFDeEIsQ0FKTTs7OztBQU1BLE1BQU1PLGdCQUFnQixHQUFJQyxRQUFELElBQXNCO0FBQ3BELFFBQU1DLElBQUksR0FBR1YsZUFBZSxDQUFDLEVBQUQsQ0FBNUI7QUFDQSxRQUFNVyxJQUFJLEdBQUdULE1BQU0sQ0FBQ1UsVUFBUCxDQUFrQixRQUFsQixFQUE0QkYsSUFBNUIsQ0FBYjtBQUNBQyxFQUFBQSxJQUFJLENBQUNFLE1BQUwsQ0FBWUosUUFBWjtBQUNBLFFBQU1LLEtBQUssR0FBR0gsSUFBSSxDQUFDSSxNQUFMLENBQVksS0FBWixDQUFkO0FBQ0EsU0FBTztBQUNMLEtBQUNDLHFCQUFZQyxRQUFiLEdBQXdCSCxLQURuQjtBQUVMLEtBQUNFLHFCQUFZRSxJQUFiLEdBQW9CUjtBQUZmLEdBQVA7QUFJRCxDQVRNOzs7O0FBV1EsU0FBU1MsWUFBVCxDQUFzQkMsSUFBdEIsRUFBK0M7QUFDNUQsUUFBTTtBQUFFWCxJQUFBQSxRQUFGO0FBQVlDLElBQUFBO0FBQVosTUFBcUJGLGdCQUFnQixDQUFDWSxJQUFJLENBQUNKLHFCQUFZQyxRQUFiLENBQUwsQ0FBM0M7QUFDQUcsRUFBQUEsSUFBSSxDQUFDSixxQkFBWUMsUUFBYixDQUFKLEdBQTZCUixRQUE3QjtBQUNBVyxFQUFBQSxJQUFJLENBQUNKLHFCQUFZRSxJQUFiLENBQUosR0FBeUJSLElBQXpCO0FBQ0EsU0FBT1UsSUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5pbXBvcnQgQ29udGFjdEF0dHJpYnV0ZXMgZnJvbSAnLi4vdHlwZXMvQXR0cmlidXRlcyc7XG5pbXBvcnQgQ29udGFjdEtleXMgZnJvbSAnLi4vdHlwZXMvQ29udGFjdEtleXMnO1xuXG5leHBvcnQgY29uc3QgZ2VuUmFuZG9tU3RyaW5nID0gZnVuY3Rpb24obGVuZ3RoOiBudW1iZXIpIHtcbiAgcmV0dXJuIGNyeXB0by5yYW5kb21CeXRlcyhNYXRoLmNlaWwobGVuZ3RoIC8gMikpXG4gICAgLnRvU3RyaW5nKCdoZXgnKSAvKiogY29udmVydCB0byBoZXhhZGVjaW1hbCBmb3JtYXQgKi9cbiAgICAuc2xpY2UoMCwgbGVuZ3RoKTsgICAvKiogcmV0dXJuIHJlcXVpcmVkIG51bWJlciBvZiBjaGFyYWN0ZXJzICovXG59O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVQYXNzU2FsdCA9IChwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHNhbHQgPSBnZW5SYW5kb21TdHJpbmcoMTYpO1xuICBjb25zdCBoYXNoID0gY3J5cHRvLmNyZWF0ZUhtYWMoJ3NoYTUxMicsIHNhbHQpO1xuICBoYXNoLnVwZGF0ZShwYXNzd29yZCk7XG4gIGNvbnN0IHZhbHVlID0gaGFzaC5kaWdlc3QoJ2hleCcpO1xuICByZXR1cm4ge1xuICAgIFtDb250YWN0S2V5cy5QQVNTV09SRF06IHZhbHVlLFxuICAgIFtDb250YWN0S2V5cy5TQUxUXTogc2FsdFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmVmb3JlQ3JlYXRlKHVzZXI6IENvbnRhY3RBdHRyaWJ1dGVzKSB7XG4gIGNvbnN0IHsgcGFzc3dvcmQsIHNhbHQgfSA9IGdlbmVyYXRlUGFzc1NhbHQodXNlcltDb250YWN0S2V5cy5QQVNTV09SRF0pO1xuICB1c2VyW0NvbnRhY3RLZXlzLlBBU1NXT1JEXSA9IHBhc3N3b3JkO1xuICB1c2VyW0NvbnRhY3RLZXlzLlNBTFRdID0gc2FsdDtcbiAgcmV0dXJuIHVzZXI7XG59XG4iXX0=