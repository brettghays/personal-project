import React, {Component} from 'react';

export default class Landing extends Component {
    render() {
        return(
            <div className="container">
                <div className="header oswald">
                    <div className="align-left">Header</div>
                </div>
                <div className="navbar oswald">Schedule</div>
                <div className="image oswald">image</div>
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