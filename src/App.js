import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Farmers from './pages/Farmers';  // Import Farmers Page
import FarmerDetails from './pages/FarmerDetails';  // Import FarmerDetails Page
import './App.css';
import './Navbar.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="nav-root">
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/farmers">Farmers</Link> |  {/* Add Farmers Link */}
          <Link to="/products">Products</Link> |
          {/* <Link to="/vendors">Vendors</Link> |  */}
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/vendors" element={<Vendors />} /> */}
        <Route path="/farmers" element={<Farmers />} />  {/* Add Farmers Route */}
        <Route path="/farmers/:id" element={<FarmerDetails />} />  {/* Add FarmerDetails Route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
