const bodyParser = require('body-parser')
    , cors = require('cors')
    , express = require('express')
    , massive = require('massive')
    , passport = require('passport')
    , seesion = require('express-session')
    , strategy = require('./strategy')
    , port = process.env.PORT || 3001;

const app = express();

require('dotenv').config();

//massive line here

app.use(bodyParser.json());
app.use(cors());
//app.use(session)
app.use(passport.initialize());
app.use(passport.session());
//passport.use(strategy);

//passport.serializeUser

//passport.deserializeUser

//Auth Endpoints

//Roster Endpoints

//Schedule Endpoints

app.listen(port, () => {
    console.log(`Welcome to the Big Show on ${port}!`)
})