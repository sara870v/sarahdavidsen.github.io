"use strict";

let text = document.querySelector("#typewriter").textContent;
let number = 0;
let letters = text.split("");

document.querySelector("#typewriter").textContent = "";
document.addEventListener("click", start);

function start() {
  document.removeEventListener("click", start);

  document.querySelector("#typewriter").append(letters[number]);

  console.log(letters[number]);

  setTimeout(addNumber, Math.floor(Math.random() * 500));
}

function addNumber() {
  if (number < 43) {
    number++;
    console.log(number);
    start();
  }
}
