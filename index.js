const express = require('express');
const mongoose = require('mongoose');
const cookieSession= require('cookie-session');
const passport = require('passport');
const Keys = require('./config/keys');
const authRouter = require('./routes/authRoutes.js');
const User =require('./models/User');
require('./services/passport.js');

mongoose.connect(Keys.mongoURL);


const app = express();

app.use(
    cookieSession({
maxAge:30 * 24 * 60 * 60 * 1000,
keys:[Keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());




authRouter(app);
app.listen(process.env.PORT || 8080,() => {
 console.log("server running on the port : 8080")
})