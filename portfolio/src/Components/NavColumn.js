import React, { Component } from 'react';
import PropTypes from 'prop-types';
import About from './About/AboutConnect.js';
import Connect from './Connect/Connect.js';
import Education from './Education/EducationCourses.js';
import Work from './Work/Work.js';

class NavColumn extends Component {

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
         if(this.state.page === 'about') {
            var content = <About />
          } else if(this.state.page === 'connect') {
            var content = <Connect />
          } else if(this.state.page === 'education') {
            var content = <Education />
          } else if(this.state.page === 'work') {
            var content = <Work />
          }
        return (
            <div>

            </div>
        );
    }
}

export default NavColumn;