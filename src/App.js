import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextConverter from './components/TextConverter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Text transformer made with React, just for fun.</h2>
        </div>
        <TextConverter/>
      </div>
    );
  }
}

export default App;
