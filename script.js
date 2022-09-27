"use strict";

//? create a quiz function
const Quiz = function (
  question,
  [answerOne, answerTwo, answerThree, answerFour],
  correctAnswer,
  nextQuestion,
  lastQuestion,
  numberQuestion
) {
  this.question = question;
  this.answers = [answerOne, answerTwo, answerThree, answerFour];
  this.correctAnswer = correctAnswer;
  this.nextQuestion = nextQuestion;
  this.lastQuestion = lastQuestion;
  this.whichQuestion = numberQuestion;
};

//? coding quiz

const codingQuestion11 = new Quiz(
  "none",
  ["none", "none", "none", "none"],
  "none",
  "none",
  true,
  11
);

const codingQuestion10 = new Quiz(
  "What property do we use to create a website responsive?",
  ["@animation", "@media", "@keyframes", "@break"],
  "b",
  codingQuestion11,
  false,
  10
);

const codingQuestion9 = new Quiz(
  "What tag do we use to create a link in HTML?",
  ["a", "img", "href", "link"],
  "c",
  codingQuestion10,
  false,
  9
);

const codingQuestion8 = new Quiz(
  "Which is the biggest title in HTML?",
  ["h1", "h6", "h3", "h5"],
  "a",
  codingQuestion9,

  false,
  8
);

const codingQuestion7 = new Quiz(
  "What property do we use to give space to the outside of a container?",
  ["padding", "top", "left", "margin"],
  "d",
  codingQuestion8,

  false,
  7
);

const codingQuestion6 = new Quiz(
  "What property do we use to change font type?",
  ["font-size", "font-weight", "font-family", "text-transform"],
  "c",
  codingQuestion7,

  false,
  6
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
  false,
  5
);

const codingQuestion4 = new Quiz(
  "Who created Javascript?",
  ["Jonas Torvalds", "Brendan Eich", "Steve Jobs", "James Gosling"],
  "b",
  codingQuestion5,
  false,
  4
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
  false,
  3
);

const codingQuestion2 = new Quiz(
  "What property do we use to change the font type?",
  ["font-size", "font-weight", "font-family", "text-transform"],
  "c",
  codingQuestion3,
  false,
  2
);

const codingQuestion1 = new Quiz(
  `Who created the "HTML"?`,
  ["Tim Berners Lee", "Jonas Torvalds", "Imaran Khan", "Bill Gates"],
  "a",
  codingQuestion2,
  false,
  1
);

//? END OF CODING QUESTIONS

// ! ------------------------------

//? START OF GEOGRAPHY QUESTIONS
const geographyQuestion16 = new Quiz(
  "Which country is the largest in South America by surface area?",
  ["Colombia", "Brazil", "Peru", "Argentina"],
  "b",
  "none",
  true,
  16
);
const geographyQuestion15 = new Quiz(
  "Which country is the largest in the world by surface area?",
  ["Russia", "China", "Canada", "USA"],
  "a",
  geographyQuestion16,
  false,
  15
);
const geographyQuestion14 = new Quiz(
  "What is the most widely spoken language of the world (by first language speakers)?",
  ["English", "Mandarin", "Spanish", "Hindi"],
  "b",
  geographyQuestion15,
  false,
  14
);

const geographyQuestion13 = new Quiz(
  "What is the (approximate) number of UN member states in the world in 2014?",
  ["193", "253", "153", "103"],
  "a",
  geographyQuestion14,
  false,
  13
);
const geographyQuestion12 = new Quiz(
  "What is Earth's second largest continent by surface size?",
  ["Europa", "North America", "Africa", "South America"],
  "c",
  geographyQuestion13,
  false,
  12
);

const geographyQuestion11 = new Quiz(
  "Which country has the largest population in South America?",
  ["Peru", "Colombia", "Argentina", "Brazil"],
  "d",
  geographyQuestion12,
  false,
  11
);

const geographyQuestion10 = new Quiz(
  "Which country is the second largest in Asia by surface area?",
  ["China", "Kazakhstan", "Saudi Arabia", "India"],
  "a",
  geographyQuestion11,
  false,
  10
);

const geographyQuestion9 = new Quiz(
  "What is the northermost capital of an independent nation in the world?",
  ["Helsinki", "Reykjavik", "Ulaanbaatar", "Ottawa"],
  "b",
  geographyQuestion10,
  false,
  9
);

const geographyQuestion8 = new Quiz(
  "Which country has the longest coastline in the world?",
  ["Canada", "Russia", "Indonesia", "Australia"],
  "a",
  geographyQuestion9,
  false,
  8
);

const geographyQuestion7 = new Quiz(
  "What is Earth's largest continent by surface size?",
  ["Africa", "North America", "Europe", "Asia"],
  "d",
  geographyQuestion8,
  false,
  7
);

const geographyQuestion6 = new Quiz(
  "What is by area the smallest independent country on Earth?",
  ["San Marino", "Malta", "Vatican", "Faroe Island"],
  "c",
  geographyQuestion7,
  false,
  6
);

const geographyQuestion5 = new Quiz(
  "What is the longest river in South America?",
  ["Amazon", "Padeira", "Chenab", "Cano Cristals"],
  "a",
  geographyQuestion6,
  false,
  5
);

const geographyQuestion4 = new Quiz(
  "Which continent has the most independent countries (including island nations)?",
  ["Europe", "Africa", "Asia", "Oceania"],
  "b",
  geographyQuestion5,
  false,
  4
);

const geographyQuestion3 = new Quiz(
  "What is the highest mountain on Earth (from sea level to top)?",
  ["Kilimanjaro", "Mount Everest", "K2", "Matterhorn"],
  "b",
  geographyQuestion4,
  false,
  3
);

const geographyQuestion2 = new Quiz(
  "What's the capital of Kosovo?",
  ["Prishtina", "Mitrovica", "New York", "Peja"],
  "a",
  geographyQuestion3,
  false,
  2
);

const geographyQuestion1 = new Quiz(
  "How many continents are there?",
  ["12", "6", "8", "7"],
  "d",
  geographyQuestion2,
  false,
  1
);

//! STARTING CODE FOR QUIZES

let currentQuestion;
let correctAnswer;
let nextQuestion;
let nextPage;

let userChosenAnswer;

let clickedAnswer;
let totalQuestions;
//!

//? Landing PAGE DOM
const body = document.querySelector("body");
const title = document.querySelector(".title");
const buttons = document.querySelector(".buttons");
const createQuizBTN = document.querySelector(".creating");
const takeQuizBTN = document.querySelector(".taking");

//? TAKE QUIZ
const chooseQuiz = document.querySelectorAll(".take-quiz-btn");

//?  START DOM
const startQuiz = document.querySelector(".start");
const answersBtnCon = document.querySelector(".start__answers");
const allAnswers = document.querySelectorAll(".start__answers--btn");
const startBtns = document.querySelectorAll(".start__btn");
const failBtns = document.querySelector(".start__fail");
console.log(failBtns);
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
        <h6 class="start__title--qnum">
          ${currentQuestion.whichQuestion} / ${totalQuestions}
        </h6>
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

chooseQuiz.forEach(function (e) {
  e.addEventListener("click", function () {
    // nextPage.classList.add("title-escape");
    document.querySelector(".take__title").classList.add("left-btn-escape");
    document.querySelector(".take__showcase").classList.add("right-btn-escape");
    const currentQuiz = e.getAttribute("data-set");
    if (currentQuiz === "codingQuestion1") {
      totalQuestions = 10;
      addCurrentQuestion(codingQuestion1);
    } else if (currentQuiz === "geographyQuestion1") {
      addCurrentQuestion(geographyQuestion1);
      console.log("geographyQuestion1");
      totalQuestions = 15;
    } else if (currentQuiz === "worldCupQuestion1") {
      console.log("worldCupQuestion1");
      totalQuestions = 15;
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
    console.log(currentQuestion);
    console.log(correctAnswer);
    console.log(nextQuestion);

    return currentQuestion, correctAnswer, nextQuestion, totalQuestions;
  });
});

answersBtnCon.addEventListener("click", function (e) {
  if (e.target.classList.contains("start__answers")) return;
  userChosenAnswer = e.target.getAttribute("data-set");
  addActive(e.target);
  clickedAnswer = e.target;
  return userChosenAnswer;
});

startBtns.forEach((e) => {
  e.addEventListener("click", () => {
    console.log(e);
    if (!currentQuestion.lastQuestion) {
      if (e.classList.contains("start__submit")) {
        if (userChosenAnswer === correctAnswer) {
          body.classList.add("correct-answer");
          addCurrentQuestion(currentQuestion.nextQuestion);
          console.log(currentQuestion);
          console.log(correctAnswer);
          console.log(nextQuestion);
          console.log(userChosenAnswer);
          e.style.display = "none";
          startBtns[1].style.display = "flex";
          answersBtnCon.style.pointerEvents = "none";
          document.querySelector(".start__title").innerHTML = `
          <h1>
            CORRECT!
          </h1>
          `;
        } else {
          body.classList.add("wrong-bg");
          document.querySelector(".start__title").innerHTML = `
          <h1>
            WRONG!
          </h1>
          `;
          document.querySelector(".start__title").style.color = "#f5f5f5";
          // addWrong(e.target);
          e.style.display = "none";
          failBtns.style.display = "flex";
          answersBtnCon.style.pointerEvents = "none";
          document.querySelector(`.${correctAnswer}`).classList.add("active");
          clickedAnswer.classList.add("wrong-answer");
        }
      }
      if (e.classList.contains("start__next")) {
        createStartQuestion();
        body.classList.remove("correct-answer");
        e.style.display = "none";
        userChosenAnswer = "none";
        startBtns[0].style.display = "flex";
        answersBtnCon.style.pointerEvents = "all";
        allAnswers.forEach((e) => {
          e.classList.remove("active");
        });
      }
    } else {
      document.querySelector(".start__title").innerHTML = `
        <h1>
          CONGRATULATIONS!!!
        </h1>
        `;
      body.classList.remove("correct-answer");
      body.classList.add("correct-answer");
      startBtns[1].style.display = "none";

      answersBtnCon.style.display = "none";
      failBtns.style.display = "flex";
    }

    if (e.classList.contains("start__try")) {
    }
  });
});
