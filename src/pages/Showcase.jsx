import React, { useState, useEffect } from 'react';
import './Showcase.css'

const Showcase = () => {
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    const fetchRandomProduct = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        const randomIndex = Math.floor(Math.random() * data.length);
        setCurrentProduct(data[randomIndex]);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchRandomProduct();

    const interval = setInterval(fetchRandomProduct, 86400000); //24h

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='showcase'>
      {currentProduct ? (
        <div>
          <h2>Today's Featured Product:</h2>
          <h3>{currentProduct.title}</h3>
          <p>Price: ${currentProduct.price}</p>
          <img src={currentProduct.image} alt="" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Showcase;
