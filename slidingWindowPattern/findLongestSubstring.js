// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest
// substring with all distinct characters.
//
// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

const sampleInput = 'thisishowwedoit';
const findLongestSubstring = (sampleInput) => {

  let hash = {};
  let maxLength = 0;
  let length = 0;
  let start = 0, end =0;
  while (end < sampleInput.length){
    const currentCharacter = sampleInput[end];

    if(!(hash.hasOwnProperty(currentCharacter)) || (hash[currentCharacter] < start)){
      length = end - start + 1;
      maxLength = length > maxLength ? length : maxLength;
      hash[currentCharacter] = end;
    }
    else{
      start = hash[currentCharacter] + 1;
      hash[currentCharacter] = end;
    }
    end++;

  }
  return maxLength;
};

console.log(`Max Length Substring of ${sampleInput} is`,findLongestSubstring(sampleInput));