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
        [_keys.ContactKeys.UUID]: req.user
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvZG9uYXRpb24vY29udHJvbGxlcnMvY3JlYXRlRG9uYXRpb24vaW5kZXgudHMiXSwibmFtZXMiOlsiY3JlYXRlRG9uYXRpb25Db250cm9sbGVyIiwicmVxIiwicmVzIiwibmV4dCIsInRyYW5zYWN0aW9uIiwic2VxSW5zdGFuY2UiLCJkb25hdGlvbiIsIkRvbmF0aW9ucyIsImNyZWF0ZSIsIkRvbmF0aW9uS2V5cyIsIkFNT1VOVCIsImJvZHkiLCJhbW91bnQiLCJJU19BTk9OWU1PVVMiLCJpc19hbm9ueW1vdXMiLCJNRVNTQUdFIiwibWVzc2FnZSIsImNvbnRhY3QiLCJDb250YWN0cyIsImZpbmRPbmUiLCJ3aGVyZSIsIkNvbnRhY3RLZXlzIiwiVVVJRCIsInVzZXIiLCJjYXVzZSIsIkNhdXNlcyIsIkNhdXNlS2V5cyIsImNhdXNlX3V1aWQiLCJzZXRDb250YWN0Iiwic2V0Q2F1c2UiLCJjb21taXQiLCJzZW5kIiwiZXJyIiwicm9sbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBO0FBRUEsTUFBTUEsd0JBQXdDLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixLQUEwQjtBQUN6RSxNQUFJQyxXQUFKOztBQUNBLE1BQUk7QUFDRjtBQUNBQSxJQUFBQSxXQUFXLEdBQUcsTUFBTUMsY0FBWUQsV0FBWixFQUFwQjtBQUNBLFVBQU1FLFFBQVEsR0FBRyxNQUFNQyxrQkFBVUMsTUFBVixDQUFpQjtBQUN0QyxPQUFDQyxzQkFBYUMsTUFBZCxHQUF1QlQsR0FBRyxDQUFDVSxJQUFKLENBQVNDLE1BRE07QUFFdEMsT0FBQ0gsc0JBQWFJLFlBQWQsR0FBNkJaLEdBQUcsQ0FBQ1UsSUFBSixDQUFTRyxZQUZBO0FBR3RDLE9BQUNMLHNCQUFhTSxPQUFkLEdBQXdCZCxHQUFHLENBQUNVLElBQUosQ0FBU0s7QUFISyxLQUFqQixFQUlwQjtBQUFFWixNQUFBQTtBQUFGLEtBSm9CLENBQXZCO0FBS0EsVUFBTWEsT0FBTyxHQUFHLE1BQU1DLGlCQUFTQyxPQUFULENBQWlCO0FBQ3JDQyxNQUFBQSxLQUFLLEVBQUU7QUFDTCxTQUFDQyxrQkFBWUMsSUFBYixHQUFvQnJCLEdBQUcsQ0FBQ3NCO0FBRG5CO0FBRDhCLEtBQWpCLENBQXRCO0FBS0EsVUFBTUMsS0FBSyxHQUFHLE1BQU1DLGVBQU9OLE9BQVAsQ0FBZTtBQUNqQ0MsTUFBQUEsS0FBSyxFQUFFO0FBQ0wsU0FBQ00sZ0JBQVVKLElBQVgsR0FBa0JyQixHQUFHLENBQUNVLElBQUosQ0FBU2dCO0FBRHRCO0FBRDBCLEtBQWYsQ0FBcEI7QUFLQSxVQUFNckIsUUFBUSxDQUFDc0IsVUFBVCxDQUFvQlgsT0FBcEIsRUFBNkI7QUFBRWIsTUFBQUE7QUFBRixLQUE3QixDQUFOO0FBQ0EsVUFBTUUsUUFBUSxDQUFDdUIsUUFBVCxDQUFrQkwsS0FBbEIsRUFBeUI7QUFBRXBCLE1BQUFBO0FBQUYsS0FBekIsQ0FBTjtBQUNBLFVBQU1BLFdBQVcsQ0FBQzBCLE1BQVosRUFBTjtBQUNBNUIsSUFBQUEsR0FBRyxDQUFDNkIsSUFBSixDQUFTLGlCQUFUO0FBQ0QsR0F0QkQsQ0FzQkUsT0FBT0MsR0FBUCxFQUFZO0FBQ1osUUFBSTVCLFdBQUosRUFBaUI7QUFDZixZQUFNQSxXQUFXLENBQUM2QixRQUFaLEVBQU47QUFDRDs7QUFDRDlCLElBQUFBLElBQUksQ0FBQzZCLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0E5QkQ7O2VBZ0NlaEMsd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgRG9uYXRpb25zLCBDb250YWN0cywgQ2F1c2VzIH0gZnJvbSAnbW9kZWxzJztcbmltcG9ydCB7IENvbnRhY3RLZXlzLCBDYXVzZUtleXMgfSBmcm9tICdtb2RlbHMva2V5cyc7XG5pbXBvcnQgc2VxSW5zdGFuY2UgZnJvbSAnY29uZmlnL2RhdGFiYXNlL2Nvbm4nO1xuaW1wb3J0IERvbmF0aW9uS2V5cyBmcm9tICdtb2RlbHMvRG9uYXRpb24vdHlwZXMvRG9uYXRpb25LZXlzJztcbi8vIGltcG9ydCB7IGJvZHlTY2hlbWEgfSBmcm9tICcuL3ZhbGlkYXRlJztcblxuY29uc3QgY3JlYXRlRG9uYXRpb25Db250cm9sbGVyOiBSZXF1ZXN0SGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBsZXQgdHJhbnNhY3Rpb247XG4gIHRyeSB7XG4gICAgLy8gYXdhaXQgYm9keVNjaGVtYS52YWxpZGF0ZShyZXEuYm9keSk7XG4gICAgdHJhbnNhY3Rpb24gPSBhd2FpdCBzZXFJbnN0YW5jZS50cmFuc2FjdGlvbigpO1xuICAgIGNvbnN0IGRvbmF0aW9uID0gYXdhaXQgRG9uYXRpb25zLmNyZWF0ZSh7XG4gICAgICBbRG9uYXRpb25LZXlzLkFNT1VOVF06IHJlcS5ib2R5LmFtb3VudCxcbiAgICAgIFtEb25hdGlvbktleXMuSVNfQU5PTllNT1VTXTogcmVxLmJvZHkuaXNfYW5vbnltb3VzLFxuICAgICAgW0RvbmF0aW9uS2V5cy5NRVNTQUdFXTogcmVxLmJvZHkubWVzc2FnZSxcbiAgICB9LCB7IHRyYW5zYWN0aW9uIH0pO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBhd2FpdCBDb250YWN0cy5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIFtDb250YWN0S2V5cy5VVUlEXTogcmVxLnVzZXIsXG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY2F1c2UgPSBhd2FpdCBDYXVzZXMuZmluZE9uZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbQ2F1c2VLZXlzLlVVSURdOiByZXEuYm9keS5jYXVzZV91dWlkXG4gICAgICB9XG4gICAgfSk7XG4gICAgYXdhaXQgZG9uYXRpb24uc2V0Q29udGFjdChjb250YWN0LCB7IHRyYW5zYWN0aW9uIH0pO1xuICAgIGF3YWl0IGRvbmF0aW9uLnNldENhdXNlKGNhdXNlLCB7IHRyYW5zYWN0aW9uIH0pO1xuICAgIGF3YWl0IHRyYW5zYWN0aW9uLmNvbW1pdCgpO1xuICAgIHJlcy5zZW5kKCdDcmVhdGUgRG9uYXRpb24nKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKHRyYW5zYWN0aW9uKSB7XG4gICAgICBhd2FpdCB0cmFuc2FjdGlvbi5yb2xsYmFjaygpO1xuICAgIH1cbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURvbmF0aW9uQ29udHJvbGxlcjtcbiJdfQ==