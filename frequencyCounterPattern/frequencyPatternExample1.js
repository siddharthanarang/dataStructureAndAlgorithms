// Write a function called same, which accepts two arrays. The function should return true if every value in the array
// has it's corresponding value squared in the second array. The frequency of values must be the same.
// Example
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

const array1 = [1, 2, 3];
const array2 = [4, 9, 1];

const same = (array1, array2) => {
  const length1 = array1.length; 
  const length2 = array2.length;
  
  if(length1 != length2){
    return false;
  }
  let hash = {}, isSame = true, i;
  for(i=0; i<length2; i++){
    if(!hash[array2[i]]){
      hash[array2[i]] = {
        count : 1,
        array1MatchValue : 0
      };
    }
    else {
      hash[array2[i]].count++;
    }
  }
  for(i=0; i<length1; i++){
    const square = Math.pow(array1[i],2);
    if(!hash[square]){
      isSame =false;
      break;
    }
    hash[square].array1MatchValue++;
    if(hash[square].array1MatchValue > hash[square].count){
      isSame = false;
      break;
    }
  }
  return isSame
};

const isSame = same(array1, array2);
console.log("Is Array 1 and Array 2 same ", isSame);