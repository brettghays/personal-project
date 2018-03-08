import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Roster extends Component {
    render() {
        return(
            <div className="child-container">
            <div className="header oswald">Lehi Girls Basketball 2013-2014 Roster</div>
            <div className="navbar oswald">
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
            
            <div className="col-header oswald u">#</div>
            <div className="col-header oswald v">Player</div>
            <div className="col-header oswald w">Height</div>
            <div className="col-header oswald x">Position</div>
            <div className="col-header oswald y">Class</div>
            <div className="col-header oswald z">Roster Years</div> 

            <div className="raleway a">
                <p>4</p>
                <p>5</p>
            </div> 

            <div className="raleway b">
                <p>Kaylie Bartholomew</p>
                <p>Hadlee Labrum</p>
            </div>   

            <div className="raleway c">
                <p>5'5"</p>
                <p>5'6"</p>
            </div>  

            <div className="raleway d">
                <p>Guard</p>
                <p>Guard</p>
            </div> 

            <div className="raleway e">
                <p>Senior</p>
                <p>Junior</p>
            </div>

            <div className="raleway f">
                <p>2012, 2013</p>
                <p>2013</p>
            </div>
            
            </div>
        )
    }
}
