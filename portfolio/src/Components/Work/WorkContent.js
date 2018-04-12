import React, {Component} from 'react';

class WorkContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'work'
        }
    }

    render() {
        return (
            <div class="work_page container">
                <div class="work_title">
                    <h1>WORK</h1>
                </div>
                <div class="work_body">
                    <ul personalenter={this.handleProfesionalEnter} class='work_list pro'>
                        <h3>PROFESSIONAL WORK</h3>
                        <li class='steelys work_item hoverDiv'>
                            <a href="http://steelysdrinkware.com/">Steelys Drinkware</a>
                        </li>
                        <li class='eco work_item hoverDiv'>
                            <a href="http://www.ecoimprints.com/">Eco Imprints</a>
                        </li>
                    </ul>
   
                    <ul class='work_list'>|</ul>
                    <ul personalenter={this.handlePersonalEnter} class='work_list per'>
                        <h3>PERSONAL PROJECTS</h3>
                        <li class='shmabble work_item'>
                            <a class='necro_app hoverDiv' href='https://github.com/jdpeck90/Necromancer'>Necromancer</a>
                            --
                            <a class='necro_source hoverDiv' href='https://github.com/jdpeck90/Necromancer'>Source Code</a>
                        </li>
                        <li class='altcoin work_item'>
                            <a
                                class='twister_app hoverDiv'
                                href="https://github.com/jdpeck90/Alexa-Hackathon-Twister-App">Alexa Twister Spinner</a>
                            --
                            <a
                                class='twister_source hoverDiv'
                                href="https://github.com/jdpeck90/Alexa-Hackathon-Twister-App">Source Code</a>
                        </li>
                    </ul>
                </div>
                <div class='work_description'>
                    <div class='shmabble_details'>
                        <p></p>
                    </div>
                    <div class='altcoin_details'>
                        <p>
                            altcoin description
                        </p>
                    </div>
                    <div class='tripplanner_details'>
                        <p>
                            tripplanner description
                        </p>
                    </div>
                    <div class='steelys_details'>
                        <p></p>
                    </div>
                    <div class='eco_details'>
                        <p>
                            eco imprints description
                        </p>
                    </div>
                </div>
            </div>

        )
    }
}

export default WorkContent;