
//spørgsmålne til quizzen
const questions = [
  {
    question: "Hvilken svamp er den mest udbredte",
    answers: [
      { text: "Karl Johan", correct: false },
      { text: "Rød Fluesvamp", correct: false },
      { text: "Kantarel", correct: true },
      { text: "Broget Skørhat", correct: false },
    ],
  },
  {
    question: "Hvor finder man primært svampe",
    answers: [
      { text: "Mellem tæerne", correct: false },
      { text: "Under Peters seng", correct: false },
      { text: "På Crazy Daisy", correct: true },
      { text: "I Skoven", correct: false },
    ],
  },
  {
    question: "Hvad er grønnest",
    answers: [
      { text: "Den underlige klat på din morfars kind", correct: false },
      { text: "Alans ansigt med hovedet i tønden", correct: false },
      { text: "Blade i sen forår", correct: true },
      { text: "Persillesovsen din mormor lavede", correct: true },
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
  questionElement.innerHTML = `Du fik ${score} ud af ${questions.length}!`;
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
