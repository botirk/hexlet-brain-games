"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require("..");

var _utils = _interopRequireDefault(require("../utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const instruction = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => b > 0 ? gcd(b, a % b) : a;

const minNum = 2;
const maxNum = 50;

const generator = () => {
  const num1 = (0, _utils.default)(minNum, maxNum);
  const num2 = (0, _utils.default)(minNum, maxNum);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return [question, correctAnswer];
};

var _default = () => (0, _.playGame)(instruction, generator);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9nY2QuanMiXSwibmFtZXMiOlsiaW5zdHJ1Y3Rpb24iLCJnY2QiLCJhIiwiYiIsIm1pbk51bSIsIm1heE51bSIsImdlbmVyYXRvciIsIm51bTEiLCJudW0yIiwicXVlc3Rpb24iLCJjb3JyZWN0QW5zd2VyIiwiU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsb0RBQXBCOztBQUNBLE1BQU1DLEdBQUcsR0FBRyxDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBV0EsQ0FBQyxHQUFHLENBQUosR0FBUUYsR0FBRyxDQUFDRSxDQUFELEVBQUlELENBQUMsR0FBR0MsQ0FBUixDQUFYLEdBQXdCRCxDQUEvQzs7QUFDQSxNQUFNRSxNQUFNLEdBQUcsQ0FBZjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxFQUFmOztBQUNBLE1BQU1DLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFFBQU1DLElBQUksR0FBRyxvQkFBa0JILE1BQWxCLEVBQTBCQyxNQUExQixDQUFiO0FBQ0EsUUFBTUcsSUFBSSxHQUFHLG9CQUFrQkosTUFBbEIsRUFBMEJDLE1BQTFCLENBQWI7QUFDQSxRQUFNSSxRQUFRLEdBQUksR0FBRUYsSUFBSyxJQUFHQyxJQUFLLEVBQWpDO0FBQ0EsUUFBTUUsYUFBYSxHQUFHQyxNQUFNLENBQUNWLEdBQUcsQ0FBQ00sSUFBRCxFQUFPQyxJQUFQLENBQUosQ0FBNUI7QUFDQSxTQUFPLENBQUNDLFFBQUQsRUFBV0MsYUFBWCxDQUFQO0FBQ0QsQ0FORDs7ZUFPZSxNQUFNLGdCQUFTVixXQUFULEVBQXNCTSxTQUF0QixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGxheUdhbWUgfSBmcm9tICcuLic7XG5pbXBvcnQgZ2VuZXJhdGVSYW5kb21OdW0gZnJvbSAnLi4vdXRpbHMnO1xuXG5jb25zdCBpbnN0cnVjdGlvbiA9ICdGaW5kIHRoZSBncmVhdGVzdCBjb21tb24gZGl2aXNvciBvZiBnaXZlbiBudW1iZXJzLic7XG5jb25zdCBnY2QgPSAoYSwgYikgPT4gKGIgPiAwID8gZ2NkKGIsIGEgJSBiKSA6IGEpO1xuY29uc3QgbWluTnVtID0gMjtcbmNvbnN0IG1heE51bSA9IDUwO1xuY29uc3QgZ2VuZXJhdG9yID0gKCkgPT4ge1xuICBjb25zdCBudW0xID0gZ2VuZXJhdGVSYW5kb21OdW0obWluTnVtLCBtYXhOdW0pO1xuICBjb25zdCBudW0yID0gZ2VuZXJhdGVSYW5kb21OdW0obWluTnVtLCBtYXhOdW0pO1xuICBjb25zdCBxdWVzdGlvbiA9IGAke251bTF9ICR7bnVtMn1gO1xuICBjb25zdCBjb3JyZWN0QW5zd2VyID0gU3RyaW5nKGdjZChudW0xLCBudW0yKSk7XG4gIHJldHVybiBbcXVlc3Rpb24sIGNvcnJlY3RBbnN3ZXJdO1xufTtcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHBsYXlHYW1lKGluc3RydWN0aW9uLCBnZW5lcmF0b3IpO1xuIl19