import React, {Component} from 'react';
import teamPic from '../../Assets/jvVarsity.jpg'

export default class Landing extends Component {
    render() {
        return(
            <div className="container">
                <div className="header oswald">
                    <p>Lehi Girls Basketball</p>
                </div>
                <div className="navbar oswald">Schedule</div>
                <div className="image oswald">
                <img src={teamPic} alt="team pic"/>
                </div>
                {/* <div className="mission">mission</div> */}
                <div className="schedule oswald">schedule</div>
                <div className="player oswald">player</div>
                <div className="twitter oswald">twitter</div>
                <div className="coach oswald">message</div>
                <div className="feed oswald">ig</div>
            </div>
        )
    }
}