'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// // const interface = '23';

// function logger() {
//     console.log('My name is Jonas');
// }

// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

//     return juice;
// }

// console.log(fruitProcessor(1,3));

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

let describeChina = describeCountry('China', 1400, 'Beijing');
let describeRussia = describeCountry('Russia', 20, 'Moscow');
let describeJapan = describeCountry('Japan', 140, 'Tokyo');
console.log(describeChina, describeRussia, describeJapan);