import React, { PropTypes } from 'react';
import BorderedList from 'components/base/BorderedList';
import ProductItem from './ProductItem';

import style from './style.scss';

const ProductsList = ({ products = [], onAddToCart }) => (
  <BorderedList className={style.container}>
    {products.map((item, index) => (
      <ProductItem key={index} {...{ ...item, onAddToCart }} />
    ))}
  </BorderedList>
);

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default ProductsList;
