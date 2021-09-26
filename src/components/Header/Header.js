import React from 'react';
import './Header.css'
import logo from '../../images/logo.svg'

const Header = () => {
    return (
        <div className="header">
           <h2 className="fst-bold text-light ">WE ARE THE REAL HERO!!!</h2>
            <nav>
            <img className="logo" src={logo} alt="" />
                <a href="/NASA">NASA TV</a>
                <a href="/TOPICS">Topics</a>
                <a href="/Mission">Mission</a>
                <a href="/Gellery">Gallery</a>
                <a href="/About">About</a>
                <a href="/Audience">NASA Audience</a>
            </nav>
            <h2 className="text-white"><span className="text-danger">Inter</span>national Space Station</h2>
            <h4 className="text-white">Total monthly Expenses: $ 100m</h4>
        </div>
    );
};

export default Header;