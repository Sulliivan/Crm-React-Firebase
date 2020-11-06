import logo from './logo.svg';
import './App.css';
import firebase from 'firebase'

function App() {
  componentWillMount(); {
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

  return (
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
