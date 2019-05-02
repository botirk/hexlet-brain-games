import readlineSync from 'readline-sync';

const sayWelcome = () => {
  console.log('\nWelcome to the Brain Games!');
};

const questionNameAndSayHello = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`\nHello, ${name}`);
  return name;
};

const congratulate = name => console.log(`\nCongratulations, ${name}!`);
// every game returns [string, function] function is generator of [question, answer]
const gameOfEven = (maxNum = 50) => () => {
  const instruction = 'Anwser "yes" if number even otherwise answer "no"';
  const generator = () => {
    const generatedNumber = Math.floor(Math.random() * maxNum);
    const isEven = (generatedNumber % 2 === 0);
    const result = (isEven ? 'yes' : 'no');
    return [generatedNumber, result];
  };
  return [instruction, generator];
};

const gameOfCalc = (maxNum = 50, maxNum2 = maxNum / 5) => () => {
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

const gameOfGCD = (maxNum = 50) => () => {
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

const gameOfProgression = (maxNum = 50, progCount = 10, minStep = 2,
  maxStep = minStep + 9) => () => {
  // you cant guess progression with less than 3 numbers, so fix it
  const alteredProgCount = progCount < 3 ? 3 : progCount;
  const instruction = 'What number is missing in the progression?';
  const generator = () => {
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

const playGame = (game, numCorrectGames = 3) => {
  sayWelcome();
  const name = questionNameAndSayHello();

  const [instruction, generator] = game();
  console.log(`\n${instruction}`);
  for (let i = 0; i < numCorrectGames;) {
    const [question, answer] = generator();
    const userAnswer = readlineSync.question(`\nQuestion: ${question}\nYour answer: `);
    if (userAnswer === answer) {
      console.log('Correct!');
      i += 1;
    } else console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
  }
  congratulate(name);
};

export {
  sayWelcome, questionNameAndSayHello, congratulate,
  gameOfEven, gameOfCalc, gameOfGCD, gameOfProgression,
  playGame,
};
