let sampleArray = [4,27,36,9,16,8, 1];


const insertionSort = (sampleArray) =>{

  for(let i=1; i<sampleArray.length; i++){
    if(sampleArray[i]>sampleArray[i-1]){
      continue;
    }
    const currentElement = sampleArray[i];
    let j;
    for(j=i-1; j>=0; j--){
      if(currentElement < sampleArray[j]){
        sampleArray[j+1] = sampleArray[j];
      }
      else{
        sampleArray[j+1] = currentElement;
        break;
      }
    }
    if(j === -1){
      sampleArray[j+1] = currentElement;
    }
  }
  return sampleArray;
};

console.log(`Insertion Sort of ${sampleArray} is `, insertionSort(sampleArray));