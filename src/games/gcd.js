import generateRandomNum from '../utils';
import playGame from '..';

const instruction = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (b > 0 ? gcd(b, a % b) : a);

const minNum = 2;
const maxNum = 50;

const generator = () => {
  const num1 = generateRandomNum(minNum, maxNum);
  const num2 = generateRandomNum(minNum, maxNum);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return [question, correctAnswer];
};
export default () => playGame(instruction, generator);
