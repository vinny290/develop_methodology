const readlineSync = require('readline-sync');

const generateProgression = (start, step, length) => {
  const progression = [];
  let currentValue = start;

  for (let i = 0; i < length; i += 1) {
    progression.push(currentValue);
    currentValue *= step;

    if (currentValue >= 1024) {
      break;
    }
  }

  return progression;
};

const hideElement = (progression, hiddenIndex) => {
  const progressionCopy = [...progression];
  progressionCopy[hiddenIndex] = '..';
  return progressionCopy.join(' ');
};

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  let correctAnswersCount = 0;
  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const start = Math.floor(Math.random() * 10) + 1;
    const step = Math.floor(Math.random() * 5) + 1;
    const length = Math.floor(Math.random() * 6) + 5;
    const progression = generateProgression(start, step, length);

    const hiddenIndex = Math.floor(Math.random() * progression.length);
    const correctAnswer = progression[hiddenIndex];

    const question = hideElement(progression, hiddenIndex);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  if (correctAnswersCount === rounds) {
    console.log(`Congratulations, ${userName}!`);
  }
};

playGame();
