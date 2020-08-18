// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the
// value exists. Otherwise, return -1.
//
//
// Examples:
// binarySearch([1,2,3,4,5],2) // 1
// binarySearch([1,2,3,4,5],3) // 2
// binarySearch([1,2,3,4,5],5) // 4
// binarySearch([1,2,3,4,5],6) // -1
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 10) // 2
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95) // 16
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100) // -1

const sampleInput = [
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
];
const searchElement = 84;

const binarySearch = (sampleInput, searchElement) => {

  let start =0;
  let end = sampleInput.length -1;

  while(end >= start){
    const middle = parseInt((start + end)/2);

    if(searchElement === sampleInput[middle]){
      return middle;
    }
    else if(searchElement < sampleInput[middle]){
      end = middle -1;
    }
    else if(searchElement > sampleInput[middle]){
      start = middle + 1;
    }
  }
  return -1;

};

console.log(`Index of ${searchElement} in ${sampleInput} is `, binarySearch(sampleInput, searchElement));
