"use strict";

var _Contact = _interopRequireDefault(require("../models/Contact"));

var _Organization = _interopRequireDefault(require("../models/Organization"));

var _Donor = _interopRequireDefault(require("../models/Donor"));

var _NewsFeed = _interopRequireDefault(require("../models/NewsFeed"));

var _foreignKeys = _interopRequireDefault(require("./foreignKeys"));

var _OrganizationsContacts = _interopRequireDefault(require("../models/OrganizationsContacts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Organization.hasMany(Contact, {
//   foreignKey: foreignKeys.ORGANIZATION
// });
const org = {
  foreignKey: _foreignKeys.default.ORGANIZATION
};
const contact = {
  foreignKey: _foreignKeys.default.CONTACT
};
const thruOrgContacts = {
  through: _OrganizationsContacts.default
};

_Contact.default.belongsToMany(_Organization.default, _objectSpread({}, thruOrgContacts, {}, contact));

_Organization.default.belongsToMany(_Contact.default, _objectSpread({}, thruOrgContacts, {}, org)); // OrganizationsContacts.hasMany(Organization, {
//   foreignKey: foreignKeys.ORGANIZATION
// });
// OrganizationsContacts.hasMany(Contact, {
//   foreignKey: foreignKeys.CONTACT
// });


_Organization.default.hasMany(_NewsFeed.default, org);

_NewsFeed.default.belongsTo(_Organization.default, org);

_Donor.default.belongsTo(_Contact.default, contact);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZS9hc3NvY2lhdGUudHMiXSwibmFtZXMiOlsib3JnIiwiZm9yZWlnbktleSIsImZvcmVpZ25LZXlzIiwiT1JHQU5JWkFUSU9OIiwiY29udGFjdCIsIkNPTlRBQ1QiLCJ0aHJ1T3JnQ29udGFjdHMiLCJ0aHJvdWdoIiwiT3JnYW5pemF0aW9uc0NvbnRhY3RzIiwiQ29udGFjdCIsImJlbG9uZ3NUb01hbnkiLCJPcmdhbml6YXRpb24iLCJoYXNNYW55IiwiTmV3c0ZlZWQiLCJiZWxvbmdzVG8iLCJEb25vciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxHQUFHLEdBQUc7QUFBRUMsRUFBQUEsVUFBVSxFQUFFQyxxQkFBWUM7QUFBMUIsQ0FBWjtBQUNBLE1BQU1DLE9BQU8sR0FBRztBQUFFSCxFQUFBQSxVQUFVLEVBQUVDLHFCQUFZRztBQUExQixDQUFoQjtBQUNBLE1BQU1DLGVBQWUsR0FBRztBQUN0QkMsRUFBQUEsT0FBTyxFQUFFQztBQURhLENBQXhCOztBQUlBQyxpQkFBUUMsYUFBUixDQUFzQkMscUJBQXRCLG9CQUF5Q0wsZUFBekMsTUFBNkRGLE9BQTdEOztBQUNBTyxzQkFBYUQsYUFBYixDQUEyQkQsZ0JBQTNCLG9CQUF5Q0gsZUFBekMsTUFBNkROLEdBQTdELEcsQ0FFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBVyxzQkFBYUMsT0FBYixDQUFxQkMsaUJBQXJCLEVBQStCYixHQUEvQjs7QUFDQWEsa0JBQVNDLFNBQVQsQ0FBbUJILHFCQUFuQixFQUFpQ1gsR0FBakM7O0FBRUFlLGVBQU1ELFNBQU4sQ0FBZ0JMLGdCQUFoQixFQUF5QkwsT0FBekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFjdCBmcm9tICdtb2RlbHMvQ29udGFjdCc7XG5pbXBvcnQgT3JnYW5pemF0aW9uIGZyb20gJ21vZGVscy9Pcmdhbml6YXRpb24nO1xuaW1wb3J0IERvbm9yIGZyb20gJ21vZGVscy9Eb25vcic7XG5pbXBvcnQgTmV3c0ZlZWQgZnJvbSAnbW9kZWxzL05ld3NGZWVkJztcbmltcG9ydCBmb3JlaWduS2V5cyBmcm9tICcuL2ZvcmVpZ25LZXlzJztcbmltcG9ydCBPcmdhbml6YXRpb25zQ29udGFjdHMgZnJvbSAnbW9kZWxzL09yZ2FuaXphdGlvbnNDb250YWN0cyc7XG5cbi8vIE9yZ2FuaXphdGlvbi5oYXNNYW55KENvbnRhY3QsIHtcbi8vICAgZm9yZWlnbktleTogZm9yZWlnbktleXMuT1JHQU5JWkFUSU9OXG4vLyB9KTtcblxuY29uc3Qgb3JnID0geyBmb3JlaWduS2V5OiBmb3JlaWduS2V5cy5PUkdBTklaQVRJT04gfTtcbmNvbnN0IGNvbnRhY3QgPSB7IGZvcmVpZ25LZXk6IGZvcmVpZ25LZXlzLkNPTlRBQ1QgfTtcbmNvbnN0IHRocnVPcmdDb250YWN0cyA9IHtcbiAgdGhyb3VnaDogT3JnYW5pemF0aW9uc0NvbnRhY3RzXG59O1xuXG5Db250YWN0LmJlbG9uZ3NUb01hbnkoT3JnYW5pemF0aW9uLCB7IC4uLnRocnVPcmdDb250YWN0cywgLi4uY29udGFjdCB9KTtcbk9yZ2FuaXphdGlvbi5iZWxvbmdzVG9NYW55KENvbnRhY3QsIHsgLi4udGhydU9yZ0NvbnRhY3RzLCAuLi5vcmcgfSk7XG5cbi8vIE9yZ2FuaXphdGlvbnNDb250YWN0cy5oYXNNYW55KE9yZ2FuaXphdGlvbiwge1xuLy8gICBmb3JlaWduS2V5OiBmb3JlaWduS2V5cy5PUkdBTklaQVRJT05cbi8vIH0pO1xuXG4vLyBPcmdhbml6YXRpb25zQ29udGFjdHMuaGFzTWFueShDb250YWN0LCB7XG4vLyAgIGZvcmVpZ25LZXk6IGZvcmVpZ25LZXlzLkNPTlRBQ1Rcbi8vIH0pO1xuXG5Pcmdhbml6YXRpb24uaGFzTWFueShOZXdzRmVlZCwgb3JnKTtcbk5ld3NGZWVkLmJlbG9uZ3NUbyhPcmdhbml6YXRpb24sIG9yZyk7XG5cbkRvbm9yLmJlbG9uZ3NUbyhDb250YWN0LCBjb250YWN0KTtcbiJdfQ==