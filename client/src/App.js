import React, { Component } from 'react';
import {connect} from 'react-redux';
import Routes from './routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>{Routes}</div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);
