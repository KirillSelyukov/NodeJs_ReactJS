const express = require('express');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/user');
require('./services/passport');

const mongoose = require('mongoose');

mongoose.connect(
  keys.mongoURI,
  {
    auth: {
      user: keys.mongoUserName,
      password: keys.mongoUserPwd
    },
    useNewUrlParser: true
  },
  function(err, client) {
    if (err) {
      console.log(err);
    } else {
      console.log(
        '------------------------------connect!!!--------------------------------------'
      );
      //console.log('client: ', client);
    }
  }
);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
