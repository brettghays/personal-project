const config = require('./config');
const Auth0Strategy = require('passport-auth0');
const express = require('express')
const {domain, clientID, clientSecret} = config;

const app = express();

module.exports = new Auth0Strategy({
    domain:       domain,
    clientID:     clientID,
    clientSecret: clientSecret,
    callbackURL:  '/api/auth/login'
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      // accessToken is the token to call Auth0 API (not needed in the most cases)
      // extraParams.id_token has the JSON Web Token
      // profile has all the information from the user
      const dbInstance = app.get('db');
      console.log(profile)
      done(null, profile); //this will be removed once db is connected here
      
       /*  db.find_user([ profile.identities[0].user_id ])
        .then( user => {
         if ( user[0] ) {
           return done( null, { id: user[0].id } );
         } else {
           db.create_user([profile.displayName, profile.emails[0].value, profile.picture, profile.identities[0].user_id])
           .then( user => {
              return done( null, { id: user[0].id } );
           })
         }
        }) */
    }
  );