export const initialState = {
  items: [
    { id: 1, title: 'Product 1' },
    { id: 2, title: 'Product 2' },
    { id: 3, title: 'Product 3' },
    { id: 4, title: 'Product 4' },
    { id: 5, title: 'Product 5' },
  ]
};

export default function productsList(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
