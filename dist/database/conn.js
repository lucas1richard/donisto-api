"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _chalk = _interopRequireDefault(require("chalk"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

const env = process.env.NODE_ENV || 'development';
const config = _index.default[env];
console.log(_chalk.default.magenta('connecting to db'), _chalk.default.bold.magenta(config.url));
const seqInstance = new _sequelize.default(config.url, config);
module.exports = seqInstance;
var _default = seqInstance;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZS9jb25uLnRzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJjb25maWciLCJlbnYiLCJwcm9jZXNzIiwiTk9ERV9FTlYiLCJhdmFpbGFibGVDb25maWdzIiwiY29uc29sZSIsImxvZyIsImNoYWxrIiwibWFnZW50YSIsImJvbGQiLCJ1cmwiLCJzZXFJbnN0YW5jZSIsIlNlcXVlbGl6ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUhBQSxPQUFPLENBQUMsUUFBRCxDQUFQLENBQWtCQyxNQUFsQjs7QUFLQSxNQUFNQyxHQUFHLEdBQUdDLE9BQU8sQ0FBQ0QsR0FBUixDQUFZRSxRQUFaLElBQXdCLGFBQXBDO0FBRUEsTUFBTUgsTUFBTSxHQUFHSSxlQUFpQkgsR0FBakIsQ0FBZjtBQUVBSSxPQUFPLENBQUNDLEdBQVIsQ0FDRUMsZUFBTUMsT0FBTixDQUFjLGtCQUFkLENBREYsRUFFRUQsZUFBTUUsSUFBTixDQUFXRCxPQUFYLENBQW1CUixNQUFNLENBQUNVLEdBQTFCLENBRkY7QUFLQSxNQUFNQyxXQUFXLEdBQUcsSUFBSUMsa0JBQUosQ0FDbEJaLE1BQU0sQ0FBQ1UsR0FEVyxFQUVsQlYsTUFGa0IsQ0FBcEI7QUFLQWEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSCxXQUFqQjtlQUNlQSxXIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XG5pbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuaW1wb3J0IGF2YWlsYWJsZUNvbmZpZ3MgZnJvbSAnLi9pbmRleCc7XG5cbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG5cbmNvbnN0IGNvbmZpZyA9IGF2YWlsYWJsZUNvbmZpZ3NbZW52XTtcblxuY29uc29sZS5sb2coXG4gIGNoYWxrLm1hZ2VudGEoJ2Nvbm5lY3RpbmcgdG8gZGInKSxcbiAgY2hhbGsuYm9sZC5tYWdlbnRhKGNvbmZpZy51cmwpXG4pO1xuXG5jb25zdCBzZXFJbnN0YW5jZSA9IG5ldyBTZXF1ZWxpemUoXG4gIGNvbmZpZy51cmwsXG4gIGNvbmZpZ1xuKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZXFJbnN0YW5jZTtcbmV4cG9ydCBkZWZhdWx0IHNlcUluc3RhbmNlO1xuXG4iXX0=