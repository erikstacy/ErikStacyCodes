import React, { Component } from 'react';
import '../css/Contact.css';
import Fade from 'react-reveal/Fade';

class Contact extends Component {
    render() {
        return(
            <div className="contactSection" name="Contact">
            <Fade bottom duration="2000">
                <div className="contactContainer">
                    <h2>Contact Me</h2>
                    <p>
                        Phone Number: 847-533-3202
                        <br></br>
                        Email: erikstacy95@gmail.com
                    </p>
                </div>
            </Fade>
            </div>
        )
    }
}

export default Contact