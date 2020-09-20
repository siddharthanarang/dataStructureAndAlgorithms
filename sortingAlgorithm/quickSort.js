const sampleArray = [37,6,8,18,94,45,7,65];

const swap = (sampleArray, index1, index2) => {
  [sampleArray[index1], sampleArray[index2]] = [sampleArray[index2], sampleArray[index1]];
};

const pivot = (sampleArray, startIndex, endIndex) => {

  const initialPivotIndex = startIndex;
  let finalPivotIndex = startIndex;
  for(let i=initialPivotIndex +1; i <= endIndex; i++){
    if(sampleArray[i] < sampleArray[initialPivotIndex]){
      finalPivotIndex++;
      swap(sampleArray, i, finalPivotIndex);
    }
  }
  swap(sampleArray, initialPivotIndex, finalPivotIndex);
  return finalPivotIndex;
};

const quickSort = (sampleArray, left=0, right=sampleArray.length-1) => {
 if(left < right){
   const pivotIndex = pivot(sampleArray, left, right);
   quickSort(sampleArray, left, pivotIndex-1);
   quickSort(sampleArray, pivotIndex +1, right);
 }
  return sampleArray;
};

console.log(`Quick Sort of ${sampleArray} is `,quickSort(sampleArray));