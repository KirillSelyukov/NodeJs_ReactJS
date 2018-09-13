const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
      },
      (accessTocken, refreshToken, profile, done) => {
        console.log('access Tocken', accessTocken);
        console.log('refresh Tocken', refreshToken);
        console.log('profile', profile);
      }
    )
  );