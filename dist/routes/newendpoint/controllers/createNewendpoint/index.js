"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// import { bodySchema } from './validate';
const createNewendpointController = async (req, res, next) => {
  try {
    // await bodySchema.validate(req.body);
    res.send('Create Newendpoint');
  } catch (err) {
    next(err);
  }
};

var _default = createNewendpointController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvbmV3ZW5kcG9pbnQvY29udHJvbGxlcnMvY3JlYXRlTmV3ZW5kcG9pbnQvaW5kZXgudHMiXSwibmFtZXMiOlsiY3JlYXRlTmV3ZW5kcG9pbnRDb250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsInNlbmQiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTtBQUVBLE1BQU1BLDJCQUEyQixHQUFHLE9BQU9DLEdBQVAsRUFBcUJDLEdBQXJCLEVBQW9DQyxJQUFwQyxLQUEyRDtBQUM3RixNQUFJO0FBQ0Y7QUFDQUQsSUFBQUEsR0FBRyxDQUFDRSxJQUFKLENBQVMsb0JBQVQ7QUFDRCxHQUhELENBR0UsT0FBT0MsR0FBUCxFQUFZO0FBQ1pGLElBQUFBLElBQUksQ0FBQ0UsR0FBRCxDQUFKO0FBQ0Q7QUFDRixDQVBEOztlQVNlTCwyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcbi8vIGltcG9ydCB7IGJvZHlTY2hlbWEgfSBmcm9tICcuL3ZhbGlkYXRlJztcblxuY29uc3QgY3JlYXRlTmV3ZW5kcG9pbnRDb250cm9sbGVyID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHRyeSB7XG4gICAgLy8gYXdhaXQgYm9keVNjaGVtYS52YWxpZGF0ZShyZXEuYm9keSk7XG4gICAgcmVzLnNlbmQoJ0NyZWF0ZSBOZXdlbmRwb2ludCcpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5ld2VuZHBvaW50Q29udHJvbGxlcjtcbiJdfQ==