import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';
import {updateUserID} from '../../Reducer/reducer'
import './navbar.css';

class Navbar extends Component {
    classToggle() {
        const navs = document.querySelectorAll('.Navbar_Items')
        
        navs.forEach(nav => nav.classList.toggle('Navbar_ToggleShow'));

    }
 
    render(){
        return(
            <div className="navbar oswald">
                <div onClick={() => this.classToggle()} className="Navbar_Link Navbar_Link-toggle">
                    <FontAwesome name="bars" size="2x"/>
                </div>
                
                <nav className="Navbar_Items">
                    
                    <div className = 'Navbar_Link'><NavLink activeClassName='currentNav' to = '/' className = 'links'>Home</NavLink></div>
                    <div className = 'Navbar_Link'><NavLink activeClassName='currentNav' to = '/roster' className = 'links'>Roster</NavLink></div>
                    <div className = 'Navbar_Link'><NavLink activeClassName='currentNav' to = '/schedule' className = 'links'>Schedule</NavLink></div>
                </nav>

                <nav className="Navbar_Items Navbar_Items-Bottom">
                    <div className = 'Navbar_Link'><NavLink activeClassName='currentNav' to = '/user' className = 'links' value={this.props.sessionid}>Profile</NavLink></div>
                    <div className = 'Navbar_Link'><a href = '/api/auth' className = 'links'>Register / Login</a></div>
                    <div className = 'Navbar_Link'><a href = '/api/auth/logout' className = 'links'>Signout</a></div>
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