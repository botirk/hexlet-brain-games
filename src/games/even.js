// every game returns [string, function] function is generator of [question, answer]
export default (maxNum = 50) => () => {
  const instruction = 'Anwser "yes" if number even otherwise answer "no"';
  const generator = () => {
    const generatedNumber = Math.floor(Math.random() * maxNum);
    const isEven = (generatedNumber % 2 === 0);
    const result = (isEven ? 'yes' : 'no');
    return [generatedNumber, result];
  };
  return [instruction, generator];
};
