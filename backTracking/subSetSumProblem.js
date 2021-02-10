const numbers = [2,3,5];
const sum = 10;

const subSet = (numbers, currentSum =0, currentPositionOfArray=0, currentIndexOfResult =0, data=[])=> {
  
  if(currentSum === sum){
    console.log(`Result is `,data.slice(0, currentIndexOfResult));
    return;
  }
  if(currentPositionOfArray >= numbers.length){
    return;
  }
  
  //No is include
  let newSum = currentSum+numbers[currentPositionOfArray];
  data[currentIndexOfResult] = numbers[currentPositionOfArray];
  subSet(numbers, newSum, currentPositionOfArray+1, currentIndexOfResult+1, data);

  //No is not included
  subSet(numbers, currentSum, currentPositionOfArray+1, currentIndexOfResult, data);
  
};

console.log(`SubSet is `,subSet(numbers));