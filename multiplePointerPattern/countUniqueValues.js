// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the
// array. There can be negative numbers in the array, but it will always be sorted.
//
// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

const sortedArray = [1,2,3,4,4,4,7,7,12,12,13];

const countUniqueValues = (sortedArray) => {

  let count = 0;
  let index = -1;
  for(let i=0; i<sortedArray.length; i++){
    if(sortedArray[i] === sortedArray[index]){
      continue;
    }
    count++;
    index=i;
  }
  return count;
};

console.log('count unique values are ',countUniqueValues(sortedArray));