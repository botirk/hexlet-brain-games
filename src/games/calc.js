export default (maxNum = 50, maxNum2 = maxNum / 5) => () => {
  const instruction = 'What is result of the expression?';
  const generator = () => {
    const genNum1 = Math.floor(Math.random() * maxNum);
    const genNum2 = Math.floor(Math.random() * maxNum2);
    const expSymbols = [
      { str: '+', f: (a, b) => a + b },
      { str: '-', f: (a, b) => a - b },
      { str: '*', f: (a, b) => a * b },
    ];
    const transSymbol = expSymbols[Math.floor(Math.random() * 3)];
    const genQuestion = `${genNum1} ${transSymbol.str} ${genNum2}`;
    const result = String(transSymbol.f(genNum1, genNum2));
    return [genQuestion, result];
  };
  return [instruction, generator];
};