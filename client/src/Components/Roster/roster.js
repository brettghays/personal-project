import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {updateRoster} from '../../Reducer/reducer';

class Roster extends Component {
    componentDidMount() {
        axios.get('/api/players')
            .then(res => {
                //console.log(res.data)
                this.props.updateRoster(res.data);
            })
            .catch(err => console.log(err))
    }
    render() {
        const roster = this.props.roster.map((player,i) => {
            return (
                <div className="childPlayer" key = {player.player_id}>
                    <div className="raleway a">
                        <p>{player.player_number}</p>
                    </div>

                    <div className="raleway b">
                        <Link to = {`/roster/${player.player_id}`}>
                            <p>{player.first_name} {player.last_name}</p>
                        </Link>
                    </div>

                    <div className="raleway c">
                        <p>{player.player_height}</p>
                    </div>

                    <div className="raleway d">
                        <p>{player.postion}</p>
                    </div>

                    <div className="raleway e">
                        <img src={player.player_image} alt="Picture should be here"/>
                    </div>

                    <div className="raleway f">
                        <p>{player.roster_years}</p>
                    </div>
                </div>
            )
        })
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

            <div className="rosterParent">{roster}</div>

            {/* <div className="raleway a">
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
            </div> */}
            
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    const {roster} = state;
    return {
        roster
    };
};

export default connect(mapStateToProps, {updateRoster})(Roster);