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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Eb25hdGlvbi9hdHRyaWJ1dGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbImF0dHJpYnV0ZXMiLCJpZCIsInR5cGUiLCJTZXF1ZWxpemUiLCJCSUdJTlQiLCJhdXRvSW5jcmVtZW50IiwiRG9uYXRpb25LZXlzIiwiVVVJRCIsImRlZmF1bHRWYWx1ZSIsIlVVSURWNCIsInByaW1hcnlLZXkiLCJBTU9VTlQiLCJERUNJTUFMIiwiZ2V0IiwidmFsIiwiZ2V0RGF0YVZhbHVlIiwicGFyc2VGbG9hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUEsTUFBTUEsVUFBVSxHQUFHO0FBQ2pCQyxFQUFBQSxFQUFFLEVBQUU7QUFDRkMsSUFBQUEsSUFBSSxFQUFFQyxtQkFBVUMsTUFEZDtBQUVGQyxJQUFBQSxhQUFhLEVBQUU7QUFGYixHQURhO0FBS2pCLEdBQUNDLHNCQUFhQyxJQUFkLEdBQXFCO0FBQ25CTCxJQUFBQSxJQUFJLEVBQUVDLG1CQUFVSSxJQURHO0FBRW5CQyxJQUFBQSxZQUFZLEVBQUVMLG1CQUFVTSxNQUZMO0FBR25CQyxJQUFBQSxVQUFVLEVBQUU7QUFITyxHQUxKO0FBVWpCLEdBQUNKLHNCQUFhSyxNQUFkLEdBQXVCO0FBQ3JCVCxJQUFBQSxJQUFJLEVBQUVDLG1CQUFVUyxPQURLOztBQUVyQkMsSUFBQUEsR0FBRyxHQUFHO0FBQ0osWUFBTUMsR0FBRyxHQUFHLEtBQUtDLFlBQUwsQ0FBa0JULHNCQUFhSyxNQUEvQixDQUFaO0FBQ0EsYUFBT0ssVUFBVSxDQUFDRixHQUFELENBQWpCO0FBQ0Q7O0FBTG9CO0FBVk4sQ0FBbkI7ZUFtQmVkLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgRG9uYXRpb25LZXlzIGZyb20gJy4uL3R5cGVzL0RvbmF0aW9uS2V5cyc7XG5cbmNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIGlkOiB7XG4gICAgdHlwZTogU2VxdWVsaXplLkJJR0lOVCxcbiAgICBhdXRvSW5jcmVtZW50OiB0cnVlXG4gIH0sXG4gIFtEb25hdGlvbktleXMuVVVJRF06IHtcbiAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICBkZWZhdWx0VmFsdWU6IFNlcXVlbGl6ZS5VVUlEVjQsXG4gICAgcHJpbWFyeUtleTogdHJ1ZVxuICB9LFxuICBbRG9uYXRpb25LZXlzLkFNT1VOVF06IHtcbiAgICB0eXBlOiBTZXF1ZWxpemUuREVDSU1BTCxcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCB2YWwgPSB0aGlzLmdldERhdGFWYWx1ZShEb25hdGlvbktleXMuQU1PVU5UKTtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdHRyaWJ1dGVzO1xuIl19