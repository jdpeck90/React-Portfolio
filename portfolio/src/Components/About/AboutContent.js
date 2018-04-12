import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AboutContent extends Component {
    constructor(props) {
        super(props);
        this.state = { page : 'about'}
    }
    
    render() {
        return (
                 <div className="about_page container">
                    <div className="about_body">
                        <h1>HI I'M JUSTIN</h1>
                        <p>I am a software developer in Philadelphia, PA.</p>
                        <br />
                        <p>I am currently enrolled in General Assembly's WDI Bootcamp course focusing on fullstack web development in Javascript and Ruby.</p>
                        <p>I love to spend my free time on a skateboard, finding new music or in the kitchen.</p>
                        <p>Some of my favorite development tools are React.js, Redux, Ruby on Rails, D3.js, and SQL.</p>
                        <p>Find my full resume <a class="hoverDiv" href="../../images/justinpeck_resume.pdf" download>HERE</a></p>
                    </div>
                </div>
            );
    }
}

export default AboutContent;