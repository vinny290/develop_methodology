const generateNumbers = () => [
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
];

const calculateGCD = (a, b) => (b === 0 ? a : calculateGCD(b, a % b));

const calculateLCM = (a, b) => (a * b) / calculateGCD(a, b);

module.exports = {
  description: 'Find the smallest common multiple of given numbers.',
  generateRound: () => {
    const numbers = generateNumbers();
    const [a, b, c] = numbers;
    const lcmAB = calculateLCM(a, b);
    const correctAnswer = calculateLCM(lcmAB, c);
    return {
      question: numbers.join(' '),
      correctAnswer: String(correctAnswer),
    };
  },
};
