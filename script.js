'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (className, message) => {
  document.querySelector(className).textContent = message;
}

const displayBG = (color) => {
  document.querySelector('body').style.backgroundColor = color;
}

const displayWidth = (width) => {
  document.querySelector('.number').style.width = width;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('.message', 'Type a number to play');
  } else if (guess === secretNumber) {
    displayMessage('.number', secretNumber);
    displayMessage('.message','Correct Number!');
    displayBG('#60b347');
    displayWidth('30rem');

    if (score > highscore) {
      highscore = score;
      displayMessage('.highscore', highscore);
    }

  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage('.message', guess > secretNumber 
        ? 'Too high! Try again...'
        : 'Too low! Try again');
      score--;
      displayMessage('.score', score);
    } else {
      displayMessage('.message', 'You loose the game!');
      displayMessage('.score', 0);
    }
  } 
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  displayMessage('.message', 'Start guessing...');
  displayMessage('.score', score);
  displayBG('#222');
  displayWidth('15rem');
  displayMessage('.number', '?');
});
