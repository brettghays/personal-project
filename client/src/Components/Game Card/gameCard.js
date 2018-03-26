import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import Navbar from '../Navbar/navbar';

import {updateGameId, updateGuestTeam, updateHomeTeam, updateGameDate, updateHomeImage, updateGuestImage, updateHomeScore, updateGuestScore, updateGameTime, updateGameLocation, updateGameResult, updateGameCard, updateOriginalGame,updateEditMode} from '../../Reducer/reducer';
import './gameCard.css';


class GameCard extends Component {
    componentDidMount() {
        axios.get(`/api/game/${this.props.match.params.id}`)
            .then(res => {
                console.log(res.data)
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
                this.props.updateOriginalGame(res.data);
            })
            .catch(err => console.log(err))
    }

    /* handleSave() {
        const body = {
            game_id: this.props.game_id,
            game_date: this.props.game_date,
            game_time: this.props.game_time,
            home_team: this.props.home_team,
            home_image: this.props.home_image,
            guest_team: this.props.guest_team,
            guest_image: this.props.guest_image,
            game_location: this.props.game_location,
            game_result: this.props.game_result,
            home_score: this.props.home_score,
            guest_score: this.props.guest_score
        }
        axios.patch(`/api/game/${this.props.game_id}`, body)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))

        //this.props.updateGameCard('view')
        //this.props.updateOriginalMode(true)
        document.getElementById("textfield1").value = "";
        document.getElementById("textfield2").value = "";
        document.getElementById("textfield3").value = "";
        document.getElementById("textfield4").value = "";
        document.getElementById("textfield5").value = "";
        document.getElementById("textfield6").value = "";
        document.getElementById("textfield7").value = "";
        document.getElementById("textfield8").value = "";
        document.getElementById("textfield9").value = "";
        document.getElementById("textfield10").value = "";
        document.getElementById("textfield11").value = "";
    }; */

    /* handleEdit() {
        //this.props.updateGameCard('edit')
        this.props.updateEditMode(false)
    };
 */
    /* handleCancel(){
        const {game_id, game_date, game_location, game_time, guest_image, guest_score, guest_team, home_image, home_score, home_team, game_result} = this.props.original_game;

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
        document.getElementById("textfield1").value = "";
        document.getElementById("textfield2").value = "";
        document.getElementById("textfield3").value = "";
        document.getElementById("textfield4").value = "";
        document.getElementById("textfield5").value = "";
        document.getElementById("textfield6").value = "";
        document.getElementById("textfield7").value = "";
        document.getElementById("textfield8").value = "";
        document.getElementById("textfield9").value = "";
        document.getElementById("textfield10").value = "";
        document.getElementById("textfield11").value = "";
        //this.props.updateGameCard('view');
    } */

    handleDelete() {
        axios.delete(`/api/game/${this.props.game_id}`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    render() {
        //const edit = !!this.props.match.params.edit;
        const {updateGameId, updateGameDate, updateGameLocation, updateGameTime, updateGuestImage, updateGuestScore, updateGuestTeam, updateHomeImage, updateHomeScore, updateHomeTeam, updateGameResult} = this.props;
    
        return(
            <div className="gc-container">
                <div className="header oswald">
                    <p>Lehi Girls Basketball 2013-2014 Game Details</p>
                </div>

                <Navbar />

                <div className="gameCard oswald">
                    <div className="top-row">
                        <div className="tl">{this.props.guest_team}</div>
                        <div className="tm">Game #{this.props.game_id} {this.props.game_date} - {this.props.game_result}</div>
                        <div className="tr">{this.props.home_team}</div>
                    </div>
                    <div className="middle-row">
                        <img className='ml' src={this.props.guest_image} alt="Guest Team"/>
                        <div className="mm">@</div>
                        <img className='mr' src={this.props.home_image} alt="Home Team"/>
                    </div>
                    <div className="bottom-row">
                        <div className="bl">{this.props.guest_score}</div>
                        <div className="bm">
                            <p>{this.props.game_time}</p>
                            <p>Final Score</p>
                            <p>{this.props.game_location}</p>
                        </div>
                        <div className="br">{this.props.home_score}</div>
                    </div>

                    <div className="button-wrapper">
                        <Link to={`/edit/game/${this.props.game_id}`}><button className="buttons edit" value={this.props.isCoach}>Edit Game</button></Link>
                        <Link to={'/schedule'}><button className="buttons delete" value={this.props.isCoach} onClick={() => this.handleDelete()}>Delete Game?</button></Link>
                    </div>
                </div>

                
                {/* <button value={this.props.isCoach ? edit : this.props.edit_mode} onClick={() => this.handleCancel()}>Cancel</button> */}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    const {isCoach, original_game, game_id,game_date, game_time, home_team, home_image, guest_team, guest_image, game_location, home_score, guest_score, game_result, game_card, edit_mode} = state;
    return {
       isCoach, 
       original_game,
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
       game_result,
       game_card,
       edit_mode
    };
};

export default connect(mapStateToProps, {updateOriginalGame, updateGameId, updateGameDate,updateGameLocation,updateGameTime,updateGuestImage,updateGuestScore, updateGuestTeam, updateHomeImage, updateHomeScore, updateHomeTeam, updateGameResult, updateEditMode})(GameCard);