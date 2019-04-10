import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Controls from './controls'
import DZController from './dzcontroller'

class App extends Component {
  render() {
    return (
    <div className="App">

        <DZController/>
        {/* <header className="App-header"> */}
            {/* <img src={logo} className="App-logo" alt="logo" />
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
            </a> */}
            <Controls title="Login"/>&nbsp;
            <p>Deezer - Fleetwood Mac</p>
            <Controls title="Previous"/>&nbsp;
            <Controls title="Play"/>&nbsp;
            <Controls title="Stop"/>&nbsp;
            <Controls title="Next"/>&nbsp;
        {/* </header> */}
    </div>
    );
  }
}

export default App;
