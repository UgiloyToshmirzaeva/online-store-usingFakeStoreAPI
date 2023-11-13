import React, { useState, useEffect } from 'react';
import './Showcase.css'

const Showcase = () => {
  const [currentProduct, setCurrentProduct] = useState(null);

  
  useEffect(() => {  
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setCurrentProduct(data[Math.floor(Math.random() * data.length)]))
      .catch(error => console.error('Error fetching product:', error));
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
