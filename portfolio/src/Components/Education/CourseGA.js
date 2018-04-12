import React, { Component } from 'react';

class CourseGA extends Component {

    render() { 
        return (
            <ul ref="course__generalassenbly" className="general_assembly course">
                <li className="general_assembly details_image"><img className="general_assembly" src="" /></li>
                <li className="general_assembly details_title">Web Development Immersive</li>
                <li className="general_assembly details_description">Nov 2016 - Jan 2017</li>
                <li className="general_assembly details_projects"><span><a className="gali hoverDiv" href="https://github.com/jdpeck90/Altcoin-Tracker">Altcoin Tracker</a><a className="hoverDiv" href="https://github.com/jdpeck90/Shmabble_game">Shmabble</a></span></li>
                <li className="general_assembly details_projects"><span><a className="gali hoverDiv" href="https://github.com/jdpeck90/tripplanner">Trip Planner</a></span>
                </li>
                <li><a href="https://github.com/jdpeck90/Mean-Stack-Angular-2-Movie-App"><span className="hoverDiv">Angular 2 Movie-App</span></a></li>
            </ul>
        )
    }
}
             
export default CourseGA;

