import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {updateUserID} from '../../Reducer/reducer'


class Navbar extends Component {

    render(){
        return(
            <div className="navbar oswald">
            <div className="links-top">
                <Link to = '/' className = 'links'>Home</Link>
                <Link to = '/roster' className = 'links'>Roster</Link>
                <Link to = '/schedule' className = 'links'>Schedule</Link>
            </div>

            <div className="links-bottom">
                <Link to = '/user' className = 'links' value={this.props.sessionid}>Profile</Link>
                <a href = 'http://localhost:80/api/auth' className = 'links'>Register / Login</a>
                <a href = 'http://localhost:80/api/auth/logout' className = 'links'>Signout</a>
            </div>
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