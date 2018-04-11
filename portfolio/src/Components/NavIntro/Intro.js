import React, { Component } from 'react';


class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1 className="hero_statement"> JUSTIN PECK</h1>
                <br />
                <h4 className="hero_statemen__sub">FULL STACK <br /> DEVELOPER</h4>
            </div>
         )
    }
}

export default Intro;