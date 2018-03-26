import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios'; 
import Navbar from '../Navbar/navbar';
import {updateSchedule} from '../../Reducer/reducer';

import './schedule.css'

class Schedule extends Component {
    componentDidMount(){
        axios.get('/api/games')
            .then(res => {
                console.log(res.data)
            //
            //console.log(schedule)
                this.props.updateSchedule(res.data);
            })
            .catch(err => console.log(err))
    
    }

//hardcoding response data right now
    

    render() {
        const schedule = this.props.schedule.map(game => {
            return (
                <tr className="childGame" key={game.game_id}>
                    <td className="raleway">
                        {game.game_id}. {game.game_date}
                    </td>

                    <td className="raleway">
                        {game.game_time}
                    </td>

                    <td className="raleway">
                        <Link to = {`/schedule/${game.game_id}`}>
                            {game.guest_team} @ {game.home_team}
                        </Link>
                    </td>

                    <td className="raleway">
                        {game.game_location}
                    </td>

                    <td className="raleway">
                        {game.guest_score} - {game.home_score}
                    </td>

                    <td className="raleway">
                        {game.game_result}
                    </td>
                </tr>
            )
        })
        return(
            <div className="child-container">
                <div className="header oswald">Lehi Girls Basketball 2013-2014 Schedule</div>
            
                <Navbar />
            
                <table className="bottomBorder">
                    <thead>
                        <tr>
                            <th className="oswald">Date</th>
                            <th className="oswald">Time</th>
                            <th className="oswald">Game</th>
                            <th className="oswald">Location</th>
                            <th className="oswald">Score</th>
                            <th className="oswald">Result</th> 
                        </tr>
                    </thead>
                    <tfoot>
                    <Link to='/edit/newGame'><button className = "buttons new" value={this.props.isCoach}>Create New Game</button></Link>
                    </tfoot>
                    {schedule}
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {schedule, isCoach} = state;
    return {
        schedule,
        isCoach
    };
}

export default connect(mapStateToProps, {updateSchedule})(Schedule);