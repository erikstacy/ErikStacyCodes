import React, { Component } from 'react';
import '../css/Contact.css';
import Fade from 'react-reveal/Fade';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faLinkedinIn,
    faInstagram,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';

class Contact extends Component {
    render() {
        return(
            <div className="contactSection" name="Contact">
            <Fade bottom duration="2000">
                <div className="contactContainer">
                    <h2>Contact Me</h2>
                    <p>
                        Phone Number: 847-533-3202
                    </p>
                    <p>
                        Email: erikstacy95@gmail.com
                    </p>
                    <div className="iconContainer">
                        <a href="https://github.com/erikstacy">
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="2x"
                                style={{
                                        color: '#d8de20',
                                        marginRight: '20px'
                                    }}
                                className="icon"
                                />
                        </a>
                        <a href="https://www.linkedin.com/in/erik-stacy-37a8b3181">
                            <FontAwesomeIcon
                                icon={faLinkedinIn}
                                size="2x"
                                style={{
                                        color: '#d8de20',
                                        marginRight: '20px'
                                    }}
                                className="icon"
                                />
                        </a>
                        <a href="https://www.instagram.com/erik_stacy/">
                            <FontAwesomeIcon
                                icon={faInstagram}
                                size="2x"
                                style={{
                                        color: '#d8de20',
                                        marginRight: '20px'
                                    }}
                                className="icon"
                                />
                        </a>
                        <a href="https://twitter.com/stacy_erik">
                            <FontAwesomeIcon
                                icon={faTwitter}
                                size="2x"
                                style={{
                                        color: '#d8de20',
                                    }}
                                className="icon"
                                />
                        </a>
                    </div>
                </div>
            </Fade>
            </div>
        )
    }
}

export default Contact