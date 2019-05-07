import generateRandomNum from '../utils';
import playGame from '..';

const instruction = 'Anwser "yes" if number even otherwise answer "no"';

const minNum = 1;
const maxNum = 50;

const isEven = num => num % 2 === 0;

const generator = () => {
  const question = generateRandomNum(minNum, maxNum);
  const correctAnswer = (isEven(question) ? 'yes' : 'no');
  return [question, correctAnswer];
};
export default () => playGame(instruction, generator);
