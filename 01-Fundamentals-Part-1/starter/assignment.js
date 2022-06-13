const country = 'China';
const continent = 'Asia'
let population = 1400000000;
// console.log(`Country:${country}, Continent:${continent}, Population:${population}`)

let isIsland = false;
let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

language = 'Chinese'

// console.log(population / 2);
// console.log(++population);

// console.log(population > 6000000);
// console.log(population < 33000000)
// let description = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language
// console.log(description)

///////// Coding Challenage One
// let heightMark = 1.69;
// let weightMark = 78;
// let weightJohn = 92;
// let heightJohn = 1.95;
// function calBMI(weight, height) {
//     return weight / height ** 2;
// }

// let markHigherBMI;

// console.log(calBMI(weightMark, heightMark));
// console.log(calBMI(weightJohn, heightJohn));

// markHigherBMI = calBMI(weightMark, heightMark) > calBMI(weightJohn, heightJohn);
// console.log(markHigherBMI)

// string and Template Literals
// let description = `${country} is in ${continent}, and its ${population} people ${language}`;
// console.log(description);

if (population > 3000000) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${-population/1000000 + 33} below average`)
}