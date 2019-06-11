import generateRandomNum from '../utils';
import { playGame } from '..';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (n) => {
  if (n <= 1) return false;
  if (n === 2) return true;
  for (let i = 2; i <= n / 2; i += 1) if (n % i === 0) return false;
  return true;
};

const minNum = 1;
const maxNum = 50;

const generator = () => {
  const question = generateRandomNum(minNum, maxNum);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => playGame(instruction, generator);
