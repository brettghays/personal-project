import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './gameCard.css';
import Lehi from '../../Assets/lehi-logo.jpg';
import Judge from '../../Assets/judge-memorial-logo.jpg'

export default class GameCard extends Component {
    render() {
        return(
            <div className="gameCardContainer">
                <div className="header1 oswald">
                    <p>Lehi Girls Basketball 2013-2014</p>
                </div>

                <div className="navbar1 oswald">
                    <div className="links-top">
                        <Link to = '/' className = 'links'>Home</Link>
                        <Link to = '/roster' className = 'links'>Roster</Link>
                        <Link to = '/schedule' className = 'links'>Schedule</Link>
                    </div>

                    <div className="links-bottom">
                        <Link to = '/results' className = 'links'>Register / Login</Link>
                        <Link to = '/roster/:id' className = 'links'>Signout</Link>
                    </div>
                </div>

                <div className="gameCard oswald">
                    <div className="row1">
                        <div className="1">Lehi</div>
                        <div className="2">Nov 26 2013</div>
                        <div className="3">Judge Memorial</div>
                    </div>
                    <div className="row2">
                        <img src={Lehi} alt="Lehi"/>
                        <div className="2">@</div>
                        <img src={Judge} alt="Judge"/>
                    </div>
                    <div className="row3">
                        <div className="1">56</div>
                        <div className="2">
                            <p>7:00pm</p>
                            <p>Judge Memorial High School</p>
                        </div>
                        <div className="3">72</div>
                    </div>
                </div>
            </div>
        )
    }
}