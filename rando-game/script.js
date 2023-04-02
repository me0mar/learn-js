'use strict';

//Reset Game
const btnNewGameDOM = document.querySelector('.btn--new');
//roll dice play
const btnRollDiceDOM = document.querySelector('.btn--roll');
//hold Score
const holdDOM = document.querySelector('.btn--hold');
//selelct image box
const diceDOM = document.querySelector('.dice');
//Current score for player 1
const current1DOM = document.querySelector('#current--0');
//Current score for player 2
const current2DOM = document.querySelector('#current--1');
//Big score for player 1
const bigScore1DOM = document.querySelector('#score--0');
//Big score for player 2
const bigScore2DOM = document.querySelector('#score--1');
//shwitch player 1
const player1 = document.querySelector('.player--0');
//shwitch player 2
const player2 = document.querySelector('.player--1');
//sounds
const soundRoll = document.querySelector('#sound-roll');
const soundWin = document.querySelector('#sound-win');
const sound0 = document.querySelector('#sound-0');
const soundHold = document.querySelector('#sound-hold');

let currentScoreHolderPlayer1 = 0;
let currentScoreHolderPlayer2 = 0;

let bigScoreHolderPlayer1 = 0;
let bigScoreHolderPlayer2 = 0;
diceDOM.classList.add('hidden');
btnNewGameDOM.classList.add('hidden');
holdDOM.classList.add('hidden');

//when click roll dice
btnRollDiceDOM.addEventListener('click', () => {
  diceDOM.classList.remove('hidden');
  holdDOM.classList.remove('hidden');
  const dice = Math.ceil(Math.random() * 6);
  //display image
  diceDOM.src =
    dice === 1 ? `images/dice-${dice}.gif` : `images/dice-${dice}.png`;
  //display current score
  if (player1.classList.contains('player--active')) {
    if (dice > 1) {
      current1DOM.textContent = currentScoreHolderPlayer1 += dice;
    } else {
      current1DOM.textContent = 0;
      currentScoreHolderPlayer1 = 0;
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
      sound0.play();
    }
  } else if (player2.classList.contains('player--active') && dice > 1) {
    current2DOM.textContent = currentScoreHolderPlayer2 += dice;
  } else {
    currentScoreHolderPlayer2;
    current2DOM.textContent = 0;
    currentScoreHolderPlayer2 = 0;
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    sound0.play();
  }
  soundRoll.play();
});
//when click hold
holdDOM.addEventListener('click', () => {
  if (player1.classList.contains('player--active')) {
    bigScoreHolderPlayer1 += currentScoreHolderPlayer1;
    bigScore1DOM.textContent = bigScoreHolderPlayer1;
    current1DOM.textContent = 0;
    currentScoreHolderPlayer1 = 0;
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
  } else if (player2.classList.contains('player--active')) {
    bigScoreHolderPlayer2 += currentScoreHolderPlayer2;
    bigScore2DOM.textContent = bigScoreHolderPlayer2;
    current2DOM.textContent = 0;
    currentScoreHolderPlayer2 = 0;
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
  }
  if (bigScoreHolderPlayer1 >= 100) {
    player1.classList.add('player--winner');
    holdDOM.classList.add('hidden');
    btnRollDiceDOM.classList.add('hidden');
    diceDOM.src = './images/giphy.gif';
    btnNewGameDOM.classList.remove('hidden');
    soundWin.play();
  } else if (bigScoreHolderPlayer2 >= 100) {
    player2.classList.add('player--winner');
    holdDOM.classList.add('hidden');
    btnRollDiceDOM.classList.add('hidden');
    diceDOM.src = './images/giphy.gif';
    btnNewGameDOM.classList.remove('hidden');
    soundWin.play();
  }
  soundHold.play();
});

btnNewGameDOM.addEventListener('click', () => {
  bigScoreHolderPlayer1 = 0;
  bigScoreHolderPlayer2 = 0;
  bigScore1DOM.textContent = 0;
  bigScore2DOM.textContent = 0;
  btnNewGameDOM.classList.add('hidden');
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  diceDOM.classList.add('hidden');
  btnRollDiceDOM.classList.remove('hidden');
});
