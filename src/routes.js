import React from 'react';
import { Route, Redirect } from 'react-router';
import { CoreLayout, ProductsListPage, ShoppingCartPage } from './containers';

const Routes = [
  <Route component={CoreLayout}>
    <Route path="products" component={ProductsListPage} />
    <Route path="shopping-cart" component={ShoppingCartPage} />
    <Redirect from="/" to="/products" />
  </Route>
];

export default Routes;
