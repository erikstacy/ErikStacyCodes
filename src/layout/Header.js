import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../css/Header.css';

class Header extends Component {

    scrollToTop = () => {
        scroll.scrollToTop();
    }

    render() {
        return(
            <div className="headerSection">
                <div className="logo" onClick={this.scrollToTop}>
                    <h1><span className="highlightText">Erik Stacy</span> Codes</h1>
                </div>

                <nav>
                    <ul>
                        <li>
                            <Link
                                activeClass="active"
                                to="About"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="Portfolio"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="Contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header

