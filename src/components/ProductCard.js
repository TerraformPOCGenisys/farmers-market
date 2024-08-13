import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="discount">{product.discount} OFF</div>
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3>{product.name}</h3>
        <div className="product-price">
          <span>₹{product.price}</span>
          <span className="original-price">₹{(product.price / (1 - parseInt(product.discount) / 100)).toFixed(2)}</span>
        </div>
        <select className="quantity-select">
          <option>1 kg</option>
          <option>500 gm</option>
        </select>
      </div>
    </div>
  );
};

export default ProductCard;
