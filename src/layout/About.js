import React, { Component } from 'react';
import '../css/About.css';
import pictureofme from '../img/pictureofme.jpg';
import Fade from 'react-reveal/Fade';

class About extends Component {
    render() {
        return(
            <div className="aboutSection" name="About">
                <div className="aboutContainer">
                <Fade left duration="2000">
                    <img src={pictureofme} />
                </Fade>
                <Fade right duration="2000">
                    <div className="textSection">
                        <h2>About Me</h2>
                        <p>
                            Hey! My name is Erik, I'm currently
                            pursuing a bachelor's degree in Computer
                            Science with an emphasis in Software
                            Development. I spend a lot of my free time
                            building website and apps because it is
                            something that I'm passionate about. I'm
                            creative by nature and passionate at my core.
                            <br></br>
                            <br></br>
                            The languages I've learned so far are
                            HTML/CSS, Javascript, React, XML/Java, C++,
                            and SQL.
                        </p>
                    </div>
                </Fade>
                </div>
            </div>
        )
    }
}

export default About