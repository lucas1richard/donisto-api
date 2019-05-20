"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../../../../models");

const getCausesController = async (req, res, next) => {
  try {
    const causes = await _models.Causes.findAll();
    res.json(causes);
  } catch (err) {
    next(err);
  }
};

var _default = getCausesController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY2F1c2UvY29udHJvbGxlcnMvZ2V0Q2F1c2VzL2luZGV4LnRzIl0sIm5hbWVzIjpbImdldENhdXNlc0NvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwiY2F1c2VzIiwiQ2F1c2VzIiwiZmluZEFsbCIsImpzb24iLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFFQSxNQUFNQSxtQkFBbUMsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQ3BFLE1BQUk7QUFDRixVQUFNQyxNQUFNLEdBQUcsTUFBTUMsZUFBT0MsT0FBUCxFQUFyQjtBQUNBSixJQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBU0gsTUFBVDtBQUNELEdBSEQsQ0FHRSxPQUFPSSxHQUFQLEVBQVk7QUFDWkwsSUFBQUEsSUFBSSxDQUFDSyxHQUFELENBQUo7QUFDRDtBQUNGLENBUEQ7O2VBU2VSLG1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IENhdXNlcyB9IGZyb20gJ21vZGVscyc7XG5cbmNvbnN0IGdldENhdXNlc0NvbnRyb2xsZXI6IFJlcXVlc3RIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY2F1c2VzID0gYXdhaXQgQ2F1c2VzLmZpbmRBbGwoKTtcbiAgICByZXMuanNvbihjYXVzZXMpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENhdXNlc0NvbnRyb2xsZXI7Il19