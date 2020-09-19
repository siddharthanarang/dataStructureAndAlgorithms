const sampleArray = [27,1,5,7,85,78,7,92,36,5,9,91];
const startElementIndex = 0;
const lastElementIndex = sampleArray.length-1;

const swap = (array, element1, element2)=>{
  [array[element1], array[element2]] = [array[element2], array[element1]];
};

const pivot = (sampleArray, startElementIndex, lastElementIndex) =>{
  
  let currentPivotIndex = startElementIndex;
  let finalPivotIndex = currentPivotIndex;
  for(let i=currentPivotIndex+1; i<lastElementIndex; i++){
    if(sampleArray[i] < sampleArray[currentPivotIndex]){
      finalPivotIndex++;
      if(i != finalPivotIndex){
        swap(sampleArray, i, finalPivotIndex);
      }
    }
  }
  if(currentPivotIndex != finalPivotIndex){
    swap(sampleArray, currentPivotIndex, finalPivotIndex);
  }
  return finalPivotIndex;
};

console.log(`Pivot of ${sampleArray} is `,pivot(sampleArray,startElementIndex,lastElementIndex));