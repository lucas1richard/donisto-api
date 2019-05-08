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
  },
  [_types.OrganizationKeys.CITY]: {
    type: _sequelize.default.STRING,
    allowNull: false
  },
  [_types.OrganizationKeys.STATE]: {
    type: _sequelize.default.STRING,
    allowNull: false
  },
  [_types.OrganizationKeys.MISSION]: {
    type: _sequelize.default.TEXT,
    allowNull: false
  },
  [_types.OrganizationKeys.ZIP]: {
    type: _sequelize.default.STRING,
    allowNull: false
  }
};
var _default = attributes;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbHMvT3JnYW5pemF0aW9uL2F0dHJpYnV0ZXMvaW5kZXgudHMiXSwibmFtZXMiOlsiYXR0cmlidXRlcyIsImlkIiwidHlwZSIsIlNlcXVlbGl6ZSIsIkJJR0lOVCIsImF1dG9JbmNyZW1lbnQiLCJPcmdhbml6YXRpb25LZXlzIiwiVVVJRCIsImRlZmF1bHRWYWx1ZSIsIlVVSURWNCIsInByaW1hcnlLZXkiLCJOQU1FIiwiU1RSSU5HIiwiYWxsb3dOdWxsIiwiQ0lUWSIsIlNUQVRFIiwiTUlTU0lPTiIsIlRFWFQiLCJaSVAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLE1BQU1BLFVBQVUsR0FBRztBQUNqQkMsRUFBQUEsRUFBRSxFQUFFO0FBQ0ZDLElBQUFBLElBQUksRUFBRUMsbUJBQVVDLE1BRGQ7QUFFRkMsSUFBQUEsYUFBYSxFQUFFO0FBRmIsR0FEYTtBQUtqQixHQUFDQyx3QkFBaUJDLElBQWxCLEdBQXlCO0FBQ3ZCTCxJQUFBQSxJQUFJLEVBQUVDLG1CQUFVSSxJQURPO0FBRXZCQyxJQUFBQSxZQUFZLEVBQUVMLG1CQUFVTSxNQUZEO0FBR3ZCQyxJQUFBQSxVQUFVLEVBQUU7QUFIVyxHQUxSO0FBVWpCLEdBQUNKLHdCQUFpQkssSUFBbEIsR0FBeUI7QUFDdkJULElBQUFBLElBQUksRUFBRUMsbUJBQVVTLE1BRE87QUFFdkJDLElBQUFBLFNBQVMsRUFBRTtBQUZZLEdBVlI7QUFjakIsR0FBQ1Asd0JBQWlCUSxJQUFsQixHQUF5QjtBQUN2QlosSUFBQUEsSUFBSSxFQUFFQyxtQkFBVVMsTUFETztBQUV2QkMsSUFBQUEsU0FBUyxFQUFFO0FBRlksR0FkUjtBQWtCakIsR0FBQ1Asd0JBQWlCUyxLQUFsQixHQUEwQjtBQUN4QmIsSUFBQUEsSUFBSSxFQUFFQyxtQkFBVVMsTUFEUTtBQUV4QkMsSUFBQUEsU0FBUyxFQUFFO0FBRmEsR0FsQlQ7QUFzQmpCLEdBQUNQLHdCQUFpQlUsT0FBbEIsR0FBNEI7QUFDMUJkLElBQUFBLElBQUksRUFBRUMsbUJBQVVjLElBRFU7QUFFMUJKLElBQUFBLFNBQVMsRUFBRTtBQUZlLEdBdEJYO0FBMEJqQixHQUFDUCx3QkFBaUJZLEdBQWxCLEdBQXdCO0FBQ3RCaEIsSUFBQUEsSUFBSSxFQUFFQyxtQkFBVVMsTUFETTtBQUV0QkMsSUFBQUEsU0FBUyxFQUFFO0FBRlc7QUExQlAsQ0FBbkI7ZUFnQ2ViLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBPcmdhbml6YXRpb25LZXlzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBhdHRyaWJ1dGVzID0ge1xuICBpZDoge1xuICAgIHR5cGU6IFNlcXVlbGl6ZS5CSUdJTlQsXG4gICAgYXV0b0luY3JlbWVudDogdHJ1ZVxuICB9LFxuICBbT3JnYW5pemF0aW9uS2V5cy5VVUlEXToge1xuICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxuICAgIGRlZmF1bHRWYWx1ZTogU2VxdWVsaXplLlVVSURWNCxcbiAgICBwcmltYXJ5S2V5OiB0cnVlXG4gIH0sXG4gIFtPcmdhbml6YXRpb25LZXlzLk5BTUVdOiB7XG4gICAgdHlwZTogU2VxdWVsaXplLlNUUklORyxcbiAgICBhbGxvd051bGw6IGZhbHNlXG4gIH0sXG4gIFtPcmdhbml6YXRpb25LZXlzLkNJVFldOiB7XG4gICAgdHlwZTogU2VxdWVsaXplLlNUUklORyxcbiAgICBhbGxvd051bGw6IGZhbHNlXG4gIH0sXG4gIFtPcmdhbml6YXRpb25LZXlzLlNUQVRFXToge1xuICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkcsXG4gICAgYWxsb3dOdWxsOiBmYWxzZVxuICB9LFxuICBbT3JnYW5pemF0aW9uS2V5cy5NSVNTSU9OXToge1xuICAgIHR5cGU6IFNlcXVlbGl6ZS5URVhULFxuICAgIGFsbG93TnVsbDogZmFsc2VcbiAgfSxcbiAgW09yZ2FuaXphdGlvbktleXMuWklQXToge1xuICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkcsXG4gICAgYWxsb3dOdWxsOiBmYWxzZVxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXR0cmlidXRlcztcbiJdfQ==