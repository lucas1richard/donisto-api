"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _conn = _interopRequireDefault(require("../config/database/conn"));

var _attributes = _interopRequireDefault(require("./attributes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NewsFeed = _conn.default.define('NewsFeed', _attributes.default, {});

var _default = NewsFeed;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9OZXdzRmVlZC9pbmRleC50cyJdLCJuYW1lcyI6WyJOZXdzRmVlZCIsInNlcXVlbGl6ZSIsImRlZmluZSIsImF0dHJpYnV0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7OztBQVNBLE1BQU1BLFFBQVEsR0FBR0MsY0FBVUMsTUFBVixDQUFpQixVQUFqQixFQUE2QkMsbUJBQTdCLEVBQXlDLEVBQXpDLENBQWpCOztlQUdlSCxRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IHNlcXVlbGl6ZSBmcm9tICdjb25maWcvZGF0YWJhc2UvY29ubic7XG5pbXBvcnQgYXR0cmlidXRlcyBmcm9tICcuL2F0dHJpYnV0ZXMnO1xuaW1wb3J0IE5ld3NGZWVkQXR0cmlidXRlcyBmcm9tICcuL3R5cGVzL0F0dHJpYnV0ZXMnO1xuaW1wb3J0IHsgTmV3c0ZlZWRJbnN0YW5jZSB9IGZyb20gJy4vdHlwZXMvTmV3c0ZlZWRJbnN0YW5jZSc7XG5cbmludGVyZmFjZSBJTmV3c0ZlZWRNZXRob2RzIHtcbn1cblxuaW50ZXJmYWNlIElOZXdzRmVlZCBleHRlbmRzIFNlcXVlbGl6ZS5Nb2RlbDxOZXdzRmVlZEluc3RhbmNlLCBOZXdzRmVlZEF0dHJpYnV0ZXM+LCBJTmV3c0ZlZWRNZXRob2RzIHt9XG5cbmNvbnN0IE5ld3NGZWVkID0gc2VxdWVsaXplLmRlZmluZSgnTmV3c0ZlZWQnLCBhdHRyaWJ1dGVzLCB7XG59KSBhcyBJTmV3c0ZlZWQ7XG5cbmV4cG9ydCBkZWZhdWx0IE5ld3NGZWVkO1xuIl19