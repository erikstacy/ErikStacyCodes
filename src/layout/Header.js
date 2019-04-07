import React, { Component } from 'react';
import '../css/Header.css';

class Header extends Component {
    render() {
        return(
            <div className="headerSection">
                <div className="logo">
                    <h1><span className="highlightText">Erik Stacy</span> Codes</h1>
                </div>

                <nav>
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Languages</a></li>
                        <li><a href="/">Portfolio</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header