const sampleArray = [3221, 1, 10, 9680, 577, 9420, 7, 5622, 4793, 2030, 3138, 82, 2599, 743, 4127];

const getDigit = (number, place) => {
  return parseInt(number/(Math.pow(10, place))) % 10;
};

const countDigits = (number) => {
  if(number === 0) return 1;
  return parseInt(Math.log10(number)) + 1;
};

const mostDigits = (sampleArray) => {
  let maxDigit = 0;
  for(let i=0; i<sampleArray.length; i++){
    maxDigit = Math.max(countDigits(sampleArray[i], maxDigit));
  }
  return maxDigit;
};

const radixSort = (sampleArray) => {
  
  const maxDigit = mostDigits(sampleArray);
  for(let i=0; i<maxDigit; i++){
    let bucketArray = Array.from({length : 10}, () => []);
    let digitPlace;
    for(let j=0; j<sampleArray.length; j++){
      digitPlace = getDigit(sampleArray[j], i);
      bucketArray[digitPlace].push(sampleArray[j]);
    }
    sampleArray = [].concat(...bucketArray);
  }
  return sampleArray;
  
};

console.log(`Radix sort of ${sampleArray} is `,radixSort(sampleArray));