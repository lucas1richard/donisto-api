"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _ContactOrgFollowsKeys = _interopRequireDefault(require("../types/ContactOrgFollowsKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const attributes = {
  id: {
    type: _sequelize.default.BIGINT,
    autoIncrement: true
  },
  [_ContactOrgFollowsKeys.default.UUID]: {
    type: _sequelize.default.UUID,
    defaultValue: _sequelize.default.UUIDV4,
    primaryKey: true
  }
};
var _default = attributes;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db250YWN0T3JnRm9sbG93cy9hdHRyaWJ1dGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbImF0dHJpYnV0ZXMiLCJpZCIsInR5cGUiLCJTZXF1ZWxpemUiLCJCSUdJTlQiLCJhdXRvSW5jcmVtZW50IiwiQ29udGFjdE9yZ0ZvbGxvd3NLZXlzIiwiVVVJRCIsImRlZmF1bHRWYWx1ZSIsIlVVSURWNCIsInByaW1hcnlLZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLE1BQU1BLFVBQVUsR0FBRztBQUNqQkMsRUFBQUEsRUFBRSxFQUFFO0FBQ0ZDLElBQUFBLElBQUksRUFBRUMsbUJBQVVDLE1BRGQ7QUFFRkMsSUFBQUEsYUFBYSxFQUFFO0FBRmIsR0FEYTtBQUtqQixHQUFDQywrQkFBc0JDLElBQXZCLEdBQThCO0FBQzVCTCxJQUFBQSxJQUFJLEVBQUVDLG1CQUFVSSxJQURZO0FBRTVCQyxJQUFBQSxZQUFZLEVBQUVMLG1CQUFVTSxNQUZJO0FBRzVCQyxJQUFBQSxVQUFVLEVBQUU7QUFIZ0I7QUFMYixDQUFuQjtlQVllVixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IENvbnRhY3RPcmdGb2xsb3dzS2V5cyBmcm9tICcuLi90eXBlcy9Db250YWN0T3JnRm9sbG93c0tleXMnO1xuXG5jb25zdCBhdHRyaWJ1dGVzID0ge1xuICBpZDoge1xuICAgIHR5cGU6IFNlcXVlbGl6ZS5CSUdJTlQsXG4gICAgYXV0b0luY3JlbWVudDogdHJ1ZVxuICB9LFxuICBbQ29udGFjdE9yZ0ZvbGxvd3NLZXlzLlVVSURdOiB7XG4gICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgZGVmYXVsdFZhbHVlOiBTZXF1ZWxpemUuVVVJRFY0LFxuICAgIHByaW1hcnlLZXk6IHRydWVcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXR0cmlidXRlcztcbiJdfQ==