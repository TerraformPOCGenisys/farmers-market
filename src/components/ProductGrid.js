import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/data';

const ProductGrid = () => {
  return (
    <div className="product-root">
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
