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

// // // [11,22].fill(value > 8);

// // console.dir(document.querySelector('h1'))
// //challenage 1
// // const Car = function(make, speed) {
// //     this.make = make;
// //     this.speed = speed;
// // };

// // Car.prototype.accelerate = function() {
// //     this.speed += 10;
// //     console.log(this.make + this.speed);
// // }

// // Car.prototype.brake = function() {
// //     this.speed -= 5;
// //     console.log(this.make + this.speed);
// // }

// // let bmw = new Car('BMW', 120);
// // let ferrari = new Car('Ferrari', 320);


// // bmw.brake();
// // bmw.brake();

// // ferrari.accelerate();
// class Person {
//     constructor(name, birth) {
//         this.name = name;
//         this.birth = birth;
//     }

//     calcAge() {
//         console.log(2037 - this.birth);
//     }

//     set name(name) {
//         if (name.includes(' ')) {
//             this._name = name;
//         } else {
//             alert('Name ERROR')
//         }
//     }

//     get name() {
//         return this._name;
//     }

//     static stHey() {
//         console.log('Hi')
//     }
// }

// let testP = new Person('fff f', 1999);
// console.log(testP);
// console.log(testP.name);
// Person.stHey()
// testP.stHey()
// const account = {
//     name: 'oo',
//     movements: [1,2,3,4],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     }
// }

// console.log(account.latest);

// const personProto = {
//     calcAge() {
//         return 2037 - this.birthyear;
//     }
// };

// let test = Object.create(personProto);
// console.log(test);

// // const Car = function(make, speed) {
// //     this.make = make;
// //     this.speed = speed;
// // };

// // Car.prototype.accelerate = function() {
// //     this.speed += 10;
// //     console.log(this.make + this.speed);
// // }

// // Car.prototype.brake = function() {
// //     this.speed -= 5;
// //     console.log(this.make + this.speed);
// // }

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(this.make + this.speed);
    }

    brake() {
        this.speed -= 5;
        console.log(this.make + this.speed);
        return this;
    }

    get speedUS() {
        return this.speed / 1.6
    }

    set speedUS(milespeed) {
        this.speed = milespeed * 1.6
    }
}

class EVCl extends CarCl {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.#charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this;
    };
}
// let car1 = new CarCl('Ford', 120);
// console.log(car1);
// car1.accelerate();
// car1.brake();

// console.log(car1.speedUS)
// car1.speedUS = 60;
// console.log(car1.speedUS,car1.speed);

// const Person = function(name, birth) {
//     this.name = name;
//     this.birth = birth;
// }

// const Student = function(name, birth, course) {
//     Person.call(this, name, birth);
//     this.course = course;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.introduce = function() {
//     console.log(`My name is ${this.name}, I was born in ${this.birth}, and I study at ${this.course}`);
// }

// const mike = new Student('Mike', 1999, 'GIS');

// mike.introduce();

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

// const EV = function(make, speed, charge) {
//     Car.call(this, make, speed);
//     this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function(chargeTo) {
//     this.charge = chargeTo;
// };

// EV.prototype.accelerate = function() {
//     this.speed += 20;
//     this.charge -= 1;
//     console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`)
// };

let car1 = new EVCl('Tesla', 120, 23);
console.log(car1);
car1.brake().accelerate().accelerate().chargeBattery(99).accelerate();


// class Account {
//     // public field
//     locale = navigator.language;
//     #movements = [];
//     #pin;

//     constructor(owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         this.#pin = pin;
//         // this.movements = [];
//         // this.locale = navigator.language;

//     }

//     get movements() {
//         return this.#movements;
//     }

//     deposit(value) {
//         this.#movements.push(value);
//         return this;
//     }
// }

// const acc1 = new Account('oo', 'RMB', 8848)
// acc1.deposit(848).deposit(8848);
// console.log(acc1.movements);
// console.log(acc1.#movements);