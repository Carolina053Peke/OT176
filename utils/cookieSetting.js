const session = require('express-session');

module.exports = {
  sessionConfig: session({
    secret: process.env.GOOGLE_SINGIN_CLIENT_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 10000,
    },
  }),
};
