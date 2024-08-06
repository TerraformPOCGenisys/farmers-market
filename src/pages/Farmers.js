import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Farmers = () => {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        const response = await fetch('https://localhost:7234/api/farmers');
        const data = await response.json();
        setFarmers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching farmers:', error);
        setLoading(false);
      }
    };

    fetchFarmers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

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
};

export default Farmers;
