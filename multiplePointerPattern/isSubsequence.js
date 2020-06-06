// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first
// string form a subsequence of the characters in the second string. In other words, the function should check whether
// the characters in the first string appear somewhere in the second string, without their order changing.
//
//   Examples:
//
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:
//
// Time Complexity - O(N + M)
//
// Space Complexity - O(1)

const string1 = 'abc';
const string2 = 'abracadabra';

const isSubSequence = (string1, string2) => {

  let pointer1 = 0;
  let pointer2 =0;
  while(pointer1 < string1.length && pointer2 < string2.length){
    if(string1[pointer1] === string2[pointer2]){
      pointer1++;
    }
    pointer2++;
  }
  if(pointer1 === string1.length){
    return true;
  }
  return false;
};

console.log(`Check is ${string1} is isSubSequence of ${string2} `,isSubSequence(string1, string2));

