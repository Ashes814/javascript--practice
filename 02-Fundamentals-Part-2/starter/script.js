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
// let populations = [1,2,3,4];
// console.log(populations.length === 4);
// console.log(percentageOfWorld(populations[0]))

// let neighbours = ['Mongolia', 'Korea', 'Japan']
// neighbours.push('Utopia');
// neighbours.pop('Utopia');
// console.log(neighbours);
// if (!neighbours.includes("Germany")) {
//     console.log("Not European Country!");
// }
// neighbours[neighbours.findIndex(value => value =='Korea')] = 'K'
// console.log(neighbours)

// const calcTip = (bill) => {
//     if (bill >= 50 && bill <= 300) {
//         return bill*0.15;
//     } else {
//         return bill * 0.2;
//     }
// }
// let bills = [125, 555, 44];
// let tips = []
// for (let bill of bills) {
//     tips.push(calcTip(bill));
// }
// let total = [];
// for (let  i = 0; i < bills.length; i++) {
//     total.push(bills[i] + tips[i]);
// }

// console.log(tips, total);

const myCountry = {
    'country': 'China',
    capital: "Beijing",
    language: 'chinese',
    population: 1441,
    neighbours: ['North Korea', 'Russia', 'India']

}

console.log(myCountry)