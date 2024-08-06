import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Vendors from './pages/Vendors';
import Contact from './pages/Contact';
import Farmers from './pages/Farmers';  // Import Farmers Page
import FarmerDetails from './pages/FarmerDetails';  // Import FarmerDetails Page

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/farmers">Farmers</Link> |  {/* Add Farmers Link */}
        <Link to="/products">Products</Link> | 
        {/* <Link to="/vendors">Vendors</Link> |  */}
        <Link to="/contact">Contact</Link>
      </nav>
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
