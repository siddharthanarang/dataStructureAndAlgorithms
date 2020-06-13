const num =4;

const factorial = (num) => {
  if(num === 1) return 1;
  if(num === 0) return 1;
  return num * factorial(num - 1);
};

console.log(`Factorial of number ${num} is `,factorial(num));