'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct answer!!'

// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value)
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = '❌❌❌ Oh NO, your input is not a Number!'
    } else {
        console.log(guess);
    }

})