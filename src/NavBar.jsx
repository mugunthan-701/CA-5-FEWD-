import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import logo from "./assets/Kalvium-Logo-SVG.svg"
import './App.css'
import axios from 'axios';

function NavBar({ setQuery }) {
    return (
        <nav id='nav-bar'>
            <div>
                <Link to='/' >                                         
                    <img id='logo' src={logo} alt="" />
                </Link>                                         
            </div>
            <input type="text" placeholder='SearchBar' name="" id="searchbar" onChange={(e) => setQuery(e.target.value)} />
            <div id='register-btn-div'>
                <button id='register-btn'><Link to='/Registration'>Register</Link></button>
            </div>
        </nav>
    )
}

export default NavBar