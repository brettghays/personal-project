const bodyParser = require('body-parser')
    , cors = require('cors')
    , express = require('express')
    , massive = require('massive')
    , passport = require('passport')
    , session = require('express-session')
    , strategy = require('./strategy')
    , port = process.env.PORT || 3001;

const app = express();

require('dotenv').config();

massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
    console.log('this is connected')
    app.set('db', dbInstance)})
.catch(err => console.log(err));

app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  }));
app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

//app.get('api/auth', passport.authenticate('auth0'));

app.get('/api/auth/login', passport.authenticate('auth0', {
  successRedirect: 'http://www.espn.com',
  failureRedirect: 'http://localhost:3000/#/',
  failureFlash: true
}))

passport.serializeUser(function(user, done) {
  done(null, user);
});


passport.deserializeUser((obj,done) => {
    done(null,obj);
})

//Auth Endpoints

//Roster Endpoints

//Schedule Endpoints

app.listen(port, () => {
    console.log(`Welcome to the Big Show on ${port}!`)
})