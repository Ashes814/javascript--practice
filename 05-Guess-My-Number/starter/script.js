'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct answer!!'

// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value)
const answerNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = answerNumber;
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = '❌❌❌ Oh NO, your input is not a Number or A 0!'
    } else if (guess === answerNumber){
        document.querySelector('.message').textContent = 'Congratulations!!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
    } else if (guess > answerNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '🏋🏻Too High!!';
            score--;
            document.querySelector('.score').textContent = score;           
        } else {
            document.querySelector('.message').textContent = "🚫 Lost the game you stupid!"; 
            document.querySelector('body').style.backgroundColor = 'red'
            document.querySelector('.score').textContent = 0;
        }

    } else if (guess < answerNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low!!🏋🏻';
            score--;
            document.querySelector('.score').textContent = score;           
        } else {
            document.querySelector('.message').textContent = "🚫 Lost the game you stupid!"; 
            document.querySelector('body').style.backgroundColor = 'red'
            document.querySelector('.score').textContent = 0;
        }

    }

})