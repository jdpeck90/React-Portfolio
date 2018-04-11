import React, { Component } from 'react';
import './App.css';
import Intro from './Components/NavIntro/Intro.js';
import NavColumn from './Components/NavIntro/NavColumn.js';
import BackButton from './Components/NavIntro/BackButton.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 'intro' }

    this.handleAboutClick = this.handleAboutClick.bind(this)
    this.handleConnectClick = this.handleConnectClick.bind(this)
    this.handleEducationClick = this.handleEducationClick.bind(this)
    this.handleWorkClick = this.handleWorkClick.bind(this)
  }

  handleAboutClick() {
    this.setState({ page: 'about' })
  }

  handleConnectClick() {
    this.setState({ page: 'connect' })
  }

  handleEducationClick() {
    this.setState({ page: 'education' })
  }

  handleWorkClick() {
    this.setState({ page: 'work' })
  }
  
  render() {


      return (

       
        <div className="App">
          <BackButton />
          <Intro />
      </div>
    );
  }
}

App.defaultProps = {
  page: 'home' 
 };

export default App;
