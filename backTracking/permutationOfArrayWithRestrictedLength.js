let sampleArray = ['a','b','c', 'd'];
let length = 2;

const swap = (array, index1, index2)=> {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

const permutationOfAnArrayOfRestrictedLength = (sampleArray, length, currentPosition =0) => {
  
  if(currentPosition >= length){
    console.log('Sample Array is ',sampleArray.slice(0, currentPosition));
    return;
  }
  for(let i=currentPosition; i<sampleArray.length; i++){
    swap(sampleArray, currentPosition, i);
    permutationOfAnArrayOfRestrictedLength(sampleArray, length, currentPosition+1);
    swap(sampleArray, currentPosition, i);
  }
  
};

console.log(`Permutation of an array of Restricted length is `, permutationOfAnArrayOfRestrictedLength(sampleArray, length));