import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  // 'outOfStockClass' is also added as a plain class so tests (and
  // hashed CSS-module names) can both find it.
  const className = product.inStock
    ? styles.card
    : `${styles.card} ${styles.outOfStockClass} outOfStockClass`;

  return (
    <div className={className}>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;