let memory = {1:1,2:1};
const fibonacci = (n) => {
  
  for(let i=3; i<=n; i++){
    memory[i] = memory[i-1] + memory[i-2];
  }
  return memory[n];
};

console.log(`Fibonacci is `,fibonacci(70));
