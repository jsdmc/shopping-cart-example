import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ProductsList from 'components/ProductsList';
import { addProductToCart } from 'redux-base/actions/shoppingCart';
import { getProducts } from 'redux-base/selectors/productsList';

export const ProductsListPage = ({ dispatch, products }) => (
  <div>
    <div>Products list page</div>
    <ProductsList
      products={products}
      onAddToCart={id => dispatch(addProductToCart(id))}
    />
  </div>
);

ProductsListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  products: getProducts(state)
});

export default connect(mapStateToProps)(ProductsListPage);
