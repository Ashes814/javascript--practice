'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
// const [a, b] = [1, 2];
// const { openingHours: {thu:c, fri: d} } =restaurant
// console.log(c);
// console.log(d);
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(...'newArr');

const arr = [1, 2, ...[2, 3, 4]];

const [a, b, ...others] = arr;
console.log(a, b, others);
const { fri, ...d } = restaurant.openingHours;
console.log(d);

console.log(fri);


function add(...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;

}


// console.log(add(1, 2, 3, 4));
// console.log(add(2, 5, 8));

// console.log(3 || 'a')

// console.log(0 || 'a');

// console.log(undefined || null || undefined)

console.log(0 && 'qq');
console.log(1 && 'qq' && 0 && null);
