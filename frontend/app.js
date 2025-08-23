function setFullYear() {
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
}

setFullYear();

let score = 0;
let currentIndex = 0;

const questions = [
  { text: '2 + 2 = ?', options: ['3', '4', '5', '8'], answer: 1 },
  { text: 'Capital of France?', options: ['Berlin', 'Paris', 'Rome', 'Samarkand'], answer: 1 },
  { text: 'JS method to parse JSON string?', options: ['JSON.parse', 'JSON.stringify', 'parseJSON', 'Ideate'], answer: 0 }
];
const question = document.querySelector('.question');
const options = document.querySelectorAll('.option');

function loadQuestion() {
  const nextQuestion = questions[currentIndex];
  question.textContent = nextQuestion.text
  nextQuestion.options.forEach((text, index) => {
    options[index].textContent = text;
    options[index].dataset.answer = text;
  });
  currentIndex++
}

loadQuestion()

options.forEach(option => {
  option.addEventListener('click', () => {
    if (currentIndex < questions.length) {
      loadQuestion();
    }
  })
})

