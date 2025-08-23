let score = 0;
let currentIndex = 0;

const questions = [
  { id: 0, text: 'Which OSI layer handles logical addressing and routing?', options: ['Data Link', 'Network', 'Transport', 'Session'], answer: 'Network' },
  { id: 1, text: 'What is the default administrative distance of a static route?', options: ['0', '1', '90', '110'], answer: '1' },
  { id: 2, text: 'Which protocol is used to discover the MAC address associated with an IPv4 address?', options: ['DNS', 'ICMP', 'ARP', 'RARP'], answer: 'ARP' },
  { id: 3, text: 'What is the primary purpose of VLANs?', options: ['Increase bandwidth', 'Reduce broadcast domains', 'Encrypt traffic', 'Assign IP addresses'], answer: 'Reduce broadcast domains' },
  { id: 4, text: 'Which command shows the routing table on a Cisco router?', options: ['show interfaces', 'show ip route', 'show ip protocols', 'show arp'], answer: 'show ip route' },
  { id: 5, text: 'Which WAN technology uses labels to make forwarding decisions?', options: ['MPLS', 'Frame Relay', 'ATM', 'ISDN'], answer: 'MPLS' },
  { id: 6, text: 'What is the private IP range for Class C?', options: ['10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16', '169.254.0.0/16'], answer: '192.168.0.0/16' },
  { id: 7, text: 'Which protocol provides loop-free topology in a switched network?', options: ['VTP', 'STP', 'CDP', 'LLDP'], answer: 'STP' },
  { id: 8, text: 'Which IPv6 address type is equivalent to IPv4 public addresses?', options: ['Link-local', 'Unique local', 'Multicast', 'Global unicast'], answer: 'Global unicast' },
  { id: 9, text: 'Which command enables OSPF process 1 on all interfaces in 10.0.0.0/8?', options: ['router ospf 1\\n network 10.0.0.0 0.0.0.255 area 0', 'router ospf 1\\n network 10.0.0.0 0.255.255.255 area 0', 'router ospf 1\\n network 10.0.0.0 255.0.0.0 area 0', 'router ospf 1\\n network 10.0.0.0 0.255.255.255 area 1'], answer: 'router ospf 1\\n network 10.0.0.0 0.255.255.255 area 0' }
];

const question = document.querySelector('.question');
const options = document.querySelectorAll('.option');
const progress = document.querySelector('.progress');
const info = document.querySelector('.info');

function loadQuestion() {
  const nextQuestion = questions[currentIndex];
  question.textContent = nextQuestion.text;
  progress.textContent = `Question ${currentIndex + 1}/${questions.length}`;

  nextQuestion.options.forEach((option, index) => {
    options[index].textContent = option;
    options[index].dataset.answer = option;
    options[index].classList.remove('disabled');
  });
}

function disableOptions() {
  options.forEach(option => option.classList.add('disabled'));
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
    if (score / questions.length >= 0.7) {
      document.querySelector('body').style.backgroundColor = '#27ae60';
      question.textContent = `Congratulations 🎉 You have answered ${score}/${questions.length} questions correctly.`;
    } else {
      document.querySelector('body').style.backgroundColor = '#e74c3c';
      question.textContent = `Study harder! You have answered ${score}/${questions.length} questions correctly.`;
    }
  }
}

loadQuestion();

options.forEach(option => {
  option.addEventListener('click', () => {
    checkAnswer(option);
  });
});