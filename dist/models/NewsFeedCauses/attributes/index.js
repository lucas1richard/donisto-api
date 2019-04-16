"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _NewsFeedCausesKeys = _interopRequireDefault(require("../types/NewsFeedCausesKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const attributes = {
  id: {
    type: _sequelize.default.BIGINT,
    autoIncrement: true
  },
  [_NewsFeedCausesKeys.default.UUID]: {
    type: _sequelize.default.UUID,
    defaultValue: _sequelize.default.UUIDV4,
    primaryKey: true
  }
};
var _default = attributes;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbHMvTmV3c0ZlZWRDYXVzZXMvYXR0cmlidXRlcy9pbmRleC50cyJdLCJuYW1lcyI6WyJhdHRyaWJ1dGVzIiwiaWQiLCJ0eXBlIiwiU2VxdWVsaXplIiwiQklHSU5UIiwiYXV0b0luY3JlbWVudCIsIk9yZ2FuaXphdGlvbnNDb250YWN0c0tleXMiLCJVVUlEIiwiZGVmYXVsdFZhbHVlIiwiVVVJRFY0IiwicHJpbWFyeUtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUEsTUFBTUEsVUFBVSxHQUFHO0FBQ2pCQyxFQUFBQSxFQUFFLEVBQUU7QUFDRkMsSUFBQUEsSUFBSSxFQUFFQyxtQkFBVUMsTUFEZDtBQUVGQyxJQUFBQSxhQUFhLEVBQUU7QUFGYixHQURhO0FBS2pCLEdBQUNDLDRCQUEwQkMsSUFBM0IsR0FBa0M7QUFDaENMLElBQUFBLElBQUksRUFBRUMsbUJBQVVJLElBRGdCO0FBRWhDQyxJQUFBQSxZQUFZLEVBQUVMLG1CQUFVTSxNQUZRO0FBR2hDQyxJQUFBQSxVQUFVLEVBQUU7QUFIb0I7QUFMakIsQ0FBbkI7ZUFZZVYsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCBPcmdhbml6YXRpb25zQ29udGFjdHNLZXlzIGZyb20gJy4uL3R5cGVzL05ld3NGZWVkQ2F1c2VzS2V5cyc7XG5cbmNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIGlkOiB7XG4gICAgdHlwZTogU2VxdWVsaXplLkJJR0lOVCxcbiAgICBhdXRvSW5jcmVtZW50OiB0cnVlXG4gIH0sXG4gIFtPcmdhbml6YXRpb25zQ29udGFjdHNLZXlzLlVVSURdOiB7XG4gICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgZGVmYXVsdFZhbHVlOiBTZXF1ZWxpemUuVVVJRFY0LFxuICAgIHByaW1hcnlLZXk6IHRydWVcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXR0cmlidXRlcztcbiJdfQ==