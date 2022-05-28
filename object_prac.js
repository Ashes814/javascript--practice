"use strict"

// let user = new Object();
// user = {};

// user = {
//     name: "John",
//     age: 30
// };


// for (key in user) {
//     alert(user[key]);
// }

// alert(user.name);

// let user = {};
// user['name'] = "John";
// alert(user.name);
// user['surname'] = "Smith";
// alert(user.surname);


// user['name'] = 'Pete';
// alert(user.name);
// delete user.name;
// alert(user.name);
// function isEmpty(object) {
//     for (let key in object) {
//         return false;
//     }
//     return true;
// }

// let schedule = {};
// alert(isEmpty(schedule));
// schedule["8:30"] = "get up";
// alert(isEmpty(schedule));
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// // function calcSum(object) {
// //     let sum = 0;
// //     for (let employee in object) {
// //         sum += object[employee]
// //     }
// //     if (sum >= 0) {
// //         return sum;
// //     } else {
// //         return 0;
// //     }

// // }

// // alert(calcSum(salaries))

// function multiplyNumeric(obj) {
//     for (let employee in obj) {
//         obj[employee] *= 2;
//     }
// }

// multiplyNumeric(salaries);
// for (let key in salaries) {
//     alert(salaries[key]);
// }

// let user = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };

// let user = {name: "John"};
// let admin = {name: "Robin"};

// function sayHi() {
//     alert(this.name);
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f()
// admin.f()

// function makeUser() {
//     return {
//         name: "John",
//         ref(){
//             return this
//         }
//     };
// }

// let user = makeUser();

// alert(user.ref().name);

// let calculator = {
//     read() {
//         let a = +prompt('Please enter a', 1);
//         let b = +prompt('Please enter b', 1);
//         this.a = a;
//         this.b = b;
//     },

//     sum() {
//         let s = this.a + this.b;
//         return s;
//     },

//     mul() {
//         let m = this.a * this.b
//         return m;
//     }

// }
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },

//     down() {
//         this.step--;
//         return this;
//     },

//     showStep() {
//         alert(this.step);
//         return this;
//     }
// }

// ladder.up().up().down().showStep().down().showStep()
// let obj = {name:'zzz'}
// function A(name) {
//     this.name = name;
//     return obj;
// }

// function B(name) {
//     this.name = name;
//     return obj;
// }

// let a = new A('zow');
// let b = new B('zow');

// alert(a == b);

// function Calculator() {
//     this.read = function() {
//         let a = +prompt('Please enter a', 1);
//         let b = +prompt('Please enter b', 1);
//         this.a = a;
//         this.b = b;
//     },

//     this.sum = function() {
//         let s = this.a + this.b;
//         return s;
//     },

//     this.mul = function() {
//         let m = this.a * this.b
//         return m;
//     }

// }

// let calculator = new Calculator()
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function() {
//         let newValue = +prompt("Please enter new value", 10);
//         this.value += newValue;  
//     }
// }

// let accumulator = new Accumulator(10);

// accumulator.read();
// accumulator.read();

// alert(accumulator.value);

// let user = {};
// alert(user?.name?.a);
// alert(user.name.a);