
const sampleArray = [1,2,3,4,5,6,7,8,9,10];

const collectOddValues = (sampleArray) => {
  
  let result = [];
  
  const helperRecursion = (helperArray) => {
    if(helperArray.length === 0){
      return;
    }
    if(helperArray[0] %2 === 1){
      result.push(helperArray[0]);
    }
    helperRecursion(helperArray.slice(1));
  };
  helperRecursion(sampleArray);
  return result;
};

console.log(`Odd values in ${sampleArray} are `,collectOddValues(sampleArray));