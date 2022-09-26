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
  "What property do we use to create a website responsive?",
  ["@animation", "@media", "@keyframes", "@break"],
  "b",
  "none",
  true
);

const codingQuestion9 = new Quiz(
  "What tag do we use to create a link in HTML?",
  ["<a>", "<img>", `href=""`, "<link>"],
  "c",
  codingQuestion10,

  false
);

const codingQuestion8 = new Quiz(
  "Which is the biggest title in HTML?",
  ["h1", "h6", "h3", "h5"],
  "a",
  codingQuestion9,

  false
);

const codingQuestion7 = new Quiz(
  "What property do we use to give space to the outside of a container?",
  ["padding", "top", "left", "margin"],
  "d",
  codingQuestion8,

  false
);

const codingQuestion6 = new Quiz(
  "What property do we use to change font type?",
  ["font-size", "font-weight", "font-family", "text-transform"],
  "c",
  codingQuestion7,

  false
);

const codingQuestion5 = new Quiz(
  "How do we position something on the UI so that it's always on the screen no matter where scroll to?",
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
  "What does HTML stand for?",
  [
    "HyperText Markup Language",
    "HyperText Markside language",
    "HyperText Markdown Language",
    "Cascading Style Sheet",
  ],
  "a",
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

//! STARTING CODE FOR QUIZES

let currentQuestion;
let correctAnswer;
let nextQuestion;
let nextPage;

let userChosenAnswer;

//!

//? Landing PAGE DOM
const title = document.querySelector(".title");
const buttons = document.querySelector(".buttons");
const createQuizBTN = document.querySelector(".creating");
const takeQuizBTN = document.querySelector(".taking");
const body = document.querySelector("body");
const chooseQuiz = document.querySelectorAll(".take-quiz-btn");
const startQuiz = document.querySelector(".start");
const answersBtnCon = document.querySelector(".start__answers");
const allAnswers = document.querySelectorAll(".start__answers--btn");
// console.log(answersBtnCon);
console.log(allAnswers);

//? Audio DOM
const btnClick = new Audio("audio/button.wav");
const swooshAway = new Audio("audio/whoosh.wav");
const swoopIn = new Audio("audio/transition_up.wav");

//? Take QUIZ DOM

//! FUNCTIONS

const displayNone = function () {
  title.style.display = "none";
  createQuizBTN.style.display = "none";
  takeQuizBTN.style.display = "none";
};

const addCurrentQuestion = function (data) {
  currentQuestion = data;
  correctAnswer = currentQuestion.correctAnswer;
  nextQuestion = currentQuestion.nextQuestion;
};

const createStartQuestion = function () {
  (document.querySelector(".start__title").innerHTML = `
        <h1>
          ${currentQuestion.question}
        </h1>
        `),
    (document.querySelector(
      ".a"
    ).innerHTML = `<span>A: </span> ${currentQuestion.answers[0]}`),
    (document.querySelector(
      ".b"
    ).innerHTML = `<span>B: </span> ${currentQuestion.answers[1]}`),
    (document.querySelector(
      ".c"
    ).innerHTML = `<span>C: </span> ${currentQuestion.answers[2]}`),
    (document.querySelector(
      ".d"
    ).innerHTML = `<span>D: </span> ${currentQuestion.answers[3]}`);
};

const addActive = function (clicked) {
  allAnswers.forEach(function (e) {
    e.classList.remove("active");
  });
  clicked.classList.add("active");
};

//! event listeners

//? LANDIN PAGE BUTTONS

buttons.addEventListener("click", function (e) {
  if (e.target.classList.contains("buttons__btn")) {
    nextPage = e.target.getAttribute("data-page");
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

    return nextPage;
  }
});

//? CHOOSE QUIZ BUTTONS

let s;

chooseQuiz.forEach(function (e) {
  e.addEventListener("click", function () {
    nextPage.classList.add("title-escape");
    const currentQuiz = e.getAttribute("data-set");
    if (currentQuiz === "codingQuestion1") {
      addCurrentQuestion(codingQuestion1);
    } else if (currentQuiz === "geographyQuestion1") {
      console.log("geographyQuestion1");
    } else if (currentQuiz === "worldCupQuestion1") {
      console.log("worldCupQuestion1");
    }
    setTimeout(function () {
      nextPage.style.display = "none";
    }, 1500);
    setTimeout(function () {
      body.classList.add("start-quiz-bg");
    }, 1000);

    setTimeout(function () {
      startQuiz.style.display = "flex";
    }, 1500);

    createStartQuestion();

    return currentQuestion, correctAnswer, nextQuestion, s;
  });

  // return currentQuestion, correctAnswer, nextQuestion;
});

answersBtnCon.addEventListener("click", function (e) {
  if (e.target.classList.contains("start__answers")) return;
  userChosenAnswer = e.target.getAttribute("data-set");
  addActive(e.target);
  console.log(userChosenAnswer);
  return userChosenAnswer;
});

// allAnswers.forEach(function (e) {

//   e.addEventListener("click", function () {
//     console.log(e.target);
//   });
// });
