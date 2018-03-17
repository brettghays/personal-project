import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios'; 
import Navbar from '../Navbar/navbar';
import {updateSchedule} from '../../Reducer/reducer';

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
                <div className="childGame" key={game.game_id}>
                    <div className="raleway a">
                        <p>{game.game_id}. {game.game_date}</p>
                    </div>

                    <div className="raleway b">
                        <p>{game.game_time}</p>
                    </div>

                    <div className="raleway c">
                        <Link to = {`/schedule/${game.game_id}`}>
                            <p>{game.guest_team} @ {game.home_team}</p>
                        </Link>
                    </div>

                    <div className="raleway d">
                        <p>{game.game_location}</p>
                    </div>

                    <div className="raleway e">
                        <p>{game.guest_score} - {game.home_score}</p>
                    </div>

                    <div className="raleway f">
                        <p>{game.game_result}</p>
                    </div>
                </div>
            )
        })
        return(
            <div className="child-container">
                <div className="header oswald">Lehi Girls Basketball 2013-2014 Schedule</div>
            
                <Navbar />
            
                <div className="col-header oswald u">Date</div>
                <div className="col-header oswald v">Time</div>
                <div className="col-header oswald w">Game</div>
                <div className="col-header oswald x">Location</div>
                <div className="col-header oswald y">Score</div>
                <div className="col-header oswald z">Result</div> 

                <div className="gameParent">{schedule}</div>

                <div className="buttons">
                    <Link to='/edit/newGame'><button value={this.props.isCoach}>Create New Game</button></Link>
                </div>
            
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