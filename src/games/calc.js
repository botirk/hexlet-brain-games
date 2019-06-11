import generateRandomNum from '../utils';
import { playGame } from '..';

const instruction = 'What is result of the expression?';

const minNum = 1;
const maxNum = 50;
const maxNum2 = maxNum / 5;

const expressionSymbols = [
  { str: '+', f: (a, b) => a + b },
  { str: '-', f: (a, b) => a - b },
  { str: '*', f: (a, b) => a * b },
];

const generator = () => {
  const num1 = generateRandomNum(minNum, maxNum);
  const num2 = generateRandomNum(minNum, maxNum2);

  const currentSymbol = expressionSymbols[generateRandomNum(0, expressionSymbols.length)];

  const question = `${num1} ${currentSymbol.str} ${num2}`;
  const correctAnswer = String(currentSymbol.f(num1, num2));
  return [question, correctAnswer];
};
export default () => playGame(instruction, generator);
