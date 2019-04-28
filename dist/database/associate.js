"use strict";

var _Contact = _interopRequireDefault(require("../models/Contact"));

var _Organization = _interopRequireDefault(require("../models/Organization"));

var _Donor = _interopRequireDefault(require("../models/Donor"));

var _NewsFeed = _interopRequireDefault(require("../models/NewsFeed"));

var _foreignKeys = _interopRequireDefault(require("./foreignKeys"));

var _OrganizationsContacts = _interopRequireDefault(require("../models/OrganizationsContacts"));

var _Cause = _interopRequireDefault(require("../models/Cause"));

var _NewsFeedCauses = _interopRequireDefault(require("../models/NewsFeedCauses"));

var _Donation = _interopRequireDefault(require("../models/Donation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Organization.hasMany(Contact, {
//   foreignKey: foreignKeys.ORGANIZATION
// });
const org = {
  foreignKey: _foreignKeys.default.ORGANIZATION
};
const donation = {
  foreignKey: _foreignKeys.default.DONATION
};
const contact = {
  foreignKey: _foreignKeys.default.CONTACT
};
const cause = {
  foreignKey: _foreignKeys.default.CAUSE
};
const newsfeed = {
  foreignKey: _foreignKeys.default.NEWSFEED
};
const thruOrgContacts = {
  through: _OrganizationsContacts.default
};
const thruNewsFeedCauses = {
  through: _NewsFeedCauses.default
};

_Contact.default.belongsToMany(_Organization.default, _objectSpread({}, thruOrgContacts, {}, contact));

_Organization.default.belongsToMany(_Contact.default, _objectSpread({}, thruOrgContacts, {}, org));

_Cause.default.belongsToMany(_NewsFeed.default, _objectSpread({}, thruNewsFeedCauses, {}, cause));

_NewsFeed.default.belongsToMany(_Cause.default, _objectSpread({}, thruNewsFeedCauses, {}, newsfeed)); // OrganizationsContacts.hasMany(Organization, {
//   foreignKey: foreignKeys.ORGANIZATION
// });
// OrganizationsContacts.hasMany(Contact, {
//   foreignKey: foreignKeys.CONTACT
// });


_Organization.default.hasMany(_NewsFeed.default, org);

_NewsFeed.default.belongsTo(_Organization.default, org);

_Organization.default.hasMany(_Cause.default, org);

_Cause.default.belongsTo(_Organization.default, org);

_Contact.default.hasMany(_Donation.default, contact);

_Donation.default.belongsTo(_Contact.default, contact);

_Cause.default.hasMany(_Donation.default, cause);

_Donation.default.belongsTo(_Cause.default, cause);

_Donor.default.belongsTo(_Contact.default, contact);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZS9hc3NvY2lhdGUudHMiXSwibmFtZXMiOlsib3JnIiwiZm9yZWlnbktleSIsImZvcmVpZ25LZXlzIiwiT1JHQU5JWkFUSU9OIiwiZG9uYXRpb24iLCJET05BVElPTiIsImNvbnRhY3QiLCJDT05UQUNUIiwiY2F1c2UiLCJDQVVTRSIsIm5ld3NmZWVkIiwiTkVXU0ZFRUQiLCJ0aHJ1T3JnQ29udGFjdHMiLCJ0aHJvdWdoIiwiT3JnYW5pemF0aW9uc0NvbnRhY3RzIiwidGhydU5ld3NGZWVkQ2F1c2VzIiwiTmV3c0ZlZWRDYXVzZXMiLCJDb250YWN0IiwiYmVsb25nc1RvTWFueSIsIk9yZ2FuaXphdGlvbiIsIkNhdXNlIiwiTmV3c0ZlZWQiLCJoYXNNYW55IiwiYmVsb25nc1RvIiwiRG9uYXRpb24iLCJEb25vciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxHQUFHLEdBQUc7QUFBRUMsRUFBQUEsVUFBVSxFQUFFQyxxQkFBWUM7QUFBMUIsQ0FBWjtBQUNBLE1BQU1DLFFBQVEsR0FBRztBQUFFSCxFQUFBQSxVQUFVLEVBQUVDLHFCQUFZRztBQUExQixDQUFqQjtBQUNBLE1BQU1DLE9BQU8sR0FBRztBQUFFTCxFQUFBQSxVQUFVLEVBQUVDLHFCQUFZSztBQUExQixDQUFoQjtBQUNBLE1BQU1DLEtBQUssR0FBRztBQUFFUCxFQUFBQSxVQUFVLEVBQUVDLHFCQUFZTztBQUExQixDQUFkO0FBQ0EsTUFBTUMsUUFBUSxHQUFHO0FBQUVULEVBQUFBLFVBQVUsRUFBRUMscUJBQVlTO0FBQTFCLENBQWpCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHO0FBQ3RCQyxFQUFBQSxPQUFPLEVBQUVDO0FBRGEsQ0FBeEI7QUFHQSxNQUFNQyxrQkFBa0IsR0FBRztBQUN6QkYsRUFBQUEsT0FBTyxFQUFFRztBQURnQixDQUEzQjs7QUFJQUMsaUJBQVFDLGFBQVIsQ0FBc0JDLHFCQUF0QixvQkFBeUNQLGVBQXpDLE1BQTZETixPQUE3RDs7QUFDQWEsc0JBQWFELGFBQWIsQ0FBMkJELGdCQUEzQixvQkFBeUNMLGVBQXpDLE1BQTZEWixHQUE3RDs7QUFFQW9CLGVBQU1GLGFBQU4sQ0FBb0JHLGlCQUFwQixvQkFBbUNOLGtCQUFuQyxNQUEwRFAsS0FBMUQ7O0FBQ0FhLGtCQUFTSCxhQUFULENBQXVCRSxjQUF2QixvQkFBbUNMLGtCQUFuQyxNQUEwREwsUUFBMUQsRyxDQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUFTLHNCQUFhRyxPQUFiLENBQXFCRCxpQkFBckIsRUFBK0JyQixHQUEvQjs7QUFDQXFCLGtCQUFTRSxTQUFULENBQW1CSixxQkFBbkIsRUFBaUNuQixHQUFqQzs7QUFFQW1CLHNCQUFhRyxPQUFiLENBQXFCRixjQUFyQixFQUE0QnBCLEdBQTVCOztBQUNBb0IsZUFBTUcsU0FBTixDQUFnQkoscUJBQWhCLEVBQThCbkIsR0FBOUI7O0FBRUFpQixpQkFBUUssT0FBUixDQUFnQkUsaUJBQWhCLEVBQTBCbEIsT0FBMUI7O0FBQ0FrQixrQkFBU0QsU0FBVCxDQUFtQk4sZ0JBQW5CLEVBQTRCWCxPQUE1Qjs7QUFFQWMsZUFBTUUsT0FBTixDQUFjRSxpQkFBZCxFQUF3QmhCLEtBQXhCOztBQUNBZ0Isa0JBQVNELFNBQVQsQ0FBbUJILGNBQW5CLEVBQTBCWixLQUExQjs7QUFFQWlCLGVBQU1GLFNBQU4sQ0FBZ0JOLGdCQUFoQixFQUF5QlgsT0FBekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFjdCBmcm9tICdtb2RlbHMvQ29udGFjdCc7XG5pbXBvcnQgT3JnYW5pemF0aW9uIGZyb20gJ21vZGVscy9Pcmdhbml6YXRpb24nO1xuaW1wb3J0IERvbm9yIGZyb20gJ21vZGVscy9Eb25vcic7XG5pbXBvcnQgTmV3c0ZlZWQgZnJvbSAnbW9kZWxzL05ld3NGZWVkJztcbmltcG9ydCBmb3JlaWduS2V5cyBmcm9tICcuL2ZvcmVpZ25LZXlzJztcbmltcG9ydCBPcmdhbml6YXRpb25zQ29udGFjdHMgZnJvbSAnbW9kZWxzL09yZ2FuaXphdGlvbnNDb250YWN0cyc7XG5pbXBvcnQgQ2F1c2UgZnJvbSAnbW9kZWxzL0NhdXNlJztcbmltcG9ydCBOZXdzRmVlZENhdXNlcyBmcm9tICdtb2RlbHMvTmV3c0ZlZWRDYXVzZXMnO1xuaW1wb3J0IERvbmF0aW9uIGZyb20gJ21vZGVscy9Eb25hdGlvbic7XG5cbi8vIE9yZ2FuaXphdGlvbi5oYXNNYW55KENvbnRhY3QsIHtcbi8vICAgZm9yZWlnbktleTogZm9yZWlnbktleXMuT1JHQU5JWkFUSU9OXG4vLyB9KTtcblxuY29uc3Qgb3JnID0geyBmb3JlaWduS2V5OiBmb3JlaWduS2V5cy5PUkdBTklaQVRJT04gfTtcbmNvbnN0IGRvbmF0aW9uID0geyBmb3JlaWduS2V5OiBmb3JlaWduS2V5cy5ET05BVElPTiB9O1xuY29uc3QgY29udGFjdCA9IHsgZm9yZWlnbktleTogZm9yZWlnbktleXMuQ09OVEFDVCB9O1xuY29uc3QgY2F1c2UgPSB7IGZvcmVpZ25LZXk6IGZvcmVpZ25LZXlzLkNBVVNFIH07XG5jb25zdCBuZXdzZmVlZCA9IHsgZm9yZWlnbktleTogZm9yZWlnbktleXMuTkVXU0ZFRUQgfTtcbmNvbnN0IHRocnVPcmdDb250YWN0cyA9IHtcbiAgdGhyb3VnaDogT3JnYW5pemF0aW9uc0NvbnRhY3RzXG59O1xuY29uc3QgdGhydU5ld3NGZWVkQ2F1c2VzID0ge1xuICB0aHJvdWdoOiBOZXdzRmVlZENhdXNlc1xufTtcblxuQ29udGFjdC5iZWxvbmdzVG9NYW55KE9yZ2FuaXphdGlvbiwgeyAuLi50aHJ1T3JnQ29udGFjdHMsIC4uLmNvbnRhY3QgfSk7XG5Pcmdhbml6YXRpb24uYmVsb25nc1RvTWFueShDb250YWN0LCB7IC4uLnRocnVPcmdDb250YWN0cywgLi4ub3JnIH0pO1xuXG5DYXVzZS5iZWxvbmdzVG9NYW55KE5ld3NGZWVkLCB7IC4uLnRocnVOZXdzRmVlZENhdXNlcywgLi4uY2F1c2UgfSk7XG5OZXdzRmVlZC5iZWxvbmdzVG9NYW55KENhdXNlLCB7IC4uLnRocnVOZXdzRmVlZENhdXNlcywgLi4ubmV3c2ZlZWQgfSk7XG5cbi8vIE9yZ2FuaXphdGlvbnNDb250YWN0cy5oYXNNYW55KE9yZ2FuaXphdGlvbiwge1xuLy8gICBmb3JlaWduS2V5OiBmb3JlaWduS2V5cy5PUkdBTklaQVRJT05cbi8vIH0pO1xuXG4vLyBPcmdhbml6YXRpb25zQ29udGFjdHMuaGFzTWFueShDb250YWN0LCB7XG4vLyAgIGZvcmVpZ25LZXk6IGZvcmVpZ25LZXlzLkNPTlRBQ1Rcbi8vIH0pO1xuXG5Pcmdhbml6YXRpb24uaGFzTWFueShOZXdzRmVlZCwgb3JnKTtcbk5ld3NGZWVkLmJlbG9uZ3NUbyhPcmdhbml6YXRpb24sIG9yZyk7XG5cbk9yZ2FuaXphdGlvbi5oYXNNYW55KENhdXNlLCBvcmcpO1xuQ2F1c2UuYmVsb25nc1RvKE9yZ2FuaXphdGlvbiwgb3JnKTtcblxuQ29udGFjdC5oYXNNYW55KERvbmF0aW9uLCBjb250YWN0KTtcbkRvbmF0aW9uLmJlbG9uZ3NUbyhDb250YWN0LCBjb250YWN0KTtcblxuQ2F1c2UuaGFzTWFueShEb25hdGlvbiwgY2F1c2UpO1xuRG9uYXRpb24uYmVsb25nc1RvKENhdXNlLCBjYXVzZSk7XG5cbkRvbm9yLmJlbG9uZ3NUbyhDb250YWN0LCBjb250YWN0KTtcbiJdfQ==