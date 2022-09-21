"use strict";

const title = document.querySelector(".title");
const buttons = document.querySelector(".buttons");
const createQuizBTN = document.querySelector(".create");
const takeQuizBTN = document.querySelector(".take");
const body = document.querySelector("body");

const displayNone = function () {
  title.style.display = "none";
  createQuizBTN.style.display = "none";
  takeQuizBTN.style.display = "none";
};

const backgroundChange = function () {};

buttons.addEventListener("click", function (e) {
  if (e.target.classList.contains("buttons__btn")) {
    const nextPage = e.target.getAttribute("data-page");
    const nextBackground = e.target.getAttribute("background");
    console.log(nextPage);
    title.classList.add("title-escape");
    createQuizBTN.classList.add("right-btn-escape");
    takeQuizBTN.classList.add("left-btn-escape");
    setTimeout(displayNone, 1500);
    body.classList.add(nextBackground);
  } else {
    console.log("nope");
  }
  //   title.style.backgroundColor = "red";
});
