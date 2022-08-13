'use strict';
// // const flight = 'LH234';

// // const zow = {
// //     name: '欧宝多看书',
// //     passport: 13167117098
// // };

// // // const checkIn = function (flightNum, passenger) {
    
// // // }

// // // checkIn(flight, jonas);


// // // first class and higher order functions

// // const oneWord = function (str) {
// //     return str.replace(/ /g, '').toLowerCase();
// // }

// // const upperFirstWord = function (str) {
// //     const [first, ...others] = str.split(' ');
// //     return [first.toUpperCase(), ...others].join(' ');
// // }

// // const transformer = function (str, fn) {
// //     console.log(`Transformed string ${fn(str)}`)
// // }

// // transformer('JavaScript is the best', upperFirstWord);

// // // const high5 = function () {
// // //     console.log('tietie');
// // // }
    



// // // const greet = function (greeting) {
// // //     return function (name) {
// // //         alert(`${greeting} ${name}`);
// // //     }
// // // }


// // // const greeterHey = greet('Hey');
// // // greeterHey('ZOW');

// // // //
// // // const greetArrow = greeting => (name => alert(`${greeting} ${name}`))
// // // greetArrow(1)(2);

// // // const lufthansa = {
// // //     airline: 'Lufthansa',
      
// // // }

// // const addTax = (rate, value) => value + value * rate;
// // const addVAT = addTax.bi nd(null, 0.23);
// // console.log(addVAT(100));
// const poll = {
//     question: "What is your favourite programming language?", options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//     // This generates [0, 0, 0, 0]. More in the next section! 
//     answers: new Array(4).fill(0),
//     registerNewAnswer: function () {
//         let inputAnswer = +prompt(this.question + '\n' + this.options.join('\n'));
//         if (inputAnswer <= 3 && inputAnswer >= 0) {
//             this.answers[inputAnswer] += 1;
//         let inputType = prompt('What type?')
//         this.displayResults(inputType)
//         }


//     },
//     displayResults: function (type) {
//         if (type == 'string') {
//             console.log(`Poll results are ${this.answers[0]},${this.answers[1]},${this.answers[2]}, ${this.answers[3]}`)
//         } else {
//             console.log(this.answers)
//         }
        
//         ;
        
        
//     }
// };
// let bindPoll= poll.registerNewAnswer.bind(poll);


// const testData1 = [5, 2, 3];
// const testData2 = [1, 5, 3, 9, 6, 1];
// document.querySelector('.poll').addEventListener('click', bindPoll);

// let test1 = poll.registerNewAnswer.bind(testData1);
// test1('string')


// (function () {
//     console.log('1')
// })() 

const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;

        console.log(`${passengerCount} passenagers`);
    }
}

const booker = secureBooking();

booker();
booker();
booker();
booker();
