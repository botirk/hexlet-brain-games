"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const questionNameAndSayHello = () => {
  const name = _readlineSync.default.question('May I have your name? ');

  console.log(`Hello, ${name}`);
};

var _default = questionNameAndSayHello;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJxdWVzdGlvbk5hbWVBbmRTYXlIZWxsbyIsIm5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLE1BQU1BLHVCQUF1QixHQUFHLE1BQU07QUFDcEMsUUFBTUMsSUFBSSxHQUFHQyxzQkFBYUMsUUFBYixDQUFzQix3QkFBdEIsQ0FBYjs7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsVUFBU0osSUFBSyxFQUEzQjtBQUNELENBSEQ7O2VBS2VELHVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcblxuY29uc3QgcXVlc3Rpb25OYW1lQW5kU2F5SGVsbG8gPSAoKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ01heSBJIGhhdmUgeW91ciBuYW1lPyAnKTtcbiAgY29uc29sZS5sb2coYEhlbGxvLCAke25hbWV9YCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBxdWVzdGlvbk5hbWVBbmRTYXlIZWxsbztcbiJdfQ==