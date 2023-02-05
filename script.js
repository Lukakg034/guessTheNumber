"use strict";

// Guess the number game

const playAgainButton = document.querySelector(".button-again");
const headingMessage = document.querySelector(".main-heading");
const secretNumberField = document.querySelector(".secret-number");
let guessNumberInput = document.querySelector(".guess");
const checkNumberButton = document.querySelector(".button-check");
const btnCheck = document.querySelector("#check-button");
// const toLoginButton = document.querySelector(".button-to-login");
const body = document.querySelector("body");
let message = document.querySelector(".message");
const winSound = new Audio("sounds/win-sound.wav");

// variable with random numbers between 1 and 5
let secretNumbers = Math.trunc(Math.random() * 5) + 1;

// Functions
// secretNumberField.textContent = secretNumbers; // display secret number in field
const enableNumberInput = () => (guessNumberInput.disabled = false);
const disableNumberInput = () => (guessNumberInput.disabled = true);
const enableCheckButton = () => {
  btnCheck.disabled = false;
};
const disableCheckButton = () => {
  btnCheck.disabled = true;
};
checkNumberButton.addEventListener("click", function () {
  let numberGuess = Number(guessNumberInput.value);
  const minNumber = 1;
  const maxNumber = 5;
  if (numberGuess == secretNumbers) {
    //adding text to the message
    headingMessage.textContent = "CONGRATULATIONS!";
    secretNumberField.textContent = secretNumbers;
    secretNumberField.style.color = "green";
    message.textContent = "Number is right!";
    message.style.color = "green";
    message.style.fontSize = "6rem";
    // disabling check button and number input field
    disableCheckButton();
    disableNumberInput();
    winSound.play();
    toLoginButton.style.display = "block";
  } else if (numberGuess < secretNumbers && numberGuess >= minNumber) {
    message.textContent = "Number is too low!";
    message.style.color = "red";
    message.style.fontSize = "4rem";
  } else if (numberGuess > secretNumbers && numberGuess <= maxNumber) {
    message.textContent = "Number is too high!";
    message.style.color = "red";
    message.style.fontSize = "4rem";
  } else if (numberGuess < minNumber || numberGuess > maxNumber) {
    message.textContent =
      "Please follow the rules. Pick a number between 1 and 5.";
  } else {
    message.textContent = "Number is wrong!";
    console.log("wrong number");
  }
});

playAgainButton.addEventListener("click", function () {
  message.textContent = "Start guessing...";
  message.style.color = "black";
  headingMessage.textContent = "Guess the number";
  enableCheckButton();
  enableNumberInput();
  secretNumbers = Math.trunc(Math.random() * 5) + 1;
  secretNumberField.textContent = "?";
  secretNumberField.style.color = "black";
  guessNumberInput.value = "";
});
