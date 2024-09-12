/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateCard();
  const generateButton = document.getElementById("button");
  generateButton.addEventListener("click", generateCard);
};
function generateCard() {
  document.querySelector(".num").innerHTML = numsrand();
  let figure = figurerand();
  let topFigure = document.getElementById("figure1");
  topFigure.innerHTML = figure;

  let bottomFigure = document.getElementById("figure2");
  bottomFigure.innerHTML = figure;

  let color;
  if (figure === "♦" || figure === "♥") {
    color = "red";
  } else {
    color = "black";
  }
  topFigure.style.color = color;
  bottomFigure.style.color = color;
}
function numsrand() {
  let nums = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
  let numsrandom = Math.floor(Math.random() * nums.length);
  return nums[numsrandom];
}
function figurerand() {
  let figure = ["♦", "♥", "♠", "♣"];
  let figurerandom = Math.floor(Math.random() * figure.length);

  return figure[figurerandom];
}
