// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome
// (reads the same forward and backward). Otherwise it returns false.

const sampleString = 'abccbaa';

const isPalindrome = (sampleString) => {

  const reverse = (sampleString) => {
    if(sampleString.length === 0) return '';
    return reverse(sampleString.slice(1)) + sampleString[0];
  };
  if(sampleString === reverse(sampleString)){
    return true;
  }
  return false;
};

console.log(`Is ${sampleString} palindrome or not `,isPalindrome(sampleString));