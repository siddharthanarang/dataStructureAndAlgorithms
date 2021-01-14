const fibonacci = (n) =>{
  if(n === 1 || n === 2){
    return 1;
  }
  return fibonacci(n-1) + fibonacci(n-2);
};

console.log(`fibonacci of number is`, fibonacci(1));
console.log(`fibonacci of number is`, fibonacci(2));
console.log(`fibonacci of number is`, fibonacci(3));
console.log(`fibonacci of number is`, fibonacci(5));
console.log(`fibonacci of number is`, fibonacci(6));