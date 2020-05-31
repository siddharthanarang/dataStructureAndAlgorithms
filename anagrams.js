// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another,
// such as cinema, formed from iceman.
//
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

const string1 = "texttwisttime";
const string2 = "timetwisttext";

const validAnagram = (string1, string2) => {

  let hash1 = {}, hash2 = {};
  if(string1.length != string2.length){
    return false;
  }
  for(const key of string1){
    hash1[key] = (hash1[key] || 0) + 1;
  }
  for(const key of string2){
    hash2[key] = (hash2[key] || 0) + 1;
  }
  for(const key in hash1){
    if(hash1[key] != hash2[key]){
      return false;
    }
  }
  return true;
};

const isAnagram = validAnagram(string1, string2);
console.log(`Is ${string1} and ${string2} valid anagram `, isAnagram);