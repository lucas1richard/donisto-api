"use strict";

var _Contact = _interopRequireDefault(require("../models/Contact"));

var _Organization = _interopRequireDefault(require("../models/Organization"));

var _Donor = _interopRequireDefault(require("../models/Donor"));

var _NewsFeed = _interopRequireDefault(require("../models/NewsFeed"));

var _foreignKeys = _interopRequireDefault(require("./foreignKeys"));

var _OrganizationsContacts = _interopRequireDefault(require("../models/OrganizationsContacts"));

var _Cause = _interopRequireDefault(require("../models/Cause"));

var _NewsFeedCauses = _interopRequireDefault(require("../models/NewsFeedCauses"));

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

_Donor.default.belongsTo(_Contact.default, contact);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZS9hc3NvY2lhdGUudHMiXSwibmFtZXMiOlsib3JnIiwiZm9yZWlnbktleSIsImZvcmVpZ25LZXlzIiwiT1JHQU5JWkFUSU9OIiwiY29udGFjdCIsIkNPTlRBQ1QiLCJjYXVzZSIsIkNBVVNFIiwibmV3c2ZlZWQiLCJORVdTRkVFRCIsInRocnVPcmdDb250YWN0cyIsInRocm91Z2giLCJPcmdhbml6YXRpb25zQ29udGFjdHMiLCJ0aHJ1TmV3c0ZlZWRDYXVzZXMiLCJOZXdzRmVlZENhdXNlcyIsIkNvbnRhY3QiLCJiZWxvbmdzVG9NYW55IiwiT3JnYW5pemF0aW9uIiwiQ2F1c2UiLCJOZXdzRmVlZCIsImhhc01hbnkiLCJiZWxvbmdzVG8iLCJEb25vciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxHQUFHLEdBQUc7QUFBRUMsRUFBQUEsVUFBVSxFQUFFQyxxQkFBWUM7QUFBMUIsQ0FBWjtBQUNBLE1BQU1DLE9BQU8sR0FBRztBQUFFSCxFQUFBQSxVQUFVLEVBQUVDLHFCQUFZRztBQUExQixDQUFoQjtBQUNBLE1BQU1DLEtBQUssR0FBRztBQUFFTCxFQUFBQSxVQUFVLEVBQUVDLHFCQUFZSztBQUExQixDQUFkO0FBQ0EsTUFBTUMsUUFBUSxHQUFHO0FBQUVQLEVBQUFBLFVBQVUsRUFBRUMscUJBQVlPO0FBQTFCLENBQWpCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHO0FBQ3RCQyxFQUFBQSxPQUFPLEVBQUVDO0FBRGEsQ0FBeEI7QUFHQSxNQUFNQyxrQkFBa0IsR0FBRztBQUN6QkYsRUFBQUEsT0FBTyxFQUFFRztBQURnQixDQUEzQjs7QUFJQUMsaUJBQVFDLGFBQVIsQ0FBc0JDLHFCQUF0QixvQkFBeUNQLGVBQXpDLE1BQTZETixPQUE3RDs7QUFDQWEsc0JBQWFELGFBQWIsQ0FBMkJELGdCQUEzQixvQkFBeUNMLGVBQXpDLE1BQTZEVixHQUE3RDs7QUFFQWtCLGVBQU1GLGFBQU4sQ0FBb0JHLGlCQUFwQixvQkFBbUNOLGtCQUFuQyxNQUEwRFAsS0FBMUQ7O0FBQ0FhLGtCQUFTSCxhQUFULENBQXVCRSxjQUF2QixvQkFBbUNMLGtCQUFuQyxNQUEwREwsUUFBMUQsRyxDQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUFTLHNCQUFhRyxPQUFiLENBQXFCRCxpQkFBckIsRUFBK0JuQixHQUEvQjs7QUFDQW1CLGtCQUFTRSxTQUFULENBQW1CSixxQkFBbkIsRUFBaUNqQixHQUFqQzs7QUFFQWlCLHNCQUFhRyxPQUFiLENBQXFCRixjQUFyQixFQUE0QmxCLEdBQTVCOztBQUNBa0IsZUFBTUcsU0FBTixDQUFnQkoscUJBQWhCLEVBQThCakIsR0FBOUI7O0FBRUFzQixlQUFNRCxTQUFOLENBQWdCTixnQkFBaEIsRUFBeUJYLE9BQXpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhY3QgZnJvbSAnbW9kZWxzL0NvbnRhY3QnO1xuaW1wb3J0IE9yZ2FuaXphdGlvbiBmcm9tICdtb2RlbHMvT3JnYW5pemF0aW9uJztcbmltcG9ydCBEb25vciBmcm9tICdtb2RlbHMvRG9ub3InO1xuaW1wb3J0IE5ld3NGZWVkIGZyb20gJ21vZGVscy9OZXdzRmVlZCc7XG5pbXBvcnQgZm9yZWlnbktleXMgZnJvbSAnLi9mb3JlaWduS2V5cyc7XG5pbXBvcnQgT3JnYW5pemF0aW9uc0NvbnRhY3RzIGZyb20gJ21vZGVscy9Pcmdhbml6YXRpb25zQ29udGFjdHMnO1xuaW1wb3J0IENhdXNlIGZyb20gJ21vZGVscy9DYXVzZSc7XG5pbXBvcnQgTmV3c0ZlZWRDYXVzZXMgZnJvbSAnbW9kZWxzL05ld3NGZWVkQ2F1c2VzJztcblxuLy8gT3JnYW5pemF0aW9uLmhhc01hbnkoQ29udGFjdCwge1xuLy8gICBmb3JlaWduS2V5OiBmb3JlaWduS2V5cy5PUkdBTklaQVRJT05cbi8vIH0pO1xuXG5jb25zdCBvcmcgPSB7IGZvcmVpZ25LZXk6IGZvcmVpZ25LZXlzLk9SR0FOSVpBVElPTiB9O1xuY29uc3QgY29udGFjdCA9IHsgZm9yZWlnbktleTogZm9yZWlnbktleXMuQ09OVEFDVCB9O1xuY29uc3QgY2F1c2UgPSB7IGZvcmVpZ25LZXk6IGZvcmVpZ25LZXlzLkNBVVNFIH07XG5jb25zdCBuZXdzZmVlZCA9IHsgZm9yZWlnbktleTogZm9yZWlnbktleXMuTkVXU0ZFRUQgfTtcbmNvbnN0IHRocnVPcmdDb250YWN0cyA9IHtcbiAgdGhyb3VnaDogT3JnYW5pemF0aW9uc0NvbnRhY3RzXG59O1xuY29uc3QgdGhydU5ld3NGZWVkQ2F1c2VzID0ge1xuICB0aHJvdWdoOiBOZXdzRmVlZENhdXNlc1xufTtcblxuQ29udGFjdC5iZWxvbmdzVG9NYW55KE9yZ2FuaXphdGlvbiwgeyAuLi50aHJ1T3JnQ29udGFjdHMsIC4uLmNvbnRhY3QgfSk7XG5Pcmdhbml6YXRpb24uYmVsb25nc1RvTWFueShDb250YWN0LCB7IC4uLnRocnVPcmdDb250YWN0cywgLi4ub3JnIH0pO1xuXG5DYXVzZS5iZWxvbmdzVG9NYW55KE5ld3NGZWVkLCB7IC4uLnRocnVOZXdzRmVlZENhdXNlcywgLi4uY2F1c2UgfSk7XG5OZXdzRmVlZC5iZWxvbmdzVG9NYW55KENhdXNlLCB7IC4uLnRocnVOZXdzRmVlZENhdXNlcywgLi4ubmV3c2ZlZWQgfSk7XG5cbi8vIE9yZ2FuaXphdGlvbnNDb250YWN0cy5oYXNNYW55KE9yZ2FuaXphdGlvbiwge1xuLy8gICBmb3JlaWduS2V5OiBmb3JlaWduS2V5cy5PUkdBTklaQVRJT05cbi8vIH0pO1xuXG4vLyBPcmdhbml6YXRpb25zQ29udGFjdHMuaGFzTWFueShDb250YWN0LCB7XG4vLyAgIGZvcmVpZ25LZXk6IGZvcmVpZ25LZXlzLkNPTlRBQ1Rcbi8vIH0pO1xuXG5Pcmdhbml6YXRpb24uaGFzTWFueShOZXdzRmVlZCwgb3JnKTtcbk5ld3NGZWVkLmJlbG9uZ3NUbyhPcmdhbml6YXRpb24sIG9yZyk7XG5cbk9yZ2FuaXphdGlvbi5oYXNNYW55KENhdXNlLCBvcmcpO1xuQ2F1c2UuYmVsb25nc1RvKE9yZ2FuaXphdGlvbiwgb3JnKTtcblxuRG9ub3IuYmVsb25nc1RvKENvbnRhY3QsIGNvbnRhY3QpO1xuIl19