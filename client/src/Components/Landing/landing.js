import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import teamPic from '../../Assets/jvVarsity.jpg'

export default class Landing extends Component {
    render() {
        return(
            <div className="container">
                <div className="header oswald">
                    <p>Lehi Girls Basketball 2013-2014</p>
                </div>
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
                <div className="image oswald">
                <img src={teamPic} alt="team pic"/>
                </div>
                {/* <div className="mission">mission</div> */}
                <div className="schedule oswald">schedule</div>
                <div className="player oswald">player</div>
                <div className="social oswald">Follow Us</div>
                <div className="coach oswald">
                    <p>Congrats on making it to State! We have worked hard to achieve this moment.</p>
                    <p>Bus leaves Monday at 11:00 AM. Rest up and let's shock the world!</p>
                </div>
                {/* <div className="feed oswald">ig</div> */}
            </div>
        )
    }
}