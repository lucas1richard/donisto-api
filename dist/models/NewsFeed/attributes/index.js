"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _NewsFeedKeys = _interopRequireDefault(require("../types/NewsFeedKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const attributes = {
  id: {
    type: _sequelize.default.BIGINT,
    autoIncrement: true
  },
  [_NewsFeedKeys.default.UUID]: {
    type: _sequelize.default.UUID,
    defaultValue: _sequelize.default.UUIDV4,
    primaryKey: true
  },
  [_NewsFeedKeys.default.TITLE]: {
    type: _sequelize.default.STRING
  },
  [_NewsFeedKeys.default.TEXT]: {
    type: _sequelize.default.TEXT
  }
};
var _default = attributes;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbHMvTmV3c0ZlZWQvYXR0cmlidXRlcy9pbmRleC50cyJdLCJuYW1lcyI6WyJhdHRyaWJ1dGVzIiwiaWQiLCJ0eXBlIiwiU2VxdWVsaXplIiwiQklHSU5UIiwiYXV0b0luY3JlbWVudCIsIk5ld3NGZWVkS2V5cyIsIlVVSUQiLCJkZWZhdWx0VmFsdWUiLCJVVUlEVjQiLCJwcmltYXJ5S2V5IiwiVElUTEUiLCJTVFJJTkciLCJURVhUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxVQUFVLEdBQUc7QUFDakJDLEVBQUFBLEVBQUUsRUFBRTtBQUNGQyxJQUFBQSxJQUFJLEVBQUVDLG1CQUFVQyxNQURkO0FBRUZDLElBQUFBLGFBQWEsRUFBRTtBQUZiLEdBRGE7QUFLakIsR0FBQ0Msc0JBQWFDLElBQWQsR0FBcUI7QUFDbkJMLElBQUFBLElBQUksRUFBRUMsbUJBQVVJLElBREc7QUFFbkJDLElBQUFBLFlBQVksRUFBRUwsbUJBQVVNLE1BRkw7QUFHbkJDLElBQUFBLFVBQVUsRUFBRTtBQUhPLEdBTEo7QUFVakIsR0FBQ0osc0JBQWFLLEtBQWQsR0FBc0I7QUFDcEJULElBQUFBLElBQUksRUFBRUMsbUJBQVVTO0FBREksR0FWTDtBQWFqQixHQUFDTixzQkFBYU8sSUFBZCxHQUFxQjtBQUNuQlgsSUFBQUEsSUFBSSxFQUFFQyxtQkFBVVU7QUFERztBQWJKLENBQW5CO2VBa0JlYixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IE5ld3NGZWVkS2V5cyBmcm9tICcuLi90eXBlcy9OZXdzRmVlZEtleXMnO1xuXG5jb25zdCBhdHRyaWJ1dGVzID0ge1xuICBpZDoge1xuICAgIHR5cGU6IFNlcXVlbGl6ZS5CSUdJTlQsXG4gICAgYXV0b0luY3JlbWVudDogdHJ1ZVxuICB9LFxuICBbTmV3c0ZlZWRLZXlzLlVVSURdOiB7XG4gICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgZGVmYXVsdFZhbHVlOiBTZXF1ZWxpemUuVVVJRFY0LFxuICAgIHByaW1hcnlLZXk6IHRydWVcbiAgfSxcbiAgW05ld3NGZWVkS2V5cy5USVRMRV06IHtcbiAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HLFxuICB9LFxuICBbTmV3c0ZlZWRLZXlzLlRFWFRdOiB7XG4gICAgdHlwZTogU2VxdWVsaXplLlRFWFQsXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF0dHJpYnV0ZXM7XG4iXX0=