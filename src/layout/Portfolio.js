import React, { Component } from 'react';
import '../css/Portfolio.css';
import Fade from 'react-reveal/Fade';

class Portfolio extends Component {
    render() {
        return(
            <div className="portfolioSection" name="Portfolio">
                <div className="portfolioContainer">
                <Fade top duration="2000">
                    <h2>Portfolio</h2>
                </Fade>

                <Fade left duration="2000">
                    <div className="project">
                        <div className="olIcon"></div>
                        <div className="projectBody">
                            <h3>Organized Life</h3>
                            <p>
                                An app that offers a more organized
                                daily life. It keeps track of
                                the notes, todos, and events of each
                                individual day. There's also a section
                                to keep track of your events for the month,
                                and a section for general notes.
                            </p>
                        </div>
                    </div>
                </Fade>

                <Fade right duration="2000">
                    <div className="project2">
                        <div className="projectBody">
                            <h3>Erik Stacy Codes</h3>
                            <p>
                                My own personal website, and the one that
                                you're on now! I made this to show what
                                I can do as a web developer. I'ts a project
                                I plan to improve forever. The latest version
                                was made in April 2019.
                            </p>
                        </div>
                        <div className="escIcon"></div>
                    </div>
                </Fade>
                </div>
            </div>
        )
    }
}

export default Portfolio