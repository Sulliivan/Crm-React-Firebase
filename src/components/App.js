import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import data from '../data.json';
import Grid from './Grid';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data };
  }
 
  componentWillMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyCgKO7Z8iBa1BwQmA38Fkf-pAjVRj356rc",
        authDomain: "crm-react-4d9ba.firebaseapp.com",
        databaseURL: "https://crm-react-4d9ba.firebaseio.com",
        projectId: "crm-react-4d9ba",
        storageBucket: "crm-react-4d9ba.appspot.com",
        messagingSenderId: "521868781544",
        appId: "1:521868781544:web:c8ad48569148210fbc665d",
        measurementId: "G-P041GX7YEV"
    })
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="blue lighten-2">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo center">Contacts</a>
            </div>
          </nav>
        </div>
        <div>
          <Grid items={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default App;
