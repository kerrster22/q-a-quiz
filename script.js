const questions = [
  {
    question: "What is the capital of France?",
    answers: {
      a1: "Paris",
      a2: "London",
      a3: "Berlin",
      a4: "Rome",
    },
    correctAnswer: "a1",
  },
  {
    question: "What is the capital of Italy?",
    answers: {
      a1: "Paris",
      a2: "Rome",
      a3: "Berlin",
      a4: "Madrid",
    },
    correctAnswer: "a2",
  },
  // Add more questions here
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const a1TextEl = document.getElementById("a1Text");
const a2TextEl = document.getElementById("a2Text");
const a3TextEl = document.getElementById("a3Text");
const a4TextEl = document.getElementById("a4Text");
const resultEl = document.getElementById("result");
const submitEl = document.getElementById("submit");

loadQuestion();

submitEl.addEventListener("click", (e) => {
  e.preventDefault();

  const selectedAnswer = document.querySelector("input[name=answer]:checked");

  if (!selectedAnswer) {
  }
});
