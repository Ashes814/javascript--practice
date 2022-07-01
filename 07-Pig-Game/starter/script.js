'use strict';

const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore = 0;

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');


btnRoll.addEventListener('click', function () {
    // 1. Generating a random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1 

    // 2. Display dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
        // Add dice to current score
        currentScore += dice;
        current0Element.textContent = currentScore // change later
    }
})

