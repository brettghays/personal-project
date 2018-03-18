import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {getUserInfo, updateFirstname, updateLastname, updateEmail, updateIsCoach} from '../../Reducer/reducer';

class User extends Component {
    componentDidMount() {
        axios.get('/api/auth/me')
            .then( res => {
                console.log(res.data)
            })
    }
    handleSubmit() {

    }

    render() {
        //const {firstname, lastname, email} = this.props.user;
        const {updateFirstname, updateLastname, updateEmail, updateIsCoach} = this.props;
        return(
            <div className="userContainer">
                <div className="header1 oswald">Create User Profile</div>

                <div className="navbar oswald"></div>

                <div className="profileCard raleway">
                    <div>
                        <span><input required type="text" placeholder='First Name' value={this.props.user.firstname} onChange={(e) => updateFirstname(e.target.value)}/></span> 
                        <span><input required type="text" placeholder='Last Name' value={this.props.user.lastname} onChange={(e) => updateLastname(e.target.value)}/></span>
                    </div>
                    
                    <div>
                        <input required type="email" placeholder='Email Address' value={this.props.user.email} onChange={(e) => updateEmail(e.target.value)}/>
                    </div>

                    <div>
                        <input id='isCoach' type="checkbox" value={!this.props.isCoach || this.props.isCoach === 'true' ? false : true}onChange={(e) => updateIsCoach(e.target.value)}/>
                        <label htmlFor="isCoach">Are you a coach?</label>
                    </div>
                    
                    <Link to='/'><button>Submit Profile</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {user, firstname, lastname, email, isCoach} = state
    return {
        user,
        firstname,
        lastname,
        email,
        isCoach
    }
}

export default connect( mapStateToProps, { getUserInfo, updateFirstname, updateLastname, updateEmail, updateIsCoach })(User);