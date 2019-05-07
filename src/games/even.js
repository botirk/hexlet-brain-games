import generateRandomNum from '../utils';
import { playGame } from '..';

const instruction = 'Anwser "yes" if number even otherwise answer "no"';
const minNum = 1;
const maxNum = 50;
const generator = () => {
  const question = generateRandomNum(minNum, maxNum);
  const isEven = (question % 2 === 0);
  const correctAnswer = (isEven ? 'yes' : 'no');
  return [question, correctAnswer];
};
export default () => playGame(instruction, generator);
