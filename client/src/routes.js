import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/landing';
import GameCard from './Components/Game Card/gameCard.js';
import PlayerCard from './Components/Player Card/playerCard';
import Results from './Components/Results/results';
import Roster from './Components/Roster/roster';
import Schedule from './Components/Schedule/schedule';
import User from './Components/User/user';
import NewGame from './Components/New Game/newGame';

export default (
    <Switch>
        
            <Route component={Landing} exact path = '/' />
            <Route component={GameCard} path = '/schedule/:id/:edit?' />
            <Route component={PlayerCard} path = '/roster/:id' />
            <Route component={Results} path = '/results' />
            <Route component={Roster} path = '/roster' />
            <Route component={Schedule} path = '/schedule' />
            <Route component={User} path = '/user' /> 
            <Route component={NewGame} path = '/edit/newGame' />       
        
    </Switch>
)