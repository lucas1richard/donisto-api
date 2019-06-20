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
        [_keys.ContactKeys.UUID]: req.user.uuid
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvZG9uYXRpb24vY29udHJvbGxlcnMvY3JlYXRlRG9uYXRpb24vaW5kZXgudHMiXSwibmFtZXMiOlsiY3JlYXRlRG9uYXRpb25Db250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsInRyYW5zYWN0aW9uIiwic2VxSW5zdGFuY2UiLCJkb25hdGlvbiIsIkRvbmF0aW9ucyIsImNyZWF0ZSIsIkRvbmF0aW9uS2V5cyIsIkFNT1VOVCIsImJvZHkiLCJhbW91bnQiLCJJU19BTk9OWU1PVVMiLCJpc19hbm9ueW1vdXMiLCJNRVNTQUdFIiwibWVzc2FnZSIsImNvbnRhY3QiLCJDb250YWN0cyIsImZpbmRPbmUiLCJ3aGVyZSIsIkNvbnRhY3RLZXlzIiwiVVVJRCIsInVzZXIiLCJ1dWlkIiwiY2F1c2UiLCJDYXVzZXMiLCJDYXVzZUtleXMiLCJjYXVzZV91dWlkIiwic2V0Q29udGFjdCIsInNldENhdXNlIiwiY29tbWl0Iiwic2VuZCIsImVyciIsInJvbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTtBQUVBLE1BQU1BLHdCQUF3QyxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsS0FBMEI7QUFDekUsTUFBSUMsV0FBSjs7QUFDQSxNQUFJO0FBQ0Y7QUFDQUEsSUFBQUEsV0FBVyxHQUFHLE1BQU1DLGNBQVlELFdBQVosRUFBcEI7QUFDQSxVQUFNRSxRQUFRLEdBQUcsTUFBTUMsa0JBQVVDLE1BQVYsQ0FBaUI7QUFDdEMsT0FBQ0Msc0JBQWFDLE1BQWQsR0FBdUJULEdBQUcsQ0FBQ1UsSUFBSixDQUFTQyxNQURNO0FBRXRDLE9BQUNILHNCQUFhSSxZQUFkLEdBQTZCWixHQUFHLENBQUNVLElBQUosQ0FBU0csWUFGQTtBQUd0QyxPQUFDTCxzQkFBYU0sT0FBZCxHQUF3QmQsR0FBRyxDQUFDVSxJQUFKLENBQVNLO0FBSEssS0FBakIsRUFJcEI7QUFBRVosTUFBQUE7QUFBRixLQUpvQixDQUF2QjtBQUtBLFVBQU1hLE9BQU8sR0FBRyxNQUFNQyxpQkFBU0MsT0FBVCxDQUFpQjtBQUNyQ0MsTUFBQUEsS0FBSyxFQUFFO0FBQ0wsU0FBQ0Msa0JBQVlDLElBQWIsR0FBb0JyQixHQUFHLENBQUNzQixJQUFKLENBQVNDO0FBRHhCO0FBRDhCLEtBQWpCLENBQXRCO0FBS0EsVUFBTUMsS0FBSyxHQUFHLE1BQU1DLGVBQU9QLE9BQVAsQ0FBZTtBQUNqQ0MsTUFBQUEsS0FBSyxFQUFFO0FBQ0wsU0FBQ08sZ0JBQVVMLElBQVgsR0FBa0JyQixHQUFHLENBQUNVLElBQUosQ0FBU2lCO0FBRHRCO0FBRDBCLEtBQWYsQ0FBcEI7QUFLQSxVQUFNdEIsUUFBUSxDQUFDdUIsVUFBVCxDQUFvQlosT0FBcEIsRUFBNkI7QUFBRWIsTUFBQUE7QUFBRixLQUE3QixDQUFOO0FBQ0EsVUFBTUUsUUFBUSxDQUFDd0IsUUFBVCxDQUFrQkwsS0FBbEIsRUFBeUI7QUFBRXJCLE1BQUFBO0FBQUYsS0FBekIsQ0FBTjtBQUNBLFVBQU1BLFdBQVcsQ0FBQzJCLE1BQVosRUFBTjtBQUNBN0IsSUFBQUEsR0FBRyxDQUFDOEIsSUFBSixDQUFTLGlCQUFUO0FBQ0QsR0F0QkQsQ0FzQkUsT0FBT0MsR0FBUCxFQUFZO0FBQ1osUUFBSTdCLFdBQUosRUFBaUI7QUFDZixZQUFNQSxXQUFXLENBQUM4QixRQUFaLEVBQU47QUFDRDs7QUFDRC9CLElBQUFBLElBQUksQ0FBQzhCLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0E5QkQ7O2VBZ0NlakMsd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgRG9uYXRpb25zLCBDb250YWN0cywgQ2F1c2VzIH0gZnJvbSAnbW9kZWxzJztcbmltcG9ydCB7IENvbnRhY3RLZXlzLCBDYXVzZUtleXMgfSBmcm9tICdtb2RlbHMva2V5cyc7XG5pbXBvcnQgc2VxSW5zdGFuY2UgZnJvbSAnY29uZmlnL2RhdGFiYXNlL2Nvbm4nO1xuaW1wb3J0IERvbmF0aW9uS2V5cyBmcm9tICdtb2RlbHMvRG9uYXRpb24vdHlwZXMvRG9uYXRpb25LZXlzJztcbi8vIGltcG9ydCB7IGJvZHlTY2hlbWEgfSBmcm9tICcuL3ZhbGlkYXRlJztcblxuY29uc3QgY3JlYXRlRG9uYXRpb25Db250cm9sbGVyOiBSZXF1ZXN0SGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBsZXQgdHJhbnNhY3Rpb247XG4gIHRyeSB7XG4gICAgLy8gYXdhaXQgYm9keVNjaGVtYS52YWxpZGF0ZShyZXEuYm9keSk7XG4gICAgdHJhbnNhY3Rpb24gPSBhd2FpdCBzZXFJbnN0YW5jZS50cmFuc2FjdGlvbigpO1xuICAgIGNvbnN0IGRvbmF0aW9uID0gYXdhaXQgRG9uYXRpb25zLmNyZWF0ZSh7XG4gICAgICBbRG9uYXRpb25LZXlzLkFNT1VOVF06IHJlcS5ib2R5LmFtb3VudCxcbiAgICAgIFtEb25hdGlvbktleXMuSVNfQU5PTllNT1VTXTogcmVxLmJvZHkuaXNfYW5vbnltb3VzLFxuICAgICAgW0RvbmF0aW9uS2V5cy5NRVNTQUdFXTogcmVxLmJvZHkubWVzc2FnZSxcbiAgICB9LCB7IHRyYW5zYWN0aW9uIH0pO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBhd2FpdCBDb250YWN0cy5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIFtDb250YWN0S2V5cy5VVUlEXTogcmVxLnVzZXIudXVpZCxcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjYXVzZSA9IGF3YWl0IENhdXNlcy5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIFtDYXVzZUtleXMuVVVJRF06IHJlcS5ib2R5LmNhdXNlX3V1aWRcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhd2FpdCBkb25hdGlvbi5zZXRDb250YWN0KGNvbnRhY3QsIHsgdHJhbnNhY3Rpb24gfSk7XG4gICAgYXdhaXQgZG9uYXRpb24uc2V0Q2F1c2UoY2F1c2UsIHsgdHJhbnNhY3Rpb24gfSk7XG4gICAgYXdhaXQgdHJhbnNhY3Rpb24uY29tbWl0KCk7XG4gICAgcmVzLnNlbmQoJ0NyZWF0ZSBEb25hdGlvbicpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAodHJhbnNhY3Rpb24pIHtcbiAgICAgIGF3YWl0IHRyYW5zYWN0aW9uLnJvbGxiYWNrKCk7XG4gICAgfVxuICAgIG5leHQoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRG9uYXRpb25Db250cm9sbGVyO1xuIl19