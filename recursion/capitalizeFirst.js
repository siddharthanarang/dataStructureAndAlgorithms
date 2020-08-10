// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the
// first letter of each string in the array.

const sampleArray = ['car','taco','banana'];

const capitalizeFirst = (sampleArray) => {
  if(sampleArray.length === 0){
    return [];
  }
  const capitalizeString = sampleArray[0][0].toUpperCase() + sampleArray[0].slice(1);
  return [capitalizeString].concat(capitalizeFirst(sampleArray.slice(1)));
};

console.log(`capitalizeFirst of every element in ${sampleArray} is `,capitalizeFirst(sampleArray));