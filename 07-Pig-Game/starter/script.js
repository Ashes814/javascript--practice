'use strict';

const player0Element = document.querySelector('.player--0')
const player1Element = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

function switchPlayer() {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = (activePlayer === 0) ? 1 : 0;
        currentScore = 0;
        player0Element.classList.toggle('player--active');
        player1Element.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1. Generating a random dice roll
        let dice = Math.trunc(Math.random() * 6) + 1 

        // 2. Display dice
        diceElement.classList.remove('hidden');
        diceElement.src = `dice-${dice}.png`;

        // 3. Check for rolled 1: if true, switch to next player
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            // current0Element.textContent = currentScore // change later
        } else {
            // Switch to next Player
            switchPlayer();
        }
    }

})

btnHold.addEventListener('click', function () {
    
    if (playing) {
        // 1.Add current score to active player's score
        scores[activePlayer] += currentScore; 
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // 2. Check if score is greater or equal to 100
        if (scores[activePlayer] >= 20) {
            // Finish the game
            playing = false;
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            diceElement.classList.add('hidden')
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.getElementById(`name--${activePlayer}`).textContent = (activePlayer == 0) ? "欧宝赢了" : "萱宝侥幸获胜";
        
        } else {
            // Switch to the next player
            switchPlayer()
        }
    }

})


function resetGame() {

    scores = [0, 0];
    activePlayer = 0;
    currentScore = 0;
    playing = true;

    score0Element.textContent = 0;
    score1Element.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;

    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    player0Element.classList.add('player--active');
    player1Element.classList.remove('player--active');
    document.getElementById(`name--0`).textContent = "欧宝";
    document.getElementById(`name--1`).textContent = "萱宝";

}

btnNew.addEventListener('click', resetGame)

document.addEventListener('keydown', function (event) {
    if (event.key === 'r') {
            resetGame()
    }
})
