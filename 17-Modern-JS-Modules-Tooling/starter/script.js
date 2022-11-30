// Importing module
// import { addToCart, shippingCost } from './shoppingCart.js';
import * as ShoppingCart from './shoppingCart.js';
// import {  } from './shoppingCart.js';
// console.log('Importing Module');
// console.log(ShoppingCart.shippingCost);
// ShoppingCart.addToCart('nima', 20);

// const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// const data = await result.json();
// console.log(data);

// const getLastPost = async function () {
//   const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const data = await result.json();
//   console.log(data);

//   //   return { id: data.at(-1) };
// };

// getLastPost();
// console.log('something');
const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart('apple', 4);
