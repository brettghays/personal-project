import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import Navbar from '../Navbar/navbar';
import {updateSessionID, updateFirstname, updateLastname, updateEmail, updateIsCoach, updateOriginalUser} from '../../Reducer/reducer';
import './user.css'

class User extends Component {
    componentDidMount() {
        axios.get('/api/user')
            .then( res => {
                console.log(res.data)
                const {session_id, firstname, lastname, email, iscoach} = res.data

                this.props.updateSessionID(session_id);
                this.props.updateFirstname(firstname);
                this.props.updateLastname(lastname);
                this.props.updateEmail(email);
                this.props.updateIsCoach(iscoach);
                this.props.updateOriginalUser(res.data)
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
        axios.patch(`/api/user/`, body)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
        document.getElementById("textfield1").value = "";
        document.getElementById("textfield2").value = "";
        document.getElementById("textfield3").value = "";
    }

    handleCancel(){
        const {
            firstname,
            lastname,
            email,
            isCoach} = this.props.original_user;

        this.props.updateFirstname(firstname);
        this.props.updateLastname(lastname);
        this.props.updateEmail(email);
        this.props.updateIsCoach(isCoach);
        document.getElementById("textfield1").value = "";
        document.getElementById("textfield2").value = "";
        document.getElementById("textfield3").value = "";
        
    }

    
    render() {
        //const {firstname, lastname, email} = this.props.user;
        const {updateFirstname, updateLastname, updateEmail, updateIsCoach} = this.props;
        return(
            <div className="userContainer">
                <div className="header oswald">Edit User Profile</div>

                <Navbar />

                <div className="user-profile title raleway">
                    <div className="user-top-row">
                        <div className="name">{this.props.firstname} {this.props.lastname}</div>
                        <input disabled={!this.props.isCoach} type="text" id="textfield1"placeholder='First Name' onChange={(e) => updateFirstname(e.target.value)}/> <input disabled={!this.props.isCoach} type="text" id="textfield2" placeholder="Last Name" onChange={(e) => updateLastname(e.target.value)}/>
                    </div>
                    
                    <div className="user-middle-row">
                        <div className="email">{this.props.email}</div>
                        <input disabled={!this.props.isCoach} type="text" id="textfield3"placeholder='Email' onChange={(e) => updateEmail(e.target.value)}/>
                    </div>

                    <div className="user-bottom-row">
                        <input id='isCoach' type="checkbox" value={!this.props.isCoach || this.props.isCoach === 'false' ? true : false}onChange={(e) => updateIsCoach(e.target.value)} checked = {this.props.isCoach}/>
                        <label htmlFor="isCoach">Are you a coach?</label>
                    </div>
                    
                    <div className="button-wrapper">
                        <Link to='/'><button className="buttons save"onClick = {() => this.handleSubmit()}>Submit Profile</button></Link>
                        <button className="buttons cancel" onClick={() => this.handleCancel()}>Cancel Changes</button>   
                    </div>
                    
                    {/* <Link to = '/'><button>Returning User</button></Link> */}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {original_user, sessionid, firstname, lastname, email, isCoach} = state
    return {
        original_user,
        sessionid,
        firstname,
        lastname,
        email,
        isCoach
    }
}

export default connect( mapStateToProps, {updateSessionID, updateFirstname, updateLastname, updateEmail, updateIsCoach, updateOriginalUser })(User);