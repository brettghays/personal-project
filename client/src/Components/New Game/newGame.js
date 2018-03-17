import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import Navbar from '../Navbar/navbar';
import {updateGameId, updateGuestTeam, updateHomeTeam, updateGameDate, updateHomeImage, updateGuestImage, updateHomeScore, updateGuestScore, updateGameTime, updateGameLocation, updateGameResult, updateOriginalGame,updateEditMode} from '../../Reducer/reducer';
import '../Game Card/gameCard.css';

class NewGame extends Component {
    componentDidMount(){
        const {game_id, game_date, game_location, game_time, guest_image, guest_score, guest_team, home_image, home_score, home_team, game_result} = this.props;

                this.props.updateGameDate('');
                this.props.updateGameId('');
                this.props.updateGameLocation('');
                this.props.updateGameTime('');
                this.props.updateGuestImage('');
                this.props.updateGuestScore('');
                this.props.updateGuestTeam('');
                this.props.updateHomeImage('');
                this.props.updateHomeScore('');
                this.props.updateHomeTeam('');
                this.props.updateGameResult('');
    }

    handleSave() {
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
        axios.post(`/api/games`, body)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))

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
    };

    handleCancel(){
        const {game_id, game_date, game_location, game_time, guest_image, guest_score, guest_team, home_image, home_score, home_team, game_result} = this.props;

        this.props.updateGameDate('');
        this.props.updateGameId('');
        this.props.updateGameLocation('');
        this.props.updateGameTime('');
        this.props.updateGuestImage('');
        this.props.updateGuestScore('');
        this.props.updateGuestTeam('');
        this.props.updateHomeImage('');
        this.props.updateHomeScore('');
        this.props.updateHomeTeam('');
        this.props.updateGameResult('');
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
    }

    render() {
        const {updateGameId, updateGameDate, updateGameLocation, updateGameTime, updateGuestImage, updateGuestScore, updateGuestTeam, updateHomeImage, updateHomeScore, updateHomeTeam, updateGameResult} = this.props;
    
        return(
            <div className="gameCardContainer">
                <div className="header1 oswald">
                    <p>Lehi Girls Basketball 2013-2014 Add Game</p>
                </div>

                <Navbar />

                        <div className="gameCard oswald">
                            <div className="row1">
                                <div className="1">
                                    <div>{this.props.guest_team}</div>
                                    <div><input disabled={!this.props.isCoach} type="text" id="textfield1" placeholder='Guest Team' onChange={(e) => updateGuestTeam(e.target.value)}/></div>
                                </div>
                               
                                <div className="2">
                                    <div>
                                        Game #{this.props.game_id} {this.props.game_date} - {this.props.game_result}
                                    </div>
                                   <div>
                                        <input disabled={!this.props.isCoach} type="text" id="textfield2"placeholder='ID' onChange={(e) => updateGameId(e.target.value)}/> <input disabled={!this.props.isCoach} type="text" id="textfield3" placeholder="Date" onChange={(e) => updateGameDate(e.target.value)}/> <input disabled={!this.props.isCoach} type="text" id="textfield4"placeholder="Result" onChange={(e) => updateGameResult(e.target.value)}/>
                                   </div>    
                                </div>
                                
                                <div className="3">
                                    <div>{this.props.home_team}</div>
                                    <div><input disabled={!this.props.isCoach} type="text" id="textfield5" placeholder='Home Team' onChange={(e) => updateHomeTeam(e.target.value)}/></div>
                                </div>
                                
                            </div>

                            <div className="row2">
                                <div className="1">
                                    <img src={this.props.guest_image} alt="Guest Team"/>
                                    <div><input disabled={!this.props.isCoach} type="text" id="textfield6" placeholder='Guest Image URL' onChange={(e) => updateGuestImage(e.target.value)}/></div>
                                </div>
                                
                                
                                <div className="2">@</div>

                                <div className="3">
                                    <img src={this.props.home_image} alt="Home Team"/>
                                    <div><input disabled={!this.props.isCoach} type="text" id="textfield7" placeholder='Home Image URL' onChange={(e) => updateHomeImage(e.target.value)}/></div>
                                </div>
                                
                            </div>

                            <div className="row3">
                                <div className="1">
                                    <div>{this.props.guest_score}</div>
                                    <div><input disabled={!this.props.isCoach} type="text" id="textfield8" placeholder='Guest Score' onChange={(e) => updateGuestScore(e.target.value)}/></div>   
                                </div>
                                
                                <div className="2">
                                    <p>Final Score</p>
                                    <div>
                                        <p>{this.props.game_time}</p>
                                        <input disabled={!this.props.isCoach} type="text" id="textfield9" placeholder='Game Time' onChange={(e) => updateGameTime(e.target.value)}/>
                                        <p>{this.props.game_location}</p>
                                        <input disabled={!this.props.isCoach} type="text" id="textfield10" placeholder='Location' onChange={(e) => updateGameLocation(e.target.value)}/>
                                    </div>  
                                </div>

                                <div className="3">
                                    <div>{this.props.home_score}</div>
                                    <div><input disabled={!this.props.isCoach} type="text"  id="textfield11" placeholder='Home Score' onChange={(e) => updateHomeScore(e.target.value)}/></div>    
                                </div>    
                            </div>
                        </div>

                <Link to={`/schedule/`}><button value={this.props.isCoach} onClick={() => this.handleSave()}>Save Game</button></Link>
                <button value={this.props.isCoach} onClick={() => this.handleCancel()}>Cancel</button>
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

export default connect(mapStateToProps, {updateOriginalGame, updateGameId, updateGameDate,updateGameLocation,updateGameTime,updateGuestImage,updateGuestScore, updateGuestTeam, updateHomeImage, updateHomeScore, updateHomeTeam, updateGameResult, updateEditMode})(NewGame);
