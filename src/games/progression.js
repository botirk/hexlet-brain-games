export default (maxNum = 50, progCount = 10, minStep = 2,
  maxStep = minStep + 9) => () => {
  // you cant guess progression with less than 3 numbers, so fix it
  const alteredProgCount = progCount < 3 ? 3 : progCount;
  const instruction = 'What number is missing in the progression?';
  const generator = () => {
    // step for array of numbers
    const step = minStep + Math.floor(Math.random() * maxStep);
    // iterative process - generates array
    const genIter = (result, lastNum, i) => {
      if (i === 0) return result;
      const newLastNum = lastNum + step;
      result.push(newLastNum);
      return genIter(result, newLastNum, i - 1);
    };
    const genProgression = genIter([], Math.floor(Math.random() * maxNum), alteredProgCount);
    // generated missing number index
    const genMissingNumIndex = Math.floor(Math.random() * alteredProgCount);
    const answer = String(genProgression[genMissingNumIndex]);
    // replace missing index with two dots
    genProgression[genMissingNumIndex] = '..';
    const question = genProgression.join(' ');
    return [question, answer];
  };
  return [instruction, generator];
};
