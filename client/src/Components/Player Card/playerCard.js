import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {updateFirstName, updateLastName, updatePlayerNumber, updatePlayerImage, updatePlayerHeight, updatePosition, updateRosterYears, updateFavFood, updateFavQuote, updateFact, updateNickname} from '../../Reducer/reducer';

class PlayerCard extends Component {
    //This will actually be using a Get request to get info from DB and setting on state instead of mapping
    componentDidMount() {
        axios.get(`/api/player/${this.props.match.params.id}`)
            .then(res => {
                //console.log(res.data)
                const {first_name, last_name, player_number, player_height, postion, roster_years, player_image, player_fav_food, player_fav_quote, player_nickname, player_unique_fact} = res.data;

                this.props.updatePlayerImage(player_image);
                this.props.updateFirstName(first_name);
                this.props.updateLastName(last_name);
                this.props.updatePlayerNumber(player_number);
                this.props.updatePosition(postion);
                this.props.updatePlayerHeight(player_height);
                this.props.updateRosterYears(roster_years);
                this.props.updateFavFood(player_fav_food);
                this.props.updateFavQuote(player_fav_quote);
                this.props.updateNickname(player_nickname);
                this.props.updateFact(player_unique_fact);
            })
            .catch(err => console.log(err))
    }
    
    render() {      
        return (
            <div className="container">
                <div className="header oswald">
                    <p>Lehi Girls Basketball 2013-2014 Player Card</p>
                </div>

                <div className="navbar oswald">
                    <div className="links-top">
                        <Link to = '/' className = 'links'>Home</Link>
                        <Link to = '/roster' className = 'links'>Roster</Link>
                        <Link to = '/schedule' className = 'links'>Schedule</Link>
                    </div>
                </div>

                <div className="img">
                    <img src={this.props.player_image} alt=""/>
                </div>
                <div className="info">
                    <div className="name">{this.props.first_name} {this.props.last_name}</div>
                    <div className="num position">{this.props.player_number} | {this.props.position}</div>
                    <div className="height">Height: {this.props.player_height}</div>
                    <div className="class">Varsity Roster Years: {this.props.roster_years}</div>
                </div>
            </div>
        )
    }}

    let mapStateToProps = (state) => {
        const {first_name, last_name, player_number, player_height, position, roster_years, player_image, player_fav_food, player_fav_quote, player_unique_fact, player_nickname} = state;
        return {
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

    export default connect(mapStateToProps, {updateFirstName, updateLastName, updatePlayerNumber, updatePlayerHeight, updatePosition, updateRosterYears, updatePlayerImage, updateFavFood, updateFavQuote, updateNickname, updateFact})(PlayerCard);