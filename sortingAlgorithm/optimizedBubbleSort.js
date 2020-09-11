// Since we know we have reached the state of sorted array, if there is no swap happening that means array is sorted
// then we can break the loop.


let sampleArray = [14,29,5,7,38,17];

const swap = (originalArray, index1, index2) => {
  [originalArray[index1], originalArray[index2]] = [originalArray[index2], originalArray[index1]];
  return;
};
const bubbleSort = (sampleArray) =>{

  for(let i=sampleArray.length -1; i>0; i--){
    let swaped = false;
    for(let j=0; j<i; j++){
      if(sampleArray[j] > sampleArray[j+1]){
        swaped = true;
        swap(sampleArray, j, j+1);
      }
    }
    if(!swaped) break;
  }

  return sampleArray;
};

console.log(`Bubble sort of ${sampleArray} is `, bubbleSort(sampleArray));