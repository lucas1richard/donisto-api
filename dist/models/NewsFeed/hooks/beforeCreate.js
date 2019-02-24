"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = beforeCreate;
exports.generatePassSalt = exports.genRandomString = void 0;

var crypto = _interopRequireWildcard(require("crypto"));

var _NewsFeedKeys = _interopRequireDefault(require("../types/NewsFeedKeys"));

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
    [_NewsFeedKeys.default.PASSWORD]: value,
    [_NewsFeedKeys.default.SALT]: salt
  };
};

exports.generatePassSalt = generatePassSalt;

function beforeCreate(user) {
  const {
    password,
    salt
  } = generatePassSalt(user[_NewsFeedKeys.default.PASSWORD]);
  user[_NewsFeedKeys.default.PASSWORD] = password;
  user[_NewsFeedKeys.default.SALT] = salt;
  return user;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbHMvTmV3c0ZlZWQvaG9va3MvYmVmb3JlQ3JlYXRlLnRzIl0sIm5hbWVzIjpbImdlblJhbmRvbVN0cmluZyIsImxlbmd0aCIsImNyeXB0byIsInJhbmRvbUJ5dGVzIiwiTWF0aCIsImNlaWwiLCJ0b1N0cmluZyIsInNsaWNlIiwiZ2VuZXJhdGVQYXNzU2FsdCIsInBhc3N3b3JkIiwic2FsdCIsImhhc2giLCJjcmVhdGVIbWFjIiwidXBkYXRlIiwidmFsdWUiLCJkaWdlc3QiLCJOZXdzRmVlZEtleXMiLCJQQVNTV09SRCIsIlNBTFQiLCJiZWZvcmVDcmVhdGUiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7QUFFTyxNQUFNQSxlQUFlLEdBQUcsVUFBU0MsTUFBVCxFQUF5QjtBQUN0RCxTQUFPQyxNQUFNLENBQUNDLFdBQVAsQ0FBbUJDLElBQUksQ0FBQ0MsSUFBTCxDQUFVSixNQUFNLEdBQUcsQ0FBbkIsQ0FBbkIsRUFDSkssUUFESSxDQUNLLEtBREw7QUFDWTtBQURaLEdBRUpDLEtBRkksQ0FFRSxDQUZGLEVBRUtOLE1BRkwsQ0FBUDtBQUV1QjtBQUN4QixDQUpNOzs7O0FBTUEsTUFBTU8sZ0JBQWdCLEdBQUlDLFFBQUQsSUFBc0I7QUFDcEQsUUFBTUMsSUFBSSxHQUFHVixlQUFlLENBQUMsRUFBRCxDQUE1QjtBQUNBLFFBQU1XLElBQUksR0FBR1QsTUFBTSxDQUFDVSxVQUFQLENBQWtCLFFBQWxCLEVBQTRCRixJQUE1QixDQUFiO0FBQ0FDLEVBQUFBLElBQUksQ0FBQ0UsTUFBTCxDQUFZSixRQUFaO0FBQ0EsUUFBTUssS0FBSyxHQUFHSCxJQUFJLENBQUNJLE1BQUwsQ0FBWSxLQUFaLENBQWQ7QUFDQSxTQUFPO0FBQ0wsS0FBQ0Msc0JBQWFDLFFBQWQsR0FBeUJILEtBRHBCO0FBRUwsS0FBQ0Usc0JBQWFFLElBQWQsR0FBcUJSO0FBRmhCLEdBQVA7QUFJRCxDQVRNOzs7O0FBV1EsU0FBU1MsWUFBVCxDQUFzQkMsSUFBdEIsRUFBZ0Q7QUFDN0QsUUFBTTtBQUFFWCxJQUFBQSxRQUFGO0FBQVlDLElBQUFBO0FBQVosTUFBcUJGLGdCQUFnQixDQUFDWSxJQUFJLENBQUNKLHNCQUFhQyxRQUFkLENBQUwsQ0FBM0M7QUFDQUcsRUFBQUEsSUFBSSxDQUFDSixzQkFBYUMsUUFBZCxDQUFKLEdBQThCUixRQUE5QjtBQUNBVyxFQUFBQSxJQUFJLENBQUNKLHNCQUFhRSxJQUFkLENBQUosR0FBMEJSLElBQTFCO0FBQ0EsU0FBT1UsSUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5pbXBvcnQgTmV3c0ZlZWRBdHRyaWJ1dGVzIGZyb20gJy4uL3R5cGVzL0F0dHJpYnV0ZXMnO1xuaW1wb3J0IE5ld3NGZWVkS2V5cyBmcm9tICcuLi90eXBlcy9OZXdzRmVlZEtleXMnO1xuXG5leHBvcnQgY29uc3QgZ2VuUmFuZG9tU3RyaW5nID0gZnVuY3Rpb24obGVuZ3RoOiBudW1iZXIpIHtcbiAgcmV0dXJuIGNyeXB0by5yYW5kb21CeXRlcyhNYXRoLmNlaWwobGVuZ3RoIC8gMikpXG4gICAgLnRvU3RyaW5nKCdoZXgnKSAvKiogY29udmVydCB0byBoZXhhZGVjaW1hbCBmb3JtYXQgKi9cbiAgICAuc2xpY2UoMCwgbGVuZ3RoKTsgICAvKiogcmV0dXJuIHJlcXVpcmVkIG51bWJlciBvZiBjaGFyYWN0ZXJzICovXG59O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVQYXNzU2FsdCA9IChwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHNhbHQgPSBnZW5SYW5kb21TdHJpbmcoMTYpO1xuICBjb25zdCBoYXNoID0gY3J5cHRvLmNyZWF0ZUhtYWMoJ3NoYTUxMicsIHNhbHQpO1xuICBoYXNoLnVwZGF0ZShwYXNzd29yZCk7XG4gIGNvbnN0IHZhbHVlID0gaGFzaC5kaWdlc3QoJ2hleCcpO1xuICByZXR1cm4ge1xuICAgIFtOZXdzRmVlZEtleXMuUEFTU1dPUkRdOiB2YWx1ZSxcbiAgICBbTmV3c0ZlZWRLZXlzLlNBTFRdOiBzYWx0XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiZWZvcmVDcmVhdGUodXNlcjogTmV3c0ZlZWRBdHRyaWJ1dGVzKSB7XG4gIGNvbnN0IHsgcGFzc3dvcmQsIHNhbHQgfSA9IGdlbmVyYXRlUGFzc1NhbHQodXNlcltOZXdzRmVlZEtleXMuUEFTU1dPUkRdKTtcbiAgdXNlcltOZXdzRmVlZEtleXMuUEFTU1dPUkRdID0gcGFzc3dvcmQ7XG4gIHVzZXJbTmV3c0ZlZWRLZXlzLlNBTFRdID0gc2FsdDtcbiAgcmV0dXJuIHVzZXI7XG59XG4iXX0=