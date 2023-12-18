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

// expression for generating a random number to guess
const secretNumber = Math.trunc(Math.random() * 20 + 1);

// State data for application
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Logs the input to the console
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  // when there is no input
  if (!guess) {
    displayMessage('⛔ No number!');
    //  When player wins
  } else if (guess === secretNumber) {
    displayMessage(' 🎉 Correct Number!');

    // Displays the correct number after user inputs correct number
    document.querySelector('.number').textContent = secretNumber;

    // changes the background of page to green when guessing the right number
    document.querySelector('body').style.backgroundColor = '#60b347';

    // changes the overall width of the score box
    document.querySelector('.number').style.width = '30rem';

    // stores the highscore value
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // // When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  // Could also have just a '' for the .guess value
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('body').style.color = '#eee';
  document.querySelector('.number').style.width = '15rem';
});

//   changes the text content from start guessing.. to correct number
//   document.querySelector('.message').textContent = ' 🎉 Correct Number!';
