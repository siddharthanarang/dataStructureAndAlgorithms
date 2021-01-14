const fibonacci = (n) => {
  let memory = [1,1], res;
  for(let i=3; i<=n;i++){
    res = memory[0] + memory[1];
    memory[0] = memory[1];
    memory[1] = res;
  }
  return memory[1];
};
console.log(`Fibonacci is `,fibonacci(70));
