import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../css/Header.css';
import Fade from 'react-reveal/Fade';
import { slide as Menu } from 'react-burger-menu';

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    handleStateChange(state) {
        this.setState({menuOpen: state.isOpen})
    }

    closeMenu() {
        this.setState({menuOpen: false});
    }

    toggleMenu() {
        this.setState({menuOpen: !this.state.menuOpen})
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    }

    render() {
        return(
            <Fade top>
            <div className="headerSection">

                <Menu
                    className="burgerMenu"
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}
                    >
                    <Link
                        activeClass="active"
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        onClick={() => this.closeMenu()}
                    >
                        About
                    </Link>
                    <Link
                        activeClass="active"
                        to="Portfolio"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        onClick={() => this.closeMenu()}
                    >
                        Portfolio
                    </Link>
                    <Link
                        activeClass="active"
                        to="Contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => this.closeMenu()}
                    >
                        Contact
                    </Link>
                </Menu>

                <div className="logo" onClick={this.scrollToTop}>
                    <h1><span 
                        className="highlightText"
                        >Erik Stacy</span> Codes</h1>
                </div>

                <nav className="navMenu">
                    <ul>
                        <li>
                            <Link
                                activeClass="active"
                                to="About"
                                spy={true}
                                smooth={true}
                                offset={-50}
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
                                offset={-20}
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
            </Fade>
        )
    }
}

export default Header