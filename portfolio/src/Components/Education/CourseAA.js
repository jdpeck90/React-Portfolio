import React, { Component } from 'react';
import './EducationContent.css';

class CourseAA extends Component {
    constructor(props) {
        super(props);
        this.state = { page: 'education'}
    }
    render() { 
        return (
            <ul ref="course_appacademy" className="app_academy course">
                <li className="app_academy details_image"><img className="app_academy" /></li>
                <li className="app_academy details_title">Javascript intensive bootcamp prep course</li>
                <li className="app_academy details_description">Sept - Nov 2016</li>
                <li className="app_academy details_projects hoverDiv">Final Project</li>
            </ul>
        )
    }
}
             
export default CourseAA;