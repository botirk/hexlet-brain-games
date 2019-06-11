import generateRandomNum from '../utils';
import { playGame } from '..';

const instruction = 'What number is missing in the progression?';
// please: progCount must be >= 3
const minNum = 1;
const maxNum = 50;
const progCount = 10;
const minStep = 2;
const maxStep = minStep + 9;

const generateProgression = () => {
  const step = generateRandomNum(minStep, maxStep);
  const result = [generateRandomNum(minNum, maxNum)];
  for (let i = 1; i < progCount; i += 1) {
    result.push(result[0] + step * i);
  }
  return result;
};

const generator = () => {
  const progression = generateProgression();
  // generated hiden index from generated array
  const hiddenIndex = generateRandomNum(0, progCount);
  const correctAnswer = String(progression[hiddenIndex]);
  // replace hidden index with two dots
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
export default () => playGame(instruction, generator);
