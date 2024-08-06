import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Farmers = () => {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/farmers`);
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
    <div className="farmer-list">
    <h1>Farmers List</h1>
    <table className="farmer-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Farm Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {farmers.map(farmer => (
          <tr key={farmer.id}>
            <td>{farmer.id}</td>
            <td>{farmer.name}</td>
            <td>{farmer.farmName}</td>
            <td>
              <Link to={`/farmers/${farmer.id}`} className="details-link">View Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default Farmers;
