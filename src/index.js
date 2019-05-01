import readlineSync from 'readline-sync';

const sayWelcome = () => {
  console.log('\nWelcome to the Brain Games!');
};

const questionNameAndSayHello = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`\nHello, ${name}`);
  return name;
};

const instructEven = () => console.log('Anwser "yes" if number even otherwise answer "no"');

const questionEven = () => {
  const generatedNumber = Math.floor(Math.random() * 100);
  const isEven = (generatedNumber % 2 === 0);
  const result = readlineSync.question(`\nQuestion: ${generatedNumber}\n`);
  const isResultCorrect = (isEven ? result === 'yes' : result === 'no');
  console.log(isResultCorrect ? '\nCorrect!' : '\nIncorrect!');
  return isResultCorrect;
};

const congratulate = name => console.log(`\nCongratulations, ${name}!`);

export {
  sayWelcome, questionNameAndSayHello, instructEven, questionEven, congratulate,
};
