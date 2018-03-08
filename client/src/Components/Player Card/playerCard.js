import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Kaylie from '../../Assets/Kaylie.jpg'
import Beth from '../../Assets/Beth.jpg'
import Tyra from '../../Assets/Tyra.jpg'
import Kiera from '../../Assets/Kiera.jpg'
import Brianna from '../../Assets/Brianna.jpg'

export default class PlayerCard extends Component {
    //This will actually be using a Get request to get info from DB and setting on state instead of mapping
    constructor(){
        super();
        this.state = {
            player: [
                {id: 1,
                 image: Kaylie,
                 firstName: 'Kaylie',
                 lastName: 'Bartholomew',
                 number: 4,
                 position: 'Guard',
                 height: '5 ft 4 in',
                 class: 'Senior'
                 },
                {id: 2,
                 image: Tyra,
                 firstName: 'Tyra',
                 lastName: 'Rodriguez',
                 number: 11,
                 position: 'Guard',
                 height: '5 ft 8 in',
                 class: 'Senior'
                 },
                {id: 3,
                 image: Brianna,
                 firstName: 'Brianna',
                 lastName: 'Bean',
                 number: 14,
                 position: 'Guard',
                 height: '5 ft 5 in',
                 class: 'Senior'
                 },
                {id: 4,
                 image: Kiera,
                 firstName: 'Kiera',
                 lastName: 'Pulham',
                 number: 24,
                 position: 'Forward',
                 height: '5 ft 10 in',
                 class: 'Senior'
                 },
                {id: 5,
                 image: Beth,
                 firstName: 'Beth',
                 lastName: 'Beeston',
                 number: 32,
                 position: 'Forward',
                 height: '5 ft 11 in',
                 class: 'Senior'
                 },
            ]
        }
    }    
    
    render() {
        const playerCard = this.state.player.map(player => {
            return (
               
                <div key={player.id} className="child1">
                    <div className="img">
                        <img src={player.image} alt=""/>
                    </div>
                    <div className="info">
                        <div className="name">{player.firstName} {player.lastName}</div>
                        <div className="num position">{player.number} | {player.position}</div>
                        <div className="height">Height: {player.height}</div>
                        <div className="class">Class: {player.class}</div>
                    </div>
                </div>
            )
        });        
        
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


                <div className="parent">{playerCard}</div>
            </div>
        )
    }}
