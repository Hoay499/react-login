import React from 'react';
// import logo from './logo.svg';
  import './assets/css/App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';



import Loginregister from './components/LoginRegister/Loginregister.js';
import Index from './components/index/Index.js';
import RouterCofig from './Router/RouterCofig.js';
function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <RouterCofig />
      {/* <Loginregister/> */}
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
