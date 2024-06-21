import React from 'react';
import product from '../Product';

function DetailProduct() {
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default DetailProduct;
