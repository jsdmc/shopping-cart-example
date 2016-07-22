import expect from 'expect';
import rootReducer from 'redux-base/reducers';

describe('rootReducer reducer', () => {
  const globalState = rootReducer({}, {type: 'testAction'});

  it('should keep productsList state under "productsList" prop', () => {
    expect(globalState).toIncludeKey('productsList');
  });

  it('should keep shoppingCart state under "shoppingCart" prop', () => {
    expect(globalState).toIncludeKey('shoppingCart');
  });

  it('should keep react-router-redux state under "routing" prop', () => {
    const initialRoutingState = { location: undefined };

    expect(globalState).toIncludeKey('routing');
    // expect(globalState.routing).toEqual(initialRoutingState);
  });

});
