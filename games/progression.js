const generateProgression = (start, step, length) => {
  const progression = [];
  let currentValue = start;

  for (let i = 0; i < length; i += 1) {
    progression.push(currentValue);
    currentValue *= step;
  }

  return progression;
};

const hideElement = (progression, hiddenIndex) => {
  const progressionCopy = [...progression];
  progressionCopy[hiddenIndex] = '..';
  return progressionCopy.join(' ');
};

module.exports = {
  description: 'What number is missing in the progression?',
  generateRound: () => {
    const start = Math.floor(Math.random() * 10) + 1;
    const step = Math.floor(Math.random() * 5) + 1;
    const length = Math.floor(Math.random() * 6) + 5;
    const progression = generateProgression(start, step, length);
    const hiddenIndex = Math.floor(Math.random() * progression.length);
    const correctAnswer = progression[hiddenIndex];
    const question = hideElement(progression, hiddenIndex);

    return {
      question,
      correctAnswer: String(correctAnswer),
    };
  },
};
