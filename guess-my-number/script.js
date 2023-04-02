'use strict';

const message = document.querySelector('.message');

const btnCheck = document.querySelector('.check');

const getRandom = () => {
  return Math.ceil(Math.random() * 20);
};

let randomNumber = getRandom();

const howMuchMony = parseInt(
  prompt('How much money do you want to play with?')
);

if (!howMuchMony) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Please choose a number',
  });
}

const score = document.querySelector('.score');
score.innerText = howMuchMony;

let scoreUpdaterDom = parseInt(score.innerText);

const HighScore = document.querySelector('.highscore');
const HighScorearr = [];

const btnPlayAgain = document.querySelector('.again');
//RESET THE GAME
btnPlayAgain.addEventListener('click', () => {
  score.innerText = 0;
  randomNumber = getRandom();
  btnCheck.style.visibility = 'visible';
  btnPlayAgain.style.visibility = 'hidden';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});

btnPlayAgain.style.visibility = 'hidden';

//START THE GAME
btnCheck.addEventListener('click', () => {
  const inputNumber = Number(document.querySelector('.guess').value);
  if (!inputNumber) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Choose number!',
    });
  }
  if (inputNumber < 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "You can't choose number smaller than 0!",
    });
  }
  if (inputNumber < randomNumber) message.textContent = '📈 Too low!';
  if (inputNumber > randomNumber) message.textContent = '📈 Too high!';
  if (inputNumber === randomNumber) {
    document.body.style.backgroundColor = 'green';
    message.textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = 'You Won!';
    HighScorearr.push(scoreUpdaterDom);
    HighScore.innerText = HighScorearr[0] - 1;
    btnCheck.style.visibility = 'hidden';
    //SHOW BUTTON PLAY AGAIN
    btnPlayAgain.style.visibility = 'visible';
  }

  scoreUpdaterDom--;
  score.innerText = scoreUpdaterDom;
  if (scoreUpdaterDom === 1) {
    document.body.style.backgroundColor = 'yellow';
    document.querySelector('.number').textContent = 'One last Chance';
  } else if (scoreUpdaterDom === 0) {
    document.body.style.backgroundColor = 'red';
    document.querySelector('.number').textContent = 'You lost';
    btnCheck.style.visibility = 'hidden';
    btnPlayAgain.innerText = 'Play Again';
    //SHOW BUTTON PLAY AGAIN
    btnPlayAgain.style.visibility = 'visible';
  }
});
