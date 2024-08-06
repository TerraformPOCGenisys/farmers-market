import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const FarmerDetails = () => {
  const { id } = useParams();
  const [farmer, setFarmer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFarmerDetails = async () => {
      try {
        const response = await fetch(`https://localhost:7234/api/farmers/${id}`);
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
      <p><strong>Products:</strong> {farmer.products.join(', ')}</p>
      <p><strong>Contact:</strong> {farmer.contact}</p>
      <Link to="/farmers">Back to Farmers List</Link>
    </div>
  );
};

export default FarmerDetails;
