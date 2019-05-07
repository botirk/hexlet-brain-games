"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = _interopRequireDefault(require("../utils"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const instruction = 'Anwser "yes" if number even otherwise answer "no"';
const minNum = 1;
const maxNum = 50;

const generator = () => {
  const question = (0, _utils.default)(minNum, maxNum);
  const isEven = question % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  return [question, correctAnswer];
};

var _default = () => (0, _.playGame)(instruction, generator);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9ldmVuLmpzIl0sIm5hbWVzIjpbImluc3RydWN0aW9uIiwibWluTnVtIiwibWF4TnVtIiwiZ2VuZXJhdG9yIiwicXVlc3Rpb24iLCJpc0V2ZW4iLCJjb3JyZWN0QW5zd2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsbURBQXBCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLENBQWY7QUFDQSxNQUFNQyxNQUFNLEdBQUcsRUFBZjs7QUFDQSxNQUFNQyxTQUFTLEdBQUcsTUFBTTtBQUN0QixRQUFNQyxRQUFRLEdBQUcsb0JBQWtCSCxNQUFsQixFQUEwQkMsTUFBMUIsQ0FBakI7QUFDQSxRQUFNRyxNQUFNLEdBQUlELFFBQVEsR0FBRyxDQUFYLEtBQWlCLENBQWpDO0FBQ0EsUUFBTUUsYUFBYSxHQUFJRCxNQUFNLEdBQUcsS0FBSCxHQUFXLElBQXhDO0FBQ0EsU0FBTyxDQUFDRCxRQUFELEVBQVdFLGFBQVgsQ0FBUDtBQUNELENBTEQ7O2VBTWUsTUFBTSxnQkFBU04sV0FBVCxFQUFzQkcsU0FBdEIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZW5lcmF0ZVJhbmRvbU51bSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBwbGF5R2FtZSB9IGZyb20gJy4uJztcblxuY29uc3QgaW5zdHJ1Y3Rpb24gPSAnQW53c2VyIFwieWVzXCIgaWYgbnVtYmVyIGV2ZW4gb3RoZXJ3aXNlIGFuc3dlciBcIm5vXCInO1xuY29uc3QgbWluTnVtID0gMTtcbmNvbnN0IG1heE51bSA9IDUwO1xuY29uc3QgZ2VuZXJhdG9yID0gKCkgPT4ge1xuICBjb25zdCBxdWVzdGlvbiA9IGdlbmVyYXRlUmFuZG9tTnVtKG1pbk51bSwgbWF4TnVtKTtcbiAgY29uc3QgaXNFdmVuID0gKHF1ZXN0aW9uICUgMiA9PT0gMCk7XG4gIGNvbnN0IGNvcnJlY3RBbnN3ZXIgPSAoaXNFdmVuID8gJ3llcycgOiAnbm8nKTtcbiAgcmV0dXJuIFtxdWVzdGlvbiwgY29ycmVjdEFuc3dlcl07XG59O1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4gcGxheUdhbWUoaW5zdHJ1Y3Rpb24sIGdlbmVyYXRvcik7XG4iXX0=