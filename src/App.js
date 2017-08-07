import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar className="App-AppBar" title="React Todo-App" />
          </div>

        </MuiThemeProvider>

        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>React Todo-App</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
