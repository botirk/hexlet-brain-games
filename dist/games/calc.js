"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require("..");

var _utils = _interopRequireDefault(require("../utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const instruction = 'What is result of the expression?';
const minNum = 1;
const maxNum = 50;
const maxNum2 = maxNum / 5;
const expressionSymbols = [{
  str: '+',
  f: (a, b) => a + b
}, {
  str: '-',
  f: (a, b) => a - b
}, {
  str: '*',
  f: (a, b) => a * b
}];

const generator = () => {
  const num1 = (0, _utils.default)(minNum, maxNum);
  const num2 = (0, _utils.default)(minNum, maxNum2);
  const currentSymbol = expressionSymbols[(0, _utils.default)(0, expressionSymbols.length)];
  const question = `${num1} ${currentSymbol.str} ${num2}`;
  const correctAnswer = String(currentSymbol.f(num1, num2));
  return [question, correctAnswer];
};

var _default = () => (0, _.playGame)(instruction, generator);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9jYWxjLmpzIl0sIm5hbWVzIjpbImluc3RydWN0aW9uIiwibWluTnVtIiwibWF4TnVtIiwibWF4TnVtMiIsImV4cHJlc3Npb25TeW1ib2xzIiwic3RyIiwiZiIsImEiLCJiIiwiZ2VuZXJhdG9yIiwibnVtMSIsIm51bTIiLCJjdXJyZW50U3ltYm9sIiwibGVuZ3RoIiwicXVlc3Rpb24iLCJjb3JyZWN0QW5zd2VyIiwiU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsbUNBQXBCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLENBQWY7QUFDQSxNQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUNBLE1BQU1DLE9BQU8sR0FBR0QsTUFBTSxHQUFHLENBQXpCO0FBQ0EsTUFBTUUsaUJBQWlCLEdBQUcsQ0FDeEI7QUFBRUMsRUFBQUEsR0FBRyxFQUFFLEdBQVA7QUFBWUMsRUFBQUEsQ0FBQyxFQUFFLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVRCxDQUFDLEdBQUdDO0FBQTdCLENBRHdCLEVBRXhCO0FBQUVILEVBQUFBLEdBQUcsRUFBRSxHQUFQO0FBQVlDLEVBQUFBLENBQUMsRUFBRSxDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVUQsQ0FBQyxHQUFHQztBQUE3QixDQUZ3QixFQUd4QjtBQUFFSCxFQUFBQSxHQUFHLEVBQUUsR0FBUDtBQUFZQyxFQUFBQSxDQUFDLEVBQUUsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVVELENBQUMsR0FBR0M7QUFBN0IsQ0FId0IsQ0FBMUI7O0FBS0EsTUFBTUMsU0FBUyxHQUFHLE1BQU07QUFDdEIsUUFBTUMsSUFBSSxHQUFHLG9CQUFrQlQsTUFBbEIsRUFBMEJDLE1BQTFCLENBQWI7QUFDQSxRQUFNUyxJQUFJLEdBQUcsb0JBQWtCVixNQUFsQixFQUEwQkUsT0FBMUIsQ0FBYjtBQUNBLFFBQU1TLGFBQWEsR0FBR1IsaUJBQWlCLENBQUMsb0JBQWtCLENBQWxCLEVBQXFCQSxpQkFBaUIsQ0FBQ1MsTUFBdkMsQ0FBRCxDQUF2QztBQUNBLFFBQU1DLFFBQVEsR0FBSSxHQUFFSixJQUFLLElBQUdFLGFBQWEsQ0FBQ1AsR0FBSSxJQUFHTSxJQUFLLEVBQXREO0FBQ0EsUUFBTUksYUFBYSxHQUFHQyxNQUFNLENBQUNKLGFBQWEsQ0FBQ04sQ0FBZCxDQUFnQkksSUFBaEIsRUFBc0JDLElBQXRCLENBQUQsQ0FBNUI7QUFDQSxTQUFPLENBQUNHLFFBQUQsRUFBV0MsYUFBWCxDQUFQO0FBQ0QsQ0FQRDs7ZUFRZSxNQUFNLGdCQUFTZixXQUFULEVBQXNCUyxTQUF0QixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGxheUdhbWUgfSBmcm9tICcuLic7XG5pbXBvcnQgZ2VuZXJhdGVSYW5kb21OdW0gZnJvbSAnLi4vdXRpbHMnO1xuXG5jb25zdCBpbnN0cnVjdGlvbiA9ICdXaGF0IGlzIHJlc3VsdCBvZiB0aGUgZXhwcmVzc2lvbj8nO1xuY29uc3QgbWluTnVtID0gMTtcbmNvbnN0IG1heE51bSA9IDUwO1xuY29uc3QgbWF4TnVtMiA9IG1heE51bSAvIDU7XG5jb25zdCBleHByZXNzaW9uU3ltYm9scyA9IFtcbiAgeyBzdHI6ICcrJywgZjogKGEsIGIpID0+IGEgKyBiIH0sXG4gIHsgc3RyOiAnLScsIGY6IChhLCBiKSA9PiBhIC0gYiB9LFxuICB7IHN0cjogJyonLCBmOiAoYSwgYikgPT4gYSAqIGIgfSxcbl07XG5jb25zdCBnZW5lcmF0b3IgPSAoKSA9PiB7XG4gIGNvbnN0IG51bTEgPSBnZW5lcmF0ZVJhbmRvbU51bShtaW5OdW0sIG1heE51bSk7XG4gIGNvbnN0IG51bTIgPSBnZW5lcmF0ZVJhbmRvbU51bShtaW5OdW0sIG1heE51bTIpO1xuICBjb25zdCBjdXJyZW50U3ltYm9sID0gZXhwcmVzc2lvblN5bWJvbHNbZ2VuZXJhdGVSYW5kb21OdW0oMCwgZXhwcmVzc2lvblN5bWJvbHMubGVuZ3RoKV07XG4gIGNvbnN0IHF1ZXN0aW9uID0gYCR7bnVtMX0gJHtjdXJyZW50U3ltYm9sLnN0cn0gJHtudW0yfWA7XG4gIGNvbnN0IGNvcnJlY3RBbnN3ZXIgPSBTdHJpbmcoY3VycmVudFN5bWJvbC5mKG51bTEsIG51bTIpKTtcbiAgcmV0dXJuIFtxdWVzdGlvbiwgY29ycmVjdEFuc3dlcl07XG59O1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4gcGxheUdhbWUoaW5zdHJ1Y3Rpb24sIGdlbmVyYXRvcik7XG4iXX0=