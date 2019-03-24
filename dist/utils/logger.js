"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _winston = _interopRequireWildcard(require("winston"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const logger = new _winston.Logger({
  transports: [new _winston.default.transports.Console({
    level: process.env.NODE_ENV === 'production' ? 'error' : 'debug'
  }), new _winston.default.transports.File({
    filename: 'debug.log',
    level: 'debug'
  })]
});

if (process.env.NODE_ENV !== 'production') {
  logger.debug('Logging initialized at debug level');
}

var _default = logger;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9sb2dnZXIudHMiXSwibmFtZXMiOlsibG9nZ2VyIiwiTG9nZ2VyIiwidHJhbnNwb3J0cyIsIndpbnN0b24iLCJDb25zb2xlIiwibGV2ZWwiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJGaWxlIiwiZmlsZW5hbWUiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBSUEsTUFBTUEsTUFBTSxHQUFHLElBQUtDLGVBQUwsQ0FBYTtBQUN4QkMsRUFBQUEsVUFBVSxFQUFFLENBQ1IsSUFBS0MsaUJBQVFELFVBQVIsQ0FBbUJFLE9BQXhCLENBQWlDO0FBQUVDLElBQUFBLEtBQUssRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBekIsR0FBd0MsT0FBeEMsR0FBa0Q7QUFBM0QsR0FBakMsQ0FEUSxFQUVSLElBQUtMLGlCQUFRRCxVQUFSLENBQW1CTyxJQUF4QixDQUE4QjtBQUFFQyxJQUFBQSxRQUFRLEVBQUUsV0FBWjtBQUF5QkwsSUFBQUEsS0FBSyxFQUFFO0FBQWhDLEdBQTlCLENBRlE7QUFEWSxDQUFiLENBQWY7O0FBT0EsSUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDdkNSLEVBQUFBLE1BQU0sQ0FBQ1csS0FBUCxDQUFhLG9DQUFiO0FBQ0g7O2VBRWNYLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2luc3RvbiBmcm9tICd3aW5zdG9uJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJ3dpbnN0b24nO1xuaW1wb3J0IHsgRU5WSVJPTk1FTlQgfSBmcm9tICcuL3NlY3JldHMnO1xuXG5jb25zdCBsb2dnZXIgPSBuZXcgKExvZ2dlcikoe1xuICAgIHRyYW5zcG9ydHM6IFtcbiAgICAgICAgbmV3ICh3aW5zdG9uLnRyYW5zcG9ydHMuQ29uc29sZSkoeyBsZXZlbDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICdlcnJvcicgOiAnZGVidWcnIH0pLFxuICAgICAgICBuZXcgKHdpbnN0b24udHJhbnNwb3J0cy5GaWxlKSh7IGZpbGVuYW1lOiAnZGVidWcubG9nJywgbGV2ZWw6ICdkZWJ1Zyd9KVxuICAgIF1cbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlci5kZWJ1ZygnTG9nZ2luZyBpbml0aWFsaXplZCBhdCBkZWJ1ZyBsZXZlbCcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dnZXI7XG5cbiJdfQ==