"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// every game returns [string, function] function is generator of [question, answer]
var _default = (maxNum = 50) => () => {
  const instruction = 'Anwser "yes" if number even otherwise answer "no"';

  const generator = () => {
    const generatedNumber = Math.floor(Math.random() * maxNum);
    const isEven = generatedNumber % 2 === 0;
    const result = isEven ? 'yes' : 'no';
    return [generatedNumber, result];
  };

  return [instruction, generator];
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9ldmVuLmpzIl0sIm5hbWVzIjpbIm1heE51bSIsImluc3RydWN0aW9uIiwiZ2VuZXJhdG9yIiwiZ2VuZXJhdGVkTnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaXNFdmVuIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7ZUFDZSxDQUFDQSxNQUFNLEdBQUcsRUFBVixLQUFpQixNQUFNO0FBQ3BDLFFBQU1DLFdBQVcsR0FBRyxtREFBcEI7O0FBQ0EsUUFBTUMsU0FBUyxHQUFHLE1BQU07QUFDdEIsVUFBTUMsZUFBZSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCTixNQUEzQixDQUF4QjtBQUNBLFVBQU1PLE1BQU0sR0FBSUosZUFBZSxHQUFHLENBQWxCLEtBQXdCLENBQXhDO0FBQ0EsVUFBTUssTUFBTSxHQUFJRCxNQUFNLEdBQUcsS0FBSCxHQUFXLElBQWpDO0FBQ0EsV0FBTyxDQUFDSixlQUFELEVBQWtCSyxNQUFsQixDQUFQO0FBQ0QsR0FMRDs7QUFNQSxTQUFPLENBQUNQLFdBQUQsRUFBY0MsU0FBZCxDQUFQO0FBQ0QsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV2ZXJ5IGdhbWUgcmV0dXJucyBbc3RyaW5nLCBmdW5jdGlvbl0gZnVuY3Rpb24gaXMgZ2VuZXJhdG9yIG9mIFtxdWVzdGlvbiwgYW5zd2VyXVxuZXhwb3J0IGRlZmF1bHQgKG1heE51bSA9IDUwKSA9PiAoKSA9PiB7XG4gIGNvbnN0IGluc3RydWN0aW9uID0gJ0Fud3NlciBcInllc1wiIGlmIG51bWJlciBldmVuIG90aGVyd2lzZSBhbnN3ZXIgXCJub1wiJztcbiAgY29uc3QgZ2VuZXJhdG9yID0gKCkgPT4ge1xuICAgIGNvbnN0IGdlbmVyYXRlZE51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heE51bSk7XG4gICAgY29uc3QgaXNFdmVuID0gKGdlbmVyYXRlZE51bWJlciAlIDIgPT09IDApO1xuICAgIGNvbnN0IHJlc3VsdCA9IChpc0V2ZW4gPyAneWVzJyA6ICdubycpO1xuICAgIHJldHVybiBbZ2VuZXJhdGVkTnVtYmVyLCByZXN1bHRdO1xuICB9O1xuICByZXR1cm4gW2luc3RydWN0aW9uLCBnZW5lcmF0b3JdO1xufTsiXX0=