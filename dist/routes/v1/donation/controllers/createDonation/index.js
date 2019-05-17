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

var _DonationKeys = _interopRequireDefault(require("../../../../../models/Donation/types/DonationKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { bodySchema } from './validate';
const createDonationController = async (req, res, next) => {
  let transaction;

  try {
    // await bodySchema.validate(req.body);
    transaction = await _conn.default.transaction();
    const donation = await _Donation.default.create({
      [_DonationKeys.default.AMOUNT]: req.body.amount,
      [_DonationKeys.default.IS_ANONYMOUS]: req.body.is_anonymous,
      [_DonationKeys.default.MESSAGE]: req.body.message
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvZG9uYXRpb24vY29udHJvbGxlcnMvY3JlYXRlRG9uYXRpb24vaW5kZXgudHMiXSwibmFtZXMiOlsiY3JlYXRlRG9uYXRpb25Db250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsInRyYW5zYWN0aW9uIiwic2VxSW5zdGFuY2UiLCJkb25hdGlvbiIsIkRvbmF0aW9uIiwiY3JlYXRlIiwiRG9uYXRpb25LZXlzIiwiQU1PVU5UIiwiYm9keSIsImFtb3VudCIsIklTX0FOT05ZTU9VUyIsImlzX2Fub255bW91cyIsIk1FU1NBR0UiLCJtZXNzYWdlIiwiY29udGFjdCIsIkNvbnRhY3RzIiwiZmluZE9uZSIsIndoZXJlIiwiQ29udGFjdEtleXMiLCJVVUlEIiwibG9jYWxzIiwidXVpZCIsImNhdXNlIiwiQ2F1c2UiLCJDYXVzZUtleXMiLCJjYXVzZV91dWlkIiwic2V0Q29udGFjdCIsInNldENhdXNlIiwiY29tbWl0Iiwic2VuZCIsImVyciIsInJvbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTtBQUVBLE1BQU1BLHdCQUF3QixHQUFHLE9BQU9DLEdBQVAsRUFBcUJDLEdBQXJCLEVBQW9DQyxJQUFwQyxLQUEyRDtBQUMxRixNQUFJQyxXQUFKOztBQUNBLE1BQUk7QUFDRjtBQUNBQSxJQUFBQSxXQUFXLEdBQUcsTUFBTUMsY0FBWUQsV0FBWixFQUFwQjtBQUNBLFVBQU1FLFFBQVEsR0FBRyxNQUFNQyxrQkFBU0MsTUFBVCxDQUFnQjtBQUNyQyxPQUFDQyxzQkFBYUMsTUFBZCxHQUF1QlQsR0FBRyxDQUFDVSxJQUFKLENBQVNDLE1BREs7QUFFckMsT0FBQ0gsc0JBQWFJLFlBQWQsR0FBNkJaLEdBQUcsQ0FBQ1UsSUFBSixDQUFTRyxZQUZEO0FBR3JDLE9BQUNMLHNCQUFhTSxPQUFkLEdBQXdCZCxHQUFHLENBQUNVLElBQUosQ0FBU0s7QUFISSxLQUFoQixFQUlwQjtBQUFFWixNQUFBQTtBQUFGLEtBSm9CLENBQXZCO0FBS0EsVUFBTWEsT0FBTyxHQUFHLE1BQU1DLGlCQUFTQyxPQUFULENBQWlCO0FBQ3JDQyxNQUFBQSxLQUFLLEVBQUU7QUFDTCxTQUFDQyxxQkFBWUMsSUFBYixHQUFvQnBCLEdBQUcsQ0FBQ3FCLE1BQUosQ0FBV0M7QUFEMUI7QUFEOEIsS0FBakIsQ0FBdEI7QUFLQSxVQUFNQyxLQUFLLEdBQUcsTUFBTUMsZUFBTVAsT0FBTixDQUFjO0FBQ2hDQyxNQUFBQSxLQUFLLEVBQUU7QUFDTCxTQUFDTyxtQkFBVUwsSUFBWCxHQUFrQnJCLEdBQUcsQ0FBQ1UsSUFBSixDQUFTaUI7QUFEdEI7QUFEeUIsS0FBZCxDQUFwQjtBQUtBLFVBQU10QixRQUFRLENBQUN1QixVQUFULENBQW9CWixPQUFwQixFQUE2QjtBQUFFYixNQUFBQTtBQUFGLEtBQTdCLENBQU47QUFDQSxVQUFNRSxRQUFRLENBQUN3QixRQUFULENBQWtCTCxLQUFsQixFQUF5QjtBQUFFckIsTUFBQUE7QUFBRixLQUF6QixDQUFOO0FBQ0EsVUFBTUEsV0FBVyxDQUFDMkIsTUFBWixFQUFOO0FBQ0E3QixJQUFBQSxHQUFHLENBQUM4QixJQUFKLENBQVMsaUJBQVQ7QUFDRCxHQXRCRCxDQXNCRSxPQUFPQyxHQUFQLEVBQVk7QUFDWixRQUFJN0IsV0FBSixFQUFpQjtBQUNmLFlBQU1BLFdBQVcsQ0FBQzhCLFFBQVosRUFBTjtBQUNEOztBQUNEL0IsSUFBQUEsSUFBSSxDQUFDOEIsR0FBRCxDQUFKO0FBQ0Q7QUFDRixDQTlCRDs7ZUFnQ2VqQyx3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBEb25hdGlvbiBmcm9tICdtb2RlbHMvRG9uYXRpb24nO1xuaW1wb3J0IENvbnRhY3RzIGZyb20gJ21vZGVscy9Db250YWN0JztcbmltcG9ydCBDb250YWN0S2V5cyBmcm9tICdtb2RlbHMvQ29udGFjdC90eXBlcy9Db250YWN0S2V5cyc7XG5pbXBvcnQgQ2F1c2UgZnJvbSAnbW9kZWxzL0NhdXNlJztcbmltcG9ydCBDYXVzZUtleXMgZnJvbSAnbW9kZWxzL0NhdXNlL3R5cGVzL0NhdXNlS2V5cyc7XG5pbXBvcnQgc2VxSW5zdGFuY2UgZnJvbSAnY29uZmlnL2RhdGFiYXNlL2Nvbm4nO1xuaW1wb3J0IERvbmF0aW9uS2V5cyBmcm9tICdtb2RlbHMvRG9uYXRpb24vdHlwZXMvRG9uYXRpb25LZXlzJztcbi8vIGltcG9ydCB7IGJvZHlTY2hlbWEgfSBmcm9tICcuL3ZhbGlkYXRlJztcblxuY29uc3QgY3JlYXRlRG9uYXRpb25Db250cm9sbGVyID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIGxldCB0cmFuc2FjdGlvbjtcbiAgdHJ5IHtcbiAgICAvLyBhd2FpdCBib2R5U2NoZW1hLnZhbGlkYXRlKHJlcS5ib2R5KTtcbiAgICB0cmFuc2FjdGlvbiA9IGF3YWl0IHNlcUluc3RhbmNlLnRyYW5zYWN0aW9uKCk7XG4gICAgY29uc3QgZG9uYXRpb24gPSBhd2FpdCBEb25hdGlvbi5jcmVhdGUoe1xuICAgICAgW0RvbmF0aW9uS2V5cy5BTU9VTlRdOiByZXEuYm9keS5hbW91bnQsXG4gICAgICBbRG9uYXRpb25LZXlzLklTX0FOT05ZTU9VU106IHJlcS5ib2R5LmlzX2Fub255bW91cyxcbiAgICAgIFtEb25hdGlvbktleXMuTUVTU0FHRV06IHJlcS5ib2R5Lm1lc3NhZ2UsXG4gICAgfSwgeyB0cmFuc2FjdGlvbiB9KTtcbiAgICBjb25zdCBjb250YWN0ID0gYXdhaXQgQ29udGFjdHMuZmluZE9uZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbQ29udGFjdEtleXMuVVVJRF06IHJlcy5sb2NhbHMudXVpZFxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGNhdXNlID0gYXdhaXQgQ2F1c2UuZmluZE9uZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbQ2F1c2VLZXlzLlVVSURdOiByZXEuYm9keS5jYXVzZV91dWlkXG4gICAgICB9XG4gICAgfSk7XG4gICAgYXdhaXQgZG9uYXRpb24uc2V0Q29udGFjdChjb250YWN0LCB7IHRyYW5zYWN0aW9uIH0pO1xuICAgIGF3YWl0IGRvbmF0aW9uLnNldENhdXNlKGNhdXNlLCB7IHRyYW5zYWN0aW9uIH0pO1xuICAgIGF3YWl0IHRyYW5zYWN0aW9uLmNvbW1pdCgpO1xuICAgIHJlcy5zZW5kKCdDcmVhdGUgRG9uYXRpb24nKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKHRyYW5zYWN0aW9uKSB7XG4gICAgICBhd2FpdCB0cmFuc2FjdGlvbi5yb2xsYmFjaygpO1xuICAgIH1cbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURvbmF0aW9uQ29udHJvbGxlcjtcbiJdfQ==