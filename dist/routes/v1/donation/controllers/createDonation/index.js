"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Donation = _interopRequireDefault(require("../../../../../models/Donation"));

var _Contact = _interopRequireDefault(require("../../../../../models/Contact"));

var _ContactKeys = _interopRequireDefault(require("../../../../../models/Contact/types/ContactKeys"));

var _Cause = _interopRequireDefault(require("../../../../../models/Cause"));

var _CauseKeys = _interopRequireDefault(require("../../../../../models/Cause/types/CauseKeys"));

var _conn = _interopRequireDefault(require("../../../../../config/database/conn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { bodySchema } from './validate';
const createDonationController = async (req, res, next) => {
  let transaction;

  try {
    // await bodySchema.validate(req.body);
    transaction = await _conn.default.transaction();
    const donation = await _Donation.default.create({
      amount: req.body.amount
    }, {
      transaction
    });
    const contact = await _Contact.default.findOne({
      where: {
        [_ContactKeys.default.UUID]: res.locals.uuid
      }
    });
    const cause = await _Cause.default.findOne({
      where: {
        [_CauseKeys.default.UUID]: req.body.cause_uuid
      }
    });
    await donation.setContact(contact, {
      transaction
    });
    await donation.setCause(cause, {
      transaction
    });
    await transaction.commit();
    res.send('Create Donation');
  } catch (err) {
    if (transaction) {
      await transaction.rollback();
    }

    next(err);
  }
};

var _default = createDonationController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvZG9uYXRpb24vY29udHJvbGxlcnMvY3JlYXRlRG9uYXRpb24vaW5kZXgudHMiXSwibmFtZXMiOlsiY3JlYXRlRG9uYXRpb25Db250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsInRyYW5zYWN0aW9uIiwic2VxSW5zdGFuY2UiLCJkb25hdGlvbiIsIkRvbmF0aW9uIiwiY3JlYXRlIiwiYW1vdW50IiwiYm9keSIsImNvbnRhY3QiLCJDb250YWN0cyIsImZpbmRPbmUiLCJ3aGVyZSIsIkNvbnRhY3RLZXlzIiwiVVVJRCIsImxvY2FscyIsInV1aWQiLCJjYXVzZSIsIkNhdXNlIiwiQ2F1c2VLZXlzIiwiY2F1c2VfdXVpZCIsInNldENvbnRhY3QiLCJzZXRDYXVzZSIsImNvbW1pdCIsInNlbmQiLCJlcnIiLCJyb2xsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7QUFFQSxNQUFNQSx3QkFBd0IsR0FBRyxPQUFPQyxHQUFQLEVBQXFCQyxHQUFyQixFQUFvQ0MsSUFBcEMsS0FBMkQ7QUFDMUYsTUFBSUMsV0FBSjs7QUFDQSxNQUFJO0FBQ0Y7QUFDQUEsSUFBQUEsV0FBVyxHQUFHLE1BQU1DLGNBQVlELFdBQVosRUFBcEI7QUFDQSxVQUFNRSxRQUFRLEdBQUcsTUFBTUMsa0JBQVNDLE1BQVQsQ0FBZ0I7QUFDckNDLE1BQUFBLE1BQU0sRUFBRVIsR0FBRyxDQUFDUyxJQUFKLENBQVNEO0FBRG9CLEtBQWhCLEVBRXBCO0FBQUVMLE1BQUFBO0FBQUYsS0FGb0IsQ0FBdkI7QUFHQSxVQUFNTyxPQUFPLEdBQUcsTUFBTUMsaUJBQVNDLE9BQVQsQ0FBaUI7QUFDckNDLE1BQUFBLEtBQUssRUFBRTtBQUNMLFNBQUNDLHFCQUFZQyxJQUFiLEdBQW9CZCxHQUFHLENBQUNlLE1BQUosQ0FBV0M7QUFEMUI7QUFEOEIsS0FBakIsQ0FBdEI7QUFLQSxVQUFNQyxLQUFLLEdBQUcsTUFBTUMsZUFBTVAsT0FBTixDQUFjO0FBQ2hDQyxNQUFBQSxLQUFLLEVBQUU7QUFDTCxTQUFDTyxtQkFBVUwsSUFBWCxHQUFrQmYsR0FBRyxDQUFDUyxJQUFKLENBQVNZO0FBRHRCO0FBRHlCLEtBQWQsQ0FBcEI7QUFLQSxVQUFNaEIsUUFBUSxDQUFDaUIsVUFBVCxDQUFvQlosT0FBcEIsRUFBNkI7QUFBRVAsTUFBQUE7QUFBRixLQUE3QixDQUFOO0FBQ0EsVUFBTUUsUUFBUSxDQUFDa0IsUUFBVCxDQUFrQkwsS0FBbEIsRUFBeUI7QUFBRWYsTUFBQUE7QUFBRixLQUF6QixDQUFOO0FBQ0EsVUFBTUEsV0FBVyxDQUFDcUIsTUFBWixFQUFOO0FBQ0F2QixJQUFBQSxHQUFHLENBQUN3QixJQUFKLENBQVMsaUJBQVQ7QUFDRCxHQXBCRCxDQW9CRSxPQUFPQyxHQUFQLEVBQVk7QUFDWixRQUFJdkIsV0FBSixFQUFpQjtBQUNmLFlBQU1BLFdBQVcsQ0FBQ3dCLFFBQVosRUFBTjtBQUNEOztBQUNEekIsSUFBQUEsSUFBSSxDQUFDd0IsR0FBRCxDQUFKO0FBQ0Q7QUFDRixDQTVCRDs7ZUE4QmUzQix3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBEb25hdGlvbiBmcm9tICdtb2RlbHMvRG9uYXRpb24nO1xuaW1wb3J0IENvbnRhY3RzIGZyb20gJ21vZGVscy9Db250YWN0JztcbmltcG9ydCBDb250YWN0S2V5cyBmcm9tICdtb2RlbHMvQ29udGFjdC90eXBlcy9Db250YWN0S2V5cyc7XG5pbXBvcnQgQ2F1c2UgZnJvbSAnbW9kZWxzL0NhdXNlJztcbmltcG9ydCBDYXVzZUtleXMgZnJvbSAnbW9kZWxzL0NhdXNlL3R5cGVzL0NhdXNlS2V5cyc7XG5pbXBvcnQgc2VxSW5zdGFuY2UgZnJvbSAnY29uZmlnL2RhdGFiYXNlL2Nvbm4nO1xuLy8gaW1wb3J0IHsgYm9keVNjaGVtYSB9IGZyb20gJy4vdmFsaWRhdGUnO1xuXG5jb25zdCBjcmVhdGVEb25hdGlvbkNvbnRyb2xsZXIgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgbGV0IHRyYW5zYWN0aW9uO1xuICB0cnkge1xuICAgIC8vIGF3YWl0IGJvZHlTY2hlbWEudmFsaWRhdGUocmVxLmJvZHkpO1xuICAgIHRyYW5zYWN0aW9uID0gYXdhaXQgc2VxSW5zdGFuY2UudHJhbnNhY3Rpb24oKTtcbiAgICBjb25zdCBkb25hdGlvbiA9IGF3YWl0IERvbmF0aW9uLmNyZWF0ZSh7XG4gICAgICBhbW91bnQ6IHJlcS5ib2R5LmFtb3VudFxuICAgIH0sIHsgdHJhbnNhY3Rpb24gfSk7XG4gICAgY29uc3QgY29udGFjdCA9IGF3YWl0IENvbnRhY3RzLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgW0NvbnRhY3RLZXlzLlVVSURdOiByZXMubG9jYWxzLnV1aWRcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjYXVzZSA9IGF3YWl0IENhdXNlLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgW0NhdXNlS2V5cy5VVUlEXTogcmVxLmJvZHkuY2F1c2VfdXVpZFxuICAgICAgfVxuICAgIH0pO1xuICAgIGF3YWl0IGRvbmF0aW9uLnNldENvbnRhY3QoY29udGFjdCwgeyB0cmFuc2FjdGlvbiB9KTtcbiAgICBhd2FpdCBkb25hdGlvbi5zZXRDYXVzZShjYXVzZSwgeyB0cmFuc2FjdGlvbiB9KTtcbiAgICBhd2FpdCB0cmFuc2FjdGlvbi5jb21taXQoKTtcbiAgICByZXMuc2VuZCgnQ3JlYXRlIERvbmF0aW9uJyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmICh0cmFuc2FjdGlvbikge1xuICAgICAgYXdhaXQgdHJhbnNhY3Rpb24ucm9sbGJhY2soKTtcbiAgICB9XG4gICAgbmV4dChlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEb25hdGlvbkNvbnRyb2xsZXI7XG4iXX0=