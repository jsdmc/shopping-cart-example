import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getSelectedProductsCount } from 'redux-base/selectors/shoppingCart';
import { NavigationBar } from 'components';

import style from './style.scss';

export const CoreLayout = ({ children, selectedProductsCount }) => (
  <div className={style.container}>
    <NavigationBar
      className={style.navigationBar}
      selectedProductsCount={selectedProductsCount}
    />
    <div className={style.children}>
      {
        children
      }
    </div>
  </div>
);

CoreLayout.propTypes = {
  children: PropTypes.node,
  selectedProductsCount: PropTypes.number
};

const mapStateToProps = state => ({
  selectedProductsCount: getSelectedProductsCount(state)
});

export default connect(mapStateToProps)(CoreLayout);
