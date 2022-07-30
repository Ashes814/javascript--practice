'use strict';
const flight = 'LH234';

const zow = {
    name: '欧宝多看书',
    passport: 13167117098
};

// const checkIn = function (flightNum, passenger) {
    
// }

// checkIn(flight, jonas);


// first class and higher order functions

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

const transformer = function (str, fn) {
    console.log(`Transformed string ${fn(str)}`)
}

transformer('JavaScript is the best', upperFirstWord);

// const high5 = function () {
//     console.log('tietie');
// }
    



// const greet = function (greeting) {
//     return function (name) {
//         alert(`${greeting} ${name}`);
//     }
// }


// const greeterHey = greet('Hey');
// greeterHey('ZOW');

// //
// const greetArrow = greeting => (name => alert(`${greeting} ${name}`))
// greetArrow(1)(2);

// const lufthansa = {
//     airline: 'Lufthansa',
      
// }

const addTax = (rate, value) => value + value * rate;
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));