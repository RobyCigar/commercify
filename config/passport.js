const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');

const keys = require('./keys');

const { google } = keys;
const { serverURL, apiURL } = keys.app;

const User = require('../models/user')
const secret = keys.jwt.secret;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret
};
// use header as Authentication: "Bearer ${token}"

passport.use(
  new JwtStrategy(opts, (payload, done) => {
    User.findById(payload.id)
      .then(user => {
        if (user) {
          // send user to next request so it'll be req.user
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
