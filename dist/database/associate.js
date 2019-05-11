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

var _Links = _interopRequireDefault(require("../models/Links"));

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

_Organization.default.hasMany(_Links.default, org);

_Links.default.belongsTo(_Organization.default, org);

_Contact.default.hasMany(_Donation.default, contact);

_Donation.default.belongsTo(_Contact.default, contact);

_Cause.default.hasMany(_Donation.default, cause);

_Donation.default.belongsTo(_Cause.default, cause);

_Donor.default.belongsTo(_Contact.default, contact);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZS9hc3NvY2lhdGUudHMiXSwibmFtZXMiOlsib3JnIiwiZm9yZWlnbktleSIsImZvcmVpZ25LZXlzIiwiT1JHQU5JWkFUSU9OIiwiZG9uYXRpb24iLCJET05BVElPTiIsImNvbnRhY3QiLCJDT05UQUNUIiwiY2F1c2UiLCJDQVVTRSIsIm5ld3NmZWVkIiwiTkVXU0ZFRUQiLCJ0aHJ1T3JnQ29udGFjdHMiLCJ0aHJvdWdoIiwiT3JnYW5pemF0aW9uc0NvbnRhY3RzIiwidGhydU5ld3NGZWVkQ2F1c2VzIiwiTmV3c0ZlZWRDYXVzZXMiLCJDb250YWN0IiwiYmVsb25nc1RvTWFueSIsIk9yZ2FuaXphdGlvbiIsIkNhdXNlIiwiTmV3c0ZlZWQiLCJoYXNNYW55IiwiYmVsb25nc1RvIiwiTGlua3MiLCJEb25hdGlvbiIsIkRvbm9yIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLEdBQUcsR0FBRztBQUFFQyxFQUFBQSxVQUFVLEVBQUVDLHFCQUFZQztBQUExQixDQUFaO0FBQ0EsTUFBTUMsUUFBUSxHQUFHO0FBQUVILEVBQUFBLFVBQVUsRUFBRUMscUJBQVlHO0FBQTFCLENBQWpCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHO0FBQUVMLEVBQUFBLFVBQVUsRUFBRUMscUJBQVlLO0FBQTFCLENBQWhCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHO0FBQUVQLEVBQUFBLFVBQVUsRUFBRUMscUJBQVlPO0FBQTFCLENBQWQ7QUFDQSxNQUFNQyxRQUFRLEdBQUc7QUFBRVQsRUFBQUEsVUFBVSxFQUFFQyxxQkFBWVM7QUFBMUIsQ0FBakI7QUFDQSxNQUFNQyxlQUFlLEdBQUc7QUFDdEJDLEVBQUFBLE9BQU8sRUFBRUM7QUFEYSxDQUF4QjtBQUdBLE1BQU1DLGtCQUFrQixHQUFHO0FBQ3pCRixFQUFBQSxPQUFPLEVBQUVHO0FBRGdCLENBQTNCOztBQUlBQyxpQkFBUUMsYUFBUixDQUFzQkMscUJBQXRCLG9CQUF5Q1AsZUFBekMsTUFBNkROLE9BQTdEOztBQUNBYSxzQkFBYUQsYUFBYixDQUEyQkQsZ0JBQTNCLG9CQUF5Q0wsZUFBekMsTUFBNkRaLEdBQTdEOztBQUVBb0IsZUFBTUYsYUFBTixDQUFvQkcsaUJBQXBCLG9CQUFtQ04sa0JBQW5DLE1BQTBEUCxLQUExRDs7QUFDQWEsa0JBQVNILGFBQVQsQ0FBdUJFLGNBQXZCLG9CQUFtQ0wsa0JBQW5DLE1BQTBETCxRQUExRCxHLENBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQVMsc0JBQWFHLE9BQWIsQ0FBcUJELGlCQUFyQixFQUErQnJCLEdBQS9COztBQUNBcUIsa0JBQVNFLFNBQVQsQ0FBbUJKLHFCQUFuQixFQUFpQ25CLEdBQWpDOztBQUVBbUIsc0JBQWFHLE9BQWIsQ0FBcUJGLGNBQXJCLEVBQTRCcEIsR0FBNUI7O0FBQ0FvQixlQUFNRyxTQUFOLENBQWdCSixxQkFBaEIsRUFBOEJuQixHQUE5Qjs7QUFFQW1CLHNCQUFhRyxPQUFiLENBQXFCRSxjQUFyQixFQUE0QnhCLEdBQTVCOztBQUNBd0IsZUFBTUQsU0FBTixDQUFnQkoscUJBQWhCLEVBQThCbkIsR0FBOUI7O0FBRUFpQixpQkFBUUssT0FBUixDQUFnQkcsaUJBQWhCLEVBQTBCbkIsT0FBMUI7O0FBQ0FtQixrQkFBU0YsU0FBVCxDQUFtQk4sZ0JBQW5CLEVBQTRCWCxPQUE1Qjs7QUFFQWMsZUFBTUUsT0FBTixDQUFjRyxpQkFBZCxFQUF3QmpCLEtBQXhCOztBQUNBaUIsa0JBQVNGLFNBQVQsQ0FBbUJILGNBQW5CLEVBQTBCWixLQUExQjs7QUFFQWtCLGVBQU1ILFNBQU4sQ0FBZ0JOLGdCQUFoQixFQUF5QlgsT0FBekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFjdCBmcm9tICdtb2RlbHMvQ29udGFjdCc7XG5pbXBvcnQgT3JnYW5pemF0aW9uIGZyb20gJ21vZGVscy9Pcmdhbml6YXRpb24nO1xuaW1wb3J0IERvbm9yIGZyb20gJ21vZGVscy9Eb25vcic7XG5pbXBvcnQgTmV3c0ZlZWQgZnJvbSAnbW9kZWxzL05ld3NGZWVkJztcbmltcG9ydCBmb3JlaWduS2V5cyBmcm9tICcuL2ZvcmVpZ25LZXlzJztcbmltcG9ydCBPcmdhbml6YXRpb25zQ29udGFjdHMgZnJvbSAnbW9kZWxzL09yZ2FuaXphdGlvbnNDb250YWN0cyc7XG5pbXBvcnQgQ2F1c2UgZnJvbSAnbW9kZWxzL0NhdXNlJztcbmltcG9ydCBOZXdzRmVlZENhdXNlcyBmcm9tICdtb2RlbHMvTmV3c0ZlZWRDYXVzZXMnO1xuaW1wb3J0IERvbmF0aW9uIGZyb20gJ21vZGVscy9Eb25hdGlvbic7XG5pbXBvcnQgTGlua3MgZnJvbSAnbW9kZWxzL0xpbmtzJztcblxuLy8gT3JnYW5pemF0aW9uLmhhc01hbnkoQ29udGFjdCwge1xuLy8gICBmb3JlaWduS2V5OiBmb3JlaWduS2V5cy5PUkdBTklaQVRJT05cbi8vIH0pO1xuXG5jb25zdCBvcmcgPSB7IGZvcmVpZ25LZXk6IGZvcmVpZ25LZXlzLk9SR0FOSVpBVElPTiB9O1xuY29uc3QgZG9uYXRpb24gPSB7IGZvcmVpZ25LZXk6IGZvcmVpZ25LZXlzLkRPTkFUSU9OIH07XG5jb25zdCBjb250YWN0ID0geyBmb3JlaWduS2V5OiBmb3JlaWduS2V5cy5DT05UQUNUIH07XG5jb25zdCBjYXVzZSA9IHsgZm9yZWlnbktleTogZm9yZWlnbktleXMuQ0FVU0UgfTtcbmNvbnN0IG5ld3NmZWVkID0geyBmb3JlaWduS2V5OiBmb3JlaWduS2V5cy5ORVdTRkVFRCB9O1xuY29uc3QgdGhydU9yZ0NvbnRhY3RzID0ge1xuICB0aHJvdWdoOiBPcmdhbml6YXRpb25zQ29udGFjdHNcbn07XG5jb25zdCB0aHJ1TmV3c0ZlZWRDYXVzZXMgPSB7XG4gIHRocm91Z2g6IE5ld3NGZWVkQ2F1c2VzXG59O1xuXG5Db250YWN0LmJlbG9uZ3NUb01hbnkoT3JnYW5pemF0aW9uLCB7IC4uLnRocnVPcmdDb250YWN0cywgLi4uY29udGFjdCB9KTtcbk9yZ2FuaXphdGlvbi5iZWxvbmdzVG9NYW55KENvbnRhY3QsIHsgLi4udGhydU9yZ0NvbnRhY3RzLCAuLi5vcmcgfSk7XG5cbkNhdXNlLmJlbG9uZ3NUb01hbnkoTmV3c0ZlZWQsIHsgLi4udGhydU5ld3NGZWVkQ2F1c2VzLCAuLi5jYXVzZSB9KTtcbk5ld3NGZWVkLmJlbG9uZ3NUb01hbnkoQ2F1c2UsIHsgLi4udGhydU5ld3NGZWVkQ2F1c2VzLCAuLi5uZXdzZmVlZCB9KTtcblxuLy8gT3JnYW5pemF0aW9uc0NvbnRhY3RzLmhhc01hbnkoT3JnYW5pemF0aW9uLCB7XG4vLyAgIGZvcmVpZ25LZXk6IGZvcmVpZ25LZXlzLk9SR0FOSVpBVElPTlxuLy8gfSk7XG5cbi8vIE9yZ2FuaXphdGlvbnNDb250YWN0cy5oYXNNYW55KENvbnRhY3QsIHtcbi8vICAgZm9yZWlnbktleTogZm9yZWlnbktleXMuQ09OVEFDVFxuLy8gfSk7XG5cbk9yZ2FuaXphdGlvbi5oYXNNYW55KE5ld3NGZWVkLCBvcmcpO1xuTmV3c0ZlZWQuYmVsb25nc1RvKE9yZ2FuaXphdGlvbiwgb3JnKTtcblxuT3JnYW5pemF0aW9uLmhhc01hbnkoQ2F1c2UsIG9yZyk7XG5DYXVzZS5iZWxvbmdzVG8oT3JnYW5pemF0aW9uLCBvcmcpO1xuXG5Pcmdhbml6YXRpb24uaGFzTWFueShMaW5rcywgb3JnKTtcbkxpbmtzLmJlbG9uZ3NUbyhPcmdhbml6YXRpb24sIG9yZyk7XG5cbkNvbnRhY3QuaGFzTWFueShEb25hdGlvbiwgY29udGFjdCk7XG5Eb25hdGlvbi5iZWxvbmdzVG8oQ29udGFjdCwgY29udGFjdCk7XG5cbkNhdXNlLmhhc01hbnkoRG9uYXRpb24sIGNhdXNlKTtcbkRvbmF0aW9uLmJlbG9uZ3NUbyhDYXVzZSwgY2F1c2UpO1xuXG5Eb25vci5iZWxvbmdzVG8oQ29udGFjdCwgY29udGFjdCk7XG4iXX0=