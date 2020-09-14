const sampleArray1 = [1,7,18,67,89];
const sampleArray2 = [1,19,21];

const merge = (sampleArray1, sampleArray2) =>{
  let sortedArray = [], i=0, j=0;
  
  while(i < sampleArray1.length || j < sampleArray2.length){
    if(i === sampleArray1.length){
      sortedArray.push(sampleArray2[j]);
      j++;
    }
    else if(j === sampleArray2.length){
      sortedArray.push(sampleArray1[i]);
      i++;
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

console.log(`Merged Array of ${sampleArray1} and ${sampleArray2} is `,merge(sampleArray1, sampleArray2));