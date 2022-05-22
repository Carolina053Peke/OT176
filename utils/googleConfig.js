/* eslint-disable */
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const generator = require('generate-password');
const bcrypt = require('bcryptjs');

const { User } = require('../models');
const { createToken } = require('./jwt');

passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_SINGIN_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SINGIN_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/users/loggedIn',
    passReqToCallback: true,
  },
  ( async (request, accessToken, refreshToken, profile, done) => {
    console.log(profile);
    const password = generator.generate({
      length: 50,
      numbers: true,
      symbols: true,
    });

    const pwEncrypted = await bcrypt.hashSync(password, 10);

    const user = await User.findOrCreate({
      where: {
        email: profile.email,
      },
      defaults: {
        firstName: profile.given_name,
        lastName: profile.family_name,
        password: pwEncrypted,
        roleId: 1,
      },
    });
    
    profile.token = await createToken(profile.id);
    profile.password= pwEncrypted;

    return done(null, profile);
  }),
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
