
const swap = (string, index1, index2) => {
  
  if(index1 === index2){
    return string;
  }
  
  return string.slice(0,Math.min(index1, index2)) + string[Math.max(index1, index2)] + string.slice(Math.min(index1, index2)+1,Math.max(index1, index2))
    + string[Math.min(index1, index2)] + string.slice(Math.max(index1, index2)+1)
  
  
};

const permutation = (result, currentPosition = 0) => {
  if(currentPosition >= result.length){
    console.log(`Result is `,result);
    return;
  }
  
  for(let i=currentPosition; i<result.length; i++){
    result =  swap(result, i , currentPosition);
    permutation(result, currentPosition+1);
    result =  swap(result, currentPosition, i);
  }
  
};

console.log(`All Permutation are`,permutation('abc'));