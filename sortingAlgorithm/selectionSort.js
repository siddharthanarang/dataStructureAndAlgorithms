let sampleArray = [5,4,3,2,1,67];

const swap = (originalArray, index1, index2) => {
  [originalArray[index1], originalArray[index2]] = [originalArray[index2], originalArray[index1]];
  return;
};

const selectionSort = (sampleArray) => {
  
  let minimumElementIndex;
  for(let i=0; i<sampleArray.length -1; i++){
    minimumElementIndex = i;
    for(let j=i+1; j<sampleArray.length; j++){
      if(sampleArray[j] < sampleArray[minimumElementIndex]){
        minimumElementIndex = j;
      }
    }
    
    if(minimumElementIndex != i){
      swap(sampleArray, minimumElementIndex, i)
    }
  }
  return sampleArray;
};

console.log(`Selection sort of ${sampleArray} is `, selectionSort(sampleArray));
