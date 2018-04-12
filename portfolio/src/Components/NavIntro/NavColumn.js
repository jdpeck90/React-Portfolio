import React, { Component } from 'react';
import About from '../About/AboutContent.js';
import Connect from '../Connect/Connect.js';
import Education from '../Education/EducationCourse.js';
import WorkContent from '../Work/WorkContent.js';


class NavColumn extends React.Component {  
  constructor(props) {
    super(props);
    this.state = { page : 'navcolumn'}

   
  }

 

    render() {
      // var connectActive = '';
      // var aboutActive = '';
      // var educationActive = '';
      // var workActive = '';
    
      // if (this.state.page == 'connect') {
      //   connectActive = 'active';
      // } else if (this.state.page == 'about') {
      //   aboutActive = 'active';
      // } else if (this.state.page == 'education') {
      //   educationActive = 'active';
      // } else if (this.state.page == 'work') {
      //   workActive = 'active';
      // }


      //highlight active menu item

        return (
            <div>
              <ul className="nav_page container">
                  <li className="{aboutActive} nav_menu about hoverDiv"><a onClick={this.props.aboutClick} href="#">{this.props.about}</a></li>
                  <li className="{workActive} nav_menu work hoverDiv"><a onClick={this.props.workClick} href="#">{this.props.work}</a></li>
                  <li className="{educationActive} nav_menu education hoverDiv"><a onClick={this.props.educationClick} href="#">{this.props.education}</a></li>
                  <li className="{connectActive} nav_menu connect hoverDiv"><a onClick={this.props.connectClick} href="#">{this.props.connect}</a></li>
              </ul>
            </div>
        );
    }
}



NavColumn.defaultProps = {
  about: 'About', 
  work: 'Work',
  education: 'Education',
  connect: 'Connect' 
};

export default NavColumn;