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
  [_types.OrganizationKeys.UUID]: {
    type: _sequelize.default.UUID,
    defaultValue: _sequelize.default.UUIDV4,
    primaryKey: true
  },
  [_types.OrganizationKeys.NAME]: {
    type: _sequelize.default.STRING,
    allowNull: false
  }
};
var _default = attributes;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbHMvT3JnYW5pemF0aW9uL2F0dHJpYnV0ZXMvaW5kZXgudHMiXSwibmFtZXMiOlsiYXR0cmlidXRlcyIsImlkIiwidHlwZSIsIlNlcXVlbGl6ZSIsIkJJR0lOVCIsImF1dG9JbmNyZW1lbnQiLCJPcmdhbml6YXRpb25LZXlzIiwiVVVJRCIsImRlZmF1bHRWYWx1ZSIsIlVVSURWNCIsInByaW1hcnlLZXkiLCJOQU1FIiwiU1RSSU5HIiwiYWxsb3dOdWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxVQUFVLEdBQUc7QUFDakJDLEVBQUFBLEVBQUUsRUFBRTtBQUNGQyxJQUFBQSxJQUFJLEVBQUVDLG1CQUFVQyxNQURkO0FBRUZDLElBQUFBLGFBQWEsRUFBRTtBQUZiLEdBRGE7QUFLakIsR0FBQ0Msd0JBQWlCQyxJQUFsQixHQUF5QjtBQUN2QkwsSUFBQUEsSUFBSSxFQUFFQyxtQkFBVUksSUFETztBQUV2QkMsSUFBQUEsWUFBWSxFQUFFTCxtQkFBVU0sTUFGRDtBQUd2QkMsSUFBQUEsVUFBVSxFQUFFO0FBSFcsR0FMUjtBQVVqQixHQUFDSix3QkFBaUJLLElBQWxCLEdBQXlCO0FBQ3ZCVCxJQUFBQSxJQUFJLEVBQUVDLG1CQUFVUyxNQURPO0FBRXZCQyxJQUFBQSxTQUFTLEVBQUU7QUFGWTtBQVZSLENBQW5CO2VBZ0JlYixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IHsgT3JnYW5pemF0aW9uS2V5cyB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgaWQ6IHtcbiAgICB0eXBlOiBTZXF1ZWxpemUuQklHSU5ULFxuICAgIGF1dG9JbmNyZW1lbnQ6IHRydWVcbiAgfSxcbiAgW09yZ2FuaXphdGlvbktleXMuVVVJRF06IHtcbiAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICBkZWZhdWx0VmFsdWU6IFNlcXVlbGl6ZS5VVUlEVjQsXG4gICAgcHJpbWFyeUtleTogdHJ1ZVxuICB9LFxuICBbT3JnYW5pemF0aW9uS2V5cy5OQU1FXToge1xuICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkcsXG4gICAgYWxsb3dOdWxsOiBmYWxzZVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdHRyaWJ1dGVzO1xuIl19