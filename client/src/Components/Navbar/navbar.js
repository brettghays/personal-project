import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';
import {updateUserID} from '../../Reducer/reducer'
import './navbar.css';

class Navbar extends Component {
    classToggle() {
        const navs = document.querySelectorAll('.Navbar__Items')
        
        navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));

    }
 
    render(){
        return(
            <div className="navbar oswald">
                <nav className="Navbar_Items">
                    <div><Link to = '/' className = 'links'>Home</Link></div>
                    <div><Link to = '/roster' className = 'links'>Roster</Link></div>
                    <div><Link to = '/schedule' className = 'links'>Schedule</Link></div>
                </nav>

                <nav className="Navbar_Items-Bottom">
                    <div><Link to = '/user' className = 'links' value={this.props.sessionid}>Profile</Link></div>
                    <div><a href = '/api/auth' className = 'links'>Register / Login</a></div>
                    <div><a href = '/api/auth/logout' className = 'links'>Signout</a></div>
                </nav>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    const {sessionid, isCoach} = state;
    return {
        isCoach,
        sessionid
    }
 };export default connect(mapStateToProps, {updateUserID})(Navbar);