const readlineSync = require('readline-sync');

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Find the smallest common multiple of given numbers.');

const calculateGCD = (a, b) => (b === 0 ? a : calculateGCD(b, a % b));

const calculateLCM = (a, b) => (a * b) / calculateGCD(a, b);

const generateNumbers = () => [
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
];

const playRound = () => {
  const numbers = generateNumbers();
  const [a, b, c] = numbers;
  const lcmAB = calculateLCM(a, b);
  const correctAnswer = calculateLCM(lcmAB, c);

  console.log(`Question: ${numbers.join(' ')}`);
  const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

for (let i = 0; i < 3; i += 1) {
  if (!playRound()) {
    process.exit();
  }
}

console.log(`Congratulations, ${userName}!`);
