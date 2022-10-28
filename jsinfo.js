// "use strict";

// // let user = new Object();
// // user = {};

// // user = {
// //     name: "John",
// //     age: 30
// // };


// // for (key in user) {
// //     alert(user[key]);
// // }

// // alert(user.name);

// // let user = {};
// // user['name'] = "John";
// // alert(user.name);
// // user['surname'] = "Smith";
// // alert(user.surname);


// // user['name'] = 'Pete';
// // alert(user.name);
// // delete user.name;
// // alert(user.name);
// // function isEmpty(object) {
// //     for (let key in object) {
// //         return false;
// //     }
// //     return true;
// // }

// // let schedule = {};
// // alert(isEmpty(schedule));
// // schedule["8:30"] = "get up";
// // alert(isEmpty(schedule));
// // let salaries = {
// //     John: 100,
// //     Ann: 160,
// //     Pete: 130
// // }

// // // function calcSum(object) {
// // //     let sum = 0;
// // //     for (let employee in object) {
// // //         sum += object[employee]
// // //     }
// // //     if (sum >= 0) {
// // //         return sum;
// // //     } else {
// // //         return 0;
// // //     }

// // // }

// // // alert(calcSum(salaries))

// // function multiplyNumeric(obj) {
// //     for (let employee in obj) {
// //         obj[employee] *= 2;
// //     }
// // }

// // multiplyNumeric(salaries);
// // for (let key in salaries) {
// //     alert(salaries[key]);
// // }

// // let user = {
// //     name: "John",
// //     sizes: {
// //         height: 182,
// //         width: 50
// //     }
// // };

// // let user = {name: "John"};
// // let admin = {name: "Robin"};

// // function sayHi() {
// //     alert(this.name);
// // }

// // user.f = sayHi;
// // admin.f = sayHi;

// // user.f()
// // admin.f()

// // function makeUser() {
// //     return {
// //         name: "John",
// //         ref(){
// //             return this
// //         }
// //     };
// // }

// // let user = makeUser();

// // alert(user.ref().name);

// // let calculator = {
// //     read() {
// //         let a = +prompt('Please enter a', 1);
// //         let b = +prompt('Please enter b', 1);
// //         this.a = a;
// //         this.b = b;
// //     },

// //     sum() {
// //         let s = this.a + this.b;
// //         return s;
// //     },

// //     mul() {
// //         let m = this.a * this.b
// //         return m;
// //     }

// // }
// // calculator.read();
// // alert(calculator.sum());
// // alert(calculator.mul());

// // let ladder = {
// //     step: 0,
// //     up() {
// //         this.step++;
// //         return this;
// //     },

// //     down() {
// //         this.step--;
// //         return this;
// //     },

// //     showStep() {
// //         alert(this.step);
// //         return this;
// //     }
// // }

// // ladder.up().up().down().showStep().down().showStep()
// // let obj = {name:'zzz'}
// // function A(name) {
// //     this.name = name;
// //     return obj;
// // }

// // function B(name) {
// //     this.name = name;
// //     return obj;
// // }

// // let a = new A('zow');
// // let b = new B('zow');

// // alert(a == b);

// // function Calculator() {
// //     this.read = function() {
// //         let a = +prompt('Please enter a', 1);
// //         let b = +prompt('Please enter b', 1);
// //         this.a = a;
// //         this.b = b;
// //     },

// //     this.sum = function() {
// //         let s = this.a + this.b;
// //         return s;
// //     },

// //     this.mul = function() {
// //         let m = this.a * this.b
// //         return m;
// //     }

// // }

// // let calculator = new Calculator()
// // calculator.read();
// // alert(calculator.sum());
// // alert(calculator.mul());

// // function Accumulator(startingValue) {
// //     this.value = startingValue;

// //     this.read = function() {
// //         let newValue = +prompt("Please enter new value", 10);
// //         this.value += newValue;  
// //     }
// // }

// // let accumulator = new Accumulator(10);

// // accumulator.read();
// // accumulator.read();

// // alert(accumulator.value);

// // let user = {};
// // alert(user?.name?.a);
// // alert(user.name.a);

// // let symid = Symbol("Super Idol!!");

// // alert(symid.description);
// // let user = {name:'me', [symid]:'yes'};

// // // alert(user.symid);
// // // alert(user[symid]);
// // alert(user);
// // let otherUser = {};
// // otherUser[user] = 1
// // alert(otherUser[user])

// // let user = {
// //     name: 'ZOW',
// //     money: -500,

// //     [Symbol.toPrimitive](hint) {
// //         alert(`hint: ${hint}`);
// //         return hint == 'string' ? `{name2: "${this.name}"}` : this.money;
// //     }
// // }
// // alert(user);
// // alert(+user);
// // alert(user.valueOf());

// // let str = "Hello";
// // str.test = 5;

// // alert(str.test);

// // alert(NaN === NaN);
// // alert(Object.is(NaN, NaN));

// // alert(parseInt('ff', 16));
// // function readNumber() {
// //     let num = 0;
// //     do {
// //         num = prompt('Please enter a number ("CANCEL" to cancel)', )
// //         if (num == "CANCEL") {
// //             break
// //         } else if (num == null) {
// //             break
// //         }
// //     } while ( !isFinite(num) )

// //     return num;

// // }

// // alert(`your number: ${readNumber()}`);

// // function random(min, max) {
// //     let randomNumber = Math.random();
// //     return min + (max - min)*randomNumber;
// // }

// // function randomInteger(min, max) {
// //     let randomNumber = random(min, max + 1);
// //     return Math.floor(randomNumber);
// // }

// // alert(randomInteger(1, 5));
// // alert(`ABCD`[1].toLowerCase());
// // // charCodeAt 不理解代理对，所以它给出了代理对的代码

// // alert( '𝒳'.charCodeAt(0).toString(16) ); // d835，在 0xd800 和 0xdbff 之间
// // alert( '𝒳'.charCodeAt(1).toString(16) ); // dcb3, 在 0xdc00 和 0xdfff 之间
// // function ucFirst(str) {
// //     if ( !str ) {
// //         return str;
// //     }
// //     let firstAlp = str[0].toUpperCase();
// //     let newStr = firstAlp + str.slice(1);
// //     return newStr;
// // } 
// // // alert('sbss'.slice(1));
// // alert(ucFirst('s'));
// // alert('T'.slice(1));


// // function checkSpam(str) {
// //     let newStr = str.toLowerCase()
// //     if (newStr.includes(`viagra`, 0) || newStr.includes(`xxx`, 0)) {
// //         return true;
// //     } else {
// //         return false;
// //     }
// // }

// // alert(checkSpam('buy ViAgRA now'));
// // alert(checkSpam('free xxxxx'));
// // alert(checkSpam("innocent rabbit"));
// // function truncate(str, maxLength) {
// //     let strLength = str.length;
// //     if (strLength > maxLength - 1) {
// //         let newStr = str.slice(0, maxLength) + '...';
// //         return newStr;
// //     } else {
// //         return str;
// //     }
// // }

// // alert(truncate("What I'd like to tell on this topic is:", 20));

// // alert(truncate("Hi everyone!", 20));
// // function extractCurrencyValue(cur) {
// //     return +cur.slice(1,);
// // }
// // alert( extractCurrencyValue('$120') === 120 );
// // let fruits = ['Apple', 'Orange', 'Plum'];

// // // alert( fruits.at(-1) );
// // alert( fruits.push('Banana') );
// // alert( fruits.pop() );

// // let fruits = ["Apples", "Pear", "Orange"];

// // // 在“副本”里 push 了一个新的值
// // let shoppingCart = fruits;
// // shoppingCart.push("Banana");

// // // fruits 里面是什么？
// // alert( fruits.length ); // ?

// // let styles = ["Jazz", "Blues"];
// // alert(styles);
// // styles.push('Rock-n-Roll');
// // alert(styles);
// // styles[(styles.length - 1)/2] = 'Classics';
// // alert(styles);
// // alert(styles.shift());
// // styles.unshift('Rap','Reggae');
// // // alert(styles);
// // let arr = ["a", "b"];

// // arr.push(function() {
// //   alert( this );
// // });

// // arr[2](); // ?

// // function sumInput() {
// //     let userArray = [];
// //     let userInput = prompt("Enter a number", 10086);
// //     while (+userInput || userInput == '0')  {
// //         userArray.push(+userInput);
// //         userInput = prompt("Enter a number", 10086);
// //     }
// //     let sum = 0;
// //     for (let number of userArray) {
// //         sum += number;
// //     }
// //     return sum;
// // }
// // alert(sumInput());

// // function getMaxSubSum(arr) {
// //     let sum = 0;
// //     let cumSumArr = [0];
// //     let maxIndex = 0;
// //     let minIndex = 0;
// //     let minIndexArrar = [0];
// //     for (let number of arr) {
        
// //         if ((sum + number)>=cumSumArr[maxIndex]) {
// //             maxIndex = cumSumArr.length
// //         }

// //         if ((sum + number)<cumSumArr[minIndex]) {
// //             minIndex = cumSumArr.length
// //         }
// //         minIndexArrar.push(minIndex);
// //         sum += number
// //         cumSumArr.push(sum)

// //     }


// //     return cumSumArr[maxIndex] - cumSumArr[minIndexArrar[maxIndex]]
// // }



// // alert(getMaxSubSum([-1, 2, 3, -9]));
// // alert(getMaxSubSum([2, -1, 2, 3, -9]));
// // alert(getMaxSubSum([-1, 2, 3, -9, 11]));
// // alert(getMaxSubSum([-2, -1, 1, 2]));
// // alert(getMaxSubSum([100, -9, 2, -3, 5]));
// // alert(getMaxSubSum([1, 2, 3]));
// // alert(getMaxSubSum([-1, -2, -3]));

// // let arr = ["I", "Study", "JavaScript", "4", "5", "6", "7"];

// // // let removed = arr.splice(1,0,'new1', 'new2');
// // // alert(arr);
// // // // alert(removed);
// // // alert(arr.concat([3, 4], 57));

// // arr.forEach(alert);
// // let users = [
// //     {id: 1, name: "John"},
// //     {id: 2, name: "Pete"},
// //     {id: 3, name: "Mary"}
// //   ];

// // // let user = users.find(item => item.name=='Pete');
// // // alert(user.id);
// // alert(users.filter(item => item.id<=2));

// // let lengths = ['Bilbo', 'conda', 'pypi']
// // alert(lengths.map(function(item) { 
// //     return item.length
// // }));

// // [1, -2, 15, 2, 0, 8].sort(function(a, b) {
// //     alert( a + " <> " + b );
// //     return a - b;
// // });

// // let arr = [1, 2, 3, 4, 5];
// // let result = arr.reduce((sum, current) >= sum + current, 0);
// // alert(result);

// // function camelize(str) {
// //     let strArr = str.split('-');
// //     let newStrArr = [];
// //     for (let s of strArr.slice(1)) {
// //         newStrArr.push(s[0].toUpperCase() + s.slice(1));
// //     }
// //     let newStr = newStrArr.join('')

// //     return strArr[0] + newStr;
// // }

// // alert(camelize('list-style-image'));

// // function filterRange(arr, a, b) {
// //     return arr.filter(item => (item >= a && item <= b))
// // }

// // function filterRangeInPlace(arr, a, b) {
// //     for (let i=0; i < arr.length; i++ ) {
// //         let tempNum = arr[i];
// //         if (a<=tempNum && tempNum<=b) {
// //             continue
// //         } else {
// //             arr.splice(i, 1);
            
// //         }
// //     }
// // }



// // let arr = [5, 3, 8, 1,1,3,4,5,1,5];
// // filterRangeInPlace(arr, 1, 4)
// // // let filtered = filterRange(arr, 1, 4);
// // // alert( filtered ); // 3,1（匹配值）
// // alert( arr ); // 5,3,8,1（未修改）
// // let arr = [5, 2, 1, -10, 8];

// // arr.sort((a, b) => b - a);


// // alert( arr );
// // function copySorted(arr) {
// //     let copyArr = arr.slice(0);
// //     return copyArr.sort()
// // }
// // let arr = ['HTML', 'JavaScript', 'CSS'];
// // let sorted = copySorted(arr);
// // alert(sorted);
// // alert(arr);
// // function Calculator() {
// //     this.calculate = function(str) {
// //         let expressionArr = str.split(' ');
// //         let numArr = [];
// //         for (let i=0; i<expressionArr.length;i += 2) {
// //             numArr.push(expressionArr[i])
// //         }
// //         for (let j=1; j<expressionArr.length; j += 2)

// //     }

// //     this.addMethod() {
// //         return
// //     }
// // }
// // function Calculator() {
// //   this.methods = {
// //     '+': (a, b) => a + b,
// //     '-': (a, b) => a - b
// //   }

// //   this.calculate = function(strInput) {
// //     let str = strInput.split(' ');
// //     let a = +str[0];
// //     let b = +str[2];
// //     let oper = str[1];

// //     if (!this.methods[oper] || isNaN(a) || isNaN(b)) {
// //       return NaN;
// //     }
// //     return this.methods[oper](a, b);
// //   }

// //   this.addMethod = function(name, func) {
// //     this.methods[name] = func;
// //   }


// // }

// // let calc = new Calculator;
// // let powerCalc = new Calculator;
// // alert( calc.calculate("3 + 7") ); // 10
// // powerCalc.addMethod("*", (a, b) => a * b);
// // powerCalc.addMethod("/", (a, b) => a / b);
// // powerCalc.addMethod("**", (a, b) => a ** b);

// // let result = powerCalc.calculate("2 ** 3");
// // alert( result ); // 8

// // let john = { name: "John", age: 25 };
// // let pete = { name: "Pete", age: 30 };
// // let mary = { name: "Mary", age: 28 };

// // let users = [ john, pete, mary ];

// // let names = users.map(function (item) {
// //     return item.name;
// // })

// // alert( names ); // John, Pete, Mary

// // let john = { name: "John", surname: "Smith", id: 1 };
// // let pete = { name: "Pete", surname: "Hunt", id: 2 };
// // let mary = { name: "Mary", surname: "Key", id: 3 };

// // let users = [ john, pete, mary ];

// // let usersMapped = users.map( item => ({
// //     fullName: item.name + item.surname,
// //     id: item.id
// // }));

// // /*
// // usersMapped = [
// //   { fullName: "John Smith", id: 1 },
// //   { fullName: "Pete Hunt", id: 2 },
// //   { fullName: "Mary Key", id: 3 }
// // ]
// // */

// // alert( usersMapped[0].id ) // 1
// // alert( usersMapped[0].fullName ) // John Smith
// // function sortByAge(users) {
// //     users.sort(function(a, b) {return a.age - b.age})
// // }


// // let john = { name: "John", age: 25 };
// // let pete = { name: "Pete", age: 30 };
// // let mary = { name: "Mary", age: 28 };

// // let arr = [ pete, john, mary ];

// // sortByAge(arr);

// // // now: [john, mary, pete]
// // alert(arr[0].name); // John
// // alert(arr[1].name); // Mary
// // alert(arr[2].name); // Pete


// // function shuffle(array) {

// // //     for (let i = array.length-1; i>0; i--) {
// // //         let j = Math.floor(Math.random() * (i + 1));

// // //         [array[i], array[j]] = [array[j], array[i]];
// // //     }

// // // }
// // // let arr = [1, 2, 3];

// // // shuffle(arr);
// // // // arr = [3, 2, 1]

// // // shuffle(arr);
// // // // arr = [2, 1, 3]

// // // shuffle(arr);


// // // function getAverageAge(users) {
// // //     let ageArr = users.map(item => item.age);
// // //     let ageSum = 0;
// // //     for (let age of ageArr) {
// // //         ageSum += age;
// // //     }
// // //     return ageSum / ageArr.length;
// // // }
// // // function getAverageAge(users) {
// // //         return users.reduce((sum, item) => sum + item.age, 0) / users.length;
// // //     }

// // // // function getAverageAge(users) {
// // // //     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// // // //   }
// // // let john = { name: "John", age: 25 };
// // // let pete = { name: "Pete", age: 30 };
// // // let mary = { name: "Mary", age: 29 };

// // // let arr = [ john, pete, mary ];

// // // alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// // // function unique(arr) {
// // //     let newArr = []
// // //     for (let i of arr) {
// // //         if (newArr.includes(i)) {
// // //             continue;
// // //         } else {
// // //             newArr.push(i);
// // //         }
// // //     }
// // //     return newArr;
// // //   }
  
// // //   let strings = ["Hare", "Krishna", "Hare", "Krishna",
// // //     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// // //   ];
  
// // //   alert( unique(strings) ); // Hare, Krishna, :-O
// // // function groupById(users) {
// // //     return users.reduce(function (prev, item) {
// // //         prev[item.id] = item
// // //         return prev },

// // //     {})
// // // }



// // // let users = [
// // //     {id: 'john', name: "John Smith", age: 20},
// // //     {id: 'ann', name: "Ann Smith", age: 24},
// // //     {id: 'pete', name: "Pete Peterson", age: 31},
// // //   ];
  
// // //   let usersById = groupById(users);
// // //   alert(usersById.john.id);
// //   /*
// //   // 调用函数后，我们应该得到：
  
// //   usersById = {
// //     john: {id: 'john', name: "John Smith", age: 20},
// //     ann: {id: 'ann', name: "Ann Smith", age: 24},
// //     pete: {id: 'pete', name: "Pete Peterson", age: 31},
// //   }
// //   */

// // //   let range = {
// // //     from: 1,
// // //     to: 5
// // //   }

// // //   range[Symbol.iterator] = function() {
// // //     return {
// // //       current: this.from,
// // //       last: this.to,

// // //       next() {
// // //         if (this.current <= this.last) {
// // //           return {done: false, value: this.current++};
// // //         } else {
// // //           return {done: true};
// // //         }
// // //       }
// // //     }
// // //   }

// // // for (let num of range) {
// // //   alert(num);
// // // }

// // // let arrayLike = {
// // //   0: 'Hello',
// // //   1: 'World',
// // //   length: 2
// // // };

// // // let arr = Array.from(arrayLike);
// // // alert(arr.pop());
// // // let arrayLike2 = {
// // //   0: 'Hello',
// // //   1: 'World',
// // //   length: 2
// // // };

// // // alert(arrayLike2.pop());

// // // let john = { name: "John" };
// // // let ben = { name: "Ben" };


// // // let visitsCountObj = {};

// // // visitsCountObj[ben] = 123;
// // // visitsCountObj[john] = 321;
// // // alert(visitsCountObj[ben]);

// // let recipeMap = new Map([
// //   ['cucumber', 500],
// //   ['tomatoes', 350],
// //   ['onion', 50]
// // ])

// // // for (let vegetable of recipeMap.keys()) {
// // //   alert(vegetable);
// // // }

// // // for (let amount of recipeMap.values()) {
// // //   alert(amount);
// // // }

// // // for (let entity of recipeMap) {
// // //   alert(entity);
// // // }

// // recipeMap.forEach( (value, key) => {
// //   alert(`${key}: ${value}`)
// // })

// // let obj = {
// //   'banana': 1,
// //   'orange': 2,
// //   'meat': 4
// // }

// // let map = new Map(Object.entries(obj));

// // // alert( map.get('banana') );

// // let prices = Object.fromEntries([
// //   ['banana', 1],
// //   ['orange', 2],
// //   ['meat', 4]
// // ])

// // alert(prices);
// // alert(map);


// // function unique(arr) {
// //   let uniqueValue = new Set(arr);
// //   let uniqueArr = []
// //   for (let value of uniqueValue) {
// //     uniqueArr.push(value)
// //   }
// //   return uniqueArr;
// // }

// // let values = ["Hare", "Krishna", "Hare", "Krishna",
// //   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// // ];

// // alert( unique(values) ); // Hare, Krishna, :-O
// // let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// // function aclean(arr) {
// //   let map = new Map();
// //   for (let a of arr) {
// //     let sorted = a.toLowerCase().split('').sort().join('');
// //     map.set(sorted, a);
// //   }
// //   return Array.from(map.values());
// // }



// // alert( aclean(arr) );
// // let test = new Set('nap');
// // let test2 = new Set('pan');
// // alert(Array.from(test));
// // alert(Array.from(test).sort() == Array.from(test2).sort());
// // alert(Array.from(test2).sort());
// // alert( test === test2 );

// // let map = new Map();

// // map.set("name", "John");

// // let keys = Array.from(map.keys());

// // // Error: keys.push is not a function
// // keys.push("more");
// // alert(keys);

// // let visitedSet = new WeakSet();
// // let john = { name: "John" };
// // let pete = { name: "Pete" };
// // let mary = { name: "Mary" };

// // visitedSet.add(john);
// // visitedSet.add(pete);
// // visitedSet.add(mary);

// // let messages = [
// //     {text: "Hello", from: "John"},
// //     {text: "How goes?", from: "John"},
// //     {text: "See you soon", from: "Alice"}
// //   ];

// // let readMessages = new WeakSet();
// // readMessages.add(messages[0]);
// // readMessages.add(messages[1]);
// // readMessages.add(messages[2]);

// // readMessages.add(messages[0]);

// // alert(`messages 0 has been read?` + readMessages.has(messages[0]))
// // let prices = {
// //     banana: 1,
// //     orange: 2,
// //     meat: 4,
// //   };


// // let doublePrices = Object.fromEntries(
// //     Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
// // );

// // alert(doublePrices.orange);

// // function sumSalaries(salaries) {
// //     let sumSalaries = 0;
// //     for (let salary of Object.values(salaries)) {
// //         sumSalaries += salary;
// //     }
// //     return sumSalaries;
// // }

// // let salaries = {
// //     "John": 100,
// //     "Pete": 300,
// //     "Mary": 250
// //   };
// // let another = {};
// // alert( sumSalaries(salaries) ); // 650
// // alert( sumSalaries(another) ); // 650
// // function count(obj) {
// //     let c = 0
// //     for (let i of Object.keys(obj)){
// //         c++;
// //     }
// //     return c
// // }


// // let user = {
// //     name: 'John',
// //     age: 30
// //   };
  
// // alert( count(user) ); // 2
// // runs only prompt for surname
// // let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];

// // alert(name);    // Julius (from array)
// // alert(surname); // whatever prompt gets

// // let options = {
// //     size: {
// //       width: 100,
// //       height: 200
// //     },
// //     items: ["Cake", "Donut"],
// //     extra: true
// //   };

// // let {
// //     size: {width, height},
// //     items: [item1, item2],
// //     title = "menu"
// // } = options;

// // // alert(title);  // Menu
// // // alert(width);  // 100
// // // alert(height); // 200
// // // alert(item1);  // Cake
// // // alert(item2);  // Donut
// // alert( size )

// // let options = {
// //     title: "My menu",
// //     items: ["Item1", "Item2"]
// // };

// // function showMenu({title='Untitled', width=200, height=100, items:[item1, item2]}) {
// //     alert( `${title} ${width} ${height}`);
// //     // alert( items );
// //     alert (item1 )
// // }

// // showMenu(options);

// // let user = {
// //     name: "John",
// //     years: 30
// // };

// // let {name, years:age, isAdmin=false} = user;

// // alert( name ); // John
// // alert( age ); // 30
// // alert( isAdmin ); // false
// // function topSalary(obj) {
// //     let lastSalary = 0;
// //     let name = null;
// //     for (let salary of Object.entries(obj)) {
// //         if (salary[1] >= lastSalary) {
// //             lastSalary = salary[1];
// //             [name, salary] = salary;
// //         }

            
// //     }
// //     return name;
// // }

// // let salaries = {
// //     "John": 100,
// //     "Pete": 300,
// //     "Mary": 250
// //   };
// // let test = {}

// // alert( topSalary(salaries) );
// // alert( topSalary(test) );
// // let now = new Date();
// // alert( now );

// // let date = new Date("2017-01-26");
// // alert( date );
// // function getWeekDay(date) {
// //     let weekday = date.getDay();
// //     let dayName = (weekday == 0) ? 'SU' :
// //         (weekday == 1) ? 'MO' : 
// //         (weekday == 2) ? 'TU' : 
// //         (weekday == 3) ? 'WE' : 
// //         (weekday == 4) ? 'TH' : 
// //         (weekday == 5) ? 'FR' : 
// //         (weekday == 6) ? 'SA' : 'Error'
// //     return dayName;
// // }

// // let date = new Date(2012, 0, 3);  // 3 Jan 2012
// // alert( getWeekDay(date) );  
// // function getLocalDay(date) {
// //     let weekDay = date.getDay();
// //     let europeanDay = weekDay != 0 ? weekDay : 7
// //     return europeanDay;
// // }

// // let date = new Date(2012, 0, 3);  // 3 Jan 2012
// // alert( getLocalDay(date) );  
// // function getDateAgo(date, days){
// //     let timeStempDiff = date - days*24*60*60*1000;
// //     let newDate = new Date(timeStempDiff);
// //     return newDate.getDate();
// // }
// // let date = new Date(2015, 0, 2);

// // alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// // alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// // alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// // function getLastDayOfMonth(year, month) {
// //     let date1 = new Date(year, month);
// //     let date2 = new Date(year, ++month);
// //     return (date2 - date1) / 24 / 60 / 60 / 1000
// // }

// // alert( getLastDayOfMonth(2012, 1) );

// // function getSecondsToday() {
// //     let nowDate = Date.now();
// //     let nowD = new Date(nowDate)
// //     return nowD.getHours()*60*60 + nowD.getMinutes() * 60 + nowD.getMinutes() * 60 + + nowD.getSeconds()
// // } 

// // function getSecondsToTommorrow() {
// //     return 24*3600 - getSecondsToday()
// // }
// // alert( getSecondsToTommorrow() )

// // function formatDate(date) {
// //     let nowDate = Date.now()
// //     if (date - nowDate <= 1000 && date - nowDate >= -1000) {
// //         return 'right now'
// //     } else if (date - nowDate <= 60 * 1000 && date - nowDate >= -1000 * 60) {
// //         return `${(nowDate - date) / 1000} sec. ago`
// //     } else if (date - nowDate <= 3600 * 1000 && date - nowDate >= -1000 * 3600) {
// //         return `${(nowDate - date) / 1000/60} min. ago`
// //     } else {
// //         return `${('0' + date.getDate()).slice(-2)}.${('0' + (date.getMonth() + 1)).slice(-2)}.${('0' + (date.getFullYear())).slice(-2)} ${('0' + (date.getHours())).slice(-2)}:${('0' + (date.getSeconds())).slice(-2)}`
// //     }
// // }

// // alert( formatDate(new Date(new Date - 1)) ); // "right now"

// // alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

// // alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// // // yesterday's date like 31.12.16 20:00
// // alert( formatDate(new Date(new Date - 86400 * 1000)) );

// // let student = {
// //     name: 'John',
// //     age: 30,
// //     isAdmin: false,
// //     courses: ['html', 'css', 'js'],
// //     wife: null
// //   };
  
// //   let json = JSON.stringify(student);
  
// //   alert(typeof json); // we've got a string!
  
// //   alert(json);

// // let user = {
// //     name: "John Smith",
// //     age: 35
// // }

// // let userJson = JSON.stringify(user);
// // alert( userJson );
// // let newUser = JSON.parse(userJson);
// // alert( newUser );

// // let room = {
// //     number: 23
// //   };
  
// //   let meetup = {
// //     title: "Conference",
// //     occupiedBy: [{name: "John"}, {name: "Alice"}],
// //     place: room
// //   };
  
// //   // circular references
// //   room.occupiedBy = meetup;
// //   meetup.self = meetup;
  
// //   alert( JSON.stringify(meetup, function replacer(key, value) {
// //     /* your code */
// //     return (key != '' && value == meetup) ? undefined : value;
// //   }));
  
// //   /* result should be:
// //   {
// //     "title":"Conference",
// //     "occupiedBy":[{"name":"John"},{"name":"Alice"}],
// //     "place":{"number":23}
// //   }
// //   */

// // function sumTo(number) {

// //     if (number == 1) {
// //         return 1;
// //     } else {
// //         return number + sumTo(number - 1);
// //     }
    
    
    
// // }

// // alert(sumTo(100));

// // function factorial(number) {
// //     return (number == 0) ? 1 : factorial(number - 1) * number;
// // }
// // alert(factorial(4))
// // function fib(n) {
// //     let firstNumber = 1;
// //     let SecondNumber = 1;
// //     let fNumber = 0;
// //     if (n <= 2) {
// //         return 1
// //     } 
// //     for (let i = 3; i<=n; i++) {
// //         fNumber = firstNumber + SecondNumber;
// //         firstNumber = SecondNumber;
// //         SecondNumber = fNumber;
// //     }


// //     return SecondNumber;
// // }

// // alert(fib(3)); // 2
// // alert(fib(7)); // 13
// // alert(fib(77)); // 5527939700884757

// // let list = {
// //     value: 1,
// //     next: {
// //       value: 2,
// //       next: {
// //         value: 3,
// //         next: {
// //           value: 4,
// //           next: null
// //         }
// //       }
// //     }
// //   };

// //   function backList(list) {
// //     if (list.next) {
// //         backList(list.next)
// //     }
// //     alert( list.value );
// //   }

// //   backList(list)

// // let arr = [1,2,3,4];
// // alert( Math.max(...arr))

// // let name = "John";

// // function sayHi() {
// //   alert("Hi, " + name);
// // }

// // name = "Pete";

// // sayHi(); // 会显示什么："John" 还是 "Pete"？
// // function makeWorker() {
// //   let name = "Pete";

// //   return function() {
// //     alert(name);
// //   };
// // }

// // let name = "John";

// // // create a function
// // let work = makeWorker();

// // // call it
// // work(); // 会显示什么？

// // function makeCounter() {
// //   let count = 0;

// //   return function() {
// //     return count++;
// //   };
// // }

// // let counter = makeCounter();
// // let counter2 = makeCounter();

// // alert( counter() ); // 0
// // alert( counter() ); // 1

// // alert( counter2() ); // ?
// // alert( counter2() ); // ?
// // function Counter() {
// //   let count = 0;

// //   this.up = function() {
// //     return ++count;
// //   };
// //   this.down = function() {
// //     return --count;
// //   };
// // }

// // let counter = new Counter();

// // alert( counter.up() ); // ?
// // alert( counter.up() ); // ?
// // alert( counter.down() ); // ?
// // function sum(a) {
// //   return function (b) {
// //     return a + b;
// //   }
// // }
// // alert(sum(1)(2));

// // let x = 1;

// // function func() {
// //   let x = 2;

// //   console.log(x); // ?
// // }


// // func();

// // function inBetween(a, b){
// //   return function(x) {
// //     return x >= a && x <= b;
// //   }
// // }

// // function inArray(arr) {
// //   return function(x) {
// //     return arr.includes(x)
// //   }
// // }
// // let arr = [1, 2, 3, 4, 5, 6, 7];

// // alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// // alert( arr.filter(inArray([1, 2, 10])) ); // 1,2


// // let users = [
// //   { name: "John", age: 20, surname: "Johnson" },
// //   { name: "Pete", age: 18, surname: "Peterson" },
// //   { name: "Ann", age: 19, surname: "Hathaway" }
// // ];
// // function byField(field) {
// //   return function(a, b) {
// //     return a.field > b.field ? 1 : -1; 
// //   }
// // }


// // users.sort(byField('name'));
// // alert( users[0].name )
// // users.sort(byField('age'));
// // alert( users[0].name )
// // function makeArmy() {
// //   let shooters = [];

// //   let i = 0;
// //   while (i < 10) {
// //     let b = i;
// //     let shooter = function() { // 创建一个 shooter 函数，
    
// //       alert( b ); // 应该显示其编号
// //     };
// //     shooters.push(shooter); // 将此 shooter 函数添加到数组中
// //     i++;
// //   }

// //   // ……返回 shooters 数组
// //   return shooters;
// // }

// // let army = makeArmy();

// // // ……所有的 shooter 显示的都是 10，而不是它们的编号 0, 1, 2, 3...
// // army[0](); // 编号为 0 的 shooter 显示的是 10
// // army[1](); // 编号为 1 的 shooter 显示的是 10
// // army[2](); // 10，其他的也是这样。

// // function makeCounter() {
// //   function Counter() {
// //     return Counter.count++;
// //   }

// //   Counter.count = 0
// //   Counter.set = function(value) {
// //     Counter.count = value;
// //   }
// //   Counter.decrease = function(value) {
// //     Counter.count -= value;
// //   }
// //   return Counter;
// // }

// // let c = makeCounter()
// // alert(c());
// // alert(c());
// // c.set(10086);
// // alert(c());
// // c.decrease(2581);
// // alert(c());
// // function sum(a) {
// //   let currentSum = a;

// //   function f(b) {
// //     currentSum += b;
// //     return f
// //   }

// //   f.toString = function() {
// //     return currentSum;
// //   }

// //   return f;




// // }

// // alert( sum(1)(82)(53) )
// // let delay = 500;
// // let timeId = setTimeout(function request() {
// //   alert('request');
// //   timeId = setTimeout(request, delay);
// //   clearTimeout(timeId)
// // // }, delay);
// // function printNumbers(from, to) {
  
// //   let number = from;
// //   if (number>=from && number<=to) {
// //     setInterval(function(number) {
// //       alert(number); 
// //       number += 1
// //     }, 1000, number)
// //   }
// // }
// // printNumbers(1, 10)
// // function slow(x) {

// //   alert( `called with ${x}`);
// //   return x;
// // }

// // function cachingDecorator(func) {
// //   let cache = new Map();

// //   return function(x) {
// //     if (cache.has(x)) {
// //       return cache.get(x);
// //     }
// //     let result = func(x);

// //     cache.set(x, result);
// //     return result;

// //   }
// // }

// // let worker = {
// //   slow(min, max) {
// //     alert(`Cached with ${min}, ${max}`);
// //     return min + max;
// //   }
// // };

// // function cachingDecorator(func, hash) {
// //   let cache = new Map();

// //   return function() {
// //     let key = hash(arguments);
// //     if (cache.has(key)) {
// //       return cache.get(key);
// //     }
    
// //   let result = func.call(this, ...arguments)
// //   cache.set(key, result);
// //   return result
// //   }
// // }

// // function hash(args) {
// //   return args[0] + ',' + args[1];
// // }
// // worker.slow = cachingDecorator(worker.slow, hash);
// // alert( worker.slow(3,5) );
// // alert( worker.slow(3,5) );

// // function work(a, b) {
// //   alert(a + b);
// // }

// // function spy(func) {
// //   func.calls = []
// //   function wrapper(...args) {
// //     wrapper.calls.push(args);

// //     return func.apply(this.args)
// //   }

// //   wrapper.calls = [];

// //   return wrapper;
// // }

// // work(1, 2); // 3
// // work(4, 5); // 9

// // for (let args of work.calls) {
// //   alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// // }
// // function f(x) {
// //   alert(x);
// // }
// // function delay(func, time) {
  
// //   return function(...args) {

// //     setTimeout(() => func.apply(this, args), time);
// //   }
// // }
// // // create wrappers
// // let f1000 = delay(f, 1000);
// // let f1500 = delay(f, 1500);

// // f1000("test"); // shows "test" after 1000ms
// // f1500("test"); // shows "test" after 1500ms

// // let user = {
// //   firstName: "John",
// //   sayHi() {
// //     alert(`Hello, ${this.firstName}!`);
// //   }
// // };

// // let sayHi = user.sayHi.bind(user);
// // setTimeout(sayHi, 1000);

// // user = {
// //   sayHi() {alert("Another user in setTimeout!")}
// // }

// // function partial(func, ...argsBound) {
// //   return function(...args) {
// //     return func.call(this, ...argsBound, ...args);
// //   }
// // }

// // let user = {
// //   firstName: "John",
// //   say(time, phrase) {
// //     alert(`[${time}] ${this.firstName}: ${phrase}!`);
// //   }
// // };

// // user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes())
// // user.sayNow("Hello")

// // function askPassword(ok, fail) {
// //   let password = prompt("Password?", '');
// //   if (password == 'rockstar') ok();
// //   else fail();
// // }

// // let user = {
// //   name: 'John',

// //   // loginOk() {
// //   //   alert(`${this.name} logged in`);
// //   // },

// //   // loginFail() {
// //   //   alert(`${this.name} failed to log in`)
// //   // },

// //   login(result) {
// //     alert( this.name + (result ? ' logged in ' : ' failed to log in ') )
// //   }
// // }
// // askPassword(user.login.bind(user, true), user.login.bind(user, false));

// // function defer(f, ms) {
// //   return function() {
// //     setTimeout(() => f.apply(this, arguments), ms);
// //   };
// // }

// // function sayHi(who) {
// //   alert("Hello, " + who);
// // }

// // let sayHiDeferred = defer(sayHi, 2000);
// // sayHiDeferred("John")

// // let user = {
// //   name: "John"
// // };

// // let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
// // alert( JSON.stringify( descriptor, null, 2 ) );
// // let obj = {
// //     get propName() {

// //     },

// //     set propName() {

// //     }
// // }

// // let animal = {
// //     eats: true
// // };

// // let rabbit = {
// //     jumps: true
// // };

// // rabbit.__proto__ = animal

// // alert(rabbit.eats)
// // let animal = {
// //     walk() {
// //         if (!this.isSleeping) {
// //             alert(`I walk`);
// //         }
// //     },

// //     sleep() {
// //         this.isSleeping = true;
// //     }
// // };

// // let rabbit = {
// //     name: "White Rabbit",
// //     __proto__: animal
// // };

// // rabbit.sleep()

// // alert(rabbit.isSleeping)
// // alert(animal.isSleeping)
// // let head = {
// //     glasses:1,
// // };
// // let table = {
// //     pen:3,
// //     __proto__: head
// // };
// // let bed = {
// //     sheet:1,
// //     pillow:2,
// //     __proto__: table
// // };
// // let pockets = {
// //     money:2000,
// //     __proto__: bed
// // };

// // console.log(bed.glasses)
// // let hamster = {
// //     //stomach: [],
  
// //     eat(food) {
// //       this.stomach.push(food);
// //     }
// //   };
  
// //   let speedy = {
// //       stomach:[],
// //     __proto__: hamster
// //   };
  
// //   let lazy = {
// //     stomach:[],
// //     __proto__: hamster
// //   };
  
// //   // This one found the food
// // speedy.eat("apple");
// // console.log( speedy.stomach ); // apple
  
// //   // This one also has it, why? fix please.
// // console.log( lazy.stomach ); // apple；

// // class User {
// //     constructor(name) {
// //         this.name = name;
// //     }

// //     sayHi() {
// //         console.log(this.name);
// //     }
// // }

// // let user = new User("OO");
// // user.sayHi();

// // let me = {
// //     love: "me"
// // };

// // let xb = {
// //     eat: 'ob'
// // };

// // xb.__proto__ = me;

// // console.log(me.love);
// // console.log(xb.love);

// let xb = {
//     one: 1,
//     two: 2
// }

// let ob = {
//     three:3,
//     four:4,
//     __proto__: xb

// }

// for (let prop in ob) {
//     ob.hasOwnProperty(prop) ? console.log(prop) : console.log('nonono');
// };

// let animal = {
//     jumps: null
//   };
//   let rabbit = {
//     __proto__: animal,
//     jumps: true
//   };
  
// alert( rabbit.jumps ); // true (1)

// delete rabbit.jumps;

// alert( rabbit.jumps ); // null (2)

// delete animal.jumps;

// alert( rabbit.jumps ); // not defined (3)
// let head = {
//     glasses: 1
//   };
  
//   let table = {
//     pen: 3,
//     __proto__: head
//   };
  
//   let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
//   };
  
//   let pockets = {
//     money: 2000,
//     __proto__: bed
//   };
// let hamster = {
//     stomach: [],
  
//     eat(food) {
//       this.stomach = [];
//       this.stomach.push(food);
//     }
//   };
  
//   let speedy = {
//     __proto__: hamster
//   };
  
//   let lazy = {
//     __proto__: hamster
//   };
  
//   // 这只仓鼠找到了食物
// speedy.eat("apple");
// alert( speedy.stomach ); // apple

// // 这只仓鼠也找到了食物，为什么？请修复它。
// alert( lazy.stomach ); // apple
// console.log([1,2,3])
// Function.prototype.defer = function(ms) {
//     let f = this;
//     return function (...args) {
//         setTimeout(() => f.apply(this, args), ms)
//     }
    
// }

// function f(a, b) {
//     alert(a + b);

// }

// f.defer(1000)(1,2);

// let animal = {
//     eats: true
// }

// let rabbit = {
//     color: 'white',
//     __proto__: animal    
// }

// console.log(rabbit.eats);

// console.log(Object.create(animal).eats);

// let obj = new Map();

// let key = prompt('set key', '__proto__');

// obj.set(key, 8848);
// console.log(obj.get(key));

// let dictionary = Object.create(null, {
//     toString: {
//         value() {
//             return Object.keys(this).join()
//         }
//     }
// });

// // 你的添加 dictionary.toString 方法的代码

// // 添加一些数据
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // 这里 __proto__ 是一个常规的属性键

// // 在循环中只有 apple 和 __proto__
// for(let key in dictionary) {
//   alert(key); // "apple", then "__proto__"
// }

// // 你的 toString 方法在发挥作用

// alert(dictionary); // "apple,__proto__"

// function Rabbit(name) {
//     this.name = name;
//   }
// Rabbit.prototype.sayHi = function() {
//     alert(this.name);
// // };
  
// // let rabbit = new Rabbit("Rabbit");

// // rabbit.sayHi();
// // Rabbit.prototype.sayHi();
// // Object.getPrototypeOf(rabbit).sayHi();
// // rabbit.__proto__.sayHi();
// // class User {
// //     constructor(name) {
// //         this.name = name;
// //     }

// //     sayHi() {
// //         console.log(this.name);
// //     }
// // }

// // let user = new User('sb');
// // user.sayHi();

// // class User{

// //     constructor(name) {
// //         this.name = name;
// //     }

// //     get name() {
// //         return this._name;
// //     }

// //     set name(value) {
// //         if (value.length < 4) {
// //             console.log("Too short");
// //             return;
// //         } 

// //         this._name = value;
// //     }
// // }

// // let user = new User('sbsbsb')
// // console.log(user.name)

// // class Animal {
// //     constructor(name) {
// //       this.speed = 0;
// //       this.name = name;
// //     }
// //     run(speed) {
// //       this.speed = speed;
// //       alert(`${this.name} runs with speed ${this.speed}.`);
// //     }
// //     stop() {
// //       this.speed = 0;
// //       alert(`${this.name} stands still.`);
// //     }
// //   }
  
// // let animal = new Animal("My animal");

// // class Rabbit extends Animal {
// //     hide() {
// //         console.log(`${this.name} hides!`);
// //         }

// //     stop() {
// //         super.stop();
// //         this.hide();
// //     }
// // }

// //   let rabbit1 = new Rabbit('sb');
// //   rabbit1.run(8848);
// //   rabbit1.stop();

// // let animal = {
// //     name: "Animal",
// //     eat() {
// //         console.log(`${this.name} eats.`);
// //     }
// // };

// // let rabbit = {
// //     name: "rabbit",
// //     __proto__: animal,
// //     eat() {
// //         // this.__proto__.eat.call(this);
// //         super.eat();
// //     }
// // };

// // let longEar = {
// //     name: "longear",
// //     __proto__: rabbit,
// //     eat() {
// //         // this.__proto__.eat.call(this);
// //         super.eat();
// //     }
// // };

// // // console.log(animal.eat.HomeObject);
// // longEar.eat();

// //方法并不自由
// // let animal = {
// //     sayHi() {
// //         console.log('I, am an animal');
// //     }
// // };

// // let rabbit = {
// //     __proto__: animal,
// //     sayHi() {
// //         super.sayHi();
// //     }
// // };

// // let plant = {
// //     __proto__: animal,
// //     sayHi() {
// //         console.log('I, am a plant');
// //     }
// // }

// // let tree = {
// //     __proto__: plant,
// //     sayHi: rabbit.sayHi
// // };
// // tree.sayHi()

// // class Animal {

// //     constructor(name) {
// //       this.name = name;
// //     }
  
// //   }
  
// // class Rabbit extends Animal {
// //     constructor(name) {
// //         super(name);
// //         this.created = Date.now();
// //     }
// // }

// // let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
// // alert(rabbit.name);

// class Clock {
//     constructor({ template }) {
//       this.template = template;
//     }
  
//     render() {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = this.template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     stop() {
//       clearInterval(this.timer);
//     }
  
//     start() {
//       this.render();
//       this.timer = setInterval(() => this.render(), 1000);
//     }
// }

// class extendedClock extends Clock {
//     start(ticks) {
//         this.render();
//         this.timer = setInterval(() => this.render(), ticks);
//     }
// }

// testClock = new extendedClock('hms');
// testClock.start(100);

//  
// class Article {
//     constructor(title, date) {
//         this.title = title;
//         this.date = this.date;
//     }

//     static createTodays() {
//         return new this("Today's digest", new Date());
//     }
// }

// let article

// let number = +prompt();
// let ifsu = true
// for (let i = 2;i<number;i++) {
//     if ((number % i) === 0) {
//         ifsu = false;
//         break;
//     }
// }

// if (ifsu) {
//     alert('yes');
// } else {
//     alert('no');
// }

// let a;
// const af = function(ab) {
//     console.log(a)
//     a = ab;
//     console.log(a);
// };

// af(100);
// console.log(a);

// alert('this is jsinfo')

// class CoffeeMachine {
//     _waterAmount = 0;


//     constructor(power) {
//         this._power = power;
//         // console.log(`Created a coffee-machine, power: ${power}`);
//     }


//     set waterAmount(value) {
//         if (value < 0) {
//             value = 0;
//         }

//         this._waterAmount = value;
//     }

//     get waterAmount() {
//         return this._waterAmount;
//     }

//     get power() {
//         return this._power;
//     }


// }

// const coffeeMachine = new CoffeeMachine(100);

// coffeeMachine.waterAmount = -200;
// coffeeMachine.power = 8848;// console.log(coffeeMachine.power);
// class PowerArray extends Array {
//     isEmpty() {
//         return this.length === 0
//     }
// }

// let arr = new PowerArray(1, 2, 5);
// class PowerArray extends Array {
//     isEmpty() {
//         return this.length === 0;
//     }

//     static get [Symbol.species]() {
//         return Array;
//     }
// }

// let arr = new PowerArray(1, 2, 5, 10, 50);
// console.log(arr.isEmpty());

// const filteredArr = arr.filter(item => item >= 10);
// // console.log(filteredArr.isEmpty());

// console.log(filteredArr instanceof Array);
// class 
// function Rabbit() {}
// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// console.log(rabbit instanceof Rabbit);

// let user = {
//     [Symbol.toStringTag]: "User"
// };

// console.log(Array.toString.call(user));

// let sayHiMixin = {
//     sayHi() {
//         console.log(`Hello ${this.name}`);
//     },

//     sayBye() {
//         console.log(`Bye ${this.name}`);
//     }
// }

// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// Object.assign(User.prototype, sayHiMixin)

// new User('tietie').sayHi();

// let eventMixin = {

//     on(eventName, handler) {
//         if (!this._eventHandlers) this._eventHandlers = {};
//         if (!this._eventHandlers[eventName]) {
//             this._eventHandlers[eventName] = [];
//         }
//         this._eventHandlers[eventName].push(handler)
//     },

//     off(eventName, handler) {
//         let handlers = this._eventHandlers?.[eventName];
//         if (!handlers) return;
//         for (let i=0; i<handlers.length; i++) {
//             if (handlers[i] === handler) {
//                 handlers.splice(i--, 1);
//             }
//         }
//     },

//     trigger(eventName, ...args) {
//         if (!this._eventHandlers?.[eventName]) {
//             return;
//         }

//         this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
//     }

// };

// class Menu {
//     choose(value) {
//         this.trigger('select', value);
//     }
// }

// Object.assign(Menu.prototype, eventMixin);

// let menu = new Menu();

// menu.on("select", value => alert(`value selected: ${value}`));

// menu.choose('123')


// setTimeout(function() {try {
//     no
// } catch(err) {
//     alert('no');
//     alert(err);
// }
// }, 1000)

// let json = '{"age": 30}';

// try {
//     let user = JSON.parse(json);
    
//     if (!user.name) {
//         throw new SyntaxError("Incomplete data: no name");
//     }

//     alert(user.name);

// } catch (err) {
//     alert("JSON Error: " + err.message);
// }

// try {
//     let user = JSON.parse(json);

//     if (!user.name) {
//         throw new SyntaxError("Incomplete data: no name");
//     }

//     blabla();

//     alert(user.name);
// } catch(err) {
//     if (err instanceof SyntaxError) {
//         alert("JSON Error:" + err.message);
//     } else {
//         throw err;
//     }
// }

// function readData() {
//     let json = '{ "age": 30 }';
  
//     try {
//       // ...
//       let user = JSON.parse(json);
//       if (!user.name) {
//                 throw new SyntaxError("Incomplete data: no name");
//             }
//       blabla(); // error!
//     } catch (err) {
//       // ...
//       if (!(err instanceof SyntaxError)) {
//         throw err; // rethrow (don't know how to deal with it)
//       }
//     }
//   }
  
//   try {
//     readData();
//   } catch (err) {
//     alert( "External catch got: " + err ); // caught it!
//   }

// let num = +prompt("Enter a positive integer number?", 35);
// let diff, result;

// function fib(n) {
//     if (n < 0 || Math.trunc(n) != n) {
//         throw new Error("Must be negative, and also an integer.");
//     }
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// let start = Date.now();

// try {
//     result = fib(num);
// } catch (err) {
//     result = 0;
// } finally {
//     diff = Date.now() - start;
// }

// alert(result || "error occurred");
// alert(`execution took ${diff} ms`);

// try {
//     errorcode;
// } finally {
//     alert('always me')
// }

// window.onerror = function(message, url, line, col, error) {
//     alert(`${message}\n At ${line}:${col} of ${url}`);
//   };

//   function readData() {
//     badFunc(); // Whoops, something went wrong!
//   }

//   readData();

let json = `{"name": "John", "age": 30}`;


