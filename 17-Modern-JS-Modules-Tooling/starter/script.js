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

const getLastPost = async function () {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await result.json();
  console.log(data);

  //   return { id: data.at(-1) };
};

getLastPost();
console.log('something');
