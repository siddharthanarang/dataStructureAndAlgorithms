const sampleString = 'wowomgzomg';
const searchString = 'omg';

const naiveStringSearch  = (sampleString, searchString) => {
  let searchStringFrequency =0;
  for(let i=0; i<sampleString.length; i++){
    if(sampleString[i] === searchString[0]){
      let j;
      for(j=1; j<searchString.length; j++){
        if(sampleString[i+j] != searchString[j]){
          break;
        }
      }
      if(j === searchString.length){
        searchStringFrequency++;
      }
    }
  }
  return searchStringFrequency;
};

console.log(`Frequency of ${searchString} in ${sampleString} is `,naiveStringSearch(sampleString, searchString));