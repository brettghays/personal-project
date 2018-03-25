import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import Navbar from '../Navbar/navbar';
import {updateOriginalPlayer, updatePlayerID, updateFirstName, updateLastName, updatePlayerNumber, updatePlayerImage, updatePlayerHeight, updatePosition, updateRosterYears, updateFavFood, updateFavQuote, updateFact, updateNickname, updateFirstname, updateLastname, updateEditMode} from '../../Reducer/reducer';

class PlayerCard extends Component {
    //This will actually be using a Get request to get info from DB and setting on state instead of mapping
    componentDidMount() {
        axios.get(`/api/player/${this.props.match.params.id}`)
            .then(res => {
                console.log(res.data)
                const {player_id, first_name, last_name, player_number, player_height, position, roster_years, player_image, player_fav_food, player_fav_quote, player_nickname, player_unique_fact} = res.data;

                this.props.updatePlayerImage(player_image);
                this.props.updatePlayerID(player_id);
                this.props.updateFirstName(first_name);
                this.props.updateLastName(last_name);
                this.props.updatePlayerNumber(player_number);
                this.props.updatePosition(position);
                this.props.updatePlayerHeight(player_height);
                this.props.updateRosterYears(roster_years);
                this.props.updateFavFood(player_fav_food);
                this.props.updateFavQuote(player_fav_quote);
                this.props.updateNickname(player_nickname);
                this.props.updateFact(player_unique_fact);
                this.props.updateOriginalPlayer(res.data);
            })
            .catch(err => console.log(err))
    }

    handleSave() {
        const {player_nickname} = this.props;
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
        console.log(player_nickname)
        console.log('This is the body: ',body);
        axios.patch(`/api/player/${this.props.player_id}`, body)
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
    };

    /* handleEdit() {
        //this.props.updateGameCard('edit')
        this.props.updateEditMode(false)
    }; */

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
        this.props.updateFavFood(player_fav_food);
        this.props.updateFavQuote(player_fav_quote);
        this.props.updateNickname(player_nickname);
        this.props.updateFact(player_unique_fact);
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

    /* handleDelete() {
        axios.delete(`/api/player/${this.props.player_id}`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    } */
    
    render() {  
        //const edit = !!this.props.match.params.edit;
        const {updateOriginalPlayer, updatePlayerID, updateFirstName, updateLastName, updatePlayerNumber, updatePlayerHeight, updatePosition, updateRosterYears, updatePlayerImage, updateFavFood, updateFavQuote, updateNickname, updateFact} = this.props;

        return (
            <div className="container">
                <div className="header oswald">
                    <p>Lehi Girls Basketball 2013-2014 Player Card</p>
                </div>

                <Navbar />

                <div>
                    <div className="img">
                        <div><img src={this.props.player_image} alt=""/></div>
                        <div><input disabled={!this.props.isCoach} type="text" id="textfield1" placeholder='Player Image URL' onChange={(e) => updatePlayerImage(e.target.value)}/></div>
                    </div>
                    <div className="info">
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
                        <input disabled={!this.props.isCoach} type="text" id="textfield8" placeholder='Nickname' onChange={(e) => updateNickname(e.target.value)}/>
                        <div className="food">Favorite Food: {this.props.player_fav_food}</div>
                        <input disabled={!this.props.isCoach} type="text" id="textfield9" placeholder='Favorite Food' onChange={(e) => updateFavFood(e.target.value)}/>
                        <div className="fact">Unique Fact About {this.props.first_name}: {this.props.player_unique_fact}</div>
                        <input disabled={!this.props.isCoach} type="text" id="textfield10" placeholder='Unique Fact' onChange={(e) => updateFact(e.target.value)}/>
                        <div className="quote">Favorite Quote: {this.props.player_fav_quote}</div>
                        <input disabled={!this.props.isCoach} type="text" id="textfield11" placeholder='Favorite Quote' onChange={(e) => updateFavQuote(e.target.value)}/>
                    </div>
                </div>

                <button value={this.props.isCoach}onClick={() => this.handleSave()}>Save Player</button>
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

    export default connect(mapStateToProps, {updateOriginalPlayer, updatePlayerID, updateFirstName, updateLastName, updatePlayerNumber, updatePlayerHeight, updatePosition, updateRosterYears, updatePlayerImage, updateFavFood, updateFavQuote, updateNickname, updateFact, updateEditMode})(PlayerCard);