const question = document.querySelector('.question');
const options = document.querySelectorAll('.option');
const progress = document.querySelector('.progress');
const info = document.querySelector('.info');
const reload = document.querySelector('.button-reload');

let questions = []
let score = 0;
let currentIndex = 0;

async function loadQuestions() {
  try {
    const response = await fetch('/questions');
    if (!response.ok) {
      throw new Error('Failed to fetch questions');
    }
    questions = await response.json();
    loadQuestion();
  } catch (error) {
    console.error('Error loading questions:', error);
  }
}

function loadQuestion() {
  const nextQuestion = questions[currentIndex];
  question.textContent = nextQuestion.text;
  progress.textContent = `Question ${currentIndex + 1}/${questions.length}`;

  nextQuestion.options.forEach((option, index) => {
    options[index].textContent = option;
    options[index].dataset.answer = option;
  });
}

function checkAnswer(selectedOption) {
  if (currentIndex >= questions.length) return;

  const currentQuestion = questions[currentIndex];
  const selectedAnswer = selectedOption.dataset.answer;

  if (selectedAnswer === currentQuestion.answer) {
    score++;
  }

  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    options.forEach(option => {
      option.style.display = 'none';
    })
    info.style.display = 'block';
    reload.style.display = 'inline-block';
    if (score / questions.length >= 0.7) {
      document.querySelector('body').style.backgroundColor = '#27ae60';
      question.textContent = `Congratulations 🎉 You have answered ${score}/${questions.length} questions correctly.`;
    } else {
      document.querySelector('body').style.backgroundColor = '#e74c3c';
      question.textContent = `Study harder! You have answered ${score}/${questions.length} questions correctly.`;
    }
  }
}

options.forEach(option => {
  option.addEventListener('click', () => {
    checkAnswer(option);
  });
});

loadQuestions();