
const sampleArray = [34,5,6,12,3,90,8,67,0,87,90];

const merge = (sampleArray1, sampleArray2) => {
  let i=0, j=0, sortedArray = [];

  while(i<sampleArray1.length || j<sampleArray2.length){
    if(i === sampleArray1.length){
      sortedArray.push(sampleArray2[j]);
      j++;
    }
    else if(j === sampleArray2.length){
      sortedArray.push(sampleArray1[i]);
      i++
    }
    else if(sampleArray1[i] < sampleArray2[j]){
      sortedArray.push(sampleArray1[i]);
      i++;
    }
    else{
      sortedArray.push(sampleArray2[j]);
      j++;
    }
  }
  return sortedArray;

};

const mergeSort = (sampleArray) => {
  if(sampleArray.length === 1){
    return sampleArray;
  }

  const left = mergeSort(sampleArray.slice(0,sampleArray.length/2));
  const right = mergeSort(sampleArray.slice(sampleArray.length/2, sampleArray.length));

  return merge(left, right);
};

console.log(`Merge sort of ${sampleArray} is `,mergeSort(sampleArray));

