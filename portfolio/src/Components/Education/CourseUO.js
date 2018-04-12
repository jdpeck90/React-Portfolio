import React, { Component } from 'react';
import './EducationContent.css';

class CourseUO extends Component {
    constructor(props) {
        super(props);
        this.state = { page: 'education'}
    }
    render() { 
        return (
            <ul className="u_of_o course">
                <li className="u_of_o details_image"><img className="u_of_o" /></li>
                <li className="u_of_o details_title">B.S in Economics | Minor in Mandarin Chinese</li>
                <li className="u_of_o details_description">Sept 2009 - June 2013</li>
                <li className="u_of_o details_projects"><a href="#">The Effects of Income, Population and Other Variables on the Growth of <span className="hoverDiv">Philadelphia International</span> <span className="hoverDiv">Airport</span></a></li>
            </ul>
        )
    }
}
             
export default CourseUO;