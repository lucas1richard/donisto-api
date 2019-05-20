"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _foreignKeys = _interopRequireDefault(require("../../../../../database/foreignKeys"));

var _models = require("../../../../../models");

var _sequelize = require("sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getOrgNewsFeedController = async (req, res, next) => {
  try {
    // get organizations associated to the contact
    const organizationUuids = await _models.OrganizationsContacts.findAll({
      where: {
        [_foreignKeys.default.CONTACT]: res.locals.uuid
      }
    }); // get news feeds associated to all organizations

    const newsFeeds = await _models.NewsFeed.findAll({
      where: {
        [_foreignKeys.default.ORGANIZATION]: {
          [_sequelize.Op.in]: organizationUuids.map(orguuid => {
            return orguuid[_foreignKeys.default.ORGANIZATION];
          })
        }
      }
    });
    res.json(newsFeeds);
  } catch (err) {
    next(err);
  }
};

var _default = getOrgNewsFeedController;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvY29udGFjdC9jb250cm9sbGVycy9nZXRPcmdOZXdzRmVlZC9pbmRleC50cyJdLCJuYW1lcyI6WyJnZXRPcmdOZXdzRmVlZENvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJuZXh0Iiwib3JnYW5pemF0aW9uVXVpZHMiLCJPcmdhbml6YXRpb25zQ29udGFjdHMiLCJmaW5kQWxsIiwid2hlcmUiLCJmb3JlaWduS2V5cyIsIkNPTlRBQ1QiLCJsb2NhbHMiLCJ1dWlkIiwibmV3c0ZlZWRzIiwiTmV3c0ZlZWQiLCJPUkdBTklaQVRJT04iLCJPcCIsImluIiwibWFwIiwib3JndXVpZCIsImpzb24iLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUlBLE1BQU1BLHdCQUF3QyxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsS0FBMEI7QUFDekUsTUFBSTtBQUNGO0FBQ0EsVUFBTUMsaUJBQWlCLEdBQUcsTUFBTUMsOEJBQXNCQyxPQUF0QixDQUE4QjtBQUM1REMsTUFBQUEsS0FBSyxFQUFFO0FBQ0wsU0FBQ0MscUJBQVlDLE9BQWIsR0FBdUJQLEdBQUcsQ0FBQ1EsTUFBSixDQUFXQztBQUQ3QjtBQURxRCxLQUE5QixDQUFoQyxDQUZFLENBUUY7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHLE1BQU1DLGlCQUFTUCxPQUFULENBQWlCO0FBQ3ZDQyxNQUFBQSxLQUFLLEVBQUU7QUFDTCxTQUFDQyxxQkFBWU0sWUFBYixHQUE0QjtBQUMxQixXQUFDQyxjQUFHQyxFQUFKLEdBQVNaLGlCQUFpQixDQUFDYSxHQUFsQixDQUF1QkMsT0FBRCxJQUE4QztBQUMzRSxtQkFBT0EsT0FBTyxDQUFDVixxQkFBWU0sWUFBYixDQUFkO0FBQ0QsV0FGUTtBQURpQjtBQUR2QjtBQURnQyxLQUFqQixDQUF4QjtBQVVBWixJQUFBQSxHQUFHLENBQUNpQixJQUFKLENBQVNQLFNBQVQ7QUFDRCxHQXBCRCxDQW9CRSxPQUFPUSxHQUFQLEVBQVk7QUFDWmpCLElBQUFBLElBQUksQ0FBQ2lCLEdBQUQsQ0FBSjtBQUNEO0FBQ0YsQ0F4QkQ7O2VBMEJlcEIsd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZm9yZWlnbktleXMgZnJvbSAnZGF0YWJhc2UvZm9yZWlnbktleXMnO1xuaW1wb3J0IHsgT3JnYW5pemF0aW9uc0NvbnRhY3RzLCBOZXdzRmVlZCB9IGZyb20gJ21vZGVscyc7XG5pbXBvcnQgeyBPcCB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgT3JnYW5pemF0aW9uc0NvbnRhY3RzQXR0cmlidXRlcyBmcm9tICdtb2RlbHMvT3JnYW5pemF0aW9uc0NvbnRhY3RzL3R5cGVzL0F0dHJpYnV0ZXMnO1xuaW1wb3J0IHsgUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdleHByZXNzJztcblxuY29uc3QgZ2V0T3JnTmV3c0ZlZWRDb250cm9sbGVyOiBSZXF1ZXN0SGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIC8vIGdldCBvcmdhbml6YXRpb25zIGFzc29jaWF0ZWQgdG8gdGhlIGNvbnRhY3RcbiAgICBjb25zdCBvcmdhbml6YXRpb25VdWlkcyA9IGF3YWl0IE9yZ2FuaXphdGlvbnNDb250YWN0cy5maW5kQWxsKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIFtmb3JlaWduS2V5cy5DT05UQUNUXTogcmVzLmxvY2Fscy51dWlkXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBnZXQgbmV3cyBmZWVkcyBhc3NvY2lhdGVkIHRvIGFsbCBvcmdhbml6YXRpb25zXG4gICAgY29uc3QgbmV3c0ZlZWRzID0gYXdhaXQgTmV3c0ZlZWQuZmluZEFsbCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBbZm9yZWlnbktleXMuT1JHQU5JWkFUSU9OXToge1xuICAgICAgICAgIFtPcC5pbl06IG9yZ2FuaXphdGlvblV1aWRzLm1hcCgob3JndXVpZDogT3JnYW5pemF0aW9uc0NvbnRhY3RzQXR0cmlidXRlcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9yZ3V1aWRbZm9yZWlnbktleXMuT1JHQU5JWkFUSU9OXTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXMuanNvbihuZXdzRmVlZHMpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldE9yZ05ld3NGZWVkQ29udHJvbGxlcjtcbiJdfQ==