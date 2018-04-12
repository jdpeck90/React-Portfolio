import React, { Component } from 'react';
import './App.css';
import Intro from './Components/NavIntro/Intro.js';
import NavColumn from './Components/NavIntro/NavColumn.js';
import BackButton from './Components/NavIntro/BackButton.js'
import WorkContent from './Components/Work/WorkContent.js'
import AboutContent from './Components/About/AboutContent.js'
import EducationContent from './Components/Education/EducationContent.js'
import Connect from './Components/Connect/Connect.js'

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = { page: 'intro',
      showItems: []
                }

    this.handleOnClick = this.handleOnClick.bind(this)
    this.handleAboutClick = this.handleAboutClick.bind(this)
    this.handleConnectClick = this.handleConnectClick.bind(this)
    this.handleEducationClick = this.handleEducationClick.bind(this)
    this.handleWorkClick = this.handleWorkClick.bind(this)


  }

  handleOnClick(e) {
    console.log('hi from handleOnCLick',e)
    console.log('this from handleOnCLick',this.state)
    if(this.state.page == 'intro'){
      this.setState({ page: 'navcolumn'})
    } else if (this.state.page == 'navcolumn'){
      this.setState({ page: 'intro'})
    } else if (this.state.page == 'about') {
      this.setState({ page: 'navcolumn'}) 
    } else if (this.state.page == 'education') {
      this.setState({ page: 'navcolumn'}) 
    } else if (this.state.page == 'connect') {
      this.setState({ page: 'navcolumn'}) 
      } else if (this.state.page == 'work') {
      this.setState({ page: 'navcolumn'}) 
      } 
    }

  handleAboutClick() {
      console.log('about')
    this.setState({ page: 'about'})
  }
  handleConnectClick() {
      console.log('connect')
    this.setState({ page: 'connect'})
  }
  handleEducationClick() {
      console.log('education')
    this.setState({ page: 'education'})
  }
  handleWorkClick() {
    this.setState({ page: 'work'})
  }

    onClick(index){
    console.log('​App -> onClick -> index', index);
      
      let showItems = this.state.showItems.slice(0);
      showItems[index] = !showItems[index];
      this.setState({showItems});
    }
  render() {
      if(this.state.page === 'intro') {
        var page = <Intro />;
      } else if (this.state.page === 'navcolumn'){
        var page = <NavColumn   aboutClick={this.handleAboutClick}
                                workClick={this.handleWorkClick}
                                educationClick={this.handleEducationClick}
                                connectClick={this.handleConnectClick} />;
      } else if (this.state.page === 'about'){
            var page = <AboutContent />
      } else if (this.state.page === 'connect') {
        var page = <Connect />
      } else if (this.state.page === 'education') {
          var page = <EducationContent 
                  onClick={this.onClick}
              
                  
          />
      } else if (this.state.page === 'work') {
          var page = <WorkContent
                personalenter={this.handlePersonalEnter}
                professionalenter={this.handleProfessionalEnter}
           />
      }
        
      return (       
        <div className="App">
          <BackButton hamburgerClick={this.handleOnClick} />
          {page}
          
      </div>
    );
  }
}

App.defaultProps = {
  page: 'home' 
 };

export default App;
