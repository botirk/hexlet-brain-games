"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require("..");

var _utils = _interopRequireDefault(require("../utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = n => {
  if (n === 1) return false;
  if (n === 2) return true;

  for (let i = 2; i < n; i += 1) if (n % i === 0) return false;

  return true;
};

const minNum = 1;
const maxNum = 50;

const generator = () => {
  const question = (0, _utils.default)(minNum, maxNum);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

var _default = () => (0, _.playGame)(instruction, generator);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9wcmltZS5qcyJdLCJuYW1lcyI6WyJpbnN0cnVjdGlvbiIsImlzUHJpbWUiLCJuIiwiaSIsIm1pbk51bSIsIm1heE51bSIsImdlbmVyYXRvciIsInF1ZXN0aW9uIiwiY29ycmVjdEFuc3dlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUEsTUFBTUEsV0FBVyxHQUFHLDhEQUFwQjs7QUFDQSxNQUFNQyxPQUFPLEdBQUlDLENBQUQsSUFBTztBQUNyQixNQUFJQSxDQUFDLEtBQUssQ0FBVixFQUFhLE9BQU8sS0FBUDtBQUNiLE1BQUlBLENBQUMsS0FBSyxDQUFWLEVBQWEsT0FBTyxJQUFQOztBQUNiLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsQ0FBcEIsRUFBdUJDLENBQUMsSUFBSSxDQUE1QixFQUErQixJQUFJRCxDQUFDLEdBQUdDLENBQUosS0FBVSxDQUFkLEVBQWlCLE9BQU8sS0FBUDs7QUFDaEQsU0FBTyxJQUFQO0FBQ0QsQ0FMRDs7QUFNQSxNQUFNQyxNQUFNLEdBQUcsQ0FBZjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxFQUFmOztBQUNBLE1BQU1DLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFFBQU1DLFFBQVEsR0FBRyxvQkFBa0JILE1BQWxCLEVBQTBCQyxNQUExQixDQUFqQjtBQUNBLFFBQU1HLGFBQWEsR0FBR1AsT0FBTyxDQUFDTSxRQUFELENBQVAsR0FBb0IsS0FBcEIsR0FBNEIsSUFBbEQ7QUFDQSxTQUFPLENBQUNBLFFBQUQsRUFBV0MsYUFBWCxDQUFQO0FBQ0QsQ0FKRDs7ZUFLZSxNQUFNLGdCQUFTUixXQUFULEVBQXNCTSxTQUF0QixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGxheUdhbWUgfSBmcm9tICcuLic7XG5pbXBvcnQgZ2VuZXJhdGVSYW5kb21OdW0gZnJvbSAnLi4vdXRpbHMnO1xuXG5jb25zdCBpbnN0cnVjdGlvbiA9ICdBbnN3ZXIgXCJ5ZXNcIiBpZiBnaXZlbiBudW1iZXIgaXMgcHJpbWUuIE90aGVyd2lzZSBhbnN3ZXIgXCJub1wiJztcbmNvbnN0IGlzUHJpbWUgPSAobikgPT4ge1xuICBpZiAobiA9PT0gMSkgcmV0dXJuIGZhbHNlO1xuICBpZiAobiA9PT0gMikgcmV0dXJuIHRydWU7XG4gIGZvciAobGV0IGkgPSAyOyBpIDwgbjsgaSArPSAxKSBpZiAobiAlIGkgPT09IDApIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHRydWU7XG59O1xuY29uc3QgbWluTnVtID0gMTtcbmNvbnN0IG1heE51bSA9IDUwO1xuY29uc3QgZ2VuZXJhdG9yID0gKCkgPT4ge1xuICBjb25zdCBxdWVzdGlvbiA9IGdlbmVyYXRlUmFuZG9tTnVtKG1pbk51bSwgbWF4TnVtKTtcbiAgY29uc3QgY29ycmVjdEFuc3dlciA9IGlzUHJpbWUocXVlc3Rpb24pID8gJ3llcycgOiAnbm8nO1xuICByZXR1cm4gW3F1ZXN0aW9uLCBjb3JyZWN0QW5zd2VyXTtcbn07XG5leHBvcnQgZGVmYXVsdCAoKSA9PiBwbGF5R2FtZShpbnN0cnVjdGlvbiwgZ2VuZXJhdG9yKTtcbiJdfQ==