export default (maxNum = 50) => () => {
  const instruction = 'Find the greatest common divisor of given numbers.';
  const generator = () => {
    const genNum1 = Math.floor(Math.random() * maxNum);
    const genNum2 = Math.floor(Math.random() * maxNum);
    const nod = (a, b) => (b > 0 ? nod(b, a % b) : a);
    const genNOD = String(nod(genNum1, genNum2));
    const genQuestion = `${genNum1} ${genNum2}`;
    return [genQuestion, genNOD];
  };
  return [instruction, generator];
};