import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import teamPic from '../../Assets/jvVarsity.jpg'
import Navbar from '../Navbar/navbar';
import Lehi from '../../Assets/lehi-logo.jpg';
import Judge from '../../Assets/judge-memorial-logo.jpg';
import Kaylie from '../../Assets/Kaylie.jpg';
import {updateSessionID, updateFirsname, updateLastname, updateEmail, updateIsCoach} from '../../Reducer/reducer';

class Landing extends Component {
    componentDidMount(){
        axios.get('/api/user')
       .then( res => {
           console.log(res.data)
           const {session_id, firstname, lastname, email, iscoach} = res.data
           console.log('THIS IS WORKING AND CONNECTed!!!!!!!!!!')
           this.props.updateSessionID(session_id);
           this.props.updateFirstname(firstname);
           this.props.updateLastname(lastname);
           this.props.updateEmail(email);
           this.props.updateIsCoach(iscoach);
       })
       .catch(err => console.log(err))
    }
    render() {
        return(
            <div className="container">
                <div className="header oswald">
                    <p>Lehi Girls Basketball 2013-2014</p>
                </div>
               
                <Navbar />

                <div className="image oswald">
                <img src={teamPic} alt="team pic"/>
                </div>
                {/* <div className="mission">mission</div> */}
                <div className="schedule oswald">
                    <div>Upcoming Game</div>
                    <div className='zRow'>
                        <img src={Lehi} alt=""/>
                        <p>@</p>
                        <img src={Judge} alt=""/>
                    </div>
                    <div className="raleway yrow">
                        <p>November 26, 2013 - 7:00pm</p>
                        <p>Judge Memorial High School</p>
                    </div>
                </div>
                <div className="player oswald">
                    <div>Player of the Week</div>
                    <div className="xRow raleway">
                        <div className = "xImg"><img src={Kaylie} alt=""/></div>
                        <div className="xCol">
                            <p>#4 Kaylie Bartholomew</p>
                            <p>"Kaylie is driven to be the best she can be and brings out the best in her teammates."</p>
                        </div>
                    </div>
                </div>
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

let mapStateToProps = (state) => {
    const {sessionid, firstname, lastname, email, isCoach} = state;
    return (
        sessionid,
        firstname,
        lastname,
        email,
        isCoach
    )
}

export default connect(mapStateToProps, {updateSessionID, updateFirstname, updateLastname, updateEmail, updateIsCoach})(Landing)