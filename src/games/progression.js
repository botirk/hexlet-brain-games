import { playGame } from '..';
import generateRandomNum from '../utils';

const instruction = 'What number is missing in the progression?';
const minNum = 1;
const maxNum = 50;
const progCount = 10;
const minStep = 2;
const maxStep = minStep + 9;
const generator = () => {
  // step for array of numbers
  const step = generateRandomNum(minStep, maxStep);
  // iterative process - generates array of numbers
  const genIter = (array, lastNum, i) => {
    if (i === 0) return array;
    const newLastNum = lastNum + step;
    array.push(newLastNum);
    return genIter(array, newLastNum, i - 1);
  };
  const progression = genIter([], generateRandomNum(minNum, maxNum), progCount);
  // generated missing index from generated array
  const missingIndex = generateRandomNum(0, progCount);
  const correctAnswer = String(progression[missingIndex]);
  // replace missing index with two dots
  progression[missingIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
export default () => playGame(instruction, generator);
