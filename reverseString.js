let sampleString = 'hello';

// Solution 1

const reverseStringNativeApproach = (sampleString) => {
  let result = '';
  for(let i=sampleString.length -1; i>=0; i--){
    result += sampleString[i];
  }
  return result;
};

console.log('Sample String : ', sampleString);
console.log('Reversed String Using Native Approach : ', reverseStringNativeApproach(sampleString));

// Solution 2

const reverseStringInBuildFunction = (sampleString) => {
  return sampleString.split('').reverse().join('');
};

console.log('Reversed String Using InBuild Functions ', reverseStringInBuildFunction(sampleString));

// Solution 3

const reverseStringRecursionApproach = (sampleString) => {
  if(sampleString == ''){
    return '';
  }

  return reverseStringRecursionApproach(sampleString.substr())

};

