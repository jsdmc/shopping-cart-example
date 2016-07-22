import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import configureStore from './redux-base/configureStore';

const store = configureStore();

const doRender = () => {
  const Root = require('./containers/Root').default;
  ReactDOM.render(
    <AppContainer>
      <Root store={store} />
    </AppContainer>,
    document.getElementById('root')
  );
};
doRender();

if (module.hot) {
  module.hot.accept('./containers/Root', doRender);
}
