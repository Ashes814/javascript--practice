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

const high5 = function () {
    console.log('tietie');
}
    
['Jonas', 'sdf', 'gsdf'].forEach(high5)