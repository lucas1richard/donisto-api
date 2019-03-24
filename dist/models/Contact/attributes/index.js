"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _ContactKeys = _interopRequireDefault(require("../types/ContactKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const attributes = {
  id: {
    type: _sequelize.default.BIGINT,
    autoIncrement: true
  },
  [_ContactKeys.default.UUID]: {
    type: _sequelize.default.UUID,
    defaultValue: _sequelize.default.UUIDV4,
    primaryKey: true
  },
  [_ContactKeys.default.FIRST_NAME]: {
    type: _sequelize.default.STRING,
    allowNull: true
  },
  [_ContactKeys.default.LAST_NAME]: {
    type: _sequelize.default.STRING,
    allowNull: true
  },
  [_ContactKeys.default.EMAIL]: {
    type: _sequelize.default.STRING,
    validate: {
      isEmail: true
    },
    unique: true,
    allowNull: false
  },
  [_ContactKeys.default.CITY]: {
    type: _sequelize.default.STRING
  },
  [_ContactKeys.default.STATE]: {
    type: _sequelize.default.STRING
  },
  [_ContactKeys.default.ZIP]: {
    type: _sequelize.default.STRING
  },
  [_ContactKeys.default.PASSWORD]: {
    type: _sequelize.default.TEXT,
    allowNull: false
  },
  [_ContactKeys.default.SALT]: {
    type: _sequelize.default.TEXT,
    allowNull: true
  },
  [_ContactKeys.default.FACEBOOK_ID]: {
    type: _sequelize.default.TEXT,
    allowNull: true
  }
};
var _default = attributes;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbHMvQ29udGFjdC9hdHRyaWJ1dGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbImF0dHJpYnV0ZXMiLCJpZCIsInR5cGUiLCJTZXF1ZWxpemUiLCJCSUdJTlQiLCJhdXRvSW5jcmVtZW50IiwiQ29udGFjdEtleXMiLCJVVUlEIiwiZGVmYXVsdFZhbHVlIiwiVVVJRFY0IiwicHJpbWFyeUtleSIsIkZJUlNUX05BTUUiLCJTVFJJTkciLCJhbGxvd051bGwiLCJMQVNUX05BTUUiLCJFTUFJTCIsInZhbGlkYXRlIiwiaXNFbWFpbCIsInVuaXF1ZSIsIkNJVFkiLCJTVEFURSIsIlpJUCIsIlBBU1NXT1JEIiwiVEVYVCIsIlNBTFQiLCJGQUNFQk9PS19JRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUEsTUFBTUEsVUFBVSxHQUFHO0FBQ2pCQyxFQUFBQSxFQUFFLEVBQUU7QUFDRkMsSUFBQUEsSUFBSSxFQUFFQyxtQkFBVUMsTUFEZDtBQUVGQyxJQUFBQSxhQUFhLEVBQUU7QUFGYixHQURhO0FBS2pCLEdBQUNDLHFCQUFZQyxJQUFiLEdBQW9CO0FBQ2xCTCxJQUFBQSxJQUFJLEVBQUVDLG1CQUFVSSxJQURFO0FBRWxCQyxJQUFBQSxZQUFZLEVBQUVMLG1CQUFVTSxNQUZOO0FBR2xCQyxJQUFBQSxVQUFVLEVBQUU7QUFITSxHQUxIO0FBVWpCLEdBQUNKLHFCQUFZSyxVQUFiLEdBQTBCO0FBQ3hCVCxJQUFBQSxJQUFJLEVBQUVDLG1CQUFVUyxNQURRO0FBRXhCQyxJQUFBQSxTQUFTLEVBQUU7QUFGYSxHQVZUO0FBY2pCLEdBQUNQLHFCQUFZUSxTQUFiLEdBQXlCO0FBQ3ZCWixJQUFBQSxJQUFJLEVBQUVDLG1CQUFVUyxNQURPO0FBRXZCQyxJQUFBQSxTQUFTLEVBQUU7QUFGWSxHQWRSO0FBa0JqQixHQUFDUCxxQkFBWVMsS0FBYixHQUFxQjtBQUNuQmIsSUFBQUEsSUFBSSxFQUFFQyxtQkFBVVMsTUFERztBQUVuQkksSUFBQUEsUUFBUSxFQUFFO0FBQ1JDLE1BQUFBLE9BQU8sRUFBRTtBQURELEtBRlM7QUFLbkJDLElBQUFBLE1BQU0sRUFBRSxJQUxXO0FBTW5CTCxJQUFBQSxTQUFTLEVBQUU7QUFOUSxHQWxCSjtBQTBCakIsR0FBQ1AscUJBQVlhLElBQWIsR0FBb0I7QUFDbEJqQixJQUFBQSxJQUFJLEVBQUVDLG1CQUFVUztBQURFLEdBMUJIO0FBNkJqQixHQUFDTixxQkFBWWMsS0FBYixHQUFxQjtBQUNuQmxCLElBQUFBLElBQUksRUFBRUMsbUJBQVVTO0FBREcsR0E3Qko7QUFnQ2pCLEdBQUNOLHFCQUFZZSxHQUFiLEdBQW1CO0FBQ2pCbkIsSUFBQUEsSUFBSSxFQUFFQyxtQkFBVVM7QUFEQyxHQWhDRjtBQW1DakIsR0FBQ04scUJBQVlnQixRQUFiLEdBQXdCO0FBQ3RCcEIsSUFBQUEsSUFBSSxFQUFFQyxtQkFBVW9CLElBRE07QUFFdEJWLElBQUFBLFNBQVMsRUFBRTtBQUZXLEdBbkNQO0FBdUNqQixHQUFDUCxxQkFBWWtCLElBQWIsR0FBb0I7QUFDbEJ0QixJQUFBQSxJQUFJLEVBQUVDLG1CQUFVb0IsSUFERTtBQUVsQlYsSUFBQUEsU0FBUyxFQUFFO0FBRk8sR0F2Q0g7QUEyQ2pCLEdBQUNQLHFCQUFZbUIsV0FBYixHQUEyQjtBQUN6QnZCLElBQUFBLElBQUksRUFBRUMsbUJBQVVvQixJQURTO0FBRXpCVixJQUFBQSxTQUFTLEVBQUU7QUFGYztBQTNDVixDQUFuQjtlQWlEZWIsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCBDb250YWN0S2V5cyBmcm9tICcuLi90eXBlcy9Db250YWN0S2V5cyc7XG5cbmNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIGlkOiB7XG4gICAgdHlwZTogU2VxdWVsaXplLkJJR0lOVCxcbiAgICBhdXRvSW5jcmVtZW50OiB0cnVlXG4gIH0sXG4gIFtDb250YWN0S2V5cy5VVUlEXToge1xuICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxuICAgIGRlZmF1bHRWYWx1ZTogU2VxdWVsaXplLlVVSURWNCxcbiAgICBwcmltYXJ5S2V5OiB0cnVlXG4gIH0sXG4gIFtDb250YWN0S2V5cy5GSVJTVF9OQU1FXToge1xuICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkcsXG4gICAgYWxsb3dOdWxsOiB0cnVlXG4gIH0sXG4gIFtDb250YWN0S2V5cy5MQVNUX05BTUVdOiB7XG4gICAgdHlwZTogU2VxdWVsaXplLlNUUklORyxcbiAgICBhbGxvd051bGw6IHRydWVcbiAgfSxcbiAgW0NvbnRhY3RLZXlzLkVNQUlMXToge1xuICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkcsXG4gICAgdmFsaWRhdGU6IHtcbiAgICAgIGlzRW1haWw6IHRydWVcbiAgICB9LFxuICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICBhbGxvd051bGw6IGZhbHNlXG4gIH0sXG4gIFtDb250YWN0S2V5cy5DSVRZXToge1xuICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgfSxcbiAgW0NvbnRhY3RLZXlzLlNUQVRFXToge1xuICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgfSxcbiAgW0NvbnRhY3RLZXlzLlpJUF06IHtcbiAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gIH0sXG4gIFtDb250YWN0S2V5cy5QQVNTV09SRF06IHtcbiAgICB0eXBlOiBTZXF1ZWxpemUuVEVYVCxcbiAgICBhbGxvd051bGw6IGZhbHNlXG4gIH0sXG4gIFtDb250YWN0S2V5cy5TQUxUXToge1xuICAgIHR5cGU6IFNlcXVlbGl6ZS5URVhULFxuICAgIGFsbG93TnVsbDogdHJ1ZVxuICB9LFxuICBbQ29udGFjdEtleXMuRkFDRUJPT0tfSURdOiB7XG4gICAgdHlwZTogU2VxdWVsaXplLlRFWFQsXG4gICAgYWxsb3dOdWxsOiB0cnVlXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF0dHJpYnV0ZXM7XG4iXX0=