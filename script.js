'use strict'

'use strict'

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');


const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0]; 
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function(){
    const dice = Math.trunc(Math.random() * 6 + 1);

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; 

    if(dice !== 1){
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else{
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
    }
})

btnHold.addEventListener('click', function() {
    scores[activePlayer] += currentScore;
    
    if(scores[activePlayer] >= 10){
        score0El.textContent = `Player ${activePlayer} wins`;
        score1El.textContent = `Player ${activePlayer} wins`;
    }

    document.getElementById(`current--${activePlayer}`).textContent = 0;
    if(activePlayer === 0){
        score0El.textContent = scores[activePlayer];
        activePlayer = 1;
    } else if(activePlayer === 1){
        score1El.textContent = scores[activePlayer];
        activePlayer = 0;

    }
    currentScore = 0;
})

btnNew.addEventListener('click', function(){
    scores = [0, 0];
    score0El.textContent = scores[activePlayer];
    score1El.textContent = scores[activePlayer];
    activePlayer = 0;
    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--0`).textContent = 0;
    currentScore = 0;
    diceEl.classList.add('hidden');

})

function checkWin(){
}
