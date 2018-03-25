import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import Landing from './Components/Landing/landing';
import GameCard from './Components/Game Card/gameCard.js';
import PlayerCard from './Components/Player Card/playerCard';
import Results from './Components/Results/results';
import Roster from './Components/Roster/roster';
import Schedule from './Components/Schedule/schedule';
import User from './Components/User/user';
import NewGame from './Components/New Game/newGame';
import NewPlayer from './Components/New Player/newPlayer';
import EditGameCard from './Components/Edit Game Card/editGameCard';
import EditPlayerCard from './Components/Edit Player Card/editPlayerCard';

class CheckAuthentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            authenticated: false
        }
        this.checkAuthentication = this.checkAuthentication.bind(this);
    }
 
    componentDidMount() {
        this.checkAuthentication();
    }
 
    checkAuthentication() {
        axios.get('/api/auth/me')
            .then(res => {
                console.log('Authenticated? ', res.data);
                if (!res.data) {
                    this.setState({ loading: false, authenticated: false });
                } else {
                    this.setState({ loading: false, authenticated: true });
                }
            })
    }
 
    render() {
        if (this.state.loading) {
            return (
                <div>
                    Loading ...
                </div>
            )
        }
        //render ...loading if state.loading, props.children otherwise
        if (this.state.authenticated) {
            return (
                <div>
                    {this.props.children}
                </div>
            )
        } else {
            return (
                <Redirect to='/' />
            )
        }
    }
 }

export default (
    <Switch>
        
            <Route component={Landing} exact path = '/' />
            <Route component={GameCard} path = '/schedule/:id' />
            <Route component={PlayerCard} path = '/roster/:id/:edit?' />
            <Route component={Results} path = '/results' />
            <Route component={Roster} path = '/roster' />
            <Route component={Schedule} path = '/schedule' />
            
            <Route render={() => {
                return(
                    <CheckAuthentication>
                        <Route component={User} path = '/user' />
                        <Route component={NewGame} path = '/edit/newGame' />
                        <Route component={NewPlayer} path = '/edit/newPlayer' />
                        <Route component={EditGameCard} path = '/edit/game/:id' /> 
                        <Route component={EditPlayerCard} path = '/edit/player/:id' />
                    </CheckAuthentication>
                )
            }} />
        
    </Switch>
)