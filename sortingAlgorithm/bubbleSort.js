let sampleArray = [14,29,5,7,38,17];

const swap = (originalArray, index1, index2) => {
  [originalArray[index1], originalArray[index2]] = [originalArray[index2], originalArray[index1]];
  return;
};
const bubbleSort = (sampleArray) =>{
  
  for(let i=sampleArray.length -1; i>0; i--){
    for(let j=0; j<i; j++){
      if(sampleArray[j] > sampleArray[j+1]){
        swap(sampleArray, j, j+1);
      }
    }
  }
  
  return sampleArray;
};

console.log(`Bubble sort of ${sampleArray} is `, bubbleSort(sampleArray));