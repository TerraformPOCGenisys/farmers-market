import React from 'react';
import freshProduce from '../assets/images/fresh-produce.jpg';
import localGoods from '../assets/images/local-goods.jpg';
import marketStall from '../assets/images/market-stall.jpg';
import ProductGrid from '../components/ProductGrid';

import './Home.css'; // Create this CSS file to style the images

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="rainbow-text">Welcome to the Farmers Market</h1>
      <p>Your source for fresh produce and local goods!</p>
      {/* <div className="image-gallery"> */}
      <div className="container">
        <ProductGrid />
      </div>
      {/* </div> */}
    </div>
  );
}

export default Home;
