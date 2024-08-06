import React from 'react';
import { Link } from 'react-router-dom';
import farmers from '../data/farmers';

const Farmers = () => {
  return (
    <div>
      <h1 className="rainbow-text">Our Farmers</h1>
      <ul>
        {farmers.map(farmer => (
          <li key={farmer.id}>
            <h2>{farmer.name} - {farmer.farmName}</h2>
            <p>Location: {farmer.location}</p>
            <p>Products: {farmer.products.join(', ')}</p>
            <Link to={`/farmers/${farmer.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Farmers;
