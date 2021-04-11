// Minimum Increment / decrement to make array elements equal
// Given an array of integers. In one operation you can either
// Increment/Decrement any element by 1. The task is to find the minimum operations
// needed to be performed on the array elements to make all array elements equal.
//
//   Examples
// Input : A[] = { 1, 5, 7, 10 }
// Output : 11
// Increment 1 by 4, 5 by 0.
// Decrement 7 by 2, 10 by 5.
// New array A = { 5, 5, 5, 5 } with
//   cost of operations = 4 + 0 + 2 + 5 = 11.
//
// Input : A = { 10, 2, 20 }
// Output : 18

const findMinNoOfOperations = (sampleInput) => {
  if(!sampleInput || !sampleInput.length){
    return 0;
  }
  sampleInput = sampleInput.sort((a,b)=>{
    return a-b;
  });
  let minOperations = Infinity, operations =0;
  let medianElements = [];
  if(sampleInput.length % 2 === 1){
    medianElements.push(sampleInput[Math.floor(sampleInput.length/2)]);
  }
  else {
    medianElements.push(sampleInput[(sampleInput.length/2) -1]);
    medianElements.push(sampleInput[(sampleInput.length/2)]);
  }
  for(let i=0; i<medianElements.length; i++){
    for(let j=0; j<sampleInput.length; j++){
      operations += Math.abs(medianElements[i] - sampleInput[j]);
    }
    minOperations = Math.min(minOperations,operations)
  }
  return minOperations
};

console.log('Min no of operations ', findMinNoOfOperations([10, 2, 20 ]));