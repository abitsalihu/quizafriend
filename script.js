"use strict";

//? create a quiz function
const Quiz = function (
  question,
  [answerOne, answerTwo, answerThree, answerFour],
  correctAnswer,
  nextQuestion,
  lastQuestion
) {
  this.question = question;
  this.answers = [answerOne, answerTwo, answerThree, answerFour];
  this.correctAnswer = correctAnswer;
  this.nextQuestion = nextQuestion;
  this.lastQuestion = lastQuestion;
};

//? coding quiz

const codingQuestion10 = new Quiz(
  "What property do we use to change font type",
  ["font-size", "font-weight", "font-family", "text-transform"],
  "c",
  "none",
  true
);

const codingQuestion9 = new Quiz(
  "What property do we use to change font type",
  ["font-size", "font-weight", "font-family", "text-transform"],
  "c",
  codingQuestion10,

  false
);

const codingQuestion8 = new Quiz(
  "What property do we use to change font type",
  ["font-size", "font-weight", "font-family", "text-transform"],
  "c",
  codingQuestion9,

  false
);

const codingQuestion7 = new Quiz(
  "What property do we use to change font type",
  ["font-size", "font-weight", "font-family", "text-transform"],
  "c",
  codingQuestion8,

  false
);

const codingQuestion6 = new Quiz(
  "What property do we use to change font type",
  ["font-size", "font-weight", "font-family", "text-transform"],
  "c",
  codingQuestion7,

  false
);

const codingQuestion5 = new Quiz(
  "How do we position something on the UI so that it's always on the screen no matter where we are?",
  [
    "position:absolute;",
    "position:relative;",
    "position:sticky;",
    "position:static;",
  ],
  "c",
  codingQuestion6,
  false
);

const codingQuestion4 = new Quiz(
  "Who created Javascript?",
  ["Jonas Torvalds", "Brendan Eich", "Steve Jobs", "James Gosling"],
  "b",
  codingQuestion5,
  false
);

const codingQuestion3 = new Quiz(
  "What doed HTML stand for?",
  [
    "HyperText Markdown Language",
    "HyperText Markside language",
    "HyperText Markdown Language",
    "Cascading Style Sheet",
  ],
  "c",
  codingQuestion4,
  false
);

const codingQuestion2 = new Quiz(
  "What property do we use to change the font type?",
  ["font-size", "font-weight", "font-family", "text-transform"],
  "c",
  codingQuestion3,
  false
);

const codingQuestion1 = new Quiz(
  `Who created the "HTML"?`,
  ["Tim Berners Lee", "Jonas Torvalds", "Imaran Khan", "Bill Gates"],
  "a",
  codingQuestion2,
  false
);

console.log(codingQuestion1);
console.log(codingQuestion2);
//? Landing PAGE DOM
const title = document.querySelector(".title");
const buttons = document.querySelector(".buttons");
const createQuizBTN = document.querySelector(".creating");
const takeQuizBTN = document.querySelector(".taking");
const body = document.querySelector("body");

//? Audio DOM
const btnClick = new Audio("audio/button.wav");
const swooshAway = new Audio("audio/whoosh.wav");
const swoopIn = new Audio("audio/transition_up.wav");

//? Take QUIZ DOM

//! functions
const displayNone = function () {
  title.style.display = "none";
  createQuizBTN.style.display = "none";
  takeQuizBTN.style.display = "none";
};

//! event listeners

buttons.addEventListener("click", function (e) {
  if (e.target.classList.contains("buttons__btn")) {
    let nextPage = e.target.getAttribute("data-page");
    const nextBackground = e.target.getAttribute("background");
    console.log(nextPage);
    title.classList.add("title-escape");
    createQuizBTN.classList.add("right-btn-escape");
    takeQuizBTN.classList.add("left-btn-escape");
    setTimeout(displayNone, 1500);
    body.classList.add(nextBackground);
    nextPage = document.querySelector(`.${nextPage}`);
    btnClick.play();
    setTimeout(function () {
      swooshAway.play();
    }, 175);
    setTimeout(function () {
      nextPage.style.display = "flex";
    }, 1500);
    setTimeout(function () {
      swoopIn.play();
    }, 1200);
  }
  //   title.style.backgroundColor = "red";
});
