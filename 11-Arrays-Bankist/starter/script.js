'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMomvements = function (acc) {
  containerMovements.innerHTML = '';

  
  acc.movements.forEach(function (mov, index) {
    const type = mov > 0 ? `deposit` : `withdrawal`
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`;
    
    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}


const creatUsernames = function (accs) {

  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  })

}

creatUsernames(accounts);

const calDisplayBalance = function (acc) {
  const balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
  acc.balance = balance;
};





// calDisplayBalance(account1.movements);

const calDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}`


  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}`;


  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}`
};
// calDisplaySummary(account1.movements);
// creatUsernames(accounts);
// console.log(accounts);
let currentAccount;

const updateUI = function (acc) {
  displayMomvements(currentAccount);
  calDisplayBalance(currentAccount);
  calDisplaySummary(currentAccount);
};

// Event Handler
btnLogin.addEventListener('click', function (event) {
  event.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome Back,  ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    updateUI(currentAccount);
  } else {
    alert('Code or Account Error!')
  }
  // clear fields
  inputLoginUsername.value = inputLoginPin.value = ''
  inputLoginPin.blur();
  // display accounts

  



});
// const getArrayMax = function(array) {
//   const maxValue = array.reduce(function (max, cur) {
//     if (cur > max) {
//       max = cur;
//       return max;
//     };
    

//   }, -9999999999999)
// }

btnLoan.addEventListener('click', function (event) {
  event.preventDefault();

  const amount = Number(inputLoanAmount.value);


  if (amount <= 0) {
    alert(`Loan must be positive!!!`)
  } else if (currentAccount.movements.some(mov => amount * 0.1 <= mov)) {
    currentAccount.movements.push(amount);
    updateUI();
    alert(`Loan Successful!`)
  } else {
    alert(`Failed, You Loan limit is !!`)
  }
})

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  if (amount > 0
    && currentAccount.balance
    >= amount
    && receiverAcc.username
    !== currentAccount.username
    && receiverAcc) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
    alert(`Transfer Success!`)

  } else {
    alert(`Wrong Account or Banlance insufficient.`)
  };
});


const returnToLogin = function() {
  containerApp.style.opacity = 0;
  labelWelcome.textContent = 'Log in to get started'
}
btnClose.addEventListener('click', function (event) {
  event.preventDefault();

  if (currentAccount.username === inputCloseUsername.value
    && currentAccount?.pin === Number(inputClosePin.value)) {
    const index = accounts.findIndex(acc => acc.owner = currentAccount.owner)
    accounts.splice(index, 1);
    returnToLogin();
    alert(`Account: ${currentAccount.owner} has been closed`);
    inputClosePin.value = inputCloseUsername.value = '';
    inputClosePin.blur()
    
  } else {
    alert(`Missing Account or Code Error!`);
    }
})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e'];


// // console.log(arr.splice(2));
// // console.log(arr);

// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr2.reverse());
// console.log(arr2);


// const letters = arr.concat(arr2);
// console.log(letters);

// movements.forEach(function (a) {
//   console.log(a);
// });\
// movements.forEach(function (movement, index, array) {
//   (movement > 0) ? console.log(`${index} + ${movement}`) : console.log(`${index} - ${movement}`);
// });
// console.log(movements.at(-1))
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'SB']);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });


// const checkDogs = function (dogsJulia, dogsKate) {
//   let dogsJuliaNocat = dogsJulia.slice(1, -1);
//   let dogsKateArray = dogsKate;
//   dogsJuliaNocat.forEach(function (value, index) {
//     value >= 3 ? console.log(`Dog number ${index + 1} is an adult, and is ${value} years old`) : console.log(`Dog number ${index + 1} is still a puppy, and is ${value} years old`);
//   });

//   dogsKateArray.forEach(function (value, index) {
//     value >= 3 ? console.log(`Dog number ${index + 1} is an adult, and is ${value} years old`) : console.log(`Dog number ${index + 1} is still a puppy, and is ${value} years old`);
//   });
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);


// const eurToUsd = 11; 

// const movementsUsd = movements.map(function (mov) {
//   return (mov * eurToUsd) / 10;

// });
// console.log(movements);
// console.log(movementsUsd);

// const movementsDescription = movements.forEach(mov => String(mov));
// console.log(movementsDescription)
// console.log(movements)
// console.log(movements.filter(mov => mov < 0));
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   return acc + cur;
// });

// console.log(balance);

// const calAverageHumanAge = function(dogsAge) {
//   const humanAge = dogsAge.map(function (age) {
//     if (age <= 2) {
//       return age * 2;
//     } else {
//       return 16 + age * 4
//     }
//   });

//   const adultHumanAge = humanAge.filter(val => val >= 18);
//   const sumAge = adultHumanAge.reduce((acc, val) => acc + val);
//   return sumAge / adultHumanAge.length
// }

// alert(calAverageHumanAge([5,2,4,1,15,8,3]))

// const euroToUsd = 1.1;
// const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);
//


// console.log(movements.find(mov => mov < 0));

// console.log(accounts.filter(account => account.interestRate > 1));

// const arr = [[1, 2, 3]];
// console.log(arr.flat());

// const overallBalance = accounts.flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

console.log(movements.sort((a, b) => a - b));