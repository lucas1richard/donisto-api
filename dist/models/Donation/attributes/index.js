"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _DonationKeys = _interopRequireDefault(require("../types/DonationKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const attributes = {
  id: {
    type: _sequelize.default.BIGINT,
    autoIncrement: true
  },
  [_DonationKeys.default.UUID]: {
    type: _sequelize.default.UUID,
    defaultValue: _sequelize.default.UUIDV4,
    primaryKey: true
  },
  [_DonationKeys.default.AMOUNT]: {
    type: _sequelize.default.DECIMAL,

    get() {
      const val = this.getDataValue(_DonationKeys.default.AMOUNT);
      return parseFloat(val);
    }

  }
};
var _default = attributes;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbHMvRG9uYXRpb24vYXR0cmlidXRlcy9pbmRleC50cyJdLCJuYW1lcyI6WyJhdHRyaWJ1dGVzIiwiaWQiLCJ0eXBlIiwiU2VxdWVsaXplIiwiQklHSU5UIiwiYXV0b0luY3JlbWVudCIsIkRvbmF0aW9uS2V5cyIsIlVVSUQiLCJkZWZhdWx0VmFsdWUiLCJVVUlEVjQiLCJwcmltYXJ5S2V5IiwiQU1PVU5UIiwiREVDSU1BTCIsImdldCIsInZhbCIsImdldERhdGFWYWx1ZSIsInBhcnNlRmxvYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLE1BQU1BLFVBQVUsR0FBRztBQUNqQkMsRUFBQUEsRUFBRSxFQUFFO0FBQ0ZDLElBQUFBLElBQUksRUFBRUMsbUJBQVVDLE1BRGQ7QUFFRkMsSUFBQUEsYUFBYSxFQUFFO0FBRmIsR0FEYTtBQUtqQixHQUFDQyxzQkFBYUMsSUFBZCxHQUFxQjtBQUNuQkwsSUFBQUEsSUFBSSxFQUFFQyxtQkFBVUksSUFERztBQUVuQkMsSUFBQUEsWUFBWSxFQUFFTCxtQkFBVU0sTUFGTDtBQUduQkMsSUFBQUEsVUFBVSxFQUFFO0FBSE8sR0FMSjtBQVVqQixHQUFDSixzQkFBYUssTUFBZCxHQUF1QjtBQUNyQlQsSUFBQUEsSUFBSSxFQUFFQyxtQkFBVVMsT0FESzs7QUFFckJDLElBQUFBLEdBQUcsR0FBRztBQUNKLFlBQU1DLEdBQUcsR0FBRyxLQUFLQyxZQUFMLENBQWtCVCxzQkFBYUssTUFBL0IsQ0FBWjtBQUNBLGFBQU9LLFVBQVUsQ0FBQ0YsR0FBRCxDQUFqQjtBQUNEOztBQUxvQjtBQVZOLENBQW5CO2VBbUJlZCxVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IERvbmF0aW9uS2V5cyBmcm9tICcuLi90eXBlcy9Eb25hdGlvbktleXMnO1xuXG5jb25zdCBhdHRyaWJ1dGVzID0ge1xuICBpZDoge1xuICAgIHR5cGU6IFNlcXVlbGl6ZS5CSUdJTlQsXG4gICAgYXV0b0luY3JlbWVudDogdHJ1ZVxuICB9LFxuICBbRG9uYXRpb25LZXlzLlVVSURdOiB7XG4gICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgZGVmYXVsdFZhbHVlOiBTZXF1ZWxpemUuVVVJRFY0LFxuICAgIHByaW1hcnlLZXk6IHRydWVcbiAgfSxcbiAgW0RvbmF0aW9uS2V5cy5BTU9VTlRdOiB7XG4gICAgdHlwZTogU2VxdWVsaXplLkRFQ0lNQUwsXG4gICAgZ2V0KCkge1xuICAgICAgY29uc3QgdmFsID0gdGhpcy5nZXREYXRhVmFsdWUoRG9uYXRpb25LZXlzLkFNT1VOVCk7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWwpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXR0cmlidXRlcztcbiJdfQ==