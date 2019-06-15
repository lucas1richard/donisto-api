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
            uuid: req.user
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY2F1c2UvY29udHJvbGxlcnMvZ2V0Q29udGFjdENhdXNlcy9pbmRleC50cyJdLCJuYW1lcyI6WyJnZXRDb250YWN0Q2F1c2VzQ29udHJvbGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJjYXVzZXMiLCJDYXVzZXMiLCJmaW5kQWxsIiwiaW5jbHVkZSIsIm1vZGVsIiwiT3JnYW5pemF0aW9ucyIsImF0dHJpYnV0ZXMiLCJyZXF1aXJlZCIsIkNvbnRhY3RzIiwid2hlcmUiLCJ1dWlkIiwidXNlciIsImpzb24iLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFHQSxNQUFNQSwwQkFBMEMsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQzNFLE1BQUk7QUFDRixVQUFNQyxNQUFNLEdBQUcsTUFBTUMsZUFBT0MsT0FBUCxDQUFlO0FBQ2xDQyxNQUFBQSxPQUFPLEVBQUUsQ0FBQztBQUNSQyxRQUFBQSxLQUFLLEVBQUVDLHFCQURDO0FBRVJDLFFBQUFBLFVBQVUsRUFBRSxDQUFDLE1BQUQsQ0FGSjtBQUdSQyxRQUFBQSxRQUFRLEVBQUUsSUFIRjtBQUlSSixRQUFBQSxPQUFPLEVBQUUsQ0FBQztBQUNSQyxVQUFBQSxLQUFLLEVBQUVJLGdCQURDO0FBRVJGLFVBQUFBLFVBQVUsRUFBRSxDQUFDLE1BQUQsQ0FGSjtBQUdSQyxVQUFBQSxRQUFRLEVBQUUsSUFIRjtBQUlSRSxVQUFBQSxLQUFLLEVBQUU7QUFDTEMsWUFBQUEsSUFBSSxFQUFFYixHQUFHLENBQUNjO0FBREw7QUFKQyxTQUFEO0FBSkQsT0FBRDtBQUR5QixLQUFmLENBQXJCO0FBZUFiLElBQUFBLEdBQUcsQ0FBQ2MsSUFBSixDQUFTWixNQUFUO0FBQ0QsR0FqQkQsQ0FpQkUsT0FBT2EsR0FBUCxFQUFZO0FBQ1pkLElBQUFBLElBQUksQ0FBQ2MsR0FBRCxDQUFKO0FBQ0Q7QUFDRixDQXJCRDs7ZUF1QmVqQiwwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBDYXVzZXMsIENvbnRhY3RzLCBPcmdhbml6YXRpb25zIH0gZnJvbSAnbW9kZWxzJztcbmltcG9ydCBmb3JlaWduS2V5cyBmcm9tICdkYXRhYmFzZS9mb3JlaWduS2V5cyc7XG5cbmNvbnN0IGdldENvbnRhY3RDYXVzZXNDb250cm9sbGVyOiBSZXF1ZXN0SGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNhdXNlcyA9IGF3YWl0IENhdXNlcy5maW5kQWxsKHtcbiAgICAgIGluY2x1ZGU6IFt7XG4gICAgICAgIG1vZGVsOiBPcmdhbml6YXRpb25zLFxuICAgICAgICBhdHRyaWJ1dGVzOiBbJ3V1aWQnXSxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIGluY2x1ZGU6IFt7XG4gICAgICAgICAgbW9kZWw6IENvbnRhY3RzLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IFsndXVpZCddLFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICB1dWlkOiByZXEudXNlcixcbiAgICAgICAgICB9LFxuICAgICAgICB9XVxuICAgICAgfV1cbiAgICB9KTtcbiAgICByZXMuanNvbihjYXVzZXMpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENvbnRhY3RDYXVzZXNDb250cm9sbGVyOyJdfQ==