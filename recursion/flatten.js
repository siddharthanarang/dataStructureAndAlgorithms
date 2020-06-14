// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all
// values flattened.
//


// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

const sampleArray = [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]];

const flatten = (sampleArray) => {
  if(sampleArray.length === 0){
    return [];
  }
  let result, subArrayResult;
  result = flatten(sampleArray.slice(1));

  if(Array.isArray(sampleArray[0])){
    subArrayResult = flatten(sampleArray[0]);
  }
  else{
    subArrayResult = [sampleArray[0]];
  }
  result = subArrayResult.concat(result);

  return result;
  
};

console.log(`flatten of ${sampleArray} is `,flatten(sampleArray));