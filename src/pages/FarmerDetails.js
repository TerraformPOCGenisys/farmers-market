import React from 'react';
import { useParams, Link } from 'react-router-dom';
import farmers from '../data/farmers';

const FarmerDetails = () => {
  const { id } = useParams();
  const farmer = farmers.find(f => f.id === parseInt(id));

  if (!farmer) {
    return <h2>Farmer not found</h2>;
  }

  return (
    <div>
      <h1 className="rainbow-text">{farmer.name} - {farmer.farmName}</h1>
      <p><strong>Location:</strong> {farmer.location}</p>
      <p><strong>Products:</strong> {farmer.products.join(', ')}</p>
      <p><strong>Contact:</strong> {farmer.contact}</p>
      <Link to="/farmers" className="back-link">Back to Farmers List</Link>
    </div>
  );
}

export default FarmerDetails;
