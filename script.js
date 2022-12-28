"use strict";

const inputBox = document.querySelector(".input-box");
const enterBtn = document.querySelector(".submit-btn");
const outputBox = document.querySelector(".output-box");

function showOutput() {
  if (inputBox.value === "") {
    outputBox.innerText = `Please enter a number!🧐`;
  } else {
    const loadText = `Wait a little bit ⌛`;
    outputBox.innerText = loadText;
    setTimeout(showFact, 3000);
  }
}
function showFact() {
  const numberInput = inputBox.value;
  //   const loadText = `Wait a little bit ⌛`;
  fetch(`http://numbersapi.com/${numberInput}/math`)
    .then((response) => response.text())
    .then((data) => {
      outputBox.innerText = `${data}`;
    });
}

enterBtn.addEventListener("click", showOutput);
