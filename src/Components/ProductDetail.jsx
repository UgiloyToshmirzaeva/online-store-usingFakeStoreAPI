import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  return (
    <div className='productdetail'>
      {product ? (
        <div>
          <img src={product.image} alt={product.title} />
          <div className="details">
          <h2>{product.title}</h2>
          <p>Price: 💲{product.price}</p>
          <p>Description: {product.description}</p>
          <h3>Rating: ⭐{product.rating.rate}</h3>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
