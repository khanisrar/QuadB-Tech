import React, { useState } from 'react';

import { Link } from 'react-router-dom'


const Navbar = () => {


    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };


    return (
        <>
            <nav className="navbar">
                <div className="logo">QuadB Tech</div>

                <ul className="navlinks">
                    <li>
                        <Link to='/'
                        >
                            Movies List
                        </Link>
                    </li>
                </ul>

                <div className="bars">
                    <button
                        className="bars-btn"
                        onClick={toggleMobileMenu}
                    >
                        &#9776;
                    </button>
                </div>

                {isMobileMenuOpen && <ul className="navlinks-mobile">
                    <li>
                        <Link to='/'
                        >
                            Movies List
                        </Link>
                    </li>



                </ul>}
            </nav>

        </>
    )
}

export default Navbar;