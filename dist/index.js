"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playGame = exports.congratulate = exports.questionNameAndSayHello = exports.sayWelcome = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sayWelcome = () => {
  console.log('\nWelcome to the Brain Games!');
};

exports.sayWelcome = sayWelcome;

const questionNameAndSayHello = () => {
  const name = _readlineSync.default.question('\nMay I have your name? ');

  console.log(`\nHello, ${name}`);
  return name;
};

exports.questionNameAndSayHello = questionNameAndSayHello;

const congratulate = name => console.log(`\nCongratulations, ${name}!`);

exports.congratulate = congratulate;

const playGame = (game, numCorrectGames = 3) => {
  sayWelcome();
  const name = questionNameAndSayHello();
  const [instruction, generator] = game();
  console.log(`\n${instruction}`);

  for (let i = 0; i < numCorrectGames;) {
    const [question, answer] = generator();

    const userAnswer = _readlineSync.default.question(`\nQuestion: ${question}\nYour answer: `);

    if (userAnswer === answer) {
      console.log('Correct!');
      i += 1;
    } else console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
  }

  congratulate(name);
};

exports.playGame = playGame;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzYXlXZWxjb21lIiwiY29uc29sZSIsImxvZyIsInF1ZXN0aW9uTmFtZUFuZFNheUhlbGxvIiwibmFtZSIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIiwiY29uZ3JhdHVsYXRlIiwicGxheUdhbWUiLCJnYW1lIiwibnVtQ29ycmVjdEdhbWVzIiwiaW5zdHJ1Y3Rpb24iLCJnZW5lcmF0b3IiLCJpIiwiYW5zd2VyIiwidXNlckFuc3dlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLE1BQU07QUFDdkJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLCtCQUFaO0FBQ0QsQ0FGRDs7OztBQUlBLE1BQU1DLHVCQUF1QixHQUFHLE1BQU07QUFDcEMsUUFBTUMsSUFBSSxHQUFHQyxzQkFBYUMsUUFBYixDQUFzQiwwQkFBdEIsQ0FBYjs7QUFDQUwsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsWUFBV0UsSUFBSyxFQUE3QjtBQUNBLFNBQU9BLElBQVA7QUFDRCxDQUpEOzs7O0FBTUEsTUFBTUcsWUFBWSxHQUFHSCxJQUFJLElBQUlILE9BQU8sQ0FBQ0MsR0FBUixDQUFhLHNCQUFxQkUsSUFBSyxHQUF2QyxDQUE3Qjs7OztBQUVBLE1BQU1JLFFBQVEsR0FBRyxDQUFDQyxJQUFELEVBQU9DLGVBQWUsR0FBRyxDQUF6QixLQUErQjtBQUM5Q1YsRUFBQUEsVUFBVTtBQUNWLFFBQU1JLElBQUksR0FBR0QsdUJBQXVCLEVBQXBDO0FBRUEsUUFBTSxDQUFDUSxXQUFELEVBQWNDLFNBQWQsSUFBMkJILElBQUksRUFBckM7QUFDQVIsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsS0FBSVMsV0FBWSxFQUE3Qjs7QUFDQSxPQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILGVBQXBCLEdBQXNDO0FBQ3BDLFVBQU0sQ0FBQ0osUUFBRCxFQUFXUSxNQUFYLElBQXFCRixTQUFTLEVBQXBDOztBQUNBLFVBQU1HLFVBQVUsR0FBR1Ysc0JBQWFDLFFBQWIsQ0FBdUIsZUFBY0EsUUFBUyxpQkFBOUMsQ0FBbkI7O0FBQ0EsUUFBSVMsVUFBVSxLQUFLRCxNQUFuQixFQUEyQjtBQUN6QmIsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBVyxNQUFBQSxDQUFDLElBQUksQ0FBTDtBQUNELEtBSEQsTUFHT1osT0FBTyxDQUFDQyxHQUFSLENBQWEsSUFBR2EsVUFBVyw2Q0FBNENELE1BQU8sR0FBOUU7QUFDUjs7QUFDRFAsRUFBQUEsWUFBWSxDQUFDSCxJQUFELENBQVo7QUFDRCxDQWZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcblxuY29uc3Qgc2F5V2VsY29tZSA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ1xcbldlbGNvbWUgdG8gdGhlIEJyYWluIEdhbWVzIScpO1xufTtcblxuY29uc3QgcXVlc3Rpb25OYW1lQW5kU2F5SGVsbG8gPSAoKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ1xcbk1heSBJIGhhdmUgeW91ciBuYW1lPyAnKTtcbiAgY29uc29sZS5sb2coYFxcbkhlbGxvLCAke25hbWV9YCk7XG4gIHJldHVybiBuYW1lO1xufTtcblxuY29uc3QgY29uZ3JhdHVsYXRlID0gbmFtZSA9PiBjb25zb2xlLmxvZyhgXFxuQ29uZ3JhdHVsYXRpb25zLCAke25hbWV9IWApO1xuXG5jb25zdCBwbGF5R2FtZSA9IChnYW1lLCBudW1Db3JyZWN0R2FtZXMgPSAzKSA9PiB7XG4gIHNheVdlbGNvbWUoKTtcbiAgY29uc3QgbmFtZSA9IHF1ZXN0aW9uTmFtZUFuZFNheUhlbGxvKCk7XG5cbiAgY29uc3QgW2luc3RydWN0aW9uLCBnZW5lcmF0b3JdID0gZ2FtZSgpO1xuICBjb25zb2xlLmxvZyhgXFxuJHtpbnN0cnVjdGlvbn1gKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3JyZWN0R2FtZXM7KSB7XG4gICAgY29uc3QgW3F1ZXN0aW9uLCBhbnN3ZXJdID0gZ2VuZXJhdG9yKCk7XG4gICAgY29uc3QgdXNlckFuc3dlciA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgXFxuUXVlc3Rpb246ICR7cXVlc3Rpb259XFxuWW91ciBhbnN3ZXI6IGApO1xuICAgIGlmICh1c2VyQW5zd2VyID09PSBhbnN3ZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdDb3JyZWN0IScpO1xuICAgICAgaSArPSAxO1xuICAgIH0gZWxzZSBjb25zb2xlLmxvZyhgJyR7dXNlckFuc3dlcn0nIGlzIHdyb25nIGFuc3dlciA7KC4gQ29ycmVjdCBhbnN3ZXIgd2FzICcke2Fuc3dlcn0nYCk7XG4gIH1cbiAgY29uZ3JhdHVsYXRlKG5hbWUpO1xufTtcblxuZXhwb3J0IHtcbiAgc2F5V2VsY29tZSwgcXVlc3Rpb25OYW1lQW5kU2F5SGVsbG8sIGNvbmdyYXR1bGF0ZSwgcGxheUdhbWUsXG59O1xuIl19