export default (maxNum = 50) => () => {
  const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const generator = () => {
    const genNum = Math.floor(Math.random() * maxNum);
    // functions checks is n prime
    const fIsPrime = (n) => {
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
