//
// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
//
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

const sampleArray = ['i', 'am', 'learning', 'recursion'];

const capitalizeWords = (sampleArray) => {
  if(sampleArray.length === 0){
    return [];
  }
  const capitalWord = [sampleArray[0].toUpperCase()];
  return capitalWord.concat(capitalizeWords(sampleArray.slice(1)));
};

console.log(`capitalizeWords of ${sampleArray} is `,capitalizeWords(sampleArray));
