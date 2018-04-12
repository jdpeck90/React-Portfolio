import React, { Component } from 'react';
import './EducationContent.css';
import CourseAA from './CourseAA.js';
import CourseGA from './CourseGA.js';
import CourseUO from './CourseUO.js';




class EducationCOntent extends Component {
    constructor(){
        super();
                 
                  this.state = { showItems:[]}
      }
          
      onClick(index){
        let showItems = this.state.showItems.slice(0);
        showItems[index] = !showItems[index];
        this.setState({showItems});
      }
    
    
    render() { 
        return (
            <div className="education_page container">
                <div className="education_title">
                    <h1>EDUCATION</h1>
                </div>
                <div className="education_body">
                    <ul className='education_list'>
                        <li onClick={this.onClick.bind(this,0)} className="ed_item ed_ga hoverDivLG"><a href="#">General Assembly</a></li>
                        <li onClick={this.onClick.bind(this,1)} className="ed_item ed_aa hoverDivLG"><a href="#">App Academy</a></li>
                        <li onClick={this.onClick.bind(this,2)} className="ed_item ed_uo hoverDivLG"><a href="#">University of Oregon</a></li>
                       
                    </ul>
                </div>
                <div className="education_body">
                    <ul className='education_list'>
                        <li> {this.state.showItems[0] ? <CourseUO /> : null} </li>
                        <li> {this.state.showItems[1] ? <CourseGA /> : null} </li>
                        <li>  {this.state.showItems[2] ? <CourseAA /> : null} </li>
                    </ul>
              </div>
            </div>
          )
    }
}
 
export default EducationCOntent;