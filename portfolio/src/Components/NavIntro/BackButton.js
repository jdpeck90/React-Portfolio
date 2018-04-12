import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BackButton.css';


class BackButton extends Component {
    
    render() { 
        return ( 
           <div onClick={this.props.hamburgerClick} className="hamburger">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
           </div>
         )
    }
}
 
export default BackButton;