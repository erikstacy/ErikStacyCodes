import React, { Component } from 'react';
import '../css/Languages.css';
import AndroidIcon from '../img/android_icon.png';
import WebDevIcon from '../img/webdev_icon.png';
import CPPIcon from '../img/cpp_icon.png';

class Languages extends Component {
    render() {
        return(
            <div className="languages">
                <div className="title">
                    <a name="languages"></a>
                    <h2>Languages</h2>
                </div>

                <div className="boxes">
                    <div className="box">
                        <img src={AndroidIcon}/>
                        <h3>Android Developoment</h3>
                        <p>My main focus is on Android. I am
                            passionate about creating apps
                            that I use in my daily life.</p>
                    </div>
                    <div className="box">
                        <img src={WebDevIcon}/>
                        <h3>Web Development</h3>
                        <p>Making web sites is one of the
                            first ways I learned how to code.
                            I find that web development is a
                            great creative outlet.</p>
                    </div>
                    <div className="box">
                        <img src={CPPIcon}/>
                        <h3>C++</h3>
                        <p>This is the language I've been
                            learning and using in all of my
                            college courses so far.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Languages