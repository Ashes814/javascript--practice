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

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`
// }

// let describeChina = describeCountry('China', 1400, 'Beijing');
// let describeRussia = describeCountry('Russia', 20, 'Moscow');
// let describeJapan = describeCountry('Japan', 140, 'Tokyo');
// console.log(describeChina, describeRussia, describeJapan);\

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1997);
// console.log(age1)

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2)
function percentageOfWorld(population) {
    return population/7900;
}

// // const calcAge3 = birthYear => 2037 - birthYear;

// // console.log(calcAge3(1881))

// const describePopulation = (country, population) => {
//     const percentOfWorld = percentageOfWorld(population);
//     return `${country} has ${population} million people, which is about ${percentOfWorld*100}% of the world!`;

// }

// console.log(describePopulation('China',  1441))
// function calcAverage(data1, data2, data3) {
//     return ( data1 + data2 + data3 ) / 3;
// }

// function checkWinner(avgDolhins, avgKoalas) {
//     if (avgDolhins >= 2 * avgKoalas) {
//         console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolhins) {
//         console.log(`Koalas win (${avgDolhins} vs. ${avgKoalas})`);
//     } else {
//         console.log(`No winner !`);
//     }
// }

// checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 79));
// checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27)); 
let populations = [1,2,3,4];
console.log(populations.length === 4);
console.log(percentageOfWorld(populations[0]))