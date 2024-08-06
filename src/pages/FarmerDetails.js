import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const FarmerDetails = () => {
  const { id } = useParams();
  const [farmer, setFarmer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFarmerDetails = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/farmers/${id}`);
        const data = await response.json();
        setFarmer(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching farmer details:', error);
        setLoading(false);
      }
    };

    fetchFarmerDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!farmer) {
    return <h2>Farmer not found</h2>;
  }

  return (
    <div>
      <h1 className="rainbow-text">{farmer.name} - {farmer.farmName}</h1>
      <p><strong>Location:</strong> {farmer.location}</p>
      <h3>Products</h3>
      <ul>
        {farmer.products.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong>: {product.description} - ${product.price}
          </li>
        ))}
      </ul>
      <p><strong>Contact:</strong> {farmer.contact}</p>
      <Link to="/farmers">Back to Farmers List</Link>
    </div>
  );
};

export default FarmerDetails;
