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
  [_types.ContactKeys.UUID]: {
    type: _sequelize.default.UUID,
    defaultValue: _sequelize.default.UUIDV4,
    primaryKey: true
  },
  [_types.ContactKeys.FIRST_NAME]: {
    type: _sequelize.default.STRING,
    allowNull: false
  },
  [_types.ContactKeys.LAST_NAME]: {
    type: _sequelize.default.STRING,
    allowNull: false
  }
};
var _default = attributes;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbHMvRG9ub3IvYXR0cmlidXRlcy9pbmRleC50cyJdLCJuYW1lcyI6WyJhdHRyaWJ1dGVzIiwiaWQiLCJ0eXBlIiwiU2VxdWVsaXplIiwiQklHSU5UIiwiYXV0b0luY3JlbWVudCIsIkNvbnRhY3RLZXlzIiwiVVVJRCIsImRlZmF1bHRWYWx1ZSIsIlVVSURWNCIsInByaW1hcnlLZXkiLCJGSVJTVF9OQU1FIiwiU1RSSU5HIiwiYWxsb3dOdWxsIiwiTEFTVF9OQU1FIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxVQUFVLEdBQUc7QUFDakJDLEVBQUFBLEVBQUUsRUFBRTtBQUNGQyxJQUFBQSxJQUFJLEVBQUVDLG1CQUFVQyxNQURkO0FBRUZDLElBQUFBLGFBQWEsRUFBRTtBQUZiLEdBRGE7QUFLakIsR0FBQ0MsbUJBQVlDLElBQWIsR0FBb0I7QUFDbEJMLElBQUFBLElBQUksRUFBRUMsbUJBQVVJLElBREU7QUFFbEJDLElBQUFBLFlBQVksRUFBRUwsbUJBQVVNLE1BRk47QUFHbEJDLElBQUFBLFVBQVUsRUFBRTtBQUhNLEdBTEg7QUFVakIsR0FBQ0osbUJBQVlLLFVBQWIsR0FBMEI7QUFDeEJULElBQUFBLElBQUksRUFBRUMsbUJBQVVTLE1BRFE7QUFFeEJDLElBQUFBLFNBQVMsRUFBRTtBQUZhLEdBVlQ7QUFjakIsR0FBQ1AsbUJBQVlRLFNBQWIsR0FBeUI7QUFDdkJaLElBQUFBLElBQUksRUFBRUMsbUJBQVVTLE1BRE87QUFFdkJDLElBQUFBLFNBQVMsRUFBRTtBQUZZO0FBZFIsQ0FBbkI7ZUFvQmViLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBDb250YWN0S2V5cyB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgaWQ6IHtcbiAgICB0eXBlOiBTZXF1ZWxpemUuQklHSU5ULFxuICAgIGF1dG9JbmNyZW1lbnQ6IHRydWVcbiAgfSxcbiAgW0NvbnRhY3RLZXlzLlVVSURdOiB7XG4gICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgZGVmYXVsdFZhbHVlOiBTZXF1ZWxpemUuVVVJRFY0LFxuICAgIHByaW1hcnlLZXk6IHRydWVcbiAgfSxcbiAgW0NvbnRhY3RLZXlzLkZJUlNUX05BTUVdOiB7XG4gICAgdHlwZTogU2VxdWVsaXplLlNUUklORyxcbiAgICBhbGxvd051bGw6IGZhbHNlXG4gIH0sXG4gIFtDb250YWN0S2V5cy5MQVNUX05BTUVdOiB7XG4gICAgdHlwZTogU2VxdWVsaXplLlNUUklORyxcbiAgICBhbGxvd051bGw6IGZhbHNlXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF0dHJpYnV0ZXM7XG4iXX0=