const bodyParser = require('body-parser')
    , cors = require('cors')
    , express = require('express')
    , massive = require('massive')
    , passport = require('passport')
    , path = require('path')
    , session = require('express-session')
    , strategy = require('./strategy')
    , port = process.env.PORT || 80;

const app = express();

require('dotenv').config();

var corsOptions = {
    origin: 'http://localhost:3000'
}


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

passport.serializeUser(function(user, done) {
    done(null, {
        id: user.id,
        firstname: user._json['https://example.com/firstname'] || '',
        lastname: user._json['https://example.com/lastname'] || '',
        email: user._json.name || '',
        iscoach: (user._json['https://example.com/iscoach'] === 'true' ? true : false)
    });
  });
  
  
  passport.deserializeUser((obj,done) => {
      done(null,obj);
  })

//Auth Endpoints

app.get('/api/auth', passport.authenticate('auth0', {
  successRedirect: '/api/auth/login', //this should point to the user component to set the rest of their info
  failureRedirect: '/#/',
  failureFlash: true
}));

app.get('/api/auth/login', passport.authenticate('auth0'), (req,res,done) => {
    //console.log('res.sessionID: ', req.sessionID)
    console.log('this is first: ', req.user._json['https://example.com/firstname']);
    console.log('this is last: ', req.user._json['https://example.com/lastname']);
    console.log('this is iscoach: ', req.user._json['https://example.com/iscoach']);
    console.log("Passport.user: ",req.session.passport.user);//this gives me what was set for user and id
    let passportUser = req.session.passport.user;
    //console.log(passportUser.id)
    const dbInstance = app.get('db');

    dbInstance.read_user([passportUser.id])
        .then(user => {
            console.log('user: ', user)
            if(user.length && user[0].session_id){
                return done(null, user);
            } else{
                dbInstance.create_user([passportUser.id, passportUser.firstname, passportUser.lastname, passportUser.email, passportUser.iscoach])
                .then(user => {
                    console.log('User created in db: ',user);
                    //console.log('profile, ', profile)
                    
                    return done(null, user)
                })
                
            }
        })
        console.log('this is req.user', req.user);
        console.log('this is passport.user', req.session.passport.user)
    res.redirect('http://localhost:3000/#/')//this works
});

app.get('/api/auth/me', (req, res) => {
    res.status(200).send(req.isAuthenticated())
  })

app.get('/api/auth/logout', (req, res) => {
    console.log('this is passport.user', req.session.passport.user)
    req.logOut();
    console.log('Successful logout!',req.session.passport.user)
    return res.redirect('http://localhost:3000/#/');
    
  })

  app.get('/api/user', (req, res) => {
    const dbInstance = app.get('db');
    const { session } = req;
    dbInstance.read_user([session.passport.user.id])
        .then(user => {
            console.log(user[0]);
            res.status(200).send(user[0]);
        })
        .catch(err => console.log(err));
})


  app.patch('/api/user', (req, res) => {
    const dbInstance = app.get('db');
    const {session_id, firstname, lastname, iscoach} = req.body;
    //const sessionID = req.params.id;

    dbInstance.update_user([session_id, firstname, lastname, iscoach])
        .then(() => {
            dbInstance.read_user([session_id])
                .then(user => {
                    console.log(user[0]);
                    res.status(200).send(user[0])
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
});

//Roster Endpoints

app.get('/api/players', (req, res) => {
    const dbInstance = app.get('db');
    dbInstance.read_players()
        .then(players => {
            res.status(200).send(players)
        })
        .catch(err => console.log(err))
});

app.get('/api/player/:id', (req, res) => {
    const dbInstance = app.get('db');
    const playerID = req.params.id;
    dbInstance.read_player([playerID])
        .then(player => {
            console.log('Player is: ', player[0]);
            res.status(200).send(player[0])
        })
        .catch(err => console.log(err))
});

app.post('/api/players', (req, res) => {
    const dbInstance = app.get('db');
    const {player_id, first_name,last_name,player_number,player_height,position,roster_years,player_image,player_fav_food,player_fav_quote,player_unique_fact,player_nickname, classyear} = req.body;
    
    dbInstance.create_player([player_id, first_name,last_name,player_number,player_height,position,roster_years,player_image,player_fav_food,player_fav_quote,player_unique_fact,player_nickname,classyear])
        .then(player => {
            console.log(player);
            res.status(200).send(player)
        })
        .catch(err => console.log(err))
});

app.patch('/api/player/:id', (req, res) => {
    const dbInstance = app.get('db');
    const {first_name,last_name,player_number,player_height,position,roster_years,player_image,player_fav_food,player_fav_quote,player_unique_fact,player_nickname,classyear} = req.body;
    const playerID = req.params.id;
    console.log(req.body)

    dbInstance.update_player([playerID, first_name,last_name,player_number,player_height,position,roster_years,player_image,player_fav_food,player_fav_quote,player_unique_fact,player_nickname,classyear])
        .then(() => {
            dbInstance.read_player([playerID])
                .then(player => {
                    console.log(player[0]);
                    res.status(200).send(player[0])
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
});

app.delete('/api/player/:id', (req, res) => {
    const dbInstance = app.get('db');
    const playerID = req.params.id;
    dbInstance.delete_player([playerID])
        .then(player => {
            res.status(200).send(player)
        })
        .catch(err => console.log(err))
})
//Schedule Endpoints

app.get('/api/games', (req, res) => {
    const dbInstance = app.get('db');
    console.log(req.body)
    dbInstance.read_games()
        .then(games => {
            res.status(200).send(games)
        })
        .catch(err => console.log(err))
})

app.get('/api/game/:id', (req, res) => {
    const dbInstance = app.get('db');
    const gameID = req.params.id;
    dbInstance.read_game([gameID])
        .then(game => {
            console.log(game[0]);
            res.status(200).send(game[0]);
        })
        .catch(err => console.log(err));
})

app.post('/api/games', (req, res) => {
    const dbInstance = app.get('db');
    const {game_id, game_date, game_time, home_team, home_image, guest_team, guest_image, game_location, game_result, home_score, guest_score} = req.body
    dbInstance.create_game([game_id, game_date, game_time, home_team, home_image, guest_team, guest_image, game_location, game_result, home_score, guest_score])
        .then(game => {
            console.log(game);
            res.status(200).send(game)
        })
        .catch(err => console.log(err))

});

app.patch('/api/game/:id', (req, res) => {
    const dbInstance = app.get('db');
    const gameID = req.params.id;
    const {game_date, game_time, home_team, home_image, guest_team, guest_image, game_location, game_result, home_score, guest_score} = req.body;
    dbInstance.update_game([gameID, game_date, game_time, home_team, home_image, guest_team, guest_image, game_location, game_result, home_score, guest_score])
        .then(() => {
            dbInstance.read_game([gameID])
                .then(game => {
                    res.status(200).send(game[0])
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
})

app.delete('/api/game/:id', (req, res) => {
    const dbInstance = app.get('db');
    const gameID = req.params.id;
    dbInstance.delete_game([gameID])
        .then(game => {
            console.log(game[0]);
            res.status(200).send(game[0]);
        })
        .catch(err => console.log(err));
});

//Hosting
app.use( express.static( `${__dirname}/../client/build` ) );
/* app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  }) */

//Run Server
app.listen(port, () => {
    console.log(`Welcome to the Big Show on ${port}!`)
})