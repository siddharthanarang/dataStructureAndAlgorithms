const sampleArray = [1,2,3,4,5,9];

const productOfArray = (sampleArray) => {
  if(sampleArray.length === 0){
    return 1;
  }
  return sampleArray[0] * productOfArray(sampleArray.slice(1));
};

console.log(`Product of this Array ${sampleArray} is `,productOfArray(sampleArray));