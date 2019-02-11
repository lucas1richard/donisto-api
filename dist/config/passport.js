// import passport from 'passport';
// import request from 'request';
// import passportLocal from 'passport-local';
// import passportFacebook from 'passport-facebook';
// import _ from 'lodash';
// // import { User, UserType } from '../models/User';
// import { default as User } from '../models/User';
// import { Request, Response, NextFunction } from 'express';
// const LocalStrategy = passportLocal.Strategy;
// const FacebookStrategy = passportFacebook.Strategy;
// passport.serializeUser<any, any>((user, done) => {
//   done(undefined, user.id);
// });
// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });
// /**
//  * Sign in using Email and Password.
//  */
// passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
//   User.findOne({ email: email.toLowerCase() }, (err, user: any) => {
//     if (err) { return done(err); }
//     if (!user) {
//       return done(undefined, false, { message: `Email ${email} not found.` });
//     }
//     user.comparePassword(password, (err: Error, isMatch: boolean) => {
//       if (err) { return done(err); }
//       if (isMatch) {
//         return done(undefined, user);
//       }
//       return done(undefined, false, { message: 'Invalid email or password.' });
//     });
//   });
// }));
// /**
//  * OAuth Strategy Overview
//  *
//  * - User is already logged in.
//  *   - Check if there is an existing account with a provider id.
//  *     - If there is, return an error message. (Account merging not supported)
//  *     - Else link new OAuth account with currently logged-in user.
//  * - User is not logged in.
//  *   - Check if it's a returning user.
//  *     - If returning user, sign in and we are done.
//  *     - Else check if there is an existing account with user's email.
//  *       - If there is, return an error message.
//  *       - Else create a new account.
//  */
// /**
//  * Sign in with Facebook.
//  */
// passport.use(new FacebookStrategy({
//   clientID: process.env.FACEBOOK_ID,
//   clientSecret: process.env.FACEBOOK_SECRET,
//   callbackURL: '/auth/facebook/callback',
//   profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
//   passReqToCallback: true
// }, (req: any, accessToken, refreshToken, profile, done) => {
//   if (req.user) {
//     User.findOne({ facebook: profile.id }, (err, existingUser) => {
//       if (err) { return done(err); }
//       if (existingUser) {
//         req.flash('errors', { msg: 'There is already a Facebook account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
//         done(err);
//       } else {
//         User.findById(req.user.id, (err, user: any) => {
//           if (err) { return done(err); }
//           user.facebook = profile.id;
//           user.tokens.push({ kind: 'facebook', accessToken });
//           user.profile.name = user.profile.name || `${profile.name.givenName} ${profile.name.familyName}`;
//           user.profile.gender = user.profile.gender || profile._json.gender;
//           user.profile.picture = user.profile.picture || `https://graph.facebook.com/${profile.id}/picture?type=large`;
//           user.save((err: Error) => {
//             req.flash('info', { msg: 'Facebook account has been linked.' });
//             done(err, user);
//           });
//         });
//       }
//     });
//   } else {
//     User.findOne({ facebook: profile.id }, (err, existingUser) => {
//       if (err) { return done(err); }
//       if (existingUser) {
//         return done(undefined, existingUser);
//       }
//       User.findOne({ email: profile._json.email }, (err, existingEmailUser) => {
//         if (err) { return done(err); }
//         if (existingEmailUser) {
//           req.flash('errors', { msg: 'There is already an account using this email address. Sign in to that account and link it with Facebook manually from Account Settings.' });
//           done(err);
//         } else {
//           const user: any = new User();
//           user.email = profile._json.email;
//           user.facebook = profile.id;
//           user.tokens.push({ kind: 'facebook', accessToken });
//           user.profile.name = `${profile.name.givenName} ${profile.name.familyName}`;
//           user.profile.gender = profile._json.gender;
//           user.profile.picture = `https://graph.facebook.com/${profile.id}/picture?type=large`;
//           user.profile.location = (profile._json.location) ? profile._json.location.name : '';
//           user.save((err: Error) => {
//             done(err, user);
//           });
//         }
//       });
//     });
//   }
// }));
// /**
//  * Login Required middleware.
//  */
// export let isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect('/login');
// };
// /**
//  * Authorization Required middleware.
//  */
// export let isAuthorized = (req: Request, res: Response, next: NextFunction) => {
//   const provider = req.path.split('/').slice(-1)[0];
//   if (_.find(req.user.tokens, { kind: provider })) {
//     next();
//   } else {
//     res.redirect(`/auth/${provider}`);
//   }
// };
"use strict";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvcGFzc3BvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0Jztcbi8vIGltcG9ydCByZXF1ZXN0IGZyb20gJ3JlcXVlc3QnO1xuLy8gaW1wb3J0IHBhc3Nwb3J0TG9jYWwgZnJvbSAncGFzc3BvcnQtbG9jYWwnO1xuLy8gaW1wb3J0IHBhc3Nwb3J0RmFjZWJvb2sgZnJvbSAncGFzc3BvcnQtZmFjZWJvb2snO1xuLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuLy8gLy8gaW1wb3J0IHsgVXNlciwgVXNlclR5cGUgfSBmcm9tICcuLi9tb2RlbHMvVXNlcic7XG4vLyBpbXBvcnQgeyBkZWZhdWx0IGFzIFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvVXNlcic7XG4vLyBpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XG5cbi8vIGNvbnN0IExvY2FsU3RyYXRlZ3kgPSBwYXNzcG9ydExvY2FsLlN0cmF0ZWd5O1xuLy8gY29uc3QgRmFjZWJvb2tTdHJhdGVneSA9IHBhc3Nwb3J0RmFjZWJvb2suU3RyYXRlZ3k7XG5cbi8vIHBhc3Nwb3J0LnNlcmlhbGl6ZVVzZXI8YW55LCBhbnk+KCh1c2VyLCBkb25lKSA9PiB7XG4vLyAgIGRvbmUodW5kZWZpbmVkLCB1c2VyLmlkKTtcbi8vIH0pO1xuXG4vLyBwYXNzcG9ydC5kZXNlcmlhbGl6ZVVzZXIoKGlkLCBkb25lKSA9PiB7XG4vLyAgIFVzZXIuZmluZEJ5SWQoaWQsIChlcnIsIHVzZXIpID0+IHtcbi8vICAgICBkb25lKGVyciwgdXNlcik7XG4vLyAgIH0pO1xuLy8gfSk7XG5cblxuLy8gLyoqXG4vLyAgKiBTaWduIGluIHVzaW5nIEVtYWlsIGFuZCBQYXNzd29yZC5cbi8vICAqL1xuLy8gcGFzc3BvcnQudXNlKG5ldyBMb2NhbFN0cmF0ZWd5KHsgdXNlcm5hbWVGaWVsZDogJ2VtYWlsJyB9LCAoZW1haWwsIHBhc3N3b3JkLCBkb25lKSA9PiB7XG4vLyAgIFVzZXIuZmluZE9uZSh7IGVtYWlsOiBlbWFpbC50b0xvd2VyQ2FzZSgpIH0sIChlcnIsIHVzZXI6IGFueSkgPT4ge1xuLy8gICAgIGlmIChlcnIpIHsgcmV0dXJuIGRvbmUoZXJyKTsgfVxuLy8gICAgIGlmICghdXNlcikge1xuLy8gICAgICAgcmV0dXJuIGRvbmUodW5kZWZpbmVkLCBmYWxzZSwgeyBtZXNzYWdlOiBgRW1haWwgJHtlbWFpbH0gbm90IGZvdW5kLmAgfSk7XG4vLyAgICAgfVxuLy8gICAgIHVzZXIuY29tcGFyZVBhc3N3b3JkKHBhc3N3b3JkLCAoZXJyOiBFcnJvciwgaXNNYXRjaDogYm9vbGVhbikgPT4ge1xuLy8gICAgICAgaWYgKGVycikgeyByZXR1cm4gZG9uZShlcnIpOyB9XG4vLyAgICAgICBpZiAoaXNNYXRjaCkge1xuLy8gICAgICAgICByZXR1cm4gZG9uZSh1bmRlZmluZWQsIHVzZXIpO1xuLy8gICAgICAgfVxuLy8gICAgICAgcmV0dXJuIGRvbmUodW5kZWZpbmVkLCBmYWxzZSwgeyBtZXNzYWdlOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZC4nIH0pO1xuLy8gICAgIH0pO1xuLy8gICB9KTtcbi8vIH0pKTtcblxuXG4vLyAvKipcbi8vICAqIE9BdXRoIFN0cmF0ZWd5IE92ZXJ2aWV3XG4vLyAgKlxuLy8gICogLSBVc2VyIGlzIGFscmVhZHkgbG9nZ2VkIGluLlxuLy8gICogICAtIENoZWNrIGlmIHRoZXJlIGlzIGFuIGV4aXN0aW5nIGFjY291bnQgd2l0aCBhIHByb3ZpZGVyIGlkLlxuLy8gICogICAgIC0gSWYgdGhlcmUgaXMsIHJldHVybiBhbiBlcnJvciBtZXNzYWdlLiAoQWNjb3VudCBtZXJnaW5nIG5vdCBzdXBwb3J0ZWQpXG4vLyAgKiAgICAgLSBFbHNlIGxpbmsgbmV3IE9BdXRoIGFjY291bnQgd2l0aCBjdXJyZW50bHkgbG9nZ2VkLWluIHVzZXIuXG4vLyAgKiAtIFVzZXIgaXMgbm90IGxvZ2dlZCBpbi5cbi8vICAqICAgLSBDaGVjayBpZiBpdCdzIGEgcmV0dXJuaW5nIHVzZXIuXG4vLyAgKiAgICAgLSBJZiByZXR1cm5pbmcgdXNlciwgc2lnbiBpbiBhbmQgd2UgYXJlIGRvbmUuXG4vLyAgKiAgICAgLSBFbHNlIGNoZWNrIGlmIHRoZXJlIGlzIGFuIGV4aXN0aW5nIGFjY291bnQgd2l0aCB1c2VyJ3MgZW1haWwuXG4vLyAgKiAgICAgICAtIElmIHRoZXJlIGlzLCByZXR1cm4gYW4gZXJyb3IgbWVzc2FnZS5cbi8vICAqICAgICAgIC0gRWxzZSBjcmVhdGUgYSBuZXcgYWNjb3VudC5cbi8vICAqL1xuXG5cbi8vIC8qKlxuLy8gICogU2lnbiBpbiB3aXRoIEZhY2Vib29rLlxuLy8gICovXG4vLyBwYXNzcG9ydC51c2UobmV3IEZhY2Vib29rU3RyYXRlZ3koe1xuLy8gICBjbGllbnRJRDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfSUQsXG4vLyAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfU0VDUkVULFxuLy8gICBjYWxsYmFja1VSTDogJy9hdXRoL2ZhY2Vib29rL2NhbGxiYWNrJyxcbi8vICAgcHJvZmlsZUZpZWxkczogWyduYW1lJywgJ2VtYWlsJywgJ2xpbmsnLCAnbG9jYWxlJywgJ3RpbWV6b25lJ10sXG4vLyAgIHBhc3NSZXFUb0NhbGxiYWNrOiB0cnVlXG4vLyB9LCAocmVxOiBhbnksIGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4sIHByb2ZpbGUsIGRvbmUpID0+IHtcbi8vICAgaWYgKHJlcS51c2VyKSB7XG4vLyAgICAgVXNlci5maW5kT25lKHsgZmFjZWJvb2s6IHByb2ZpbGUuaWQgfSwgKGVyciwgZXhpc3RpbmdVc2VyKSA9PiB7XG4vLyAgICAgICBpZiAoZXJyKSB7IHJldHVybiBkb25lKGVycik7IH1cbi8vICAgICAgIGlmIChleGlzdGluZ1VzZXIpIHtcbi8vICAgICAgICAgcmVxLmZsYXNoKCdlcnJvcnMnLCB7IG1zZzogJ1RoZXJlIGlzIGFscmVhZHkgYSBGYWNlYm9vayBhY2NvdW50IHRoYXQgYmVsb25ncyB0byB5b3UuIFNpZ24gaW4gd2l0aCB0aGF0IGFjY291bnQgb3IgZGVsZXRlIGl0LCB0aGVuIGxpbmsgaXQgd2l0aCB5b3VyIGN1cnJlbnQgYWNjb3VudC4nIH0pO1xuLy8gICAgICAgICBkb25lKGVycik7XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBVc2VyLmZpbmRCeUlkKHJlcS51c2VyLmlkLCAoZXJyLCB1c2VyOiBhbnkpID0+IHtcbi8vICAgICAgICAgICBpZiAoZXJyKSB7IHJldHVybiBkb25lKGVycik7IH1cbi8vICAgICAgICAgICB1c2VyLmZhY2Vib29rID0gcHJvZmlsZS5pZDtcbi8vICAgICAgICAgICB1c2VyLnRva2Vucy5wdXNoKHsga2luZDogJ2ZhY2Vib29rJywgYWNjZXNzVG9rZW4gfSk7XG4vLyAgICAgICAgICAgdXNlci5wcm9maWxlLm5hbWUgPSB1c2VyLnByb2ZpbGUubmFtZSB8fCBgJHtwcm9maWxlLm5hbWUuZ2l2ZW5OYW1lfSAke3Byb2ZpbGUubmFtZS5mYW1pbHlOYW1lfWA7XG4vLyAgICAgICAgICAgdXNlci5wcm9maWxlLmdlbmRlciA9IHVzZXIucHJvZmlsZS5nZW5kZXIgfHwgcHJvZmlsZS5fanNvbi5nZW5kZXI7XG4vLyAgICAgICAgICAgdXNlci5wcm9maWxlLnBpY3R1cmUgPSB1c2VyLnByb2ZpbGUucGljdHVyZSB8fCBgaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vJHtwcm9maWxlLmlkfS9waWN0dXJlP3R5cGU9bGFyZ2VgO1xuLy8gICAgICAgICAgIHVzZXIuc2F2ZSgoZXJyOiBFcnJvcikgPT4ge1xuLy8gICAgICAgICAgICAgcmVxLmZsYXNoKCdpbmZvJywgeyBtc2c6ICdGYWNlYm9vayBhY2NvdW50IGhhcyBiZWVuIGxpbmtlZC4nIH0pO1xuLy8gICAgICAgICAgICAgZG9uZShlcnIsIHVzZXIpO1xuLy8gICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9KTtcbi8vICAgICAgIH1cbi8vICAgICB9KTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICBVc2VyLmZpbmRPbmUoeyBmYWNlYm9vazogcHJvZmlsZS5pZCB9LCAoZXJyLCBleGlzdGluZ1VzZXIpID0+IHtcbi8vICAgICAgIGlmIChlcnIpIHsgcmV0dXJuIGRvbmUoZXJyKTsgfVxuLy8gICAgICAgaWYgKGV4aXN0aW5nVXNlcikge1xuLy8gICAgICAgICByZXR1cm4gZG9uZSh1bmRlZmluZWQsIGV4aXN0aW5nVXNlcik7XG4vLyAgICAgICB9XG4vLyAgICAgICBVc2VyLmZpbmRPbmUoeyBlbWFpbDogcHJvZmlsZS5fanNvbi5lbWFpbCB9LCAoZXJyLCBleGlzdGluZ0VtYWlsVXNlcikgPT4ge1xuLy8gICAgICAgICBpZiAoZXJyKSB7IHJldHVybiBkb25lKGVycik7IH1cbi8vICAgICAgICAgaWYgKGV4aXN0aW5nRW1haWxVc2VyKSB7XG4vLyAgICAgICAgICAgcmVxLmZsYXNoKCdlcnJvcnMnLCB7IG1zZzogJ1RoZXJlIGlzIGFscmVhZHkgYW4gYWNjb3VudCB1c2luZyB0aGlzIGVtYWlsIGFkZHJlc3MuIFNpZ24gaW4gdG8gdGhhdCBhY2NvdW50IGFuZCBsaW5rIGl0IHdpdGggRmFjZWJvb2sgbWFudWFsbHkgZnJvbSBBY2NvdW50IFNldHRpbmdzLicgfSk7XG4vLyAgICAgICAgICAgZG9uZShlcnIpO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgIGNvbnN0IHVzZXI6IGFueSA9IG5ldyBVc2VyKCk7XG4vLyAgICAgICAgICAgdXNlci5lbWFpbCA9IHByb2ZpbGUuX2pzb24uZW1haWw7XG4vLyAgICAgICAgICAgdXNlci5mYWNlYm9vayA9IHByb2ZpbGUuaWQ7XG4vLyAgICAgICAgICAgdXNlci50b2tlbnMucHVzaCh7IGtpbmQ6ICdmYWNlYm9vaycsIGFjY2Vzc1Rva2VuIH0pO1xuLy8gICAgICAgICAgIHVzZXIucHJvZmlsZS5uYW1lID0gYCR7cHJvZmlsZS5uYW1lLmdpdmVuTmFtZX0gJHtwcm9maWxlLm5hbWUuZmFtaWx5TmFtZX1gO1xuLy8gICAgICAgICAgIHVzZXIucHJvZmlsZS5nZW5kZXIgPSBwcm9maWxlLl9qc29uLmdlbmRlcjtcbi8vICAgICAgICAgICB1c2VyLnByb2ZpbGUucGljdHVyZSA9IGBodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS8ke3Byb2ZpbGUuaWR9L3BpY3R1cmU/dHlwZT1sYXJnZWA7XG4vLyAgICAgICAgICAgdXNlci5wcm9maWxlLmxvY2F0aW9uID0gKHByb2ZpbGUuX2pzb24ubG9jYXRpb24pID8gcHJvZmlsZS5fanNvbi5sb2NhdGlvbi5uYW1lIDogJyc7XG4vLyAgICAgICAgICAgdXNlci5zYXZlKChlcnI6IEVycm9yKSA9PiB7XG4vLyAgICAgICAgICAgICBkb25lKGVyciwgdXNlcik7XG4vLyAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH0pO1xuLy8gICAgIH0pO1xuLy8gICB9XG4vLyB9KSk7XG5cbi8vIC8qKlxuLy8gICogTG9naW4gUmVxdWlyZWQgbWlkZGxld2FyZS5cbi8vICAqL1xuLy8gZXhwb3J0IGxldCBpc0F1dGhlbnRpY2F0ZWQgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbi8vICAgaWYgKHJlcS5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuLy8gICAgIHJldHVybiBuZXh0KCk7XG4vLyAgIH1cbi8vICAgcmVzLnJlZGlyZWN0KCcvbG9naW4nKTtcbi8vIH07XG5cbi8vIC8qKlxuLy8gICogQXV0aG9yaXphdGlvbiBSZXF1aXJlZCBtaWRkbGV3YXJlLlxuLy8gICovXG4vLyBleHBvcnQgbGV0IGlzQXV0aG9yaXplZCA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuLy8gICBjb25zdCBwcm92aWRlciA9IHJlcS5wYXRoLnNwbGl0KCcvJykuc2xpY2UoLTEpWzBdO1xuXG4vLyAgIGlmIChfLmZpbmQocmVxLnVzZXIudG9rZW5zLCB7IGtpbmQ6IHByb3ZpZGVyIH0pKSB7XG4vLyAgICAgbmV4dCgpO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIHJlcy5yZWRpcmVjdChgL2F1dGgvJHtwcm92aWRlcn1gKTtcbi8vICAgfVxuLy8gfTtcbiJdfQ==