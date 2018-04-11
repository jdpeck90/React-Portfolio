import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BackButton extends Component {
    
    render() { 
        return ( 
            <button class="hamburger" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
         )
    }
}
 
export default BackButton;