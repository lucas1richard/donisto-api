"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var crypto = _interopRequireWildcard(require("crypto"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var _NewsFeedKeys = _interopRequireDefault(require("../types/NewsFeedKeys"));

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
      [_NewsFeedKeys.default.EMAIL]: {
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
      [_NewsFeedKeys.default.EMAIL]: {
        [Op.iLike]: credentials.email
      },
      [_NewsFeedKeys.default.PASSWORD]: value
    }
  });
};

var _default = findByPassword;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbHMvTmV3c0ZlZWQvY2xhc3NNZXRob2RzL2ZpbmRCeVBhc3N3b3JkLnRzIl0sIm5hbWVzIjpbIk9wIiwiU2VxdWVsaXplIiwiZmluZEJ5UGFzc3dvcmQiLCJjcmVkZW50aWFscyIsImNvbnRhY3RJbnN0YW5jZSIsInNjb3BlIiwiZmluZE9uZSIsIndoZXJlIiwiTmV3c0ZlZWRLZXlzIiwiRU1BSUwiLCJpTGlrZSIsImVtYWlsIiwic2FsdCIsImhhc2giLCJjcnlwdG8iLCJjcmVhdGVIbWFjIiwidXBkYXRlIiwicGFzc3dvcmQiLCJ2YWx1ZSIsImRpZ2VzdCIsIlBBU1NXT1JEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLE1BQU07QUFBRUEsRUFBQUE7QUFBRixJQUFTQyxrQkFBZjs7QUFXQTs7O0FBR0EsTUFBTUMsY0FBK0IsR0FBRyxnQkFBZ0JDLFdBQWhCLEVBQTZCO0FBQ25FO0FBQ0EsUUFBTUMsZUFBZSxHQUFHLE1BQU0sS0FBS0MsS0FBTCxDQUFXLEVBQVgsRUFBZUMsT0FBZixDQUF1QjtBQUNuREMsSUFBQUEsS0FBSyxFQUFFO0FBQ0wsT0FBQ0Msc0JBQWFDLEtBQWQsR0FBc0I7QUFDcEIsU0FBQ1QsRUFBRSxDQUFDVSxLQUFKLEdBQVlQLFdBQVcsQ0FBQ1E7QUFESjtBQURqQjtBQUQ0QyxHQUF2QixDQUE5QjtBQVFBLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFXUixlQUFqQjtBQUNBLFFBQU1TLElBQUksR0FBR0MsTUFBTSxDQUFDQyxVQUFQLENBQWtCLFFBQWxCLEVBQTRCSCxJQUE1QixDQUFiO0FBQ0FDLEVBQUFBLElBQUksQ0FBQ0csTUFBTCxDQUFZYixXQUFXLENBQUNjLFFBQXhCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHTCxJQUFJLENBQUNNLE1BQUwsQ0FBWSxLQUFaLENBQWQ7QUFFQSxTQUFPLEtBQ0piLE9BREksQ0FDSTtBQUNQQyxJQUFBQSxLQUFLLEVBQUU7QUFDTCxPQUFDQyxzQkFBYUMsS0FBZCxHQUFzQjtBQUNwQixTQUFDVCxFQUFFLENBQUNVLEtBQUosR0FBWVAsV0FBVyxDQUFDUTtBQURKLE9BRGpCO0FBSUwsT0FBQ0gsc0JBQWFZLFFBQWQsR0FBeUJGO0FBSnBCO0FBREEsR0FESixDQUFQO0FBU0QsQ0F4QkQ7O2VBMEJlaEIsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNyeXB0byBmcm9tICdjcnlwdG8nO1xuaW1wb3J0IFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IE5ld3NGZWVkS2V5cyBmcm9tICcuLi90eXBlcy9OZXdzRmVlZEtleXMnO1xuaW1wb3J0IHsgTmV3c0ZlZWRJbnN0YW5jZSB9IGZyb20gJy4uL3R5cGVzL05ld3NGZWVkSW5zdGFuY2UnO1xuY29uc3QgeyBPcCB9ID0gU2VxdWVsaXplO1xuXG5pbnRlcmZhY2UgSUNyZWRlbnRpYWxzIHtcbiAgW05ld3NGZWVkS2V5cy5FTUFJTF06IHN0cmluZztcbiAgW05ld3NGZWVkS2V5cy5QQVNTV09SRF06IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmluZEJ5UGFzc3dvcmQge1xuICAoY3JlZGVudGlhbHM6IElDcmVkZW50aWFscyk6IFByb21pc2U8TmV3c0ZlZWRJbnN0YW5jZT47XG59XG5cbi8qKlxuICogR2V0IHRoZSB1c2VyIGZyb20gdGhlIHBhc3N3b3JkXG4gKi9cbmNvbnN0IGZpbmRCeVBhc3N3b3JkOiBJRmluZEJ5UGFzc3dvcmQgPSBhc3luYyBmdW5jdGlvbiAoY3JlZGVudGlhbHMpIHtcbiAgLy8gZ2V0IHRoZSBzYWx0XG4gIGNvbnN0IGNvbnRhY3RJbnN0YW5jZSA9IGF3YWl0IHRoaXMuc2NvcGUoJycpLmZpbmRPbmUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBbTmV3c0ZlZWRLZXlzLkVNQUlMXToge1xuICAgICAgICBbT3AuaUxpa2VdOiBjcmVkZW50aWFscy5lbWFpbFxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgeyBzYWx0IH0gPSBjb250YWN0SW5zdGFuY2U7XG4gIGNvbnN0IGhhc2ggPSBjcnlwdG8uY3JlYXRlSG1hYygnc2hhNTEyJywgc2FsdCk7XG4gIGhhc2gudXBkYXRlKGNyZWRlbnRpYWxzLnBhc3N3b3JkKTtcbiAgY29uc3QgdmFsdWUgPSBoYXNoLmRpZ2VzdCgnaGV4Jyk7XG5cbiAgcmV0dXJuIHRoaXNcbiAgICAuZmluZE9uZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbTmV3c0ZlZWRLZXlzLkVNQUlMXToge1xuICAgICAgICAgIFtPcC5pTGlrZV06IGNyZWRlbnRpYWxzLmVtYWlsXG4gICAgICAgIH0sXG4gICAgICAgIFtOZXdzRmVlZEtleXMuUEFTU1dPUkRdOiB2YWx1ZVxuICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZEJ5UGFzc3dvcmQ7Il19