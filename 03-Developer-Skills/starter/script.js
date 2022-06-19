// Remember, we're gonna use strict mode in all scripts now!
"use strict";




// const xxs = 223;
// const xxg = 34;

// if (1 > 0) console.log('1')


// const calcAge = birthYear => 2037 - birthYear;

// console.log(xxg);
// alert()

function printForecast(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`${arr[i]}C in ${i+1} days`);
    }
}

printForecast([17, 21, 23])