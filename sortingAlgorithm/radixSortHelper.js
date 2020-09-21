const number = 123456;
const placeOfThatDigit = 1;
const sampleArray = [1, 1, 11111, 1];

const getDigit = (number, placeOfThatDigit) => {
  
  return (parseInt(number/(Math.pow(10,placeOfThatDigit))))%10;
};

const digitCount = (number)=> {
  if(number === 0) return 1;
  return parseInt(Math.log10(Math.abs(number))) + 1;
};

const mostDigits = (sampleArray) => {
  let maxDigits = 0;
  let digits;
  for(let i=0; i<sampleArray.length; i++){
    digits = digitCount(sampleArray[i]);
    if(digits > maxDigits){
      maxDigits = digits;
    }
  }
  return maxDigits;
};

console.log(`Digit at ${placeOfThatDigit} place of ${number} is `,getDigit(number,placeOfThatDigit));
console.log(`Digit count of ${number} is `,digitCount(number));
console.log(`Most digits in ${sampleArray} is `,mostDigits(sampleArray));