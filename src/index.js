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
  sayWelcome, questionNameAndSayHello, congratulate, playGame,
};
