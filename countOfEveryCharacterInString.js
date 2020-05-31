// Consider lowercase and upper case character as same character
// count only character and numbers
const sampleString = "Hello! What Are You Doing at 5:00 pm";

const countCharacterInString = (sampleString) => {

  let characterCountObject = {};

  for(let char of sampleString){
    char = char.toLowerCase();
    if(!isAlphaNumeric(char)){
      continue;
    }
    if(!characterCountObject[char]){
      characterCountObject[char] = 1;
    }
    else{
      characterCountObject[char]++;
    }
  }
  return characterCountObject;
};

const isAlphaNumeric = (character) => {
  let code = character.charCodeAt(0);

  if((code >= 97 && code <= 122) ||
    (code >=48 && code <= 57)){
    return true;
  }
  return false;
};

const characterCountObject = countCharacterInString(sampleString);

console.log('character count is ',characterCountObject);