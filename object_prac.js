"use strict";

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

// let symid = Symbol("Super Idol!!");

// alert(symid.description);
// let user = {name:'me', [symid]:'yes'};

// // alert(user.symid);
// // alert(user[symid]);
// alert(user);
// let otherUser = {};
// otherUser[user] = 1
// alert(otherUser[user])

// let user = {
//     name: 'ZOW',
//     money: -500,

//     [Symbol.toPrimitive](hint) {
//         alert(`hint: ${hint}`);
//         return hint == 'string' ? `{name2: "${this.name}"}` : this.money;
//     }
// }
// alert(user);
// alert(+user);
// alert(user.valueOf());

// let str = "Hello";
// str.test = 5;

// alert(str.test);

// alert(NaN === NaN);
// alert(Object.is(NaN, NaN));

// alert(parseInt('ff', 16));
// function readNumber() {
//     let num = 0;
//     do {
//         num = prompt('Please enter a number ("CANCEL" to cancel)', )
//         if (num == "CANCEL") {
//             break
//         } else if (num == null) {
//             break
//         }
//     } while ( !isFinite(num) )

//     return num;

// }

// alert(`your number: ${readNumber()}`);

// function random(min, max) {
//     let randomNumber = Math.random();
//     return min + (max - min)*randomNumber;
// }

// function randomInteger(min, max) {
//     let randomNumber = random(min, max + 1);
//     return Math.floor(randomNumber);
// }

// alert(randomInteger(1, 5));
// alert(`ABCD`[1].toLowerCase());
// // charCodeAt 不理解代理对，所以它给出了代理对的代码

// alert( '𝒳'.charCodeAt(0).toString(16) ); // d835，在 0xd800 和 0xdbff 之间
// alert( '𝒳'.charCodeAt(1).toString(16) ); // dcb3, 在 0xdc00 和 0xdfff 之间
// function ucFirst(str) {
//     if ( !str ) {
//         return str;
//     }
//     let firstAlp = str[0].toUpperCase();
//     let newStr = firstAlp + str.slice(1);
//     return newStr;
// } 
// // alert('sbss'.slice(1));
// alert(ucFirst('s'));
// alert('T'.slice(1));


// function checkSpam(str) {
//     let newStr = str.toLowerCase()
//     if (newStr.includes(`viagra`, 0) || newStr.includes(`xxx`, 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// alert(checkSpam('buy ViAgRA now'));
// alert(checkSpam('free xxxxx'));
// alert(checkSpam("innocent rabbit"));
// function truncate(str, maxLength) {
//     let strLength = str.length;
//     if (strLength > maxLength - 1) {
//         let newStr = str.slice(0, maxLength) + '...';
//         return newStr;
//     } else {
//         return str;
//     }
// }

// alert(truncate("What I'd like to tell on this topic is:", 20));

// alert(truncate("Hi everyone!", 20));
// function extractCurrencyValue(cur) {
//     return +cur.slice(1,);
// }
// alert( extractCurrencyValue('$120') === 120 );
// let fruits = ['Apple', 'Orange', 'Plum'];

// // alert( fruits.at(-1) );
// alert( fruits.push('Banana') );
// alert( fruits.pop() );

// let fruits = ["Apples", "Pear", "Orange"];

// // 在“副本”里 push 了一个新的值
// let shoppingCart = fruits;
// shoppingCart.push("Banana");

// // fruits 里面是什么？
// alert( fruits.length ); // ?

// let styles = ["Jazz", "Blues"];
// alert(styles);
// styles.push('Rock-n-Roll');
// alert(styles);
// styles[(styles.length - 1)/2] = 'Classics';
// alert(styles);
// alert(styles.shift());
// styles.unshift('Rap','Reggae');
// // alert(styles);
// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// });

// arr[2](); // ?

// function sumInput() {
//     let userArray = [];
//     let userInput = prompt("Enter a number", 10086);
//     while (+userInput || userInput == '0')  {
//         userArray.push(+userInput);
//         userInput = prompt("Enter a number", 10086);
//     }
//     let sum = 0;
//     for (let number of userArray) {
//         sum += number;
//     }
//     return sum;
// }
// alert(sumInput());

// function getMaxSubSum(arr) {
//     let sum = 0;
//     let cumSumArr = [0];
//     let maxIndex = 0;
//     let minIndex = 0;
//     let minIndexArrar = [0];
//     for (let number of arr) {
        
//         if ((sum + number)>=cumSumArr[maxIndex]) {
//             maxIndex = cumSumArr.length
//         }

//         if ((sum + number)<cumSumArr[minIndex]) {
//             minIndex = cumSumArr.length
//         }
//         minIndexArrar.push(minIndex);
//         sum += number
//         cumSumArr.push(sum)

//     }


//     return cumSumArr[maxIndex] - cumSumArr[minIndexArrar[maxIndex]]
// }



// alert(getMaxSubSum([-1, 2, 3, -9]));
// alert(getMaxSubSum([2, -1, 2, 3, -9]));
// alert(getMaxSubSum([-1, 2, 3, -9, 11]));
// alert(getMaxSubSum([-2, -1, 1, 2]));
// alert(getMaxSubSum([100, -9, 2, -3, 5]));
// alert(getMaxSubSum([1, 2, 3]));
// alert(getMaxSubSum([-1, -2, -3]));

// let arr = ["I", "Study", "JavaScript", "4", "5", "6", "7"];

// // let removed = arr.splice(1,0,'new1', 'new2');
// // alert(arr);
// // // alert(removed);
// // alert(arr.concat([3, 4], 57));

// arr.forEach(alert);
// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];

// // let user = users.find(item => item.name=='Pete');
// // alert(user.id);
// alert(users.filter(item => item.id<=2));

// let lengths = ['Bilbo', 'conda', 'pypi']
// alert(lengths.map(function(item) { 
//     return item.length
// }));

// [1, -2, 15, 2, 0, 8].sort(function(a, b) {
//     alert( a + " <> " + b );
//     return a - b;
// });

// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, current) >= sum + current, 0);
// alert(result);

// function camelize(str) {
//     let strArr = str.split('-');
//     let newStrArr = [];
//     for (let s of strArr.slice(1)) {
//         newStrArr.push(s[0].toUpperCase() + s.slice(1));
//     }
//     let newStr = newStrArr.join('')

//     return strArr[0] + newStr;
// }

// alert(camelize('list-style-image'));

// function filterRange(arr, a, b) {
//     return arr.filter(item => (item >= a && item <= b))
// }

// function filterRangeInPlace(arr, a, b) {
//     for (let i=0; i < arr.length; i++ ) {
//         let tempNum = arr[i];
//         if (a<=tempNum && tempNum<=b) {
//             continue
//         } else {
//             arr.splice(i, 1);
            
//         }
//     }
// }



// let arr = [5, 3, 8, 1,1,3,4,5,1,5];
// filterRangeInPlace(arr, 1, 4)
// // let filtered = filterRange(arr, 1, 4);
// // alert( filtered ); // 3,1（匹配值）
// alert( arr ); // 5,3,8,1（未修改）
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);


// alert( arr );
// function copySorted(arr) {
//     let copyArr = arr.slice(0);
//     return copyArr.sort()
// }
// let arr = ['HTML', 'JavaScript', 'CSS'];
// let sorted = copySorted(arr);
// alert(sorted);
// alert(arr);
// function Calculator() {
//     this.calculate = function(str) {
//         let expressionArr = str.split(' ');
//         let numArr = [];
//         for (let i=0; i<expressionArr.length;i += 2) {
//             numArr.push(expressionArr[i])
//         }
//         for (let j=1; j<expressionArr.length; j += 2)

//     }

//     this.addMethod() {
//         return
//     }
// }

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(function (item) {
//     return item.name;
// })

// alert( names ); // John, Pete, Mary

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map( item => ({
//     fullName: item.name + item.surname,
//     id: item.id
// }));

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith
// function sortByAge(users) {
//     users.sort(function(a, b) {return a.age - b.age})
// }


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete


// function shuffle(array) {

//     for (let i = array.length-1; i>0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));

//         [array[i], array[j]] = [array[j], array[i]];
//     }

// }
// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);


// function getAverageAge(users) {
//     let ageArr = users.map(item => item.age);
//     let ageSum = 0;
//     for (let age of ageArr) {
//         ageSum += age;
//     }
//     return ageSum / ageArr.length;
// }
// function getAverageAge(users) {
//         return users.reduce((sum, item) => sum + item.age, 0) / users.length;
//     }

// // function getAverageAge(users) {
// //     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// //   }
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// function unique(arr) {
//     let newArr = []
//     for (let i of arr) {
//         if (newArr.includes(i)) {
//             continue;
//         } else {
//             newArr.push(i);
//         }
//     }
//     return newArr;
//   }
  
//   let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
  
//   alert( unique(strings) ); // Hare, Krishna, :-O
// function groupById(users) {
//     return users.reduce(function (prev, item) {
//         prev[item.id] = item
//         return prev },

//     {})
// }



// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];
  
//   let usersById = groupById(users);
//   alert(usersById.john.id);
  /*
  // 调用函数后，我们应该得到：
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */