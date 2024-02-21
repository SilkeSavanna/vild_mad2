
//spørgsmålne til quizzen
const questions = [
  {
    question: "Which mushroom is the most widespread?",
    answers: [
      { text: "Porcini", correct: false },
      { text: "Red fly agaric", correct: false },
      { text: "Chanterelle", correct: true },
      { text: "Motley Fool Hat", correct: false },
    ],
  },
  {
    question: "Where are mushrooms primarily found?",
    answers: [
      { text: "Between the toes", correct: false },
      { text: "Under peters bed", correct: false },
      { text: "At Crazy Daisy", correct: true },
      { text: "In the forest", correct: false },
    ],
  },
  {
    question: "What is greenest?",
    answers: [
      { text: "The strange patch on your grandfather's cheek.", correct: false },
      { text: "Alan's face with his head in the barrel.", correct: false },
      { text: "Leaves in late spring.", correct: true },
      { text: "The parsley sauce your grandmother made.", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
// få spørgsmål til at vise sig i quizzen og så den ikke bare viser placeholder text
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
// fjern at man har svaret + farver og next button
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
/* både vise hvílket svar der var det rigtige / forkerte når man trykker på et af dem
+ at få next button til at komme frem når man har svaret */
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = "true";
  }); 
  nextButton.style.display = "block";
}
//for at vise scoren til sidst efter quizzen og få tekst på + at få nextbutton til at skrive play again
function showScore() {
  resetState();
  questionElement.innerHTML = `Your ${score} os, out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

//få next button til at vise det næste spørgsmål
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
