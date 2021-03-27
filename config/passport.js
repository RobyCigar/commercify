const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;
const chalk = require('chalk')

const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');

const keys = require('./keys');

const { google } = keys;
const { serverURL, apiURL } = keys.app;

const User = require('../models/user')
const secret = keys.jwt.secret;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secret;

passport.use(
  new JwtStrategy(opts, (payload, done) => {
    console.log(chalk.blue(payload))
    console.log(chalk.red(done))

    User.findById(payload.id)
      .then(user => {
        if (user) {
          return done(null, user);
        }

        return done(null, false);
      })
      .catch(err => {
        return done(err, false);
      });
  })
);

passport.use(
  new GoogleStrategy(
    {
      clientID: google.clientID,
      clientSecret: google.clientSecret,
      callbackURL: `${serverURL}/${apiURL}/${google.callbackURL}`
    },
    (accessToken, refreshToken, profile, done) => {
      const {id} = profile
      const { given_name, family_name, picture, email } = profile._json

      console.log('here')
      User.findOne({ email: email }, (err, existUser) => {
          if(err) {
            console.log('error', err)
          }
          if (existUser) {
            // if user exist login, otherwise register
            return done(null, existUser);
          }

          const name = profile.displayName.split(' ');

          const newUser = new User({
            provider: 'google',
            googleId: id,
            email: email,
            firstName: given_name,
            lastName: family_name,
            avatar: picture,
            password: null
          });

          newUser.save((err, user) => {
            if (err) {
              console.log('errror', err)
              return done(err, false);
            }
            console.log('ini user', user)
            return done(null, user);
          });
      })
    }
  )
);

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: facebook.clientID,
//       clientSecret: facebook.clientSecret,
//       callbackURL: `${serverURL}/${apiURL}/${facebook.callbackURL}`,
//       profileFields: [
//         'id',
//         'displayName',
//         'name',
//         'emails',
//         'picture.type(large)'
//       ]
//     },
//     (accessToken, refreshToken, profile, done) => {
//       console.log(chalk.cyan(accessToken))
//       console.log(chalk.red(refreshToken))
//       console.log(chalk.yellow(profile))
//       console.log(chalk.green(done))
//       User.findOne({ facebookId: profile.id })
//         .then(user => {
//           if (user) {
//             return done(null, user);
//           }

//           const newUser = new User({
//             provider: 'facebook',
//             facebookId: profile.id,
//             email: profile.emails ? profile.emails[0].value : null,
//             firstName: profile.name.givenName,
//             lastName: profile.name.familyName,
//             avatar: profile.photos[0].value,
//             password: null
//           });

//           newUser.save((err, user) => {
//             if (err) {
//               return done(err, false);
//             }

//             return done(null, user);
//           });
//         })
//         .catch(err => {
//           return done(err, false);
//         });
//     }
//   )
// );
