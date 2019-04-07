import React, { Component } from 'react';
import '../css/About.css';

class About extends Component {
    render() {
        return(
            <div className="about">
                <div className="aboutSection">
                    <div className="aboutBox">
                        <div className="title">
                            <h2>About</h2>
                        </div>

                        <div className="aboutContent">
                            <p>
                                Hey, my name is Erik Stacy. I'm currently
                                pursuing a bachelor's in Computer Science
                                at Northern Illinois University. My particular
                                interest is in Android Development. I would
                                bring value to your company because I'm
                                passionate about what I do, I work hard to
                                achieve my goals, and I have a knack for self
                                learning.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="contactSection">
                    <div className="contactBox">
                        <div className="title">
                            <h2>Contact</h2>
                        </div>

                        <div className="contactContent">
                            <p><span className="highlightText">Name: </span>Erik Stacy</p>
                            <p><span className="highlightText">Number: </span>847-533-320</p>
                            <p><span className="highlightText">Email: </span>erikstacy95@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default About