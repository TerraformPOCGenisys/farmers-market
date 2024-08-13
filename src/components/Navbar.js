import React, { useState } from 'react';
import '../Navbar.css';

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div>Farmers Market</div>
      <div className="search-and-buttons">
        <div className="search-container">
          <input type="text" placeholder="Search for Products..." />
          <button>Search</button>
        </div>
        <div className="category-dropdown">
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
        <button className="login-signup">Login/Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
