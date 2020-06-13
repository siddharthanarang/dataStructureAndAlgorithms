
const sampleArray = [1,2,3,4,5,6,7,8,9,10];

const collectOddValues = (sampleArray) => {

  if(sampleArray.length === 0){
    return [];
  }
  let result = collectOddValues(sampleArray.slice(1));
  if(sampleArray[0]%2 === 1){
    result = [sampleArray[0]].concat(result);
  }
  return result;
};

console.log(`Odd values in ${sampleArray} are `,collectOddValues(sampleArray));