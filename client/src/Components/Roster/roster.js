import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import Navbar from '../Navbar/navbar';
import {updateRoster} from '../../Reducer/reducer';

import './roster.css'

class Roster extends Component {
    componentDidMount() {
        axios.get('/api/players')
            .then(res => {
                console.log(res.data)
                this.props.updateRoster(res.data);
            })
            .catch(err => console.log(err))
    }
    render() {
        const roster = this.props.roster.map((player,i) => {
            return (
                <tr className="childPlayer" key = {player.player_id}>
                    <td className="raleway a">
                        {player.player_number}
                    </td>

                    <td className="raleway b">
                        <Link to = {`/roster/${player.player_id}`}>
                            {player.first_name} {player.last_name}
                        </Link>
                    </td>

                    <td className="raleway c">
                        {player.player_height}
                    </td>

                    <td className="raleway d">
                        {player.position}
                    </td>

                    <td className="raleway e">
                        {player.class}
                    </td>

                    <td className="raleway f">
                        {player.roster_years}
                    </td>
            </tr>
                
            )
        })
        return(
            <div className="child-container">
            <div className="header oswald">Lehi Girls Basketball 2013-2014 Roster</div>
            
            <Navbar />

            <table className="bottomBorder">
                <thead>
                    <tr>
                        <th className="oswald">#</th>
                        <th className="oswald">Player</th>
                        <th className="oswald">Height</th>
                        <th className="oswald">Position</th>
                        <th className="oswald">Class</th>
                        <th className="oswald">Roster Years</th>
                    </tr>
                </thead>
                <tfoot colspan = '6'>
                    <Link to='/edit/newPlayer'><button className = "buttons new" value={this.props.isCoach}>Create New Player</button></Link>
                </tfoot>
                {roster}
            </table>
            
            {/* <div className="col-header oswald u">#</div>
            <div className="col-header oswald v">Player</div>
            <div className="col-header oswald w">Height</div>
            <div className="col-header oswald x">Position</div>
            <div className="col-header oswald y">Class</div>
            <div className="col-header oswald z">Roster Years</div> */} 

            </div>
        )
    }
}

let mapStateToProps = (state) => {
    const {roster, isCoach} = state;
    return {
        roster,
        isCoach
    };
};

export default connect(mapStateToProps, {updateRoster})(Roster);