"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (maxNum = 50) => () => {
  const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no"';

  const generator = () => {
    const genNum = Math.floor(Math.random() * maxNum); // functions checks is n prime

    const fIsPrime = n => {
      if (n === 1) return false;
      if (n === 2) return true;

      for (let i = 2; i < n; i += 1) if (n % i === 0) return false;

      return true;
    };

    const answer = fIsPrime(genNum) ? 'yes' : 'no';
    return [genNum, answer];
  };

  return [instruction, generator];
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9wcmltZS5qcyJdLCJuYW1lcyI6WyJtYXhOdW0iLCJpbnN0cnVjdGlvbiIsImdlbmVyYXRvciIsImdlbk51bSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImZJc1ByaW1lIiwibiIsImkiLCJhbnN3ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7ZUFBZSxDQUFDQSxNQUFNLEdBQUcsRUFBVixLQUFpQixNQUFNO0FBQ3BDLFFBQU1DLFdBQVcsR0FBRyw4REFBcEI7O0FBQ0EsUUFBTUMsU0FBUyxHQUFHLE1BQU07QUFDdEIsVUFBTUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCTixNQUEzQixDQUFmLENBRHNCLENBRXRCOztBQUNBLFVBQU1PLFFBQVEsR0FBSUMsQ0FBRCxJQUFPO0FBQ3RCLFVBQUlBLENBQUMsS0FBSyxDQUFWLEVBQWEsT0FBTyxLQUFQO0FBQ2IsVUFBSUEsQ0FBQyxLQUFLLENBQVYsRUFBYSxPQUFPLElBQVA7O0FBQ2IsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxDQUFwQixFQUF1QkMsQ0FBQyxJQUFJLENBQTVCLEVBQStCLElBQUlELENBQUMsR0FBR0MsQ0FBSixLQUFVLENBQWQsRUFBaUIsT0FBTyxLQUFQOztBQUNoRCxhQUFPLElBQVA7QUFDRCxLQUxEOztBQU1BLFVBQU1DLE1BQU0sR0FBR0gsUUFBUSxDQUFDSixNQUFELENBQVIsR0FBbUIsS0FBbkIsR0FBMkIsSUFBMUM7QUFDQSxXQUFPLENBQUNBLE1BQUQsRUFBU08sTUFBVCxDQUFQO0FBQ0QsR0FYRDs7QUFZQSxTQUFPLENBQUNULFdBQUQsRUFBY0MsU0FBZCxDQUFQO0FBQ0QsQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChtYXhOdW0gPSA1MCkgPT4gKCkgPT4ge1xuICBjb25zdCBpbnN0cnVjdGlvbiA9ICdBbnN3ZXIgXCJ5ZXNcIiBpZiBnaXZlbiBudW1iZXIgaXMgcHJpbWUuIE90aGVyd2lzZSBhbnN3ZXIgXCJub1wiJztcbiAgY29uc3QgZ2VuZXJhdG9yID0gKCkgPT4ge1xuICAgIGNvbnN0IGdlbk51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heE51bSk7XG4gICAgLy8gZnVuY3Rpb25zIGNoZWNrcyBpcyBuIHByaW1lXG4gICAgY29uc3QgZklzUHJpbWUgPSAobikgPT4ge1xuICAgICAgaWYgKG4gPT09IDEpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmIChuID09PSAyKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGZvciAobGV0IGkgPSAyOyBpIDwgbjsgaSArPSAxKSBpZiAobiAlIGkgPT09IDApIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgY29uc3QgYW5zd2VyID0gZklzUHJpbWUoZ2VuTnVtKSA/ICd5ZXMnIDogJ25vJztcbiAgICByZXR1cm4gW2dlbk51bSwgYW5zd2VyXTtcbiAgfTtcbiAgcmV0dXJuIFtpbnN0cnVjdGlvbiwgZ2VuZXJhdG9yXTtcbn07Il19