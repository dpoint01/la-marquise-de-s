const cookieSession =  require('cookie-session');
const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const passport = require('passport');

require('./models/User');
require('./services/passport');

const PORT = process.env.PORT || 1626;

mongoose.connect(keys.mongoURI);

const app = express()

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// routes/authRoutes returns a functions and then immediately invokes that
// function with app as its argument
require('./routes/authRoutes')(app)

app.listen(PORT);
