// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive
// integer.
//
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal t
// o the integer passed to the function. If there isn't one, return 0 instead.
// Examples:
//
// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
// Time Complexity - O(n)
//
// Space Complexity - O(1)

let sampleInput = [1,4,16,22,5,7,8,9,10];
let sum = 95;

const minSubArrayLen = (sampleInput, sum) => {

  let currentSum = 0;
  let pointer1 = 0;
  let pointer2 = -1;
  let minLength = Infinity;
  while(pointer1 < sampleInput.length && pointer2 < sampleInput.length){

    if(currentSum >= sum){

      if((pointer2 - pointer1 + 1) < minLength){
        minLength = (pointer2 - pointer1 + 1);
      }
      currentSum -= sampleInput[pointer1];
      pointer1++;

    }
    else{
      pointer2++;
      currentSum += sampleInput[pointer2];
    }

  }
  if(minLength != Infinity){
    return minLength;
  }
  return 0;
};

console.log(`minSubArrayLen of Array ${sampleInput} of sum ${sum} `,minSubArrayLen(sampleInput, sum));