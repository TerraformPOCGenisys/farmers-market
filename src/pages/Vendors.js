import React from 'react';

const Vendors = () => {
  const vendors = [
    { id: 1, name: 'John\'s Farm' },
    { id: 2, name: 'Sally\'s Orchard' },
    // More vendors...
  ];

  return (
    <div>
      <h1>Our Vendors</h1>
      <ul>
        {vendors.map(vendor => (
          <li key={vendor.id}>{vendor.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Vendors;
