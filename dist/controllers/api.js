'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApi = void 0;

// import graph from 'fbgraph';

/**
 * GET /api
 * List of API examples.
 */
let getApi = (req, res) => {
  res.render('api/index', {
    title: 'API Examples'
  });
};
/**
 * GET /api/facebook
 * Facebook API example.
 */
// export let getFacebook = (req: Request, res: Response, next: NextFunction) => {
//   const token = req.user.tokens.find((token: any) => token.kind === 'facebook');
//   graph.setAccessToken(token.accessToken);
//   graph.get(`${req.user.facebook}?fields=id,name,email,first_name,last_name,gender,link,locale,timezone`, (err: Error, results: graph.FacebookUser) => {
//     if (err) { return next(err); }
//     res.render('api/facebook', {
//       title: 'Facebook API',
//       profile: results
//     });
//   });
// };


exports.getApi = getApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9hcGkudHMiXSwibmFtZXMiOlsiZ2V0QXBpIiwicmVxIiwicmVzIiwicmVuZGVyIiwidGl0bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBSUE7O0FBSUE7Ozs7QUFJTyxJQUFJQSxNQUFNLEdBQUcsQ0FBQ0MsR0FBRCxFQUFlQyxHQUFmLEtBQWlDO0FBQ25EQSxFQUFBQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxXQUFYLEVBQXdCO0FBQ3RCQyxJQUFBQSxLQUFLLEVBQUU7QUFEZSxHQUF4QjtBQUdELENBSk07QUFNUDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBhc3luYyBmcm9tICdhc3luYyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICdyZXF1ZXN0Jztcbi8vIGltcG9ydCBncmFwaCBmcm9tICdmYmdyYXBoJztcbmltcG9ydCB7IFJlc3BvbnNlLCBSZXF1ZXN0LCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcblxuXG4vKipcbiAqIEdFVCAvYXBpXG4gKiBMaXN0IG9mIEFQSSBleGFtcGxlcy5cbiAqL1xuZXhwb3J0IGxldCBnZXRBcGkgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIHJlcy5yZW5kZXIoJ2FwaS9pbmRleCcsIHtcbiAgICB0aXRsZTogJ0FQSSBFeGFtcGxlcydcbiAgfSk7XG59O1xuXG4vKipcbiAqIEdFVCAvYXBpL2ZhY2Vib29rXG4gKiBGYWNlYm9vayBBUEkgZXhhbXBsZS5cbiAqL1xuLy8gZXhwb3J0IGxldCBnZXRGYWNlYm9vayA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuLy8gICBjb25zdCB0b2tlbiA9IHJlcS51c2VyLnRva2Vucy5maW5kKCh0b2tlbjogYW55KSA9PiB0b2tlbi5raW5kID09PSAnZmFjZWJvb2snKTtcbi8vICAgZ3JhcGguc2V0QWNjZXNzVG9rZW4odG9rZW4uYWNjZXNzVG9rZW4pO1xuLy8gICBncmFwaC5nZXQoYCR7cmVxLnVzZXIuZmFjZWJvb2t9P2ZpZWxkcz1pZCxuYW1lLGVtYWlsLGZpcnN0X25hbWUsbGFzdF9uYW1lLGdlbmRlcixsaW5rLGxvY2FsZSx0aW1lem9uZWAsIChlcnI6IEVycm9yLCByZXN1bHRzOiBncmFwaC5GYWNlYm9va1VzZXIpID0+IHtcbi8vICAgICBpZiAoZXJyKSB7IHJldHVybiBuZXh0KGVycik7IH1cbi8vICAgICByZXMucmVuZGVyKCdhcGkvZmFjZWJvb2snLCB7XG4vLyAgICAgICB0aXRsZTogJ0ZhY2Vib29rIEFQSScsXG4vLyAgICAgICBwcm9maWxlOiByZXN1bHRzXG4vLyAgICAgfSk7XG4vLyAgIH0pO1xuLy8gfTtcbiJdfQ==