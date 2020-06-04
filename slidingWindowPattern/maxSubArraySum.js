// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
//   The function should calculate the maximum sum of n consecutive elements in the array.
//
// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null

const sampleArray = [1,2,5,2,8,1,5];
const n = 4;

const maxSubArraySum = (sampleArray, n) => {

  if(sampleArray.length < n){
    return null
  }
  let start =0, end =0, sum =0, maxSum = 0;

  for(end; end<sampleArray.length; end++){
    if((end-start) < n){
      sum += sampleArray[end];
      maxSum = sum;
      continue;
    }
    sum += sampleArray[end] - sampleArray[start];
    if(sum > maxSum){
      maxSum = sum;
    }
    start++;
  }
  return maxSum;
};

console.log("maxSubArraySum is ",maxSubArraySum(sampleArray, n));