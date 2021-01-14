let memory = {}, res;

const fibonacci = (n) => {
  if(n <= 2){
    return 1;
  }
  if(memory[n] != undefined){
    return memory[n];
  }
  
  res =fibonacci(n-1) + fibonacci(n-2);
  memory[n] = res;
  return res;
};

console.log(`Fibonacci is `,fibonacci(70));
