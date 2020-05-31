// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair
// where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
//
// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined

const sampleArray = [-15,-14,-6,-5,1,2,3,4,5,6,7,8,9,10,10,10,10];

const sumZero = (sampleArray) => {
  let startPointer = 0, endPointer = sampleArray.length - 1;

  while(startPointer < endPointer){
    console.log('startPointer is ',startPointer);
    console.log('endPointer is ',endPointer);
    const sum = sampleArray[startPointer] + sampleArray[endPointer];
    if(sum === 0){
      return [sampleArray[startPointer], sampleArray[endPointer]]
    }
    if(sum > 0){
      endPointer--;
    }
    else if(sum < 0){
      startPointer++;
    }
  }
  return undefined;
};
const result = sumZero(sampleArray);

console.log("result is ",result);