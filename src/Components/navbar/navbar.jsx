import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { useNavigate, useLocation } from 'react-router-dom';

import './navbar.css'

export default function Navbar() {

    const navigate = useNavigate();
    const location = useLocation(); 

    const handleNavigate = (path) => () => {
        navigate(path);
    };

    return (
        <div className='navbar'>
            <div className='navbar_logo'>
                <button>FieldFinder</button>
            </div>
            <div className='navbar_center_items'>
                <button>Fields Near You</button>
                <button>Find Players</button>
                <button>About Us</button>
            </div>
            <div className='navbar_end_items'>
                <button className='sign_in_button' onClick={handleNavigate('/login')}>Sign In</button>
                <button className='cart_button'><IoCartOutline/></button>
            </div>
        </div>
    )
}