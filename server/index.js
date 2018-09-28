const express = require('express');
const keys = require('./config/keys');
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
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
