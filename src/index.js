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

const correctGamesCount = 3;
const playGame = (instruction, generator) => {
  sayWelcome();
  const name = questionNameAndSayHello();
  console.log(`\n${instruction}`);
  for (let i = 0; i < correctGamesCount;) {
    const [question, answer] = generator();
    const userAnswer = readlineSync.question(`\nQuestion: ${question}\nYour answer: `);
    if (userAnswer === answer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      return;
    }
  }
  congratulate(name);
};
export default playGame;
