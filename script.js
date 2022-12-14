"use strict";

//? create a quiz OBJECT function

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

// !--------------------------------------------------------------------

//! HARD CODED QUIZ MADE FROM ME - abit salihu

//? CODING QUIZ
const codingQuestion10 = new Quiz(
  "What property do we use to create a website responsive?",
  ["@animation", "@media", "@keyframes", "@break"],
  "b",
  "none",
  true,
  10
);

const codingQuestion9 = new Quiz(
  "What tag do we use to create a link in HTML?",
  ["href", "img", "a", "link"],
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
  "Who created this Quiz Website?π",
  ["github.com/abitsalihu", "Not meπ", "Not meπ", "Not meπ"],
  "a",
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

// !--------------------------------------------------------------------

//?  GEOGRAPHY QUIZ
const geographyQuestion15 = new Quiz(
  "Which country is the largest in the world by surface area?",
  ["Russia", "China", "Canada", "USA"],
  "a",
  "none",
  true,
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
  "What is the capital of Kosovo?",
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

// !--------------------------------------------------------------------

//? WORLD CUP QUIZ
const worldCupQuestion13 = new Quiz(
  "First person to win the World Cup both as a player and coach?",
  ["Fatih Terim", "Didier Deschamps", "Beckenbauer", "Mario Zagalio"],
  "d",
  "none",
  true,
  13
);

const worldCupQuestion12 = new Quiz(
  "What's the most goals a single player scored in a World Cup?",
  ["10", "3", "13", "20"],
  "c",
  worldCupQuestion13,
  false,
  12
);

const worldCupQuestion11 = new Quiz(
  "Who has played the most matches in the World Cup?",
  ["Lothar MatthΓ€us", "Lionel Messi", "Pele", "Didier Deschamps"],
  "a",
  worldCupQuestion12,
  false,
  11
);

const worldCupQuestion10 = new Quiz(
  "How many finals did Cafu feature in the World Cup?",
  ["5", "3", "2", "4"],
  "b",
  worldCupQuestion11,
  false,
  10
);

const worldCupQuestion9 = new Quiz(
  "In 2010, which one of these teams was not in the semifinals?",
  ["England", "Uruguay", "Netherlands", "Spain"],
  "a",
  worldCupQuestion10,
  false,
  9
);

const worldCupQuestion8 = new Quiz(
  "What is the name of Diego Maradonaβs infamous first goal against England in 1986?",
  [
    "It doesn't have a name.",
    "Hand of God",
    "Maradona Miracle",
    "The Scorpion",
  ],
  "b",
  worldCupQuestion9,
  false,
  8
);

const worldCupQuestion7 = new Quiz(
  "Prior to the 2022 World Cup, which goalkeeper has the most saves in a single World Cup match?",
  ["Lev Yashin", "Manuel Neuer", "Gianluigi Buffon", "Tim Howard"],
  "d",
  worldCupQuestion8,
  false,
  7
);

const worldCupQuestion6 = new Quiz(
  "What year did the World Cup competition start?",
  ["1925", "1890", "1930", "1950"],
  "c",
  worldCupQuestion7,
  false,
  6
);

const worldCupQuestion5 = new Quiz(
  "Prior to the 2022 World Cup, which player is the all-time leading goal scorer in World Cup history?",
  ["Miroslav Klose", "Pele", "Ronaldo(Brazil)", "Lionel Messi"],
  "a",
  worldCupQuestion6,
  false,
  5
);

const worldCupQuestion4 = new Quiz(
  "Which country won the World Cup in 2018?",
  ["South Korea", "Portugal", "Brazil", "France"],
  "d",
  worldCupQuestion5,
  false,
  4
);

const worldCupQuestion3 = new Quiz(
  "How many national teams compete in the World Cup?",
  ["32", "2", "30", "38"],
  "a",
  worldCupQuestion4,
  false,
  3
);
const worldCupQuestion2 = new Quiz(
  "Whatβs the host country for the 2022 World Cup?",
  ["Japan", "Qatar", "Mexico", "England"],
  "b",
  worldCupQuestion3,
  false,
  2
);

const worldCupQuestion1 = new Quiz(
  "Which country has won the most World Cups?",
  ["Brazil", "Germany", "Italy", "Argentina"],
  "a",
  worldCupQuestion2,
  false,
  1
);

//! USER CREATING QUESTIONS
const userCreatedQuestion50 = new Quiz("", [], "", "", false, 50);
const userCreatedQuestion49 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion50,
  false,
  49
);
const userCreatedQuestion48 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion49,
  false,
  48
);
const userCreatedQuestion47 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion48,
  false,
  47
);
const userCreatedQuestion46 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion47,
  false,
  46
);
const userCreatedQuestion45 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion46,
  false,
  45
);
const userCreatedQuestion44 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion45,
  false,
  44
);
const userCreatedQuestion43 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion44,
  false,
  43
);
const userCreatedQuestion42 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion43,
  false,
  42
);
const userCreatedQuestion41 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion42,
  false,
  41
);
const userCreatedQuestion40 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion41,
  false,
  40
);
const userCreatedQuestion39 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion40,
  false,
  39
);
const userCreatedQuestion38 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion39,
  false,
  38
);
const userCreatedQuestion37 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion38,
  false,
  37
);
const userCreatedQuestion36 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion37,
  false,
  36
);
const userCreatedQuestion35 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion36,
  false,
  35
);
const userCreatedQuestion34 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion35,
  false,
  34
);
const userCreatedQuestion33 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion34,
  false,
  33
);
const userCreatedQuestion32 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion33,
  false,
  32
);
const userCreatedQuestion31 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion32,
  false,
  31
);
const userCreatedQuestion30 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion31,
  false,
  30
);
const userCreatedQuestion29 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion30,
  false,
  29
);
const userCreatedQuestion28 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion29,
  false,
  28
);
const userCreatedQuestion27 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion28,
  false,
  27
);
const userCreatedQuestion26 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion27,
  false,
  26
);
const userCreatedQuestion25 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion26,
  false,
  25
);
const userCreatedQuestion24 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion25,
  false,
  24
);
const userCreatedQuestion23 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion24,
  false,
  23
);

const userCreatedQuestion22 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion23,
  false,
  22
);
const userCreatedQuestion21 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion22,
  false,
  21
);
const userCreatedQuestion20 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion21,
  false,
  20
);
const userCreatedQuestion19 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion20,
  false,
  19
);
const userCreatedQuestion18 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion19,
  false,
  18
);
const userCreatedQuestion17 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion18,
  false,
  17
);
const userCreatedQuestion16 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion17,
  false,
  16
);
const userCreatedQuestion15 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion16,
  false,
  15
);
const userCreatedQuestion14 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion15,
  false,
  14
);
const userCreatedQuestion13 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion14,
  false,
  13
);
const userCreatedQuestion12 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion13,
  false,
  12
);
const userCreatedQuestion11 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion12,
  false,
  11
);
const userCreatedQuestion10 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion11,
  false,
  10
);
const userCreatedQuestion9 = new Quiz(
  "s",
  ["s", "n", "d", "s"],
  "s",
  userCreatedQuestion10,
  false,
  9
);
const userCreatedQuestion8 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion9,
  false,
  8
);
const userCreatedQuestion7 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion8,
  false,
  7
);
const userCreatedQuestion6 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion7,
  false,
  6
);
const userCreatedQuestion5 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion6,
  false,
  5
);
const userCreatedQuestion4 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion5,
  false,
  4
);
const userCreatedQuestion3 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion4,
  false,
  3
);
const userCreatedQuestion2 = new Quiz(
  "",
  [],
  "",
  userCreatedQuestion3,
  false,
  2
);
const userCreatedQuestion1 = new Quiz(
  "abiti",
  [],
  "bibe",
  userCreatedQuestion2,
  false,
  1
);

const userCreatedQuestionCon = [
  userCreatedQuestion1,
  userCreatedQuestion2,
  userCreatedQuestion3,
  userCreatedQuestion4,
  userCreatedQuestion5,
  userCreatedQuestion6,
  userCreatedQuestion7,
  userCreatedQuestion8,
  userCreatedQuestion9,
  userCreatedQuestion10,
  userCreatedQuestion11,
  userCreatedQuestion12,
  userCreatedQuestion13,
  userCreatedQuestion14,
  userCreatedQuestion15,
  userCreatedQuestion16,
  userCreatedQuestion17,
  userCreatedQuestion18,
  userCreatedQuestion19,
  userCreatedQuestion20,
  userCreatedQuestion21,
  userCreatedQuestion22,
  userCreatedQuestion23,
  userCreatedQuestion24,
  userCreatedQuestion25,
  userCreatedQuestion26,
  userCreatedQuestion27,
  userCreatedQuestion28,
  userCreatedQuestion29,
  userCreatedQuestion30,
  userCreatedQuestion31,
  userCreatedQuestion32,
  userCreatedQuestion33,
  userCreatedQuestion34,
  userCreatedQuestion35,
  userCreatedQuestion36,
  userCreatedQuestion37,
  userCreatedQuestion38,
  userCreatedQuestion39,
  userCreatedQuestion40,
  userCreatedQuestion41,
  userCreatedQuestion42,
  userCreatedQuestion43,
  userCreatedQuestion44,
  userCreatedQuestion45,
  userCreatedQuestion46,
  userCreatedQuestion47,
  userCreatedQuestion48,
  userCreatedQuestion49,
  userCreatedQuestion50,
];

//? --------------------------------------------------------------------

//? ACTUAL LOGIC JAAVSRIPT STARTS HERE!
//! STARTING CODE FOR QUIZES TO BE MANIPULATED

let currentQuestion;
let correctAnswer;
let nextQuestion;
let nextPage;

let userChosenAnswer;
let userChosenQuiz;

let clickedAnswer;
let totalQuestions;
let lastUserCreatedQuestion;
let userCorrectAnswer;
//!

//! STARTING CODE FOR USER CREATING QUIZ

// !--------------------------------------------------------------------

//! DOM

//? Landing PAGE DOM
const body = document.querySelector("body");
const title = document.querySelector(".title");
const buttons = document.querySelector(".buttons");
const createQuizBTN = document.querySelector(".creating");
const takeQuizBTN = document.querySelector(".taking");

//? TAKE A QUIZ SECTION DOM
const chooseQuiz = document.querySelectorAll(".take-quiz-btn");

//?  START QUIZ SECTION DOM
const startQuiz = document.querySelector(".start");
const answersBtnCon = document.querySelector(".start__answers");
const allAnswers = document.querySelectorAll(".start__answers--btn");
const startBtns = document.querySelectorAll(".start__btn");
const failBtns = document.querySelector(".start__fail");

//? CREATE A QUIZ DOM!
const questionAmountCon = document.querySelector(".create__hquestions--btns ");
const questionAmountBtn = document.querySelectorAll(".choose-btn");
const createQuestionsBtn = document.querySelector(".create__btn");
const userValue = document.querySelector(".user-value").value;
const writeQuesition = document.querySelector(".write");
const userCreateCorrectAnswer = document.querySelectorAll(
  ".write__correct-answers--btn"
);
const userCreateCorrectAnswerCon = document.querySelector(
  ".write__correct-answers"
);
const userCreateQuestionAnswer = document.querySelectorAll(
  ".write__answers--con-btn"
);
const userCreateQuestionStartBtn = document.querySelector(".write__start");

const userSubmitQuestionBtn = document.querySelector(".write__submit");
//? Audio DOM
const btnClick = new Audio("audio/button.wav");
const swooshAway = new Audio("audio/whoosh.wav");
const swoopIn = new Audio("audio/transition_up.wav");
const loseGame = new Audio("audio/lose.wav");
const rickRolled = new Audio("audio/rick-rolled.wav");
// !--------------------------------------------------------------------

//! FUNCTIONS

const displayLanding = function (state) {
  title.style.display = `${state}`;
  buttons.style.display = `${state}`;
  createQuizBTN.style.display = `${state}`;
  takeQuizBTN.style.display = `${state}`;
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
    ).innerHTML = `<span class="quiz-span">A: </span> ${currentQuestion.answers[0]}`),
    (document.querySelector(
      ".b"
    ).innerHTML = `<span class="quiz-span">B: </span> ${currentQuestion.answers[1]}`),
    (document.querySelector(
      ".c"
    ).innerHTML = `<span class="quiz-span">C: </span> ${currentQuestion.answers[2]}`),
    (document.querySelector(
      ".d"
    ).innerHTML = `<span class="quiz-span">D: </span> ${currentQuestion.answers[3]}`);
};

const addActive = function (button, clicked, clas) {
  button.forEach(function (e) {
    e.classList.remove(`${clas}`);
  });
  clicked.classList.add(`${clas}`);
};

//? EventListener Function when user chooses if he wants to create or take a quiz

const lBTN = function (e) {
  if (e.target.classList.contains("buttons__btn")) {
    nextPage = e.target.getAttribute("data-page");
    const nextBackground = e.target.getAttribute("background");

    title.classList.add("title-escape");
    createQuizBTN.classList.add("right-btn-escape");
    takeQuizBTN.classList.add("left-btn-escape");
    setTimeout(() => {
      displayLanding("none");
    }, 1500);
    setTimeout(() => {
      title.classList.remove("title-escape");
      createQuizBTN.classList.remove("right-btn-escape");
      takeQuizBTN.classList.remove("left-btn-escape");
    }, 1700);
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
    }, 1300);

    return nextPage;
  }
};

//? EventListener function when user chooses quiz

const userChoosesQuiz = function (e) {
  e.addEventListener("click", function () {
    document.querySelector(".take__title").classList.add("left-btn-escape");
    document.querySelector(".take__showcase").classList.add("right-btn-escape");
    const currentQuiz = e.getAttribute("data-set");

    if (currentQuiz === "codingQuestion1") {
      addCurrentQuestion(codingQuestion1);
      userChosenQuiz = codingQuestion1;
      totalQuestions = 10;
    } else if (currentQuiz === "geographyQuestion1") {
      addCurrentQuestion(geographyQuestion1);
      userChosenQuiz = geographyQuestion1;
      totalQuestions = 15;
    } else if (currentQuiz === "worldCupQuestion1") {
      addCurrentQuestion(worldCupQuestion1);
      userChosenQuiz = worldCupQuestion1;
      totalQuestions = 13;
    }

    createStartQuestion();

    //! TIMEOUTS
    setTimeout(() => {
      nextPage.style.display = "none";
    }, 1500);
    setTimeout(() => {
      body.classList.add("start-quiz-bg");
    }, 1000);

    setTimeout(() => {
      startQuiz.style.display = "flex";
    }, 1500);

    setTimeout(() => {
      body.classList.remove("takeQuiz");
    }, 1900);

    setTimeout(() => {
      document
        .querySelector(".take__title")
        .classList.remove("left-btn-escape");
    }, 1900);

    setTimeout(() => {
      document
        .querySelector(".take__showcase")
        .classList.remove("right-btn-escape");
    }, 1900);
    //? AUDIO
    setTimeout(() => {
      btnClick.play();
    }, 0);
    setTimeout(() => {
      swooshAway.play();
    }, 175);

    setTimeout(() => {
      swoopIn.play();
    }, 1200);

    //?

    return (
      currentQuestion,
      correctAnswer,
      nextQuestion,
      totalQuestions,
      userChosenQuiz
    );
  });
};

//? EventListener function when user clicks on a answer
const userClickAnswer = function (e) {
  if (e.target.classList.contains("start__answers")) return;
  userChosenAnswer = e.target.getAttribute("data-set");
  addActive(allAnswers, e.target, "active");
  clickedAnswer = e.target;

  return userChosenAnswer;
};

function checkFilled() {
  const input = document.querySelector(".user-value");

  if (input.value) {
    input.classList.add("correct-answer");
  } else {
    input.classList.remove("correct-answer");
  }
}

checkFilled();

//! -----------------------------------------------------------------------------

//! EVENT LISTENERS

//? ===============================================================

//! LANDING PAGE EVENT LISTENERS
buttons.addEventListener("click", function (e) {
  lBTN(e);
});

//? LISTENS FOR USER TO CHOOSE A QUIZ TO TAKE

chooseQuiz.forEach(function (e) {
  userChoosesQuiz(e);
});

//?  LISTENS FOR USER TO CLICK ON A ANSWER

answersBtnCon.addEventListener("click", function (e) {
  userClickAnswer(e);
  btnClick.play();
});

//? ===============================================================

//! CREATE QUIZ EVENT LISTENERS

questionAmountCon.addEventListener("click", function (e) {
  if (e.target.classList.contains("create__hquestions--btns")) return;
  addActive(questionAmountBtn, e.target, "correct-answer");
  btnClick.play();
});

questionAmountBtn.forEach((e) => {
  e.addEventListener("click", function () {
    document.querySelector(".user-value").value = "";
    document.querySelector(".user-value").classList.remove("correct-answer");
  });
});

createQuestionsBtn.addEventListener("click", function () {
  totalQuestions =
    document.querySelector(".correct-answer").getAttribute("data-set") ??
    Number(document.querySelector(".user-value").value);
  ("user2");
  currentQuestion = userCreatedQuestion1;
  totalQuestions = Number(totalQuestions);
  lastUserCreatedQuestion = userCreatedQuestionCon[`${totalQuestions - 1}`];
  lastUserCreatedQuestion.lastQuestion = true;
  document.querySelector(
    ".current-question"
  ).innerHTML = `<span class="first__num-question">${currentQuestion.whichQuestion}</span>/${totalQuestions}`;
  document.querySelector(".create").style.display = "none";
  document.querySelector(".write").style.display = "flex";
  questionAmountBtn.forEach((e) => {
    e.classList.remove("correct-answer");
    document.querySelector(".user-value").value = "";
    document.querySelector(".user-value").classList.remove("correct-answer");
  });
  btnClick.play();
});

userCreateCorrectAnswerCon.addEventListener("click", (e) => {
  if (e.target.classList.contains("write__correct-answers")) return;
  addActive(userCreateCorrectAnswer, e.target, "correct-answer");
  userCreateCorrectAnswer.forEach((e) => {
    e.classList.remove("fill-question");
  });
  userCorrectAnswer = e.target.getAttribute("data-set");
  btnClick.play();

  return userCorrectAnswer, lastUserCreatedQuestion;
});

userSubmitQuestionBtn.addEventListener("click", () => {
  currentQuestion.question = document.querySelector(
    ".write__question--input"
  ).value;

  if (currentQuestion.question) {
    document
      .querySelector(".write__question--input")
      .classList.remove("fill-question");
    let userAnswers = [];
    userAnswers.push(userCreateQuestionAnswer[0].value);
    userAnswers.push(userCreateQuestionAnswer[1].value);
    userAnswers.push(userCreateQuestionAnswer[2].value);
    userAnswers.push(userCreateQuestionAnswer[3].value);
    currentQuestion.answers = userAnswers;



    if (
      currentQuestion.answers[0] &&
      currentQuestion.answers[1] &&
      currentQuestion.answers[2] &&
      currentQuestion.answers[3]
    ) {
      userCreateQuestionAnswer.forEach((e) => {
        e.classList.remove("fill-question");
      });

      if(currentQuestion.answers[0] !== currentQuestion.answers[1] && currentQuestion.answers[0] !== currentQuestion.answers[2] && currentQuestion.answers[0] !== currentQuestion.answers[3] && currentQuestion.answers[1] !== currentQuestion.answers[2] && currentQuestion.answers[1] !== currentQuestion.answers[3] && currentQuestion.answers[2] !== currentQuestion.answers[3] ){
        userCreateQuestionAnswer.forEach((e) => {
        e.classList.remove("fill-question");


      });
      

      currentQuestion.correctAnswer = userCorrectAnswer;
      if (currentQuestion.correctAnswer) {
        userCreateCorrectAnswer.forEach((e) => {
          e.classList.remove("fill-question");
        });
        document.querySelector(".current-question").textContent = `${
          currentQuestion.whichQuestion + 1
        }/${totalQuestions}`;

        document.querySelector(".write__question--input").value = "";
        userCreateQuestionAnswer.forEach(function (e) {
          e.value = "";
        });

        userCreateCorrectAnswer.forEach((e) =>
          e.classList.remove("correct-answer")
        );
        userCorrectAnswer = "";
        if (currentQuestion.lastQuestion) {
          document.querySelector(".write__question").style.display = "none";
          document.querySelector(".write__answers").style.display = "none";
          document.querySelector(".write__correct").style.display = "none";
          document.querySelector(".write__title").style.display = "none";

          userSubmitQuestionBtn.style.display = "none";
          userCreateQuestionStartBtn.style.display = "flex";
        }
        currentQuestion = currentQuestion.nextQuestion;
      } else {
        userCreateCorrectAnswer.forEach((e) => {
          e.classList.add("fill-question");


        });
      }
    } else {
      userCreateQuestionAnswer.forEach((e) => {
        e.classList.add("fill-question");

      });
    }
  }else{
    userCreateQuestionAnswer.forEach((e) => {
    e.classList.add("fill-question");

  });
  }
  } else {
    document
      .querySelector(".write__question--input")
      .classList.add("fill-question");
  }

  btnClick.play();
});

userCreateQuestionStartBtn.addEventListener("click", () => {
  addCurrentQuestion(userCreatedQuestion1);
  userChosenQuiz = userCreatedQuestion1;
  document.querySelector(".write").style.display = "none";
  createStartQuestion();
  setTimeout(() => {
    body.classList.add("start-quiz-bg");
  }, 100);
  setTimeout(() => {
    startQuiz.style.display = "flex";
  }, 500);
  document.querySelector(".write__question").style.display = "flex";
  document.querySelector(".write__answers").style.display = "flex";
  document.querySelector(".write__correct").style.display = "flex";
  document.querySelector(".write__title").style.display = "flex";

  userSubmitQuestionBtn.style.display = "flex";
  userCreateQuestionStartBtn.style.display = "none";
  btnClick.play();
});

//? ===============================================================

// ! START QUIZ EVENT LISTENERS

startBtns.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("start__submit")) {
      if (userChosenAnswer === correctAnswer) {
        //? CHECKS IF THE ANSWER CHOSEN BY THE USER IS THE SAME AS THE CORRECT ANSWER THAT OF THAT PARTICULAR QUESTION//
        btnClick.play();

        if (!currentQuestion.lastQuestion) {
          //? CHECKS IF IT'S THE LAST QUESTION OF THAT QUIZ

          //? THIS CODE RUNS IF IT'S NOT THE LAST QUESITON OF THE QUIZ

          body.classList.add("correct-answer");
          addCurrentQuestion(currentQuestion.nextQuestion);
          e.style.display = "none";
          startBtns[1].style.display = "flex";
          answersBtnCon.style.pointerEvents = "none";
          document.querySelector(".start__title").innerHTML = `
          <h1>
            CORRECT!
          </h1>
          `;
        } else {
          //? THIS CODE RUNS IF IT IS THE LAST QUESTION OF THE QUIZ

          document.querySelector(".start__title").innerHTML = `
              <h1>
                CONGRATULATIONS!!!
              </h1>
              `;

          body.classList.add("correct-answer");
          startBtns[1].style.display = "none";
          startBtns[2].style.display = "none";
          startBtns[0].style.display = "none";

          answersBtnCon.style.display = "none";
          failBtns.style.display = "flex";
          const img = document.createElement("div");
          img.classList.add("gif");
          img.style.marginTop = "30px";
          img.innerHTML = `<img src="https://media2.giphy.com/media/Ju7l5y9osyymQ/giphy.gif?cid=790b7611a1a961633e513956e2742091b42f312d0161206c&rid=giphy.gif&ct=g">`;
          rickRolled.play();
          document.querySelector(".start__title").appendChild(img);
        }
      }

      //? THIS CODE RUNS IF THE ANSWER CHOOSEN BY THE USER IS NOT THE SAME AS THE CORRECT ANSWER FOR THAT PARTICULAR QUESTION
      else {
        body.classList.remove("start-quiz-bg");
        body.classList.add("wrong-bg");
        startBtns[2].style.display = "flex";
        document.querySelector(".start__title").innerHTML = `
        <h1>
          WRONG!
        </h1>
        `;
        document.querySelector(".start__title").style.color = "#f5f5f5";
        e.style.display = "none";
        failBtns.style.display = "flex";
        answersBtnCon.style.pointerEvents = "none";
        document.querySelector(`.${correctAnswer}`).classList.add("active");
        clickedAnswer.classList.add("wrong-answer");
        loseGame.play();
      }
    }

    if (e.classList.contains("start__next")) {
      //? THIS CODE RUNS AFTER THE CHOSEN ANSWER BY THE USER IS THE SAME AS THE CORRECT ANSWER FOR THAT PARTICULAR QUESTION
      createStartQuestion();
      body.classList.remove("correct-answer");
      e.style.display = "none";
      userChosenAnswer = "none";
      startBtns[0].style.display = "flex";
      answersBtnCon.style.pointerEvents = "auto";
      allAnswers.forEach((e) => {
        e.classList.remove("active");
      });
      btnClick.play();
    }

    /// ? THESE ARE GOOD -- JUST NEED REFACTORING
    if (e.classList.contains("start__try")) {
      addCurrentQuestion(userChosenQuiz);
      createStartQuestion();
      body.classList.remove("wrong-bg");
      body.classList.add("start-quiz-bg");

      startBtns[0].style.display = "flex";
      answersBtnCon.style.pointerEvents = "auto";
      allAnswers.forEach((e) => {
        e.classList.remove("active");
      });
      document.querySelector(".start__title").style.color = "#393e46";
      failBtns.style.display = "none";
      clickedAnswer.classList.remove("wrong-answer");
      btnClick.play();
    }
    if (e.classList.contains("start__home")) {
      loseGame.pause();
      rickRolled.pause();
      btnClick.play();

      startQuiz.style.display = "none";
      displayLanding("flex");
      body.classList.remove("createQuiz");
      body.classList.remove("wrong-bg");
      body.classList.remove("correct-answer");
      body.classList.remove("start-quiz-bg");
      answersBtnCon.style.display = "grid";

      allAnswers.forEach((e) => {
        e.classList.remove("active");
      });
      failBtns.style.display = "none";
      clickedAnswer.classList.remove("wrong-answer");

      userChosenAnswer = 0;
      startBtns[0].style.display = "flex";
      answersBtnCon.style.pointerEvents = "auto";
      document.querySelector(".start__title").style.color = "#393e46";

      lastUserCreatedQuestion.lastQuestion = false;
    }
  });
});
