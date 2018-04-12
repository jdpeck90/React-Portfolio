import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Connect extends Component {
    constructor(props) {
        super(props);
        this.state = { page: 'connect'}
    
    }
    
    render() {
        return (
            <div class="connect_page container">
                <ul class="connect_list">
                    <li class="github social hoverDivLG"><a href="https://github.com/jdpeck90" target="_blank">GITHUB</a></li>
                    <li class="linked_in social hoverDivLG"><a href="https://www.linkedin.com/in/jdpeck90" target="_blank">LINKEDIN</a></li>
                    <li class="stack_overflow social hoverDivLG"><a href="http://stackoverflow.com/users/7162568/wombeez?tab=profile" target="_blank">STACK OVERFLOW</a></li>
                    <li class="twitter social hoverDivLG"><a href="https://twitter.com/Wombeez" target="_blank">TWITTER</a></li>
                    <li class="email social hoverDivLG"><a href="#">EMAIL</a></li>
                </ul>
            </div>
            );
    }
}

export default Connect;