import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from './logo_Main.jpg';
import './Navbar.css';
// import './sample.css'
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className='app_nav'>
            <div className='logo_set'>
                <img src={logo} alt="Restaurant logo" />
            </div>
            <ul className='app_nav_links'>
                <li className='c1_links'><a href="#home">Home</a></li>
                <li className='c1_links'><a href="#about">About</a></li>
                <li className='c1_links'><a href="#menu">Menu</a></li>
                <li className='c1_links'><a href="#Awards">Awards</a></li>
                <li className='c1_links'><a href="#contact">Contact</a></li>
            </ul>
            <div className='app_nav_login'>
                <a href="#login" className='c1_links1'>Log In/Register</a>
                <div />
                <a href="/" className='c1_links2'>Book</a>
            </div>
            <div className="hamburger-menu">
                <GiHamburgerMenu onClick={toggleMenu} />

                {isOpen && (
                    <div className="menu-items">
                        <ul>
                            <li className='c1_links'><a href="#home">Home</a></li>
                            <li className='c1_links'><a href="#about">About</a></li>
                            <li className='c1_links'><a href="#menu">Menu</a></li>
                            <li className='c1_links'><a href="#Awards">Awards</a></li>
                            <li className='c1_links'><a href="#contact">Contact</a></li>
                        </ul>
                        <MdOutlineRestaurantMenu fontSize={27} className='nav_overlay' onClick={toggleMenu} />
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
