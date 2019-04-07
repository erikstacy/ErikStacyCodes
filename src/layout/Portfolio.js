import React, { Component } from 'react';
import '../css/Portfolio.css';
import OLIcon from '../img/ol_icon.png';
import ESCIcon from '../img/erikstacycodes_icon.png';

class Portfolio extends Component {
    render() {
        return(
            <div className="portfolio">
                <div className="title">
                    <h2>Portfolio</h2>
                    <a name="portfolio"></a>
                </div>

                <div className="portfolioContent">
                    <div className="projectsContainer">
                        <div className="project">
                            <img src={OLIcon}/>
                            <div className="projectBody">
                                <h3>Organized Life</h3>
                                <p>An app that offers a more organized
                                    daily life. This app keeps track of
                                    the notes, todos, and events of each
                                    individual day. This makes it much
                                    easier to remember everything you need
                                    to do and everything you need to
                                    remember. Creating this app changed my
                                    life for the better. Ever since I started
                                    using it, I've been more on task and
                                    focused.
                                </p>
                            </div>
                        </div>
                        <div className="project2">
                            <div className="projectBody">
                                <h3>Erik Stacy Codes</h3>
                                <p>
                                    My own personal website, and the one that
                                    you're on now! I made this to show what
                                    I can do as a web developer. I'ts a project
                                    I plan to work on forever. The latest version
                                    was made in March 2019.
                                </p>
                            </div>
                            <img src={ESCIcon}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio