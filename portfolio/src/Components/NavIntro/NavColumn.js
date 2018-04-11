import React, { Component } from 'react';
import PropTypes from 'prop-types';
import About from '../About/AboutContent.js';
import Connect from '../Connect/Connect.js';
import Education from '../Education/EducationCourse.js';
import WorkContent from '../Work/WorkContent.js';


class NavColumn extends React.Component {  

    render() {
      if (this.props.page == 'connect') {
        connectActive = 'active';
      } else if (this.props.page == 'about') {
        aboutActive = 'active';
      } else if (this.props.page == 'education') {
        educationActive = 'active';
      } else if (this.props.page == 'work') {
        workActive = 'active';
      }

      var connectActive = '';
      var aboutActive = '';
      var educationActive = '';
      var workActive = '';
    
      //highlight active menu item

        return (
            <div>
              <ul class="nav_page container">
                  <li onClick={this.props.aboutClick} className="{aboutActive} nav_menu about hoverDiv"><a href="#">{this.props.about}</a></li>
                  <li onClick={this.props.workClick} className="{workActive} nav_menu work hoverDiv"><a href="#">{this.props.work}</a></li>
                  <li onClick={this.props.educationClick} className="{educationActive} nav_menu education hoverDiv"><a href="#">{this.props.education}</a></li>
                  <li onClick={this.props.connectClick} className="{connectActive} nav_menu connect hoverDiv"><a href="#">{this.props.connect}</a></li>
              </ul>
            </div>
        );
    }
}

export default NavColumn;