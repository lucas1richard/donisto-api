"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _CauseKeys = _interopRequireDefault(require("../types/CauseKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const attributes = {
  id: {
    type: _sequelize.default.BIGINT,
    autoIncrement: true
  },
  [_CauseKeys.default.UUID]: {
    type: _sequelize.default.UUID,
    defaultValue: _sequelize.default.UUIDV4,
    primaryKey: true
  },
  [_CauseKeys.default.NAME]: {
    type: _sequelize.default.STRING,
    allowNull: false
  }
};
var _default = attributes;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbHMvQ2F1c2UvYXR0cmlidXRlcy9pbmRleC50cyJdLCJuYW1lcyI6WyJhdHRyaWJ1dGVzIiwiaWQiLCJ0eXBlIiwiU2VxdWVsaXplIiwiQklHSU5UIiwiYXV0b0luY3JlbWVudCIsIkNhdXNlS2V5cyIsIlVVSUQiLCJkZWZhdWx0VmFsdWUiLCJVVUlEVjQiLCJwcmltYXJ5S2V5IiwiTkFNRSIsIlNUUklORyIsImFsbG93TnVsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUEsTUFBTUEsVUFBVSxHQUFHO0FBQ2pCQyxFQUFBQSxFQUFFLEVBQUU7QUFDRkMsSUFBQUEsSUFBSSxFQUFFQyxtQkFBVUMsTUFEZDtBQUVGQyxJQUFBQSxhQUFhLEVBQUU7QUFGYixHQURhO0FBS2pCLEdBQUNDLG1CQUFVQyxJQUFYLEdBQWtCO0FBQ2hCTCxJQUFBQSxJQUFJLEVBQUVDLG1CQUFVSSxJQURBO0FBRWhCQyxJQUFBQSxZQUFZLEVBQUVMLG1CQUFVTSxNQUZSO0FBR2hCQyxJQUFBQSxVQUFVLEVBQUU7QUFISSxHQUxEO0FBVWpCLEdBQUNKLG1CQUFVSyxJQUFYLEdBQWtCO0FBQ2hCVCxJQUFBQSxJQUFJLEVBQUVDLG1CQUFVUyxNQURBO0FBRWhCQyxJQUFBQSxTQUFTLEVBQUU7QUFGSztBQVZELENBQW5CO2VBZ0JlYixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IENhdXNlS2V5cyBmcm9tICcuLi90eXBlcy9DYXVzZUtleXMnO1xuXG5jb25zdCBhdHRyaWJ1dGVzID0ge1xuICBpZDoge1xuICAgIHR5cGU6IFNlcXVlbGl6ZS5CSUdJTlQsXG4gICAgYXV0b0luY3JlbWVudDogdHJ1ZVxuICB9LFxuICBbQ2F1c2VLZXlzLlVVSURdOiB7XG4gICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgZGVmYXVsdFZhbHVlOiBTZXF1ZWxpemUuVVVJRFY0LFxuICAgIHByaW1hcnlLZXk6IHRydWVcbiAgfSxcbiAgW0NhdXNlS2V5cy5OQU1FXToge1xuICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkcsXG4gICAgYWxsb3dOdWxsOiBmYWxzZVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdHRyaWJ1dGVzO1xuIl19