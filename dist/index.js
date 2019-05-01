"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.questionNameAndSayHello = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const questionNameAndSayHello = () => {
  const name = _readlineSync.default.question('May I have your name? ');

  console.log(`Hello, ${name}`);
};

exports.questionNameAndSayHello = questionNameAndSayHello;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJxdWVzdGlvbk5hbWVBbmRTYXlIZWxsbyIsIm5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLE1BQU1BLHVCQUF1QixHQUFHLE1BQU07QUFDckMsUUFBTUMsSUFBSSxHQUFHQyxzQkFBYUMsUUFBYixDQUFzQix3QkFBdEIsQ0FBYjs7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsVUFBU0osSUFBSyxFQUEzQjtBQUNBLENBSEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xyXG5cclxuY29uc3QgcXVlc3Rpb25OYW1lQW5kU2F5SGVsbG8gPSAoKSA9PiB7XHJcblx0Y29uc3QgbmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/ICcpO1xyXG5cdGNvbnNvbGUubG9nKGBIZWxsbywgJHtuYW1lfWApO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgcXVlc3Rpb25OYW1lQW5kU2F5SGVsbG8gfTsiXX0=