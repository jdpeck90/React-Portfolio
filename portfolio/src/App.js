import React, { Component } from 'react';
import './App.css';
import Intro from './Components/Intro.js';

import Home from './Components/Home.js';
import NavColumn from './Components/NavColumn.js';

class App extends Component {
 

    render() {
    

      return (
        <div className="App">
          <NavColumn />
      </div>
    );
  }
}

App.defaultProps = {
  page: 'home' 
 };

export default App;
