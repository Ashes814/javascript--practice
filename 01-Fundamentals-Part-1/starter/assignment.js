const country = 'China';
const continent = 'Asia'
let population = 1400000000 / 1000000;
// console.log(`Country:${country}, Continent:${continent}, Population:${population}`)

let isIsland = false;
let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

language = 'chinese'

// console.log(population / 2);
// console.log(++population);

// console.log(population > 6000000);
// console.log(population < 33000000)
// let description = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language
// console.log(description)

///////// Coding Challenage One
let heightMark = 1.69;
let weightMark = 78;
let weightJohn = 92;
let heightJohn = 1.95;
function calBMI(weight, height) {
    return weight / height ** 2;
}

let markHigherBMI;

// console.log(calBMI(weightMark, heightMark));
// console.log(calBMI(weightJohn, heightJohn));

markHigherBMI = calBMI(weightMark, heightMark) > calBMI(weightJohn, heightJohn);
// console.log(markHigherBMI)

// string and Template Literals
// let description = `${country} is in ${continent}, and its ${population} people ${language}`;
// console.log(description);

// if (population > 3000000) {
//     console.log(`${country}'s population is above average`)
// } else {
//     console.log(`${country}'s population is ${-population/1000000 + 33} below average`)
// }

// if (markHigherBMI) {
//     console.log(`Mark's BMI (${calBMI(weightMark, heightMark)} is higher thn john's (${calBMI(weightJohn, heightJohn)})`)
// } else {}

// const numNeighbours = prompt('How many neighbour countries does your country have?');

// if (numNeighbours == 1) {
//     console.log('Only 1 border');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders!')
// // }
// let scoreDolphins = [97, 112, 81];
// let scoreKoalas = [109, 95, 86];
// let averageDoplhins = (scoreDolphins[0] + scoreDolphins[1] + scoreDolphins[2]) / 3; 
// let averageKoalas = (scoreKoalas[0] + scoreKoalas[1] + scoreKoalas[2]) / 3; 

// if (averageDoplhins > averageKoalas && averageDoplhins >= 100) {
//     console.log("Dolphins Win!");
// } else if (averageDoplhins === averageKoalas && averageDoplhins >= 100) {
//     console.log("Draw Game!");
// } else if (averageKoalas > averageDoplhins && averageKoalas >= 100) {
//     console.log("Koalas Win!");
// } else {
//     console.log("No winner!")
// }
// switch(language) {
//     case "chinese":
//     case "mandarin":
//         console.log("Most number of native speakers!");
//         break;
//     case "spanish":
//         console.log("2nd place in number of native speakers!");
//         break;
//     case "english":
//         console.log("3rd place in number of ");
//         break;
//     default:
//         console.log("Great language too!");
// } 

// (population > 33) ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);

let bill = 275;

let tip = (bill >= 50 && bill <= 300) ? bill*0.15 : bill*0.2

console.log(`The bill is ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);