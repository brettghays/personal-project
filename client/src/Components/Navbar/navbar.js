import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateGameCard, updateOriginalMode} from '../../Reducer/reducer';

class Navbar extends Component {
    handleBack() {
        this.props.updateGameCard('view');
        this.props.updateOriginalMode(true)
    }

    render(){
        return(
            <div className="navbar oswald">
            <div className="links-top">
                <Link to = '/' className = 'links'>Home</Link>
                <Link to = '/roster' className = 'links'>Roster</Link>
                <Link to = '/schedule' className = 'links' onClick={() => this.handleBack()}>Schedule</Link>
            </div>

            <div className="links-bottom">
                <a href = 'http://localhost:3001/api/auth' className = 'links'>Register / Login</a>
                <a href = 'http://localhost:3001/api/auth/logout' className = 'links'>Signout</a>
            </div>
        </div>
        )
    }
}

let mapStateToProps = (state) => {
    const {game_card, original_mode} = state;
    return {
       game_card,
       original_mode
    };
};

export default connect(mapStateToProps, {updateGameCard,updateOriginalMode})(Navbar);