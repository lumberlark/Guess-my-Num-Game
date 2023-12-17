'use strict';
/*
// Check the content of a class
console.log(document.querySelector('.message').textContent);
// change the content of a class
document.querySelector('.message').textContent = ' 🎉 Correct Number!';

console.log(document.querySelector('.message').textContent);

// example of setting a value for a class
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// checking the current value, and inputing the value in js
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = secretNumber;

// State data for application
let score = 20;

// Logs the input to the console
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ' 🎉 Correct Number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
//   changes the text content from start guessing.. to correct number
//   document.querySelector('.message').textContent = ' 🎉 Correct Number!';
