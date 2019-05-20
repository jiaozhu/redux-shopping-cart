import store from './store.js';
import { addToCart,updateCart,deleteFromCart }  from './actions/cart-actions';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

const App = <h1>Redux Shopping Cart</h1>;

ReactDOM.render(
  <Provider store={store}>
    { App }
  </Provider> ,
  document.getElementById('root')
);


console.log("initial state: ", store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));

console.log("update cart!");

store.dispatch(updateCart('Flour 1kg', 5, 110));

console.log("delete from chart");

store.dispatch(deleteFromCart('Coffee 500gm'));

unsubscribe();