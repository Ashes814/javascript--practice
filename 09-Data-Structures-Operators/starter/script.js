// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };
// // // // const [a, b] = [1, 2];
// // // // const { openingHours: {thu:c, fri: d} } =restaurant
// // // // console.log(c);
// // // // console.log(d);
// // // // const arr = [7, 8, 9];
// // // // const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // // // console.log(badNewArr);

// // // // const newArr = [1, 2, ...arr];
// // // // console.log(...'newArr');

// // // const arr = [1, 2, ...[2, 3, 4]];

// // // const [a, b, ...others] = arr;
// // // console.log(a, b, others);
// // // const { fri, ...d } = restaurant.openingHours;
// // // console.log(d);

// // // console.log(fri);


// // // function add(...numbers) {
// // //   let sum = 0;
// // //   for (let num of numbers) {
// // //     sum += num;
// // //   }
// // //   return sum;

// // // }


// // // // console.log(add(1, 2, 3, 4));
// // // // console.log(add(2, 5, 8));

// // // // console.log(3 || 'a')

// // // // console.log(0 || 'a');

// // // // console.log(undefined || null || undefined)

// // // // console.log(0 && 'qq');
// // // // console.log(undefi ?? 'qq' ?? 0 ?? null);


// // // const rest1 = {
// // //   name: "Capri", 
// // //   numGuests: 0,
// // // }

// // // const rest2 = {
// // //   name: "Ikun",
// // //   numGuests: 10,
// // //   owner: 'Super Idor'
// // // }


// // // rest1.numGuests ||= 20;
// // // rest2.numGuests ||= 20;

// // // console.log(rest1.numGuests);
// // // console.log(rest2.numGuests);

// // // rest1.owner ??= '<ANONYMOUS>';
// // // console.log(rest1.owner);

// const game = {
// team1: 'Bayern Munich', team2: 'Borrussia Dortmund', players: [
// [
// 'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
// ], [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
// ], ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//   'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 11.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;

// const [gk, ...fieldPlayers] = players1;
// console.log(`1. ${players1}, ${players2}`);

// console.log(`2. ${gk} and ${fieldPlayers}`);

// const allPlayers = [...players1, ...players2];
// console.log(`3. ${allPlayers}`);

// const players1Final = [players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(`4. ${players1Final}`);
// const { team1, x: draw, team2 } = game.odds;
// console.log(`5. ${team1},${draw},${team2}`);

// function printGoals(...goalPlayers) {
//   let playersMap = new Map();
//   console.log(goalPlayers.length)
//   for (let p of goalPlayers) {
//     playersMap.set(p, playersMap.get(p) + 1 || 1)
//   }

//   playersMap.forEach((value, key, map) => console.log(`${key} scored ${value}`))

// }

// // printGoals(...game.scored);
// // printGoals('Davis', 'Muller', 'Lewandowski', 'Gnarby');


// // const winner = ['team1', 'team2'];

// // const winnerIndex = (team1 < team2 && 1) || 2;
// // console.log(winner[winnerIndex - 1]);

// // team1 > team2 && console.log('team2');
// // team1 < team2 && console.log('team1')

// // let arr = ['1', '2', '3'];
// // console.log(arr.entries())

// // object literals

// // for (let i of Object.keys(restaurant)) {
// //   console.log(i);
// // }

// // for (let i of game.scored.entries()) {
// //   console.log(`goal ${i[0] + 1}: ${i[1]}`);
// // }

// // let sum = 0;
// // for (let i of Object.values(game.odds)) {
// //   sum += i;
// // }
// // console.log(sum / Object.values(game.odds).length);

// // for (let i of Object.keys(game.odds)) {
// //   console.log(`Odd of ${(i === 'team1') ? `victory ${game[i]}` : (i === 'team2') ? 'victory Borrussia Dortmund' : 'draw'}: ${game.odds[i]}`)
// // }

// // // set

// // const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
// // console.log(orderSet);

// // console.log(new Set('jjjjkkkk'));

// // console.log(orderSet.has('Pasta'));


// // for (const order of orderSet) {
// //   console.log(order);
// // }

// // maps

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// let events = new Set();

// gameEvents.forEach(function (value, key, map) {
//   events.add(value);
// })
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

// let gameEventNumbers = new Map();

// gameEvents.forEach(function (value, key, map) {
//   gameEventNumbers.set(value, (gameEventNumbers.get(value) === undefined) ? 1 : gameEventNumbers.get(value) + 1);
// });

// gameEventNumbers.forEach(function (value, key, map) {
//   console.log(`An ${key} happened, on average, every ${90 / value} minutes`);
// })


// gameEvents.forEach(function (value, key, map) {
//   (key > 45) ? console.log(`Second Half ${key}: ${value}`) : console.log(`First Half ${key}: ${value}`);
// });


const airplane = 'Air China';
const plane = 'B787';


console.log(airplane.slice(4));

const testObjectString = new String('123');
console.log(testObjectString.slice(-1));