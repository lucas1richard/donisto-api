"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _types = require("../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const attributes = {
  id: {
    type: _sequelize.default.BIGINT,
    autoIncrement: true
  },
  [_types.DonorKeys.UUID]: {
    type: _sequelize.default.UUID,
    defaultValue: _sequelize.default.UUIDV4,
    primaryKey: true
  },
  [_types.DonorKeys.FIRST_NAME]: {
    type: _sequelize.default.STRING,
    allowNull: false
  },
  [_types.DonorKeys.LAST_NAME]: {
    type: _sequelize.default.STRING,
    allowNull: false
  }
};
var _default = attributes;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbHMvRG9ub3IvYXR0cmlidXRlcy9pbmRleC50cyJdLCJuYW1lcyI6WyJhdHRyaWJ1dGVzIiwiaWQiLCJ0eXBlIiwiU2VxdWVsaXplIiwiQklHSU5UIiwiYXV0b0luY3JlbWVudCIsIkRvbm9yS2V5cyIsIlVVSUQiLCJkZWZhdWx0VmFsdWUiLCJVVUlEVjQiLCJwcmltYXJ5S2V5IiwiRklSU1RfTkFNRSIsIlNUUklORyIsImFsbG93TnVsbCIsIkxBU1RfTkFNRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUEsTUFBTUEsVUFBVSxHQUFHO0FBQ2pCQyxFQUFBQSxFQUFFLEVBQUU7QUFDRkMsSUFBQUEsSUFBSSxFQUFFQyxtQkFBVUMsTUFEZDtBQUVGQyxJQUFBQSxhQUFhLEVBQUU7QUFGYixHQURhO0FBS2pCLEdBQUNDLGlCQUFVQyxJQUFYLEdBQWtCO0FBQ2hCTCxJQUFBQSxJQUFJLEVBQUVDLG1CQUFVSSxJQURBO0FBRWhCQyxJQUFBQSxZQUFZLEVBQUVMLG1CQUFVTSxNQUZSO0FBR2hCQyxJQUFBQSxVQUFVLEVBQUU7QUFISSxHQUxEO0FBVWpCLEdBQUNKLGlCQUFVSyxVQUFYLEdBQXdCO0FBQ3RCVCxJQUFBQSxJQUFJLEVBQUVDLG1CQUFVUyxNQURNO0FBRXRCQyxJQUFBQSxTQUFTLEVBQUU7QUFGVyxHQVZQO0FBY2pCLEdBQUNQLGlCQUFVUSxTQUFYLEdBQXVCO0FBQ3JCWixJQUFBQSxJQUFJLEVBQUVDLG1CQUFVUyxNQURLO0FBRXJCQyxJQUFBQSxTQUFTLEVBQUU7QUFGVTtBQWROLENBQW5CO2VBb0JlYixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IHsgRG9ub3JLZXlzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBhdHRyaWJ1dGVzID0ge1xuICBpZDoge1xuICAgIHR5cGU6IFNlcXVlbGl6ZS5CSUdJTlQsXG4gICAgYXV0b0luY3JlbWVudDogdHJ1ZVxuICB9LFxuICBbRG9ub3JLZXlzLlVVSURdOiB7XG4gICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgZGVmYXVsdFZhbHVlOiBTZXF1ZWxpemUuVVVJRFY0LFxuICAgIHByaW1hcnlLZXk6IHRydWVcbiAgfSxcbiAgW0Rvbm9yS2V5cy5GSVJTVF9OQU1FXToge1xuICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkcsXG4gICAgYWxsb3dOdWxsOiBmYWxzZVxuICB9LFxuICBbRG9ub3JLZXlzLkxBU1RfTkFNRV06IHtcbiAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HLFxuICAgIGFsbG93TnVsbDogZmFsc2VcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXR0cmlidXRlcztcbiJdfQ==