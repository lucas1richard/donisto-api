"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
const keyWords = ['PRAGMA', 'CREATE', 'EXISTS', 'INTEGER', 'PRIMARY', 'VARCHAR', 'DATETIME', 'NULL', 'REFERENCES', 'AND', 'ASC', 'INDEX_LIST', 'BETWEEN', 'BY', 'CASE', 'CURRENT_DATE', 'CURRENT_TIME', 'DELETE', 'DESC', 'DISTINCT', 'EACH', 'ELSE', 'ELSEIF', 'FALSE', 'FOR', 'FROM', 'GROUP', 'HAVING', 'IF', 'IN', 'INSERT', 'INTERVAL', 'INTO', 'IS', 'JOIN', 'KEY', 'KEYS', 'LEFT', 'LIKE', 'LIMIT', 'MATCH', 'NOT', 'ON', 'OPTION', 'OR', 'ORDER', 'OUT', 'OUTER', 'REPLACE', 'TINYINT', 'RIGHT', 'SELECT', 'SET', 'TABLE', 'THEN', 'TO', 'TRUE', 'UPDATE', 'VALUES', 'WHEN', 'WHERE', 'UNSIGNED', 'CASCADE', 'UNIQUE', 'DEFAULT', 'ENGINE', 'TEXT', 'auto_increment', 'SHOW', 'INDEX', 'ILIKE'];
const indent = '    ';
/* istanbul ignore next */

const logger = query => {
  let output = query;
  output = output.replace(/Executing \(default\): /g, '').replace(/SELECT /g, `SELECT\n${indent}`).replace(/FROM/g, '\nFROM').replace(/ AS /g, ` ${_chalk.default.cyan('as')} `).replace(/ ILIKE /g, ` ${_chalk.default.cyan('ilike')} `).replace(/LEFT OUTER JOIN/g, '\nLEFT OUTER JOIN').replace(/ ON /g, '\n  ON ').replace(/RIGHT OUTER JOIN/g, '\nRIGHT OUTER JOIN').replace(/ WHERE /g, '\nWHERE ').replace(/"(.*?)"/g, _chalk.default.magenta('"$1"')).replace(/, /g, `,\n${indent}`);
  keyWords.forEach(word => {
    const regEx = new RegExp(`\\b${word}\\b`, 'g');
    output = output.replace(regEx, _chalk.default.cyan(word.toLowerCase()));
  });
  console.log(`${output}`);
  console.log(_chalk.default.gray('-----------------------------------'));
};

module.exports = logger;
var _default = logger;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZS9sb2dnZXIudHMiXSwibmFtZXMiOlsia2V5V29yZHMiLCJpbmRlbnQiLCJsb2dnZXIiLCJxdWVyeSIsIm91dHB1dCIsInJlcGxhY2UiLCJjaGFsayIsImN5YW4iLCJtYWdlbnRhIiwiZm9yRWFjaCIsIndvcmQiLCJyZWdFeCIsIlJlZ0V4cCIsInRvTG93ZXJDYXNlIiwiY29uc29sZSIsImxvZyIsImdyYXkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFEQTtBQUdBLE1BQU1BLFFBQVEsR0FBRyxDQUNmLFFBRGUsRUFDTCxRQURLLEVBQ0ssUUFETCxFQUNlLFNBRGYsRUFDMEIsU0FEMUIsRUFDcUMsU0FEckMsRUFFZixVQUZlLEVBRUgsTUFGRyxFQUVLLFlBRkwsRUFFbUIsS0FGbkIsRUFFMEIsS0FGMUIsRUFFaUMsWUFGakMsRUFHZixTQUhlLEVBR0osSUFISSxFQUdFLE1BSEYsRUFHVSxjQUhWLEVBRzBCLGNBSDFCLEVBRzBDLFFBSDFDLEVBSWYsTUFKZSxFQUlQLFVBSk8sRUFJSyxNQUpMLEVBSWEsTUFKYixFQUlxQixRQUpyQixFQUkrQixPQUovQixFQUl3QyxLQUp4QyxFQUkrQyxNQUovQyxFQUtmLE9BTGUsRUFLTixRQUxNLEVBS0ksSUFMSixFQUtVLElBTFYsRUFLZ0IsUUFMaEIsRUFLMEIsVUFMMUIsRUFLc0MsTUFMdEMsRUFLOEMsSUFMOUMsRUFNZixNQU5lLEVBTVAsS0FOTyxFQU1BLE1BTkEsRUFNUSxNQU5SLEVBTWdCLE1BTmhCLEVBTXdCLE9BTnhCLEVBTWlDLE9BTmpDLEVBTTBDLEtBTjFDLEVBT2YsSUFQZSxFQU9ULFFBUFMsRUFPQyxJQVBELEVBT08sT0FQUCxFQU9nQixLQVBoQixFQU91QixPQVB2QixFQU9nQyxTQVBoQyxFQU8yQyxTQVAzQyxFQVFmLE9BUmUsRUFRTixRQVJNLEVBUUksS0FSSixFQVFXLE9BUlgsRUFRb0IsTUFScEIsRUFRNEIsSUFSNUIsRUFRa0MsTUFSbEMsRUFRMEMsUUFSMUMsRUFTZixRQVRlLEVBU0wsTUFUSyxFQVNHLE9BVEgsRUFTWSxVQVRaLEVBU3dCLFNBVHhCLEVBU21DLFFBVG5DLEVBUzZDLFNBVDdDLEVBVWYsUUFWZSxFQVVMLE1BVkssRUFVRyxnQkFWSCxFQVVxQixNQVZyQixFQVU2QixPQVY3QixFQVVzQyxPQVZ0QyxDQUFqQjtBQWlCQSxNQUFNQyxNQUFNLEdBQUcsTUFBZjtBQUVBOztBQUNBLE1BQU1DLE1BQWUsR0FBSUMsS0FBRCxJQUFtQjtBQUN6QyxNQUFJQyxNQUFNLEdBQUdELEtBQWI7QUFDQUMsRUFBQUEsTUFBTSxHQUFHQSxNQUFNLENBQ1pDLE9BRE0sQ0FDRSwwQkFERixFQUM4QixFQUQ5QixFQUVOQSxPQUZNLENBRUUsVUFGRixFQUVlLFdBQVVKLE1BQU8sRUFGaEMsRUFHTkksT0FITSxDQUdFLE9BSEYsRUFHVyxRQUhYLEVBSU5BLE9BSk0sQ0FJRSxPQUpGLEVBSVksSUFBR0MsZUFBTUMsSUFBTixDQUFXLElBQVgsQ0FBaUIsR0FKaEMsRUFLTkYsT0FMTSxDQUtFLFVBTEYsRUFLZSxJQUFHQyxlQUFNQyxJQUFOLENBQVcsT0FBWCxDQUFvQixHQUx0QyxFQU1ORixPQU5NLENBTUUsa0JBTkYsRUFNc0IsbUJBTnRCLEVBT05BLE9BUE0sQ0FPRSxPQVBGLEVBT1csU0FQWCxFQVFOQSxPQVJNLENBUUUsbUJBUkYsRUFRdUIsb0JBUnZCLEVBU05BLE9BVE0sQ0FTRSxVQVRGLEVBU2MsVUFUZCxFQVVOQSxPQVZNLENBVUUsVUFWRixFQVVjQyxlQUFNRSxPQUFOLENBQWMsTUFBZCxDQVZkLEVBV05ILE9BWE0sQ0FXRSxLQVhGLEVBV1UsTUFBS0osTUFBTyxFQVh0QixDQUFUO0FBYUFELEVBQUFBLFFBQVEsQ0FBQ1MsT0FBVCxDQUFrQkMsSUFBRCxJQUFVO0FBQ3pCLFVBQU1DLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVksTUFBS0YsSUFBSyxLQUF0QixFQUE0QixHQUE1QixDQUFkO0FBQ0FOLElBQUFBLE1BQU0sR0FBR0EsTUFBTSxDQUFDQyxPQUFQLENBQWVNLEtBQWYsRUFBc0JMLGVBQU1DLElBQU4sQ0FBV0csSUFBSSxDQUFDRyxXQUFMLEVBQVgsQ0FBdEIsQ0FBVDtBQUNELEdBSEQ7QUFJQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsR0FBRVgsTUFBTyxFQUF0QjtBQUNBVSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVQsZUFBTVUsSUFBTixDQUFXLHFDQUFYLENBQVo7QUFDRCxDQXJCRDs7QUF1QkFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmhCLE1BQWpCO2VBQ2VBLE0iLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuXG5jb25zdCBrZXlXb3JkcyA9IFtcbiAgJ1BSQUdNQScsICdDUkVBVEUnLCAnRVhJU1RTJywgJ0lOVEVHRVInLCAnUFJJTUFSWScsICdWQVJDSEFSJyxcbiAgJ0RBVEVUSU1FJywgJ05VTEwnLCAnUkVGRVJFTkNFUycsICdBTkQnLCAnQVNDJywgJ0lOREVYX0xJU1QnLFxuICAnQkVUV0VFTicsICdCWScsICdDQVNFJywgJ0NVUlJFTlRfREFURScsICdDVVJSRU5UX1RJTUUnLCAnREVMRVRFJyxcbiAgJ0RFU0MnLCAnRElTVElOQ1QnLCAnRUFDSCcsICdFTFNFJywgJ0VMU0VJRicsICdGQUxTRScsICdGT1InLCAnRlJPTScsXG4gICdHUk9VUCcsICdIQVZJTkcnLCAnSUYnLCAnSU4nLCAnSU5TRVJUJywgJ0lOVEVSVkFMJywgJ0lOVE8nLCAnSVMnLFxuICAnSk9JTicsICdLRVknLCAnS0VZUycsICdMRUZUJywgJ0xJS0UnLCAnTElNSVQnLCAnTUFUQ0gnLCAnTk9UJyxcbiAgJ09OJywgJ09QVElPTicsICdPUicsICdPUkRFUicsICdPVVQnLCAnT1VURVInLCAnUkVQTEFDRScsICdUSU5ZSU5UJyxcbiAgJ1JJR0hUJywgJ1NFTEVDVCcsICdTRVQnLCAnVEFCTEUnLCAnVEhFTicsICdUTycsICdUUlVFJywgJ1VQREFURScsXG4gICdWQUxVRVMnLCAnV0hFTicsICdXSEVSRScsICdVTlNJR05FRCcsICdDQVNDQURFJywgJ1VOSVFVRScsICdERUZBVUxUJyxcbiAgJ0VOR0lORScsICdURVhUJywgJ2F1dG9faW5jcmVtZW50JywgJ1NIT1cnLCAnSU5ERVgnLCAnSUxJS0UnXG5dO1xuXG5leHBvcnQgaW50ZXJmYWNlIElMb2dnZXIge1xuICAocXVlcnk6IHN0cmluZyk6IHZvaWQ7XG59XG5cbmNvbnN0IGluZGVudCA9ICcgICAgJztcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IGxvZ2dlcjogSUxvZ2dlciA9IChxdWVyeTogc3RyaW5nKSA9PiB7XG4gIGxldCBvdXRwdXQgPSBxdWVyeTtcbiAgb3V0cHV0ID0gb3V0cHV0XG4gICAgLnJlcGxhY2UoL0V4ZWN1dGluZyBcXChkZWZhdWx0XFwpOiAvZywgJycpXG4gICAgLnJlcGxhY2UoL1NFTEVDVCAvZywgYFNFTEVDVFxcbiR7aW5kZW50fWApXG4gICAgLnJlcGxhY2UoL0ZST00vZywgJ1xcbkZST00nKVxuICAgIC5yZXBsYWNlKC8gQVMgL2csIGAgJHtjaGFsay5jeWFuKCdhcycpfSBgKVxuICAgIC5yZXBsYWNlKC8gSUxJS0UgL2csIGAgJHtjaGFsay5jeWFuKCdpbGlrZScpfSBgKVxuICAgIC5yZXBsYWNlKC9MRUZUIE9VVEVSIEpPSU4vZywgJ1xcbkxFRlQgT1VURVIgSk9JTicpXG4gICAgLnJlcGxhY2UoLyBPTiAvZywgJ1xcbiAgT04gJylcbiAgICAucmVwbGFjZSgvUklHSFQgT1VURVIgSk9JTi9nLCAnXFxuUklHSFQgT1VURVIgSk9JTicpXG4gICAgLnJlcGxhY2UoLyBXSEVSRSAvZywgJ1xcbldIRVJFICcpXG4gICAgLnJlcGxhY2UoL1wiKC4qPylcIi9nLCBjaGFsay5tYWdlbnRhKCdcIiQxXCInKSlcbiAgICAucmVwbGFjZSgvLCAvZywgYCxcXG4ke2luZGVudH1gKTtcblxuICBrZXlXb3Jkcy5mb3JFYWNoKCh3b3JkKSA9PiB7XG4gICAgY29uc3QgcmVnRXggPSBuZXcgUmVnRXhwKGBcXFxcYiR7d29yZH1cXFxcYmAsICdnJyk7XG4gICAgb3V0cHV0ID0gb3V0cHV0LnJlcGxhY2UocmVnRXgsIGNoYWxrLmN5YW4od29yZC50b0xvd2VyQ2FzZSgpKSk7XG4gIH0pO1xuICBjb25zb2xlLmxvZyhgJHtvdXRwdXR9YCk7XG4gIGNvbnNvbGUubG9nKGNoYWxrLmdyYXkoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJykpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBsb2dnZXI7XG5leHBvcnQgZGVmYXVsdCBsb2dnZXI7XG4iXX0=