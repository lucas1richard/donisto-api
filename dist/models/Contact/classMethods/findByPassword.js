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
    attributes: {
      exclude: [_ContactKeys.default.SALT]
    },
    include: [{
      model: _Organization.default
    }]
  });
};

var _default = findByPassword;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbHMvQ29udGFjdC9jbGFzc01ldGhvZHMvZmluZEJ5UGFzc3dvcmQudHMiXSwibmFtZXMiOlsiT3AiLCJTZXF1ZWxpemUiLCJmaW5kQnlQYXNzd29yZCIsImNyZWRlbnRpYWxzIiwiY29udGFjdEluc3RhbmNlIiwic2NvcGUiLCJmaW5kT25lIiwid2hlcmUiLCJDb250YWN0S2V5cyIsIkVNQUlMIiwiaUxpa2UiLCJlbWFpbCIsInNhbHQiLCJoYXNoIiwiY3J5cHRvIiwiY3JlYXRlSG1hYyIsInVwZGF0ZSIsInBhc3N3b3JkIiwidmFsdWUiLCJkaWdlc3QiLCJQQVNTV09SRCIsImF0dHJpYnV0ZXMiLCJleGNsdWRlIiwiU0FMVCIsImluY2x1ZGUiLCJtb2RlbCIsIk9yZ2FuaXphdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7O0FBQ0EsTUFBTTtBQUFFQSxFQUFBQTtBQUFGLElBQVNDLGtCQUFmOztBQVdBOzs7QUFHQSxNQUFNQyxjQUErQixHQUFHLGdCQUFnQkMsV0FBaEIsRUFBNkI7QUFDbkU7QUFDQSxRQUFNQyxlQUFlLEdBQUcsTUFBTSxLQUFLQyxLQUFMLENBQVcsRUFBWCxFQUFlQyxPQUFmLENBQXVCO0FBQ25EQyxJQUFBQSxLQUFLLEVBQUU7QUFDTCxPQUFDQyxxQkFBWUMsS0FBYixHQUFxQjtBQUNuQixTQUFDVCxFQUFFLENBQUNVLEtBQUosR0FBWVAsV0FBVyxDQUFDUTtBQURMO0FBRGhCO0FBRDRDLEdBQXZCLENBQTlCO0FBUUEsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQVdSLGVBQWpCO0FBQ0EsUUFBTVMsSUFBSSxHQUFHQyxNQUFNLENBQUNDLFVBQVAsQ0FBa0IsUUFBbEIsRUFBNEJILElBQTVCLENBQWI7QUFDQUMsRUFBQUEsSUFBSSxDQUFDRyxNQUFMLENBQVliLFdBQVcsQ0FBQ2MsUUFBeEI7QUFDQSxRQUFNQyxLQUFLLEdBQUdMLElBQUksQ0FBQ00sTUFBTCxDQUFZLEtBQVosQ0FBZDtBQUVBLFNBQU8sS0FDSmIsT0FESSxDQUNJO0FBQ1BDLElBQUFBLEtBQUssRUFBRTtBQUNMLE9BQUNDLHFCQUFZQyxLQUFiLEdBQXFCO0FBQ25CLFNBQUNULEVBQUUsQ0FBQ1UsS0FBSixHQUFZUCxXQUFXLENBQUNRO0FBREwsT0FEaEI7QUFJTCxPQUFDSCxxQkFBWVksUUFBYixHQUF3QkY7QUFKbkIsS0FEQTtBQU9QRyxJQUFBQSxVQUFVLEVBQUU7QUFDVkMsTUFBQUEsT0FBTyxFQUFFLENBQ1BkLHFCQUFZZSxJQURMO0FBREMsS0FQTDtBQVlQQyxJQUFBQSxPQUFPLEVBQUUsQ0FBQztBQUNSQyxNQUFBQSxLQUFLLEVBQUVDO0FBREMsS0FBRDtBQVpGLEdBREosQ0FBUDtBQWlCRCxDQWhDRDs7ZUFrQ2V4QixjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5pbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgQ29udGFjdEtleXMgZnJvbSAnLi4vdHlwZXMvQ29udGFjdEtleXMnO1xuaW1wb3J0IHsgQ29udGFjdEluc3RhbmNlIH0gZnJvbSAnLi4vdHlwZXMvQ29udGFjdEluc3RhbmNlJztcbmltcG9ydCBPcmdhbml6YXRpb25zIGZyb20gJ21vZGVscy9Pcmdhbml6YXRpb24nO1xuY29uc3QgeyBPcCB9ID0gU2VxdWVsaXplO1xuXG5pbnRlcmZhY2UgSUNyZWRlbnRpYWxzIHtcbiAgW0NvbnRhY3RLZXlzLkVNQUlMXTogc3RyaW5nO1xuICBbQ29udGFjdEtleXMuUEFTU1dPUkRdOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbmRCeVBhc3N3b3JkIHtcbiAgKGNyZWRlbnRpYWxzOiBJQ3JlZGVudGlhbHMpOiBQcm9taXNlPENvbnRhY3RJbnN0YW5jZT47XG59XG5cbi8qKlxuICogR2V0IHRoZSB1c2VyIGZyb20gdGhlIHBhc3N3b3JkXG4gKi9cbmNvbnN0IGZpbmRCeVBhc3N3b3JkOiBJRmluZEJ5UGFzc3dvcmQgPSBhc3luYyBmdW5jdGlvbiAoY3JlZGVudGlhbHMpIHtcbiAgLy8gZ2V0IHRoZSBzYWx0XG4gIGNvbnN0IGNvbnRhY3RJbnN0YW5jZSA9IGF3YWl0IHRoaXMuc2NvcGUoJycpLmZpbmRPbmUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBbQ29udGFjdEtleXMuRU1BSUxdOiB7XG4gICAgICAgIFtPcC5pTGlrZV06IGNyZWRlbnRpYWxzLmVtYWlsXG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCB7IHNhbHQgfSA9IGNvbnRhY3RJbnN0YW5jZTtcbiAgY29uc3QgaGFzaCA9IGNyeXB0by5jcmVhdGVIbWFjKCdzaGE1MTInLCBzYWx0KTtcbiAgaGFzaC51cGRhdGUoY3JlZGVudGlhbHMucGFzc3dvcmQpO1xuICBjb25zdCB2YWx1ZSA9IGhhc2guZGlnZXN0KCdoZXgnKTtcblxuICByZXR1cm4gdGhpc1xuICAgIC5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIFtDb250YWN0S2V5cy5FTUFJTF06IHtcbiAgICAgICAgICBbT3AuaUxpa2VdOiBjcmVkZW50aWFscy5lbWFpbFxuICAgICAgICB9LFxuICAgICAgICBbQ29udGFjdEtleXMuUEFTU1dPUkRdOiB2YWx1ZVxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZXhjbHVkZTogW1xuICAgICAgICAgIENvbnRhY3RLZXlzLlNBTFQsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgaW5jbHVkZTogW3tcbiAgICAgICAgbW9kZWw6IE9yZ2FuaXphdGlvbnNcbiAgICAgIH1dXG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kQnlQYXNzd29yZDsiXX0=