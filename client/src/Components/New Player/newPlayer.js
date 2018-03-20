import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import Navbar from '../Navbar/navbar';
import {updateOriginalPlayer, updatePlayerID, updateFirstName, updateLastName, updatePlayerNumber, updatePlayerHeight, updatePosition, updateRosterYears, updatePlayerImage, updateFavFood, updateFavQuote, updateNickname, updateFact, updateEditMode} from '../../Reducer/reducer';

class NewPlayer extends Component {
    //This will actually be using a Get request to get info from DB and setting on state instead of mapping
    componentDidMount() {
        this.props.updatePlayerImage('');
        this.props.updateFirstName('');
        this.props.updateLastName('');
        this.props.updatePlayerNumber('');
        this.props.updatePosition('');
        this.props.updatePlayerHeight('');
        this.props.updateRosterYears('');
        this.props.updateFavFood('');
        this.props.updateFavQuote('');
        this.props.updateNickname('');
        this.props.updateFact('');
        this.props.updatePlayerID('');
    }

    handleSave() {
        const body = {
            player_id: this.props.player_id,
            first_name: this.props.first_name,
            last_name: this.props.last_name,
            player_number: this.props.player_number,
            player_height: this.props.player_height,
            position: this.props.position,
            roster_years: this.props.roster_years,
            player_image: this.props.player_image,
            player_fav_food: this.props.player_fav_food,
            player_fav_quote: this.props.player_fav_quote,
            player_unique_fact: this.props.player_unique_fact,
            player_nickname: this.props.player_nickname
        }
        axios.post(`/api/players`, body)
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
        document.getElementById("textfield12").value = "";
    };

    handleCancel(){
        const {player_id, first_name, last_name, player_number, player_height, position, roster_years, player_image, player_fav_food, player_fav_quote, player_nickname, player_unique_fact} = this.props.original_player;

        this.props.updatePlayerImage(player_image);
        this.props.updatePlayerID(player_id);
        this.props.updateFirstName(first_name);
        this.props.updateLastName(last_name);
        this.props.updatePlayerNumber(player_number);
        this.props.updatePosition(position);
        this.props.updatePlayerHeight(player_height);
        this.props.updateRosterYears(roster_years);
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
        document.getElementById("textfield12").value = "";
        //this.props.updateGameCard('view');
    }
    
    render() {   
        const {updateOriginalPlayer, updatePlayerID, updateFirstName, updateLastName, updatePlayerNumber, updatePlayerHeight, updatePosition, updateRosterYears, updatePlayerImage, updateFavFood, updateFavQuote, updateNickname, updateFact, updateEditMode} = this.props;

        return (
            <div className="container">
                <div className="header oswald">
                    <p>Lehi Girls Basketball 2013-2014 Add Player</p>
                </div>

                <Navbar />

                <div>
                    <div className="img">
                        <div><img src={this.props.player_image} alt=""/></div>
                        <div><input disabled={!this.props.isCoach} type="text" id="textfield1" placeholder='Player Image URL' onChange={(e) => updatePlayerImage(e.target.value)}/></div>
                    </div>
                    <div className="info">
                        <div className="playerID">Player ID: {this.props.player_id}</div>
                        <input disabled={!this.props.isCoach} type="text" id="textfield8" placeholder='Player ID' onChange={(e) => updatePlayerID(e.target.value)}/>
                        <div className="name">{this.props.first_name} {this.props.last_name}</div>
                        <input disabled={!this.props.isCoach} type="text" id="textfield2"placeholder='First Name' onChange={(e) => updateFirstName(e.target.value)}/> <input disabled={!this.props.isCoach} type="text" id="textfield3" placeholder="Last Name" onChange={(e) => updateLastName(e.target.value)}/>
                        <div className="num position">{this.props.player_number} | {this.props.position}</div>
                        <input disabled={!this.props.isCoach} type="text" id="textfield4"placeholder='Jersey Number' onChange={(e) => updatePlayerNumber(e.target.value)}/> <input disabled={!this.props.isCoach} type="text" id="textfield5" placeholder="Position" onChange={(e) => updatePosition(e.target.value)}/>
                        <div className="height">Height: {this.props.player_height}</div>
                        <input disabled={!this.props.isCoach} type="text" id="textfield6" placeholder='Height' onChange={(e) => updatePlayerHeight(e.target.value)}/>
                        <div className="class">Varsity Roster Years: {this.props.roster_years}</div>
                        <input disabled={!this.props.isCoach} type="text" id="textfield7" placeholder='Roster Years' onChange={(e) => updateRosterYears(e.target.value)}/>
                    </div>
                    <div className="favorites">
                        <div className="nickname">Nickname: {this.props.player_nickname}</div>
                        <input disabled={!this.props.isCoach} type="text" id="textfield9" placeholder='Nickname' onChange={(e) => updateNickname(e.target.value)}/>
                        <div className="food">Favorite Food: {this.props.player_fav_food}</div>
                        <input disabled={!this.props.isCoach} type="text" id="textfield10" placeholder='Favorite Food' onChange={(e) => updateFavFood(e.target.value)}/>
                        <div className="fact">Unique Fact About {this.props.first_name}: {this.props.player_unique_fact}</div>
                        <input disabled={!this.props.isCoach} type="text" id="textfield11" placeholder='Unique Fact' onChange={(e) => updateFact(e.target.value)}/>
                        <div className="quote">Favorite Quote: {this.props.quote}</div>
                        <input disabled={!this.props.isCoach} type="text" id="textfield12" placeholder='Favorite Quote' onChange={(e) => updateFavQuote(e.target.value)}/>
                    </div>
                </div>

                 <Link to={`/roster/`}><button value={this.props.isCoach} onClick={() => this.handleSave()}>Save Player</button></Link>
                <button value={this.props.isCoach} onClick={() => this.handleCancel()}>Cancel Changes</button>
            </div>
        )
    }}

    let mapStateToProps = (state) => {
        const {isCoach, original_player, player_id, first_name, last_name, player_number, player_height, position, roster_years, player_image, player_fav_food, player_fav_quote, player_unique_fact, player_nickname} = state;
        return {
            isCoach,
            original_player,
            player_id,
            first_name,
            last_name,
            player_number,
            player_height,
            position,
            roster_years,
            player_image,
            player_fav_food,
            player_fav_quote,
            player_nickname,
            player_unique_fact
        };
    };

    export default connect(mapStateToProps, {updateOriginalPlayer, updatePlayerID, updateFirstName, updateLastName, updatePlayerNumber, updatePlayerHeight, updatePosition, updateRosterYears, updatePlayerImage, updateFavFood, updateFavQuote, updateNickname, updateFact, updateEditMode})(NewPlayer);