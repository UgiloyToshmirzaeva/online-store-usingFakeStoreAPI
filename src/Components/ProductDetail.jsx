import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  return (
    <div className='product-detail'>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
