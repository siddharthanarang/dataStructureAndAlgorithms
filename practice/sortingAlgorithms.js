let sampleArray = [10, 7, 1, 98, 8, 45, 17, 6];

const swap = (array, index1, index2) => {
  
  return [array[index1], array[index2]] = [array[index2], array[index1]];
};

const bubbleSort = (sampleArray) => {
  
  let noSwap;
  for(let i=0; i<sampleArray.length-1; i++){
    noSwap = true;
    for(let j=0; j<sampleArray.length-1-i; j++){
      if(sampleArray[j] > sampleArray[j+1]){
        noSwap = false;
        swap(sampleArray, j, j+1);
      }
    }
    if(noSwap){
      break;
    }
  }
  return sampleArray;
};

console.log(`Bubble Sort on sample array is `, bubbleSort(sampleArray));

sampleArray = [10, 7, 1, 98, 8, 45, 17, 6];


const selectionSort = (sampleArray) => {
  
  let smallestIndex;

  for(let i=0; i<sampleArray.length-1; i++){
    smallestIndex = i;
    for(let j=i; j<sampleArray.length; j++){
      if(sampleArray[j] < sampleArray[smallestIndex]){
        smallestIndex = j;
      }
    }
    swap(sampleArray, i, smallestIndex);
  }
  return sampleArray;
};

console.log(`Selection Sort on sample array is `, selectionSort(sampleArray));


sampleArray = [10, 7, 1, 98, 8, 45, 17, 6];

const mergeSort = (sampleArray) => {

  let helper = (array1, array2) => {
    let array3 = [], i=0, j=0;
    while(i < array1.length || j< array2.length){
      if(i === array1.length){
        array3.push(array2[j]);
        j++;
      }
      else if(j === array2.length){
        array3.push(array1[i]);
        i++;
      }
      else if(array1[i] < array2[j]){
        array3.push(array1[i]);
        i++;
      }
      else{
        array3.push(array2[j]);
        j++;
      }
    }
    return array3;
  };

  let sort = (array) => {
    if(!array || array.length <= 1){
      return array;
    }

    let array1 =  sort(array.slice(0,parseInt(array.length/2))); // slice(0,2) returns 0 and 1 element, 2 is not inclusive
    let array2 =  sort(array.slice(parseInt(array.length/2)));

    return helper(array1, array2);
  };

  sampleArray = sort(sampleArray);

  return sampleArray;
};

console.log(`Merge Sort on sample array is `, mergeSort(sampleArray));


sampleArray = [10, 7, 1, 98, 8, 45, 17, 6];

const quickSort = (sampleArray) => {
  
  const helper = (array, start, end) => {
    
    let currentPivotalIndex = start;
    let finalPivotalIndex = start;
    
    for(let i=start; i<= end; i++){
      if(array[currentPivotalIndex] > array[i]){
        if(finalPivotalIndex+1 != i){
          swap(array, finalPivotalIndex+1, i)
        }
        finalPivotalIndex++;
      }
    }
    if(currentPivotalIndex != finalPivotalIndex){
      swap(array, currentPivotalIndex, finalPivotalIndex)
    }
    return finalPivotalIndex;
  };
  
  const sort = (array, start, end) => {
    if(start >= end){
      return;
    }
    let pivotIndex = helper(array, start, end);
    sort(array,start, pivotIndex-1);
    sort(array,pivotIndex+1, end);
  };
  
  sort(sampleArray, 0, sampleArray.length-1);
  return sampleArray;
};

console.log(`Quick Sort on sample array is `, quickSort(sampleArray));


sampleArray = [10, 7, 1, 98, 8, 45, 17, 6];

const radixSort = (sampleArray) => {
  
  let i, j;
  
  const getDigit = (number, digit) => {
    return (parseInt(number/Math.pow(10, digit)))%10;
  };
  
  const getNoOfDigits = (number) => {
    if(number === 0){
      return 1;
    }
    return parseInt(Math.log10(number)) + 1;
  };
  
  const getMaxDigitCount = (array) => {
    let maxDigits = 0;
    for(i=0; i<array.length; i++){
        maxDigits = Math.max(maxDigits, getNoOfDigits(array[i]))
    }
    return maxDigits;
  };
  
  const maximumDigitCount = getMaxDigitCount(sampleArray);
  let bucketArray;
  for(i =0; i<maximumDigitCount; i++){
    bucketArray = Array.from({length : 10}, () => []);
    for(j=0; j<sampleArray.length; j++){
      bucketArray[getDigit(sampleArray[j], i)].push(sampleArray[j]);
    }
    sampleArray = [].concat(...bucketArray);
  }
  return sampleArray;
};
console.log(`Radix Sort on sample array is `, radixSort(sampleArray));



