"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _OrganizationsContactsKeys = _interopRequireDefault(require("../types/OrganizationsContactsKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const attributes = {
  id: {
    type: _sequelize.default.BIGINT,
    autoIncrement: true
  },
  [_OrganizationsContactsKeys.default.UUID]: {
    type: _sequelize.default.UUID,
    defaultValue: _sequelize.default.UUIDV4,
    primaryKey: true
  }
};
var _default = attributes;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbHMvT3JnYW5pemF0aW9uc0NvbnRhY3RzL2F0dHJpYnV0ZXMvaW5kZXgudHMiXSwibmFtZXMiOlsiYXR0cmlidXRlcyIsImlkIiwidHlwZSIsIlNlcXVlbGl6ZSIsIkJJR0lOVCIsImF1dG9JbmNyZW1lbnQiLCJPcmdhbml6YXRpb25zQ29udGFjdHNLZXlzIiwiVVVJRCIsImRlZmF1bHRWYWx1ZSIsIlVVSURWNCIsInByaW1hcnlLZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLE1BQU1BLFVBQVUsR0FBRztBQUNqQkMsRUFBQUEsRUFBRSxFQUFFO0FBQ0ZDLElBQUFBLElBQUksRUFBRUMsbUJBQVVDLE1BRGQ7QUFFRkMsSUFBQUEsYUFBYSxFQUFFO0FBRmIsR0FEYTtBQUtqQixHQUFDQyxtQ0FBMEJDLElBQTNCLEdBQWtDO0FBQ2hDTCxJQUFBQSxJQUFJLEVBQUVDLG1CQUFVSSxJQURnQjtBQUVoQ0MsSUFBQUEsWUFBWSxFQUFFTCxtQkFBVU0sTUFGUTtBQUdoQ0MsSUFBQUEsVUFBVSxFQUFFO0FBSG9CO0FBTGpCLENBQW5CO2VBWWVWLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgT3JnYW5pemF0aW9uc0NvbnRhY3RzS2V5cyBmcm9tICcuLi90eXBlcy9Pcmdhbml6YXRpb25zQ29udGFjdHNLZXlzJztcblxuY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgaWQ6IHtcbiAgICB0eXBlOiBTZXF1ZWxpemUuQklHSU5ULFxuICAgIGF1dG9JbmNyZW1lbnQ6IHRydWVcbiAgfSxcbiAgW09yZ2FuaXphdGlvbnNDb250YWN0c0tleXMuVVVJRF06IHtcbiAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICBkZWZhdWx0VmFsdWU6IFNlcXVlbGl6ZS5VVUlEVjQsXG4gICAgcHJpbWFyeUtleTogdHJ1ZVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdHRyaWJ1dGVzO1xuIl19