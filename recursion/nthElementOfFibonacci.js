const num = 7;

const nthElementOfFibonacci = (num) => {
  if(num === 1 || num === 2) return 1;
  return nthElementOfFibonacci(num - 1) + nthElementOfFibonacci(num - 2)
};

console.log(`${num} element of Fibonacci is `,nthElementOfFibonacci(num));