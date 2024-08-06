import React from 'react';

const Products = () => {
  // Ideally, you'd fetch this data from an API
  const products = [
    { id: 1, name: 'Apples', price: '$2/lb' },
    { id: 2, name: 'Carrots', price: '$1/lb' },
    // More products...
  ];

  return (
    <div>
      <h1>Available Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
