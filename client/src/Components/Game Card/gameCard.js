import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import Navbar from '../Navbar/navbar';
import {updateGameId, updateGuestTeam, updateHomeTeam, updateGameDate, updateHomeImage, updateGuestImage, updateHomeScore, updateGuestScore, updateGameTime, updateGameLocation, updateGameResult} from '../../Reducer/reducer';
import './gameCard.css';


class GameCard extends Component {
    componentDidMount() {
        axios.get(`/api/game/${this.props.match.params.id}`)
            .then(res => {
                //console.log(res.data)
                const {game_id, game_date, game_location, game_time, guest_image, guest_score, guest_team, home_image, home_score, home_team, game_result} = res.data;

                this.props.updateGameDate(game_date);
                this.props.updateGameId(game_id);
                this.props.updateGameLocation(game_location);
                this.props.updateGameTime(game_time);
                this.props.updateGuestImage(guest_image);
                this.props.updateGuestScore(guest_score);
                this.props.updateGuestTeam(guest_team);
                this.props.updateHomeImage(home_image);
                this.props.updateHomeScore(home_score);
                this.props.updateHomeTeam(home_team);
                this.props.updateGameResult(game_result);
            })
            .catch(err => console.log(err))
    }
    render() {
        return(
            <div className="gameCardContainer">
                <div className="header1 oswald">
                    <p>Lehi Girls Basketball 2013-2014 Game Details</p>
                </div>

                <Navbar />

                <div className="gameCard oswald">
                    <div className="row1">
                        <div className="1">{this.props.guest_team}</div>
                        <div className="2">Game #{this.props.game_id} {this.props.game_date} - {this.props.game_result}</div>
                        <div className="3">{this.props.home_team}</div>
                    </div>
                    <div className="row2">
                        <img src={this.props.guest_image} alt="Guest Team"/>
                        <div className="2">@</div>
                        <img src={this.props.home_image} alt="Home Team"/>
                    </div>
                    <div className="row3">
                        <div className="1">{this.props.guest_score}</div>
                        <div className="2">
                            <p>{this.props.game_time}</p>
                            <p>{this.props.game_location}</p>
                        </div>
                        <div className="3">{this.props.home_score}</div>
                    </div>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    const {game_id,game_date, game_time, home_team, home_image, guest_team, guest_image, game_location, home_score, guest_score, game_result} = state;
    return {
       game_id,
       game_date, 
       game_time, 
       home_team, 
       home_image, 
       guest_team, 
       guest_image, 
       game_location, 
       home_score, 
       guest_score,
       game_result 
    };
};

export default connect(mapStateToProps, {updateGameId, updateGameDate,updateGameLocation,updateGameTime,updateGuestImage,updateGuestScore, updateGuestTeam, updateHomeImage, updateHomeScore, updateHomeTeam, updateGameResult})(GameCard);