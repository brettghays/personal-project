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

            {/* <div className="raleway a">
                <p>November 26</p>
                <p>December 6</p>
            </div> 

            <div className="raleway b">
                <p>7:00 PM</p>
                <p>7:00 PM</p>
            </div>   

            <div className="raleway c">
                <p>Lehi @ Judge Memorial</p>
                <p>Lehi @ Spanish Fork</p>
            </div>  

            <div className="raleway d">
                <p>Judge Memorial HS</p>
                <p>Spanish Fork HS</p>
            </div> 

            <div className="raleway e">
                <p>Loss</p>
                <p>Loss</p>
            </div>

            <div className="raleway f">
                <p>Test</p>
                <p>2nd Test</p>
                <p>Test</p>
                <p>2nd Test</p>
                <p>Test</p>
                <p>2nd Test</p>
                <p>Test</p>
                <p>2nd Test</p>
                <p>Test</p>
                <p>2nd Test</p>
                <p>Test</p>
                <p>2nd Test</p>
                <p>Test</p>
                <p>2nd Test</p>
                <p>Test</p>
                <p>2nd Test</p>
                <p>Test</p>
                <p>2nd Test</p>
                <p>Test</p>
                <p>2nd Test</p>
                <p>Last</p>
            </div>
             */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {schedule} = state;
    return {
        schedule
    };
}

export default connect(mapStateToProps, {updateSchedule})(Schedule);