'use strict';

// const Person = function(name, birth) {
//     this.name = name;
//     this.birth = birth;
// }

// Person.prototype.calcAge = function() {
//     console.log(2037 - this.birth);
// }
// let oo = new Person('oo', 1999);
// console.log(oo);
// oo.calcAge()


// Array.prototype.uuuukkk = function() {
//     return [...new Set(this)];
// }

// console.log([1,1,1,2,2,2,3,3,3].uuuukkk());
// // Array.prototype = {};

// // [11,22].fill(value > 8);

// console.dir(document.querySelector('h1'))
//challenage 1
// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// };

// Car.prototype.accelerate = function() {
//     this.speed += 10;
//     console.log(this.make + this.speed);
// }

// Car.prototype.brake = function() {
//     this.speed -= 5;
//     console.log(this.make + this.speed);
// }

// let bmw = new Car('BMW', 120);
// let ferrari = new Car('Ferrari', 320);


// bmw.brake();
// bmw.brake();

// ferrari.accelerate();
class Person {
    constructor(name, birth) {
        this.name = name;
        this.birth = birth;
    }

    calcAge() {
        console.log(2037 - this.birth);
    }

    set name(name) {
        if (name.includes(' ')) {
            this._name = name;
        } else {
            alert('Name ERROR')
        }
    }

    get name() {
        return this._name;
    }
}

let testP = new Person('fff f', 1999);
console.log(testP);
console.log(testP.name);
// const account = {
//     name: 'oo',
//     movements: [1,2,3,4],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     }
// }

// console.log(account.latest);

