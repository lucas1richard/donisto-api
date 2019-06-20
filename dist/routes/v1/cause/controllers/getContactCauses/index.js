"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../../../../models");

const getContactCausesController = async (req, res, next) => {
  try {
    const causes = await _models.Causes.findAll({
      include: [{
        model: _models.Organizations,
        attributes: ['uuid'],
        required: true,
        include: [{
          model: _models.Contacts,
          attributes: ['uuid'],
          required: true,
          where: {
            uuid: req.user.uuid
          }
        }]
      }]
    });
    res.json(causes);
  } catch (err) {
    next(err);
  }
};

var _default = getContactCausesController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY2F1c2UvY29udHJvbGxlcnMvZ2V0Q29udGFjdENhdXNlcy9pbmRleC50cyJdLCJuYW1lcyI6WyJnZXRDb250YWN0Q2F1c2VzQ29udHJvbGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJjYXVzZXMiLCJDYXVzZXMiLCJmaW5kQWxsIiwiaW5jbHVkZSIsIm1vZGVsIiwiT3JnYW5pemF0aW9ucyIsImF0dHJpYnV0ZXMiLCJyZXF1aXJlZCIsIkNvbnRhY3RzIiwid2hlcmUiLCJ1dWlkIiwidXNlciIsImpzb24iLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFHQSxNQUFNQSwwQkFBMEMsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQzNFLE1BQUk7QUFDRixVQUFNQyxNQUFNLEdBQUcsTUFBTUMsZUFBT0MsT0FBUCxDQUFlO0FBQ2xDQyxNQUFBQSxPQUFPLEVBQUUsQ0FBQztBQUNSQyxRQUFBQSxLQUFLLEVBQUVDLHFCQURDO0FBRVJDLFFBQUFBLFVBQVUsRUFBRSxDQUFDLE1BQUQsQ0FGSjtBQUdSQyxRQUFBQSxRQUFRLEVBQUUsSUFIRjtBQUlSSixRQUFBQSxPQUFPLEVBQUUsQ0FBQztBQUNSQyxVQUFBQSxLQUFLLEVBQUVJLGdCQURDO0FBRVJGLFVBQUFBLFVBQVUsRUFBRSxDQUFDLE1BQUQsQ0FGSjtBQUdSQyxVQUFBQSxRQUFRLEVBQUUsSUFIRjtBQUlSRSxVQUFBQSxLQUFLLEVBQUU7QUFDTEMsWUFBQUEsSUFBSSxFQUFFYixHQUFHLENBQUNjLElBQUosQ0FBU0Q7QUFEVjtBQUpDLFNBQUQ7QUFKRCxPQUFEO0FBRHlCLEtBQWYsQ0FBckI7QUFlQVosSUFBQUEsR0FBRyxDQUFDYyxJQUFKLENBQVNaLE1BQVQ7QUFDRCxHQWpCRCxDQWlCRSxPQUFPYSxHQUFQLEVBQVk7QUFDWmQsSUFBQUEsSUFBSSxDQUFDYyxHQUFELENBQUo7QUFDRDtBQUNGLENBckJEOztlQXVCZWpCLDBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IENhdXNlcywgQ29udGFjdHMsIE9yZ2FuaXphdGlvbnMgfSBmcm9tICdtb2RlbHMnO1xuaW1wb3J0IGZvcmVpZ25LZXlzIGZyb20gJ2RhdGFiYXNlL2ZvcmVpZ25LZXlzJztcblxuY29uc3QgZ2V0Q29udGFjdENhdXNlc0NvbnRyb2xsZXI6IFJlcXVlc3RIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY2F1c2VzID0gYXdhaXQgQ2F1c2VzLmZpbmRBbGwoe1xuICAgICAgaW5jbHVkZTogW3tcbiAgICAgICAgbW9kZWw6IE9yZ2FuaXphdGlvbnMsXG4gICAgICAgIGF0dHJpYnV0ZXM6IFsndXVpZCddLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgaW5jbHVkZTogW3tcbiAgICAgICAgICBtb2RlbDogQ29udGFjdHMsXG4gICAgICAgICAgYXR0cmlidXRlczogWyd1dWlkJ10sXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIHV1aWQ6IHJlcS51c2VyLnV1aWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfV1cbiAgICAgIH1dXG4gICAgfSk7XG4gICAgcmVzLmpzb24oY2F1c2VzKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDb250YWN0Q2F1c2VzQ29udHJvbGxlcjsiXX0=