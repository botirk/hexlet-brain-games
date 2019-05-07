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

const playGame = (instruction, generator, numCorrectGames = 3) => {
  sayWelcome();
  const name = questionNameAndSayHello();
  console.log(`\n${instruction}`);

  for (let i = 0; i < numCorrectGames;) {
    const [question, answer] = generator();

    const userAnswer = _readlineSync.default.question(`\nQuestion: ${question}\nYour answer: `);

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

exports.playGame = playGame;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzYXlXZWxjb21lIiwiY29uc29sZSIsImxvZyIsInF1ZXN0aW9uTmFtZUFuZFNheUhlbGxvIiwibmFtZSIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIiwiY29uZ3JhdHVsYXRlIiwicGxheUdhbWUiLCJpbnN0cnVjdGlvbiIsImdlbmVyYXRvciIsIm51bUNvcnJlY3RHYW1lcyIsImkiLCJhbnN3ZXIiLCJ1c2VyQW5zd2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFTyxNQUFNQSxVQUFVLEdBQUcsTUFBTTtBQUM5QkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksK0JBQVo7QUFDRCxDQUZNOzs7O0FBSUEsTUFBTUMsdUJBQXVCLEdBQUcsTUFBTTtBQUMzQyxRQUFNQyxJQUFJLEdBQUdDLHNCQUFhQyxRQUFiLENBQXNCLDBCQUF0QixDQUFiOztBQUNBTCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxZQUFXRSxJQUFLLEVBQTdCO0FBQ0EsU0FBT0EsSUFBUDtBQUNELENBSk07Ozs7QUFNQSxNQUFNRyxZQUFZLEdBQUdILElBQUksSUFBSUgsT0FBTyxDQUFDQyxHQUFSLENBQWEsc0JBQXFCRSxJQUFLLEdBQXZDLENBQTdCOzs7O0FBRUEsTUFBTUksUUFBUSxHQUFHLENBQUNDLFdBQUQsRUFBY0MsU0FBZCxFQUF5QkMsZUFBZSxHQUFHLENBQTNDLEtBQWlEO0FBQ3ZFWCxFQUFBQSxVQUFVO0FBQ1YsUUFBTUksSUFBSSxHQUFHRCx1QkFBdUIsRUFBcEM7QUFDQUYsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsS0FBSU8sV0FBWSxFQUE3Qjs7QUFDQSxPQUFLLElBQUlHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELGVBQXBCLEdBQXNDO0FBQ3BDLFVBQU0sQ0FBQ0wsUUFBRCxFQUFXTyxNQUFYLElBQXFCSCxTQUFTLEVBQXBDOztBQUNBLFVBQU1JLFVBQVUsR0FBR1Qsc0JBQWFDLFFBQWIsQ0FBdUIsZUFBY0EsUUFBUyxpQkFBOUMsQ0FBbkI7O0FBQ0EsUUFBSVEsVUFBVSxLQUFLRCxNQUFuQixFQUEyQjtBQUN6QlosTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBVSxNQUFBQSxDQUFDLElBQUksQ0FBTDtBQUNELEtBSEQsTUFHTztBQUNMWCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxJQUFHWSxVQUFXLDZDQUE0Q0QsTUFBTyxHQUE5RTtBQUNBO0FBQ0Q7QUFDRjs7QUFDRE4sRUFBQUEsWUFBWSxDQUFDSCxJQUFELENBQVo7QUFDRCxDQWhCTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5cbmV4cG9ydCBjb25zdCBzYXlXZWxjb21lID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZygnXFxuV2VsY29tZSB0byB0aGUgQnJhaW4gR2FtZXMhJyk7XG59O1xuXG5leHBvcnQgY29uc3QgcXVlc3Rpb25OYW1lQW5kU2F5SGVsbG8gPSAoKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ1xcbk1heSBJIGhhdmUgeW91ciBuYW1lPyAnKTtcbiAgY29uc29sZS5sb2coYFxcbkhlbGxvLCAke25hbWV9YCk7XG4gIHJldHVybiBuYW1lO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbmdyYXR1bGF0ZSA9IG5hbWUgPT4gY29uc29sZS5sb2coYFxcbkNvbmdyYXR1bGF0aW9ucywgJHtuYW1lfSFgKTtcblxuZXhwb3J0IGNvbnN0IHBsYXlHYW1lID0gKGluc3RydWN0aW9uLCBnZW5lcmF0b3IsIG51bUNvcnJlY3RHYW1lcyA9IDMpID0+IHtcbiAgc2F5V2VsY29tZSgpO1xuICBjb25zdCBuYW1lID0gcXVlc3Rpb25OYW1lQW5kU2F5SGVsbG8oKTtcbiAgY29uc29sZS5sb2coYFxcbiR7aW5zdHJ1Y3Rpb259YCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29ycmVjdEdhbWVzOykge1xuICAgIGNvbnN0IFtxdWVzdGlvbiwgYW5zd2VyXSA9IGdlbmVyYXRvcigpO1xuICAgIGNvbnN0IHVzZXJBbnN3ZXIgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYFxcblF1ZXN0aW9uOiAke3F1ZXN0aW9ufVxcbllvdXIgYW5zd2VyOiBgKTtcbiAgICBpZiAodXNlckFuc3dlciA9PT0gYW5zd2VyKSB7XG4gICAgICBjb25zb2xlLmxvZygnQ29ycmVjdCEnKTtcbiAgICAgIGkgKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYCcke3VzZXJBbnN3ZXJ9JyBpcyB3cm9uZyBhbnN3ZXIgOyguIENvcnJlY3QgYW5zd2VyIHdhcyAnJHthbnN3ZXJ9J2ApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBjb25ncmF0dWxhdGUobmFtZSk7XG59O1xuIl19