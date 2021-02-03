
const numbers = [2,3,5];
const sum = 8;

const subsetSum = (numbers, sum, result=[]) => {
  // console.log('numbers is ',numbers);
  // console.log('result is ',result);
  // console.log('sum is ',sum);

  if(!numbers || !numbers.length){
    console.log(`result is `,result);
    console.log(`sum is `,sum);
    return;
  }
  
  let currentNumber = numbers.shift();
  // No is not included
  subsetSum(JSON.parse(JSON.stringify(numbers)), sum, JSON.parse(JSON.stringify(result)));
  
  // No is included
  result.push(currentNumber);
  subsetSum(JSON.parse(JSON.stringify(numbers)), sum + currentNumber, JSON.parse(JSON.stringify(result)));
};

console.log(`Subset Problem `,subsetSum(numbers, 0));