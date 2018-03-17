import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import Navbar from '../Navbar/navbar';
import {updateGameId, updateGuestTeam, updateHomeTeam, updateGameDate, updateHomeImage, updateGuestImage, updateHomeScore, updateGuestScore, updateGameTime, updateGameLocation, updateGameResult, updateGameCard, updateOriginalGame, updateOriginalMode} from '../../Reducer/reducer';
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
                this.props.updateOriginalGame(res.data);
            })
            .catch(err => console.log(err))
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
        axios.patch(`/api/game/${this.props.game_id}`, body)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))

        this.props.updateGameCard('view')
        this.props.updateOriginalMode('true')
    };

    handleEdit() {
        this.props.updateGameCard('edit')
        this.props.updateOriginalMode('false')
    };

    handleCancel(){
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
        //this.props.updateGameCard('view');
    }

    render() {
        const view = this.props.game_card === 'view';
        const {updateGameId, updateGameDate, updateGameLocation, updateGameTime, updateGuestImage, updateGuestScore, updateGuestTeam, updateHomeImage, updateHomeScore, updateHomeTeam, updateGameResult} = this.props;
    
        return(
            <div className="gameCardContainer">
                <div className="header1 oswald">
                    <p>Lehi Girls Basketball 2013-2014 Game Details</p>
                </div>

                <Navbar />

                {
                    view
                    ? (
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
                            <p>Final Score</p>
                            <p>{this.props.game_time}</p>
                            <p>{this.props.game_location}</p>
                        </div>
                        <div className="3">{this.props.home_score}</div>
                    </div>
                </div>
                    )
                    : (
                        <div className="gameCard oswald">
                            <div className="row1">
                                <div className="1">
                                    <div>{this.props.guest_team}</div>
                                    <div><input type="text" placeholder='Guest Team' onChange={(e) => updateGuestTeam(e.target.value)}/></div>
                                </div>
                               
                                <div className="2">
                                    <div>
                                        Game #{this.props.game_id} {this.props.game_date} - {this.props.game_result}
                                    </div>
                                   <div>
                                        <input type="text" placeholder='ID' onChange={(e) => updateGameId(e.target.value)}/> <input type="text" placeholder="Date" onChange={(e) => updateGameDate(e.target.value)}/> <input type="text" placeholder="Result" onChange={(e) => updateGameResult(e.target.value)}/>
                                   </div>    
                                </div>
                                
                                <div className="3">
                                    <div>{this.props.home_team}</div>
                                    <div><input type="text" placeholder='Home Team' onChange={(e) => updateHomeTeam(e.target.value)}/></div>
                                </div>
                                
                            </div>

                            <div className="row2">
                                <div className="1">
                                    <img src={this.props.guest_image} alt="Guest Team"/>
                                    <div><input type="text" placeholder='Guest Image URL' onChange={(e) => updateGuestImage(e.target.value)}/></div>
                                </div>
                                
                                
                                <div className="2">@</div>

                                <div className="3">
                                    <img src={this.props.home_image} alt="Home Team"/>
                                    <div><input type="text" placeholder='Home Image URL' onChange={(e) => updateHomeImage(e.target.value)}/></div>
                                </div>
                                
                            </div>

                            <div className="row3">
                                <div className="1">
                                    <div>{this.props.guest_score}</div>
                                    <div><input type="text" placeholder='Guest Score' onChange={(e) => updateGuestScore(e.target.value)}/></div>   
                                </div>
                                
                                <div className="2">
                                    <p>Final Score</p>
                                    <div>
                                        <p>{this.props.game_time}</p>
                                        <input type="text" placeholder='Game Time' onChange={(e) => updateGameTime(e.target.value)}/>
                                        <p>{this.props.game_location}</p>
                                        <input type="text" id="textfield1" placeholder='Location' onChange={(e) => updateGameLocation(e.target.value)}/>
                                    </div>  
                                </div>

                                <div className="3">
                                    <div>{this.props.home_score}</div>
                                    <div><input type="text" placeholder='Home Score' onChange={(e) => updateHomeScore(e.target.value)}/></div>    
                                </div>    
                            </div>
                        </div>
                    )
                }

                <button onClick={view ? () => this.handleEdit() : () => this.handleSave()}>{view ? 'Edit' : 'Save'}</button>
                <button value={this.props.original_mode} onClick={() => this.handleCancel()}>Cancel</button>
                <Link to='/schedule'><button value={this.props.original_mode} onClick={() => this.props.updateGameCard('view')}>Back to Schedule</button></Link>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    const {original_game, game_id,game_date, game_time, home_team, home_image, guest_team, guest_image, game_location, home_score, guest_score, game_result, game_card, original_mode} = state;
    return {
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
       original_mode
    };
};

export default connect(mapStateToProps, {updateOriginalGame, updateGameId, updateGameDate,updateGameLocation,updateGameTime,updateGuestImage,updateGuestScore, updateGuestTeam, updateHomeImage, updateHomeScore, updateHomeTeam, updateGameResult,updateGameCard,updateOriginalMode})(GameCard);