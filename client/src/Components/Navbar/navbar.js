import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export default class Navbar extends Component {

    render(){
        return(
            <div className="navbar oswald">
            <div className="links-top">
                <Link to = '/' className = 'links'>Home</Link>
                <Link to = '/roster' className = 'links'>Roster</Link>
                <Link to = '/schedule' className = 'links'>Schedule</Link>
            </div>

            <div className="links-bottom">
                <Link to = '/user' className = 'links'>Profile</Link>
                <a href = 'http://localhost:3001/api/auth' className = 'links'>Register / Login</a>
                <a href = 'http://localhost:3001/api/auth/logout' className = 'links'>Signout</a>
            </div>
        </div>
        )
    }
}
