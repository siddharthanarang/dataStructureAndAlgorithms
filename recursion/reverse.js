// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

const sampleString = 'abcdef';

const reverse = (sampleString) => {
  if(sampleString.length === 0) return '';
  return reverse(sampleString.slice(1)) + sampleString[0];
};

console.log(`Reverse of a string ${sampleString} is `,reverse(sampleString));