import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import Navbar from '../Navbar/navbar';
import {updateOriginalPlayer, updatePlayerID, updateFirstName, updateLastName, updatePlayerNumber, updatePlayerImage, updatePlayerHeight, updatePosition, updateRosterYears, updateFavFood, updateFavQuote, updateFact, updateNickname, updateFirstname, updateLastname, updateEditMode, updateClassYear} from '../../Reducer/reducer';
import './playerCard.css'

class PlayerCard extends Component {
    //This will actually be using a Get request to get info from DB and setting on state instead of mapping
    componentDidMount() {
        axios.get(`/api/player/${this.props.match.params.id}`)
            .then(res => {
                console.log(res.data)
                const {player_id, first_name, last_name, player_number, player_height, position, roster_years, player_image, player_fav_food, player_fav_quote, player_nickname, player_unique_fact, classyear} = res.data;

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
                this.props.updateClassYear(classyear);
                this.props.updateOriginalPlayer(res.data);
            })
            .catch(err => console.log(err))
    }

    /* handleSave() {
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
    }; */

    /* handleEdit() {
        //this.props.updateGameCard('edit')
        this.props.updateEditMode(false)
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
    } */

    handleDelete() {
        axios.delete(`/api/player/${this.props.player_id}`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }
    
    render() {  
        //const edit = !!this.props.match.params.edit;
        const {updateOriginalPlayer, updatePlayerID, updateFirstName, updateLastName, updatePlayerNumber, updatePlayerHeight, updatePosition, updateRosterYears, updatePlayerImage, updateFavFood, updateFavQuote, updateNickname, updateFact} = this.props;

        return (
            <div className="pc-container">
                <div className="header oswald">
                    <p>Lehi Girls Basketball 2013-2014 Player Card</p>
                </div>

                <Navbar />

                <div className="playerCard raleway">
                    
                        <div className="pc-img left">
                            <img src={this.props.player_image} alt=""/>
                        </div>
                        <div className="player-info right">
                            <div className="name">{this.props.first_name} {this.props.last_name}</div>
                            <div className='classYear'>{this.props.classYear}</div>
                            <div className="num position">{this.props.player_number} | {this.props.position}</div>
                            <div className="height">Height: {this.props.player_height}</div>
                            <div className="class">Varsity Roster Years: {this.props.roster_years}</div>
                        </div>
                    

                    
                        <div className="player-favorites bottom">
                            <div className="nickname">Nickname: {this.props.player_nickname}</div>
                            <div className="food">Favorite Food: {this.props.player_fav_food}</div>
                            <div className="fact">Unique Fact About {this.props.first_name}:     {this.props.player_unique_fact}</div>
                            <div className="quote">Favorite Quote: {this.props.quote}</div>
                        </div>
                    

                    <div className="button-wrapper">
                        <Link to={`/edit/player/${this.props.player_id}`}><button className="buttons edit" value=    {this.props.isCoach}>Edit Player</button></Link>
                        <Link to={'/roster'}><button className="buttons delete" value={this.props.isCoach} onClick={() =>  this.handleDelete()}>Delete Player?</button></Link>
                    </div>
                </div>
                
                
                
            </div>
        )
    }}

    let mapStateToProps = (state) => {
        const {isCoach, original_player, player_id, first_name, last_name, player_number, player_height, position, roster_years, player_image, player_fav_food, player_fav_quote, player_unique_fact, player_nickname, classYear} = state;
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
            player_unique_fact,
            classYear
        };
    };

    export default connect(mapStateToProps, {updateOriginalPlayer, updatePlayerID, updateFirstName, updateLastName, updatePlayerNumber, updatePlayerHeight, updatePosition, updateRosterYears, updatePlayerImage, updateFavFood, updateFavQuote, updateNickname, updateFact, updateEditMode, updateClassYear})(PlayerCard);