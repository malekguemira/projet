import React from 'react';
import { useNavigate } from 'react-router-dom';
import product from '../Product';

function ListProducts() {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate('/DetailProduct');
  };

  return (
    <div>
      <h2>List of Products</h2>
      <div onClick={handleProductClick} style={{ cursor: 'pointer' }}>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  );
}

export default ListProducts;

