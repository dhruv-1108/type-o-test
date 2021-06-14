import React from 'react';
import logo from './../../Assets/keyboard.png'
import './Nav.css';

const Nav = () => {
    return (
        <div className = "nav-container">
            <div className = "nav-left">
                <img src= {logo} alt="Logo" className = "type-logo" />
                <p className="type-logo-text">Type-o-Test</p>
            </div>
        </div>
    )
}

export default Nav;