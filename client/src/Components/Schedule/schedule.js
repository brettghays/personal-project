import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'; 

export default class Schedule extends Component {
    componentDidMount(){
        axios.get('/api/games')
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    render() {
        return(
            <div className="child-container">
            <div className="header oswald">Lehi Girls Basketball 2013-2014 Schedule</div>
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
            
            <div className="col-header oswald u">Date</div>
            <div className="col-header oswald v">Time</div>
            <div className="col-header oswald w">Game</div>
            <div className="col-header oswald x">Location</div>
            <div className="col-header oswald y">Score</div>
            <div className="col-header oswald z">Result</div> 

            <div className="raleway a">
                <p>November 26</p>
                <p>December 6</p>
            </div> 

            <div className="raleway b">
                <p>7:00 PM</p>
                <p>7:00 PM</p>
            </div>   

            <div className="raleway c">
                <p>Lehi @ Judge Memorial</p>
                <p>Lehi @ Spanish Fork</p>
            </div>  

            <div className="raleway d">
                <p>Judge Memorial HS</p>
                <p>Spanish Fork HS</p>
            </div> 

            <div className="raleway e">
                <p>Loss</p>
                <p>Loss</p>
            </div>

            <div className="raleway f">
                <p>Test</p>
                <p>2nd Test</p>
                <p>Test</p>
                <p>2nd Test</p>
                <p>Test</p>
                <p>2nd Test</p>
                <p>Test</p>
                <p>2nd Test</p>
                <p>Test</p>
                <p>2nd Test</p>
                <p>Test</p>
                <p>2nd Test</p>
                <p>Test</p>
                <p>2nd Test</p>
                <p>Test</p>
                <p>2nd Test</p>
                <p>Test</p>
                <p>2nd Test</p>
                <p>Test</p>
                <p>2nd Test</p>
                <p>Last</p>
            </div>
            
            </div>
        )
    }
}