"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var crypto = _interopRequireWildcard(require("crypto"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var _ContactKeys = _interopRequireDefault(require("../types/ContactKeys"));

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
    }
  });
};

var _default = findByPassword;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbHMvQ29udGFjdC9jbGFzc01ldGhvZHMvZmluZEJ5UGFzc3dvcmQudHMiXSwibmFtZXMiOlsiT3AiLCJTZXF1ZWxpemUiLCJmaW5kQnlQYXNzd29yZCIsImNyZWRlbnRpYWxzIiwiY29udGFjdEluc3RhbmNlIiwic2NvcGUiLCJmaW5kT25lIiwid2hlcmUiLCJDb250YWN0S2V5cyIsIkVNQUlMIiwiaUxpa2UiLCJlbWFpbCIsInNhbHQiLCJoYXNoIiwiY3J5cHRvIiwiY3JlYXRlSG1hYyIsInVwZGF0ZSIsInBhc3N3b3JkIiwidmFsdWUiLCJkaWdlc3QiLCJQQVNTV09SRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxNQUFNO0FBQUVBLEVBQUFBO0FBQUYsSUFBU0Msa0JBQWY7O0FBV0E7OztBQUdBLE1BQU1DLGNBQStCLEdBQUcsZ0JBQWdCQyxXQUFoQixFQUE2QjtBQUNuRTtBQUNBLFFBQU1DLGVBQWUsR0FBRyxNQUFNLEtBQUtDLEtBQUwsQ0FBVyxFQUFYLEVBQWVDLE9BQWYsQ0FBdUI7QUFDbkRDLElBQUFBLEtBQUssRUFBRTtBQUNMLE9BQUNDLHFCQUFZQyxLQUFiLEdBQXFCO0FBQ25CLFNBQUNULEVBQUUsQ0FBQ1UsS0FBSixHQUFZUCxXQUFXLENBQUNRO0FBREw7QUFEaEI7QUFENEMsR0FBdkIsQ0FBOUI7QUFRQSxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBV1IsZUFBakI7QUFDQSxRQUFNUyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQixRQUFsQixFQUE0QkgsSUFBNUIsQ0FBYjtBQUNBQyxFQUFBQSxJQUFJLENBQUNHLE1BQUwsQ0FBWWIsV0FBVyxDQUFDYyxRQUF4QjtBQUNBLFFBQU1DLEtBQUssR0FBR0wsSUFBSSxDQUFDTSxNQUFMLENBQVksS0FBWixDQUFkO0FBRUEsU0FBTyxLQUNKYixPQURJLENBQ0k7QUFDUEMsSUFBQUEsS0FBSyxFQUFFO0FBQ0wsT0FBQ0MscUJBQVlDLEtBQWIsR0FBcUI7QUFDbkIsU0FBQ1QsRUFBRSxDQUFDVSxLQUFKLEdBQVlQLFdBQVcsQ0FBQ1E7QUFETCxPQURoQjtBQUlMLE9BQUNILHFCQUFZWSxRQUFiLEdBQXdCRjtBQUpuQjtBQURBLEdBREosQ0FBUDtBQVNELENBeEJEOztlQTBCZWhCLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjcnlwdG8gZnJvbSAnY3J5cHRvJztcbmltcG9ydCBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCBDb250YWN0S2V5cyBmcm9tICcuLi90eXBlcy9Db250YWN0S2V5cyc7XG5pbXBvcnQgeyBDb250YWN0SW5zdGFuY2UgfSBmcm9tICcuLi90eXBlcy9Db250YWN0SW5zdGFuY2UnO1xuY29uc3QgeyBPcCB9ID0gU2VxdWVsaXplO1xuXG5pbnRlcmZhY2UgSUNyZWRlbnRpYWxzIHtcbiAgW0NvbnRhY3RLZXlzLkVNQUlMXTogc3RyaW5nO1xuICBbQ29udGFjdEtleXMuUEFTU1dPUkRdOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbmRCeVBhc3N3b3JkIHtcbiAgKGNyZWRlbnRpYWxzOiBJQ3JlZGVudGlhbHMpOiBQcm9taXNlPENvbnRhY3RJbnN0YW5jZT47XG59XG5cbi8qKlxuICogR2V0IHRoZSB1c2VyIGZyb20gdGhlIHBhc3N3b3JkXG4gKi9cbmNvbnN0IGZpbmRCeVBhc3N3b3JkOiBJRmluZEJ5UGFzc3dvcmQgPSBhc3luYyBmdW5jdGlvbiAoY3JlZGVudGlhbHMpIHtcbiAgLy8gZ2V0IHRoZSBzYWx0XG4gIGNvbnN0IGNvbnRhY3RJbnN0YW5jZSA9IGF3YWl0IHRoaXMuc2NvcGUoJycpLmZpbmRPbmUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBbQ29udGFjdEtleXMuRU1BSUxdOiB7XG4gICAgICAgIFtPcC5pTGlrZV06IGNyZWRlbnRpYWxzLmVtYWlsXG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCB7IHNhbHQgfSA9IGNvbnRhY3RJbnN0YW5jZTtcbiAgY29uc3QgaGFzaCA9IGNyeXB0by5jcmVhdGVIbWFjKCdzaGE1MTInLCBzYWx0KTtcbiAgaGFzaC51cGRhdGUoY3JlZGVudGlhbHMucGFzc3dvcmQpO1xuICBjb25zdCB2YWx1ZSA9IGhhc2guZGlnZXN0KCdoZXgnKTtcblxuICByZXR1cm4gdGhpc1xuICAgIC5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIFtDb250YWN0S2V5cy5FTUFJTF06IHtcbiAgICAgICAgICBbT3AuaUxpa2VdOiBjcmVkZW50aWFscy5lbWFpbFxuICAgICAgICB9LFxuICAgICAgICBbQ29udGFjdEtleXMuUEFTU1dPUkRdOiB2YWx1ZVxuICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZEJ5UGFzc3dvcmQ7Il19