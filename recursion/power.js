const base = 2;
const exponent = 6;

const power = (base, exponent) => {
  if(exponent === 0){
    return 1;
  }
  return base * power(base, exponent-1)
};

console.log(`Power of ${base} raised to power ${exponent} is `, power(base, exponent));