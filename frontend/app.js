function setFullYear() {
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
}

setFullYear();

const questions = [
  { text: '2 + 2 = ?', options: ['3', '4', '5'], answer: 1 },
  { text: 'Capital of France?', options: ['Berlin', 'Paris', 'Rome'], answer: 1 },
  { text: 'JS method to parse JSON string?', options: ['JSON.parse', 'JSON.stringify', 'parseJSON'], answer: 0 }
];

let currentIndex = 0;
let score = 0;

