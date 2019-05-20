"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../../../../models");

var _keys = require("../../../../../models/keys");

var _conn = _interopRequireDefault(require("../../../../../config/database/conn"));

var _DonationKeys = _interopRequireDefault(require("../../../../../models/Donation/types/DonationKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { bodySchema } from './validate';
const createDonationController = async (req, res, next) => {
  let transaction;

  try {
    // await bodySchema.validate(req.body);
    transaction = await _conn.default.transaction();
    const donation = await _models.Donations.create({
      [_DonationKeys.default.AMOUNT]: req.body.amount,
      [_DonationKeys.default.IS_ANONYMOUS]: req.body.is_anonymous,
      [_DonationKeys.default.MESSAGE]: req.body.message
    }, {
      transaction
    });
    const contact = await _models.Contacts.findOne({
      where: {
        [_keys.ContactKeys.UUID]: res.locals.uuid
      }
    });
    const cause = await _models.Causes.findOne({
      where: {
        [_keys.CauseKeys.UUID]: req.body.cause_uuid
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvZG9uYXRpb24vY29udHJvbGxlcnMvY3JlYXRlRG9uYXRpb24vaW5kZXgudHMiXSwibmFtZXMiOlsiY3JlYXRlRG9uYXRpb25Db250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsInRyYW5zYWN0aW9uIiwic2VxSW5zdGFuY2UiLCJkb25hdGlvbiIsIkRvbmF0aW9ucyIsImNyZWF0ZSIsIkRvbmF0aW9uS2V5cyIsIkFNT1VOVCIsImJvZHkiLCJhbW91bnQiLCJJU19BTk9OWU1PVVMiLCJpc19hbm9ueW1vdXMiLCJNRVNTQUdFIiwibWVzc2FnZSIsImNvbnRhY3QiLCJDb250YWN0cyIsImZpbmRPbmUiLCJ3aGVyZSIsIkNvbnRhY3RLZXlzIiwiVVVJRCIsImxvY2FscyIsInV1aWQiLCJjYXVzZSIsIkNhdXNlcyIsIkNhdXNlS2V5cyIsImNhdXNlX3V1aWQiLCJzZXRDb250YWN0Iiwic2V0Q2F1c2UiLCJjb21taXQiLCJzZW5kIiwiZXJyIiwicm9sbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBO0FBRUEsTUFBTUEsd0JBQXdDLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixLQUEwQjtBQUN6RSxNQUFJQyxXQUFKOztBQUNBLE1BQUk7QUFDRjtBQUNBQSxJQUFBQSxXQUFXLEdBQUcsTUFBTUMsY0FBWUQsV0FBWixFQUFwQjtBQUNBLFVBQU1FLFFBQVEsR0FBRyxNQUFNQyxrQkFBVUMsTUFBVixDQUFpQjtBQUN0QyxPQUFDQyxzQkFBYUMsTUFBZCxHQUF1QlQsR0FBRyxDQUFDVSxJQUFKLENBQVNDLE1BRE07QUFFdEMsT0FBQ0gsc0JBQWFJLFlBQWQsR0FBNkJaLEdBQUcsQ0FBQ1UsSUFBSixDQUFTRyxZQUZBO0FBR3RDLE9BQUNMLHNCQUFhTSxPQUFkLEdBQXdCZCxHQUFHLENBQUNVLElBQUosQ0FBU0s7QUFISyxLQUFqQixFQUlwQjtBQUFFWixNQUFBQTtBQUFGLEtBSm9CLENBQXZCO0FBS0EsVUFBTWEsT0FBTyxHQUFHLE1BQU1DLGlCQUFTQyxPQUFULENBQWlCO0FBQ3JDQyxNQUFBQSxLQUFLLEVBQUU7QUFDTCxTQUFDQyxrQkFBWUMsSUFBYixHQUFvQnBCLEdBQUcsQ0FBQ3FCLE1BQUosQ0FBV0M7QUFEMUI7QUFEOEIsS0FBakIsQ0FBdEI7QUFLQSxVQUFNQyxLQUFLLEdBQUcsTUFBTUMsZUFBT1AsT0FBUCxDQUFlO0FBQ2pDQyxNQUFBQSxLQUFLLEVBQUU7QUFDTCxTQUFDTyxnQkFBVUwsSUFBWCxHQUFrQnJCLEdBQUcsQ0FBQ1UsSUFBSixDQUFTaUI7QUFEdEI7QUFEMEIsS0FBZixDQUFwQjtBQUtBLFVBQU10QixRQUFRLENBQUN1QixVQUFULENBQW9CWixPQUFwQixFQUE2QjtBQUFFYixNQUFBQTtBQUFGLEtBQTdCLENBQU47QUFDQSxVQUFNRSxRQUFRLENBQUN3QixRQUFULENBQWtCTCxLQUFsQixFQUF5QjtBQUFFckIsTUFBQUE7QUFBRixLQUF6QixDQUFOO0FBQ0EsVUFBTUEsV0FBVyxDQUFDMkIsTUFBWixFQUFOO0FBQ0E3QixJQUFBQSxHQUFHLENBQUM4QixJQUFKLENBQVMsaUJBQVQ7QUFDRCxHQXRCRCxDQXNCRSxPQUFPQyxHQUFQLEVBQVk7QUFDWixRQUFJN0IsV0FBSixFQUFpQjtBQUNmLFlBQU1BLFdBQVcsQ0FBQzhCLFFBQVosRUFBTjtBQUNEOztBQUNEL0IsSUFBQUEsSUFBSSxDQUFDOEIsR0FBRCxDQUFKO0FBQ0Q7QUFDRixDQTlCRDs7ZUFnQ2VqQyx3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBEb25hdGlvbnMsIENvbnRhY3RzLCBDYXVzZXMgfSBmcm9tICdtb2RlbHMnO1xuaW1wb3J0IHsgQ29udGFjdEtleXMsIENhdXNlS2V5cyB9IGZyb20gJ21vZGVscy9rZXlzJztcbmltcG9ydCBzZXFJbnN0YW5jZSBmcm9tICdjb25maWcvZGF0YWJhc2UvY29ubic7XG5pbXBvcnQgRG9uYXRpb25LZXlzIGZyb20gJ21vZGVscy9Eb25hdGlvbi90eXBlcy9Eb25hdGlvbktleXMnO1xuLy8gaW1wb3J0IHsgYm9keVNjaGVtYSB9IGZyb20gJy4vdmFsaWRhdGUnO1xuXG5jb25zdCBjcmVhdGVEb25hdGlvbkNvbnRyb2xsZXI6IFJlcXVlc3RIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGxldCB0cmFuc2FjdGlvbjtcbiAgdHJ5IHtcbiAgICAvLyBhd2FpdCBib2R5U2NoZW1hLnZhbGlkYXRlKHJlcS5ib2R5KTtcbiAgICB0cmFuc2FjdGlvbiA9IGF3YWl0IHNlcUluc3RhbmNlLnRyYW5zYWN0aW9uKCk7XG4gICAgY29uc3QgZG9uYXRpb24gPSBhd2FpdCBEb25hdGlvbnMuY3JlYXRlKHtcbiAgICAgIFtEb25hdGlvbktleXMuQU1PVU5UXTogcmVxLmJvZHkuYW1vdW50LFxuICAgICAgW0RvbmF0aW9uS2V5cy5JU19BTk9OWU1PVVNdOiByZXEuYm9keS5pc19hbm9ueW1vdXMsXG4gICAgICBbRG9uYXRpb25LZXlzLk1FU1NBR0VdOiByZXEuYm9keS5tZXNzYWdlLFxuICAgIH0sIHsgdHJhbnNhY3Rpb24gfSk7XG4gICAgY29uc3QgY29udGFjdCA9IGF3YWl0IENvbnRhY3RzLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgW0NvbnRhY3RLZXlzLlVVSURdOiByZXMubG9jYWxzLnV1aWRcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjYXVzZSA9IGF3YWl0IENhdXNlcy5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIFtDYXVzZUtleXMuVVVJRF06IHJlcS5ib2R5LmNhdXNlX3V1aWRcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhd2FpdCBkb25hdGlvbi5zZXRDb250YWN0KGNvbnRhY3QsIHsgdHJhbnNhY3Rpb24gfSk7XG4gICAgYXdhaXQgZG9uYXRpb24uc2V0Q2F1c2UoY2F1c2UsIHsgdHJhbnNhY3Rpb24gfSk7XG4gICAgYXdhaXQgdHJhbnNhY3Rpb24uY29tbWl0KCk7XG4gICAgcmVzLnNlbmQoJ0NyZWF0ZSBEb25hdGlvbicpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAodHJhbnNhY3Rpb24pIHtcbiAgICAgIGF3YWl0IHRyYW5zYWN0aW9uLnJvbGxiYWNrKCk7XG4gICAgfVxuICAgIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRG9uYXRpb25Db250cm9sbGVyO1xuIl19