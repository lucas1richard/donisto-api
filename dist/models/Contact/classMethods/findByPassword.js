"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var crypto = _interopRequireWildcard(require("crypto"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var _ContactKeys = _interopRequireDefault(require("../types/ContactKeys"));

var _Organization = _interopRequireDefault(require("../../Organization"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const {
  Op
} = _sequelize.default;

/**
 * Get the user from the password
 */
const findByPassword = async function (credentials) {
  // get the salt
  const contactInstance = await this.scope('').findOne({
    where: {
      [_ContactKeys.default.EMAIL]: {
        [Op.iLike]: credentials.email
      }
    }
  });
  const {
    salt
  } = contactInstance;
  const hash = crypto.createHmac('sha512', salt);
  hash.update(credentials.password);
  const value = hash.digest('hex');
  return this.findOne({
    where: {
      [_ContactKeys.default.EMAIL]: {
        [Op.iLike]: credentials.email
      },
      [_ContactKeys.default.PASSWORD]: value
    },
    include: [{
      model: _Organization.default
    }]
  });
};

var _default = findByPassword;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbHMvQ29udGFjdC9jbGFzc01ldGhvZHMvZmluZEJ5UGFzc3dvcmQudHMiXSwibmFtZXMiOlsiT3AiLCJTZXF1ZWxpemUiLCJmaW5kQnlQYXNzd29yZCIsImNyZWRlbnRpYWxzIiwiY29udGFjdEluc3RhbmNlIiwic2NvcGUiLCJmaW5kT25lIiwid2hlcmUiLCJDb250YWN0S2V5cyIsIkVNQUlMIiwiaUxpa2UiLCJlbWFpbCIsInNhbHQiLCJoYXNoIiwiY3J5cHRvIiwiY3JlYXRlSG1hYyIsInVwZGF0ZSIsInBhc3N3b3JkIiwidmFsdWUiLCJkaWdlc3QiLCJQQVNTV09SRCIsImluY2x1ZGUiLCJtb2RlbCIsIk9yZ2FuaXphdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7O0FBQ0EsTUFBTTtBQUFFQSxFQUFBQTtBQUFGLElBQVNDLGtCQUFmOztBQVdBOzs7QUFHQSxNQUFNQyxjQUErQixHQUFHLGdCQUFnQkMsV0FBaEIsRUFBNkI7QUFDbkU7QUFDQSxRQUFNQyxlQUFlLEdBQUcsTUFBTSxLQUFLQyxLQUFMLENBQVcsRUFBWCxFQUFlQyxPQUFmLENBQXVCO0FBQ25EQyxJQUFBQSxLQUFLLEVBQUU7QUFDTCxPQUFDQyxxQkFBWUMsS0FBYixHQUFxQjtBQUNuQixTQUFDVCxFQUFFLENBQUNVLEtBQUosR0FBWVAsV0FBVyxDQUFDUTtBQURMO0FBRGhCO0FBRDRDLEdBQXZCLENBQTlCO0FBUUEsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQVdSLGVBQWpCO0FBQ0EsUUFBTVMsSUFBSSxHQUFHQyxNQUFNLENBQUNDLFVBQVAsQ0FBa0IsUUFBbEIsRUFBNEJILElBQTVCLENBQWI7QUFDQUMsRUFBQUEsSUFBSSxDQUFDRyxNQUFMLENBQVliLFdBQVcsQ0FBQ2MsUUFBeEI7QUFDQSxRQUFNQyxLQUFLLEdBQUdMLElBQUksQ0FBQ00sTUFBTCxDQUFZLEtBQVosQ0FBZDtBQUVBLFNBQU8sS0FDSmIsT0FESSxDQUNJO0FBQ1BDLElBQUFBLEtBQUssRUFBRTtBQUNMLE9BQUNDLHFCQUFZQyxLQUFiLEdBQXFCO0FBQ25CLFNBQUNULEVBQUUsQ0FBQ1UsS0FBSixHQUFZUCxXQUFXLENBQUNRO0FBREwsT0FEaEI7QUFJTCxPQUFDSCxxQkFBWVksUUFBYixHQUF3QkY7QUFKbkIsS0FEQTtBQU9QRyxJQUFBQSxPQUFPLEVBQUUsQ0FBQztBQUNSQyxNQUFBQSxLQUFLLEVBQUVDO0FBREMsS0FBRDtBQVBGLEdBREosQ0FBUDtBQVlELENBM0JEOztlQTZCZXJCLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjcnlwdG8gZnJvbSAnY3J5cHRvJztcbmltcG9ydCBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCBDb250YWN0S2V5cyBmcm9tICcuLi90eXBlcy9Db250YWN0S2V5cyc7XG5pbXBvcnQgeyBDb250YWN0SW5zdGFuY2UgfSBmcm9tICcuLi90eXBlcy9Db250YWN0SW5zdGFuY2UnO1xuaW1wb3J0IE9yZ2FuaXphdGlvbnMgZnJvbSAnbW9kZWxzL09yZ2FuaXphdGlvbic7XG5jb25zdCB7IE9wIH0gPSBTZXF1ZWxpemU7XG5cbmludGVyZmFjZSBJQ3JlZGVudGlhbHMge1xuICBbQ29udGFjdEtleXMuRU1BSUxdOiBzdHJpbmc7XG4gIFtDb250YWN0S2V5cy5QQVNTV09SRF06IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmluZEJ5UGFzc3dvcmQge1xuICAoY3JlZGVudGlhbHM6IElDcmVkZW50aWFscyk6IFByb21pc2U8Q29udGFjdEluc3RhbmNlPjtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHVzZXIgZnJvbSB0aGUgcGFzc3dvcmRcbiAqL1xuY29uc3QgZmluZEJ5UGFzc3dvcmQ6IElGaW5kQnlQYXNzd29yZCA9IGFzeW5jIGZ1bmN0aW9uIChjcmVkZW50aWFscykge1xuICAvLyBnZXQgdGhlIHNhbHRcbiAgY29uc3QgY29udGFjdEluc3RhbmNlID0gYXdhaXQgdGhpcy5zY29wZSgnJykuZmluZE9uZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIFtDb250YWN0S2V5cy5FTUFJTF06IHtcbiAgICAgICAgW09wLmlMaWtlXTogY3JlZGVudGlhbHMuZW1haWxcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHsgc2FsdCB9ID0gY29udGFjdEluc3RhbmNlO1xuICBjb25zdCBoYXNoID0gY3J5cHRvLmNyZWF0ZUhtYWMoJ3NoYTUxMicsIHNhbHQpO1xuICBoYXNoLnVwZGF0ZShjcmVkZW50aWFscy5wYXNzd29yZCk7XG4gIGNvbnN0IHZhbHVlID0gaGFzaC5kaWdlc3QoJ2hleCcpO1xuXG4gIHJldHVybiB0aGlzXG4gICAgLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgW0NvbnRhY3RLZXlzLkVNQUlMXToge1xuICAgICAgICAgIFtPcC5pTGlrZV06IGNyZWRlbnRpYWxzLmVtYWlsXG4gICAgICAgIH0sXG4gICAgICAgIFtDb250YWN0S2V5cy5QQVNTV09SRF06IHZhbHVlXG4gICAgICB9LFxuICAgICAgaW5jbHVkZTogW3tcbiAgICAgICAgbW9kZWw6IE9yZ2FuaXphdGlvbnNcbiAgICAgIH1dXG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kQnlQYXNzd29yZDsiXX0=