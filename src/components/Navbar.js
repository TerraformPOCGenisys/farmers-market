import React, { useState } from 'react';
import '../Navbar.css';

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
      <div className="nav-root">
<header className="navbar-container">
            <nav className="navbar">
                <div className="logo-container">
                    <a href="/" className="logo">Farmers Market</a>
                </div>
                <div className="search-container">
                    <input type="text" placeholder="Search for Products..." />
                </div>
                <div className="category-container">
                    <button className="category-button" onClick={toggleDropdown}>
                        Shop by Category
                    </button>
                    {showDropdown && (
                        <div className="dropdown-menu">
                            <button>Fruits</button>
                            <button>Vegetables</button>
                        </div>
                    )}
                </div>
                <div className="login-signup-container">
                    <button className="login-signup">Login/Sign Up</button>
                </div>
            </nav>
        </header>
      </div>
        
    );
}

export default Navbar;
