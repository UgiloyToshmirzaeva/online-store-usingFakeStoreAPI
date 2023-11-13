import React, { useState, useEffect } from 'react';
import './Product.css'
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className='products'>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt="" />
            <div className="title">{product.title}</div>
            <div className="price">Price: 💲 {product.price}</div>
            <div className="rating">⭐️{product.rating.rate}</div>
            <Link to={`/shop/product/${product.id}`}>SHOW MORE</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductList;
