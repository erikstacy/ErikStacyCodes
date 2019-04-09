import React, { Component } from 'react';
import '../css/About.css';
import pictureofme from '../img/pictureofme.jpg';

class About extends Component {
    render() {
        return(
            <div className="aboutSection">
                <div className="aboutContainer">
                    <img src={pictureofme} />
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
                </div>
            </div>
        )
    }
}

export default About