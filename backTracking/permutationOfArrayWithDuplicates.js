let sampleArray = ['a', 'b', 'a', 'b'];

const swap = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

const permutationOfArrayWithDuplicates = (sampleArray) => {
  
  sampleArray = sampleArray.sort((a,b)=>{
    return a.charCodeAt(0)-b.charCodeAt(0);
  });
  
  const permutation = (sampleArray, currentPosition =0) => {
    if(currentPosition >= sampleArray.length){
      console.log(`Permutation is `,sampleArray);
      return;
    }
    for(let i=currentPosition; i<sampleArray.length; i++){
      if(i === currentPosition || sampleArray[i] != sampleArray[i-1]){
        swap(sampleArray, currentPosition, i);
        permutation(sampleArray, currentPosition+1);
        swap(sampleArray, currentPosition, i);
      }
    }
    
  };
  permutation(sampleArray);
  
};

console.log(`Permutation Of An Array is `, permutationOfArrayWithDuplicates(sampleArray));