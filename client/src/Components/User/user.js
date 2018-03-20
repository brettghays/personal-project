import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import Navbar from '../Navbar/navbar';
import {getUserInfo, updateSessionID, updateFirstname, updateLastname, updateEmail, updateIsCoach} from '../../Reducer/reducer';

class User extends Component {
    componentDidMount() {
        axios.get('/api/user')
            .then( res => {
                console.log(res.data)
                const {id, firstname, lastname, email, iscoach} = res.data

                this.props.updateSessionID(id);
                this.props.updateFirstname(firstname);
                this.props.updateLastname(lastname);
                this.props.updateEmail(email);
                this.props.updateIsCoach(iscoach);
            })
            .catch(err => console.log(err))
    }

    handleSubmit() {
        const body = {
            session_id: this.props.sessionid,
            firstname: this.props.firstname,
            lastname: this.props.lastname,
            email: this.props.email,
            iscoach: this.props.isCoach
        }
        axios.patch(`/api/user/${this.props.sessionid}`, body)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }
    
    render() {
        //const {firstname, lastname, email} = this.props.user;
        const {updateFirstname, updateLastname, updateEmail, updateIsCoach} = this.props;
        return(
            <div className="userContainer">
                <div className="header1 oswald">Create User Profile</div>

                <Navbar />

                <div className="gameCard raleway">
                    <div>
                        <span><input required type="text" placeholder='First Name' value={this.props.firstname} onChange={(e) => updateFirstname(e.target.value)}/></span> 
                        <div></div>
                        <span><input required type="text" placeholder='Last Name' value={this.props.lastname} onChange={(e) => updateLastname(e.target.value)}/></span>
                    </div>
                    
                    <div>
                        <input required type="email" placeholder='Email Address' value={this.props.email} onChange={(e) => updateEmail(e.target.value)}/>
                    </div>

                    <div>
                        <input id='isCoach' type="checkbox" value={!this.props.isCoach || this.props.isCoach === 'false' ? true : false}onChange={(e) => updateIsCoach(e.target.value)}/>
                        <label htmlFor="isCoach">Are you a coach?</label>
                    </div>
                    
                    <Link to='/'><button onClick = {() => this.handleSubmit()}>Submit Profile</button></Link>
                    {/* <Link to = '/'><button>Returning User</button></Link> */}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {user, sessionid, firstname, lastname, email, isCoach} = state
    return {
        user,
        sessionid,
        firstname,
        lastname,
        email,
        isCoach
    }
}

export default connect( mapStateToProps, { getUserInfo, updateSessionID, updateFirstname, updateLastname, updateEmail, updateIsCoach })(User);